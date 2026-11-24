'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';
import ShareButton from '../components/ShareButton';
import { isInNativeApp, requestPayment, type PaymentToken } from '@/lib/solana-bridge';
import type { ZiweiChart, ZiweiPalace } from '@orrery/core/types';
import { FORTUNE_YEAR } from '@/lib/fortune-year';

interface DaxianItem {
  ageStart: number;
  ageEnd: number;
  palaceName: string;
  ganZhi: string;
  mainStars: string[];
}

interface ZiweiResult {
  chart: ZiweiChart;
  daxianList: DaxianItem[];
  interpretation: string;
}

const BRIGHTNESS_COLOR: Record<string, string> = {
  '廟': 'text-red-600 font-bold',
  '旺': 'text-orange-500 font-semibold',
  '得': 'text-yellow-600',
  '利': 'text-green-600',
  '平': 'text-gray-500',
  '不': 'text-blue-400',
  '陷': 'text-gray-400',
};

function PalaceCell({ palace }: { palace: ZiweiPalace }) {
  return (
    <div className={`border border-purple-200 rounded-lg p-2 min-h-[90px] bg-white ${palace.isShenGong ? 'ring-2 ring-blue-400' : ''}`}>
      <div className="flex justify-between items-start mb-1">
        <span className="text-xs font-bold text-purple-700">{palace.name}</span>
        <span className="text-xs text-gray-400">{palace.ganZhi}</span>
      </div>
      <div className="space-y-0.5">
        {palace.stars.map((star, i) => (
          <div key={i} className="flex items-center gap-1">
            <span className={`text-xs ${BRIGHTNESS_COLOR[star.brightness] || 'text-gray-600'}`}>
              {star.name}
            </span>
            {star.siHua && (
              <span className="text-xs text-red-500 font-bold">{star.siHua}</span>
            )}
          </div>
        ))}
      </div>
      {palace.isShenGong && (
        <div className="mt-1 text-xs text-blue-500 font-semibold">신궁</div>
      )}
    </div>
  );
}

function ZiweiBoard({ chart, mingGongLabel, wuXingJuLabel }: { chart: ZiweiChart; mingGongLabel: string; wuXingJuLabel: string }) {
  const gridPositions: Array<[number, number, string]> = [
    [0, 0, '巳'], [0, 1, '午'], [0, 2, '未'], [0, 3, '申'],
    [1, 3, '酉'],
    [2, 3, '戌'],
    [3, 3, '亥'], [3, 2, '子'], [3, 1, '丑'], [3, 0, '寅'],
    [2, 0, '卯'],
    [1, 0, '辰'],
  ];

  const grid: Record<string, [number, number]> = {};
  for (const [r, c, zhi] of gridPositions) {
    grid[zhi] = [r, c];
  }

  const cells: Array<{ row: number; col: number; palace: ZiweiPalace | null; zhi: string }> = [];
  for (const [, p] of Object.entries(chart.palaces)) {
    const pos = grid[p.zhi];
    if (pos) {
      cells.push({ row: pos[0], col: pos[1], palace: p, zhi: p.zhi });
    }
  }

  return (
    <div className="grid grid-cols-4 gap-1 relative">
      {gridPositions.map(([r, c, zhi]) => {
        if ((r === 1 && c === 1) || (r === 1 && c === 2) || (r === 2 && c === 1) || (r === 2 && c === 2)) {
          return null;
        }
        const palace = cells.find((cell) => cell.zhi === zhi)?.palace;
        if (!palace) return null;
        return (
          <div key={zhi} style={{ gridRow: r + 1, gridColumn: c + 1 }}>
            <PalaceCell palace={palace} />
          </div>
        );
      })}
      {/* Center: chart info */}
      <div className="text-center bg-purple-50 rounded-lg p-3 flex flex-col justify-center" style={{ gridRow: '2/4', gridColumn: '2/4' }}>
        <p className="text-xs text-gray-500 mb-1">{mingGongLabel}</p>
        <p className="text-lg font-bold text-purple-700">{chart.mingGongZhi}</p>
        <p className="text-xs text-gray-500 mt-2">{wuXingJuLabel}</p>
        <p className="text-sm font-semibold text-gray-700">{chart.wuXingJu.name}</p>
        <p className="text-xs text-gray-400">{chart.lunarYear}년생</p>
      </div>
    </div>
  );
}

function splitInterpretation(text: string): { summary: string; details: string } {
  // First section (overview) is free, the rest is locked on native.
  const lines = text.split('\n');
  const sectionBreaks: number[] = [];

  lines.forEach((line, i) => {
    if (/^(\*{0,2}\s*\d+[\.\)]\s|#{1,3}\s)/.test(line.trim()) && i > 0) {
      sectionBreaks.push(i);
    }
  });

  if (sectionBreaks.length >= 2) {
    const splitAt = sectionBreaks[1];
    return {
      summary: lines.slice(0, splitAt).join('\n').trim(),
      details: lines.slice(splitAt).join('\n').trim(),
    };
  }

  const splitLine = Math.floor(lines.length / 3);
  return {
    summary: lines.slice(0, Math.max(splitLine, 3)).join('\n').trim(),
    details: lines.slice(Math.max(splitLine, 3)).join('\n').trim(),
  };
}

export default function ZiweiPage() {
  const { t, language } = useLanguage();
  const ziwei = t.ziwei;

  const [step, setStep] = useState(1);
  const [birthDate, setBirthDate] = useState('');
  const [birthHour, setBirthHour] = useState('12');
  const [birthMinute, setBirthMinute] = useState('00');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ZiweiResult | null>(null);
  const [paid, setPaid] = useState(false);
  const [selectedToken, setSelectedToken] = useState<PaymentToken | null>(null);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [isNative, setIsNative] = useState(false);

  useEffect(() => {
    setIsNative(isInNativeApp());
  }, []);

  const handleCalculate = async () => {
    if (!birthDate || birthDate.length !== 8) {
      alert(ziwei.labels.errors.birthDateInvalid);
      return;
    }
    setLoading(true);
    try {
      const response = await fetch('/api/calculate-ziwei', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          birthDate,
          birthHour: parseInt(birthHour),
          birthMinute: parseInt(birthMinute),
          gender,
          language,
        }),
      });
      const data = await response.json();
      if (!response.ok || data.error) {
        alert(ziwei.labels.errors.apiError + (data.error || data.details || 'Unknown error'));
        return;
      }
      setResult(data as ZiweiResult);
      setStep(4);
    } catch (error) {
      alert(ziwei.labels.errors.apiError + (error instanceof Error ? error.message : ''));
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = async (token: PaymentToken) => {
    setSelectedToken(token);
    setPaymentError(null);
    try {
      const res = await requestPayment(token);
      if (res.success) {
        setPaid(true);
        setStep(5);
      } else {
        setPaymentError(res.error || ziwei.payment.paymentFailed);
      }
    } catch {
      setPaymentError(ziwei.payment.paymentFailed);
    } finally {
      setSelectedToken(null);
    }
  };

  const tokenOptions: { token: PaymentToken; label: string; amount: string; desc?: string }[] = [
    { token: 'SOL', label: 'SOL', amount: '0.005 SOL' },
    { token: 'USDC', label: 'USDC', amount: '1.00 USDC' },
    { token: 'SKR', label: 'Seeker', amount: '15 SKR' },
    { token: 'POOP', label: '💩 POOP', amount: '1000 POOP', desc: 'Poop Dodge Token' },
  ];

  const resetAll = () => {
    setStep(1);
    setBirthDate('');
    setBirthHour('12');
    setBirthMinute('00');
    setResult(null);
    setPaid(false);
  };

  // 기준 연도는 lib/fortune-year.ts 에서 관리한다(2027 정미년).
  const currentYear = FORTUNE_YEAR;
  const getCurrentDaxian = (daxianList: DaxianItem[]) => {
    if (!result) return null;
    const currentAge = currentYear - result.chart.solarYear;
    return daxianList.find((d, i) => {
      const next = daxianList[i + 1];
      const endAge = next ? next.ageStart : 999;
      return currentAge >= d.ageStart && currentAge < endAge;
    });
  };

  const interpretationParts = result ? splitInterpretation(result.interpretation) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 to-purple-800 flex items-center justify-center p-4">
      <LanguageToggle />

      {loading && (
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
          <div className="inline-block animate-spin rounded-full h-20 w-20 border-8 border-purple-200 border-t-purple-600 mb-6"></div>
          <p className="text-xl font-bold text-gray-800 animate-pulse">{ziwei.labels.loading}</p>
          <p className="text-sm text-gray-500 mt-3">{language === 'en' ? 'Usually takes 20-30 seconds' : '보통 20~30초 정도 소요됩니다'}</p>
        </div>
      )}

      {!loading && (
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8">
          <div className="flex flex-wrap justify-between items-center gap-2 mb-2 text-xs">
            <a href="/" className="text-gray-400 hover:text-purple-600 transition-colors">{ziwei.labels.backHome}</a>
            <span className="flex flex-wrap items-center gap-3">
              <a href="/fortune" className="text-gray-400 hover:text-purple-600 transition-colors">{ziwei.labels.sajuLink}</a>
              <a href="/guide" className="text-gray-400 hover:text-emerald-600 transition-colors">📚 {t.footer.guide}</a>
            </span>
          </div>

          {/* Step 1: Birth Date */}
          {step === 1 && (
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{ziwei.labels.title}</h1>
              <p className="text-gray-500 mb-8">{ziwei.labels.subtitle}</p>
              <div className="max-w-md mx-auto mb-8">
                <label className="block text-left text-gray-700 font-medium mb-2">{ziwei.labels.birthDate.label}</label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value.replace(/\D/g, '').slice(0, 8))}
                  placeholder={ziwei.labels.birthDate.placeholder}
                  className="w-full px-6 py-4 text-xl text-center border-2 border-purple-300 rounded-2xl focus:outline-none focus:border-purple-600 font-semibold text-gray-900"
                  maxLength={8}
                />
                <p className="text-sm text-gray-500 mt-2">{ziwei.labels.birthDate.helper}</p>
              </div>
              <button
                onClick={() => setStep(2)}
                disabled={birthDate.length !== 8}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-12 py-4 rounded-full hover:shadow-lg transition-all disabled:opacity-50"
              >
                {ziwei.labels.buttons.next}
              </button>
            </div>
          )}

          {/* Step 2: Birth Time */}
          {step === 2 && (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{ziwei.labels.birthTime.label}</h2>
              <div className="max-w-sm mx-auto flex gap-4 mb-6">
                <select value={birthHour} onChange={(e) => setBirthHour(e.target.value)}
                  className="flex-1 px-4 py-4 text-xl border-2 border-purple-300 rounded-2xl focus:outline-none focus:border-purple-600 bg-white">
                  {Array.from({ length: 24 }, (_, i) => (
                    <option key={i} value={i.toString()}>{i.toString().padStart(2, '0')} {ziwei.labels.birthTime.hour}</option>
                  ))}
                </select>
                <select value={birthMinute} onChange={(e) => setBirthMinute(e.target.value)}
                  className="flex-1 px-4 py-4 text-xl border-2 border-purple-300 rounded-2xl focus:outline-none focus:border-purple-600 bg-white">
                  {Array.from({ length: 60 }, (_, i) => (
                    <option key={i} value={i.toString()}>{i.toString().padStart(2, '0')} {ziwei.labels.birthTime.minute}</option>
                  ))}
                </select>
              </div>
              <p className="text-sm text-gray-500 mb-8">{ziwei.labels.birthTime.helper}</p>
              <div className="flex gap-4 justify-center">
                <button onClick={() => setStep(1)} className="px-8 py-3 border-2 border-gray-300 rounded-full hover:border-purple-400 transition-all">{ziwei.labels.buttons.prev}</button>
                <button onClick={() => setStep(3)} className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-12 py-3 rounded-full hover:shadow-lg transition-all">{ziwei.labels.buttons.next}</button>
              </div>
            </div>
          )}

          {/* Step 3: Gender */}
          {step === 3 && (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{ziwei.labels.gender.title}</h2>
              <div className="grid grid-cols-2 gap-4 mb-8 max-w-sm mx-auto">
                {(['male', 'female'] as const).map((g) => (
                  <button key={g} onClick={() => setGender(g)}
                    className={`p-8 rounded-2xl border-2 transition-all ${gender === g ? 'border-purple-600 bg-purple-50' : 'border-gray-300 hover:border-purple-400'}`}>
                    <div className="text-5xl mb-2">{g === 'male' ? '👨' : '👩'}</div>
                    <div className="text-xl font-semibold">{g === 'male' ? ziwei.labels.gender.male : ziwei.labels.gender.female}</div>
                  </button>
                ))}
              </div>
              <div className="flex gap-4 justify-center">
                <button onClick={() => setStep(2)} className="px-8 py-3 border-2 border-gray-300 rounded-full hover:border-purple-400 transition-all">{ziwei.labels.buttons.prev}</button>
                <button onClick={handleCalculate} disabled={loading}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-12 py-3 rounded-full hover:shadow-lg transition-all disabled:opacity-50">
                  {loading ? ziwei.labels.buttons.calculating : ziwei.labels.buttons.calculate}
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Preview + Payment */}
          {step === 4 && result && !paid && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">{ziwei.preview.title}</h2>

              {/* Star chart - FREE */}
              <div className="mb-6 overflow-x-auto">
                <ZiweiBoard chart={result.chart} mingGongLabel={ziwei.labels.mingGong} wuXingJuLabel={ziwei.labels.wuXingJu} />
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-2 mb-6 text-xs">
                {Object.entries(BRIGHTNESS_COLOR).map(([k, cls]) => (
                  <span key={k} className={cls}>{k}</span>
                ))}
                <span className="text-gray-400 ml-2">※ {ziwei.labels.brightness}</span>
              </div>

              {/* Major periods - FREE */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{ziwei.labels.daxian}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-purple-50">
                        <th className="p-2 text-left rounded-tl-lg">{ziwei.labels.table.age}</th>
                        <th className="p-2 text-left">{ziwei.labels.table.ganzhi}</th>
                        <th className="p-2 text-left">{ziwei.labels.table.palace}</th>
                        <th className="p-2 text-left rounded-tr-lg">{ziwei.labels.table.stars}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.daxianList.map((d, i) => {
                        const isCurrent = getCurrentDaxian(result.daxianList)?.ganZhi === d.ganZhi;
                        return (
                          <tr key={i} className={`border-b ${isCurrent ? 'bg-yellow-50 font-semibold' : ''}`}>
                            <td className="p-2">
                              {d.ageStart}~{d.ageEnd}{language === 'en' ? '' : '세'}
                              {isCurrent && <span className="ml-1 text-xs text-yellow-600">◀ {ziwei.labels.current}</span>}
                            </td>
                            <td className="p-2 font-bold text-purple-700">{d.ganZhi}</td>
                            <td className="p-2">{d.palaceName}</td>
                            <td className="p-2 text-xs text-gray-600">{d.mainStars.slice(0, 3).join(', ')}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* AI reading - summary FREE */}
              {interpretationParts && (
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 mb-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">⭐ {ziwei.preview.summaryTitle}</h3>
                  <div className="text-gray-700 whitespace-pre-line leading-relaxed text-sm">
                    {interpretationParts.summary}
                  </div>
                </div>
              )}

              {/* AI reading - details LOCKED */}
              {interpretationParts && interpretationParts.details && (
                <div className="relative mb-6">
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6">
                    <div className="text-gray-700 whitespace-pre-line leading-relaxed text-sm line-clamp-3">
                      {interpretationParts.details}
                    </div>
                    <div className="mt-2 bg-gradient-to-t from-indigo-50 via-indigo-50/80 to-transparent h-6 -mt-4 relative z-10"></div>
                    <p className="text-purple-600 text-sm font-medium">
                      {isNative ? ziwei.preview.readMore : (language === 'en' ? '▼ Tap the button below to read the full reading for free' : '▼ 아래 버튼을 누르면 전체 해석을 무료로 확인할 수 있습니다')}
                    </p>
                  </div>

                  <div className="blur-sm pointer-events-none mt-3 space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-white border-2 border-gray-200 rounded-xl p-4">
                        <div className="space-y-1">
                          <div className="h-3 bg-gray-200 rounded w-full"></div>
                          <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                          <div className="h-3 bg-gray-200 rounded w-3/5"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center" style={{ top: '40%' }}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-center">
                      <div className="text-4xl mb-2">🔒</div>
                      <p className="text-lg font-bold text-gray-800">
                        {isNative ? ziwei.preview.locked : (language === 'en' ? 'The full 12-palace reading is ready' : '12궁 상세 해석이 준비되어 있습니다')}
                      </p>
                      <p className="text-sm text-gray-600">
                        {isNative ? ziwei.preview.lockedDesc : (language === 'en' ? 'The web version is free to read in full' : '웹 버전에서는 무료로 전부 확인할 수 있습니다')}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Payment / web-free section */}
              {isNative ? (
                <div>
                  <p className="text-center text-sm font-medium text-gray-700 mb-4">{ziwei.payment.selectToken}</p>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {tokenOptions.map(({ token, label, amount, desc }) => (
                      <button
                        key={token}
                        onClick={() => handlePayment(token)}
                        disabled={selectedToken !== null}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          selectedToken === token
                            ? 'border-purple-600 bg-purple-50'
                            : 'border-gray-200 hover:border-purple-400'
                        } disabled:opacity-50`}
                      >
                        <div className="font-bold text-gray-800">{label}</div>
                        <div className="text-sm text-gray-600">{amount}</div>
                        {desc && <div className="text-xs text-amber-600 mt-1">{desc}</div>}
                        {selectedToken === token && (
                          <div className="text-xs text-purple-600 mt-1">{ziwei.payment.processing}</div>
                        )}
                      </button>
                    ))}
                  </div>

                  {paymentError && (
                    <div className="text-sm text-red-600 mb-4 p-3 bg-red-50 rounded-lg">
                      {paymentError}
                    </div>
                  )}

                  <p className="text-center text-xs text-gray-500 mb-4">{ziwei.payment.priceNote}</p>

                  <a href="https://poop-dodge-game.vercel.app" target="_blank" rel="noopener noreferrer"
                    className="block bg-gradient-to-r from-amber-100 to-yellow-100 border-2 border-amber-300 rounded-xl p-4 mb-4 hover:shadow-md transition-all">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">💩</span>
                      <div className="flex-1">
                        <p className="font-bold text-gray-800 text-sm">{language === 'ko' ? 'Poop Dodge 게임으로 POOP 토큰을 모으세요!' : 'Earn POOP tokens playing Poop Dodge!'}</p>
                        <p className="text-xs text-gray-600">{language === 'ko' ? '무료 아케이드 게임 → 토큰 획득 → 운세 결제' : 'Free arcade game → Earn tokens → Pay for fortune'}</p>
                      </div>
                      <span className="text-lg">→</span>
                    </div>
                  </a>
                </div>
              ) : (
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-500 mb-3">{ziwei.preview.webFree}</p>
                  <button
                    onClick={() => { setPaid(true); setStep(5); }}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg py-4 rounded-full hover:shadow-2xl transition-all"
                  >
                    {ziwei.preview.viewFull}
                  </button>
                  <ShareButton className="w-full mt-3" label={t.fortune.share.copy} />
                </div>
              )}

              <button
                onClick={resetAll}
                className="w-full mt-2 text-gray-500 hover:text-gray-700 transition-all text-sm"
              >
                ← {ziwei.labels.buttons.retry}
              </button>
            </div>
          )}

          {/* Step 5: Full Results */}
          {step === 5 && result && paid && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">{ziwei.labels.board}</h2>

              <div className="mb-6 overflow-x-auto">
                <ZiweiBoard chart={result.chart} mingGongLabel={ziwei.labels.mingGong} wuXingJuLabel={ziwei.labels.wuXingJu} />
              </div>

              <div className="flex flex-wrap gap-2 mb-6 text-xs">
                {Object.entries(BRIGHTNESS_COLOR).map(([k, cls]) => (
                  <span key={k} className={cls}>{k}</span>
                ))}
                <span className="text-gray-400 ml-2">※ {ziwei.labels.brightness}</span>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{ziwei.labels.daxian}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-purple-50">
                        <th className="p-2 text-left rounded-tl-lg">{ziwei.labels.table.age}</th>
                        <th className="p-2 text-left">{ziwei.labels.table.ganzhi}</th>
                        <th className="p-2 text-left">{ziwei.labels.table.palace}</th>
                        <th className="p-2 text-left rounded-tr-lg">{ziwei.labels.table.stars}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.daxianList.map((d, i) => {
                        const isCurrent = getCurrentDaxian(result.daxianList)?.ganZhi === d.ganZhi;
                        return (
                          <tr key={i} className={`border-b ${isCurrent ? 'bg-yellow-50 font-semibold' : ''}`}>
                            <td className="p-2">
                              {d.ageStart}~{d.ageEnd}{language === 'en' ? '' : '세'}
                              {isCurrent && <span className="ml-1 text-xs text-yellow-600">◀ {ziwei.labels.current}</span>}
                            </td>
                            <td className="p-2 font-bold text-purple-700">{d.ganZhi}</td>
                            <td className="p-2">{d.palaceName}</td>
                            <td className="p-2 text-xs text-gray-600">{d.mainStars.slice(0, 3).join(', ')}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">⭐ {ziwei.labels.interpretation}</h3>
                <div className="text-gray-700 whitespace-pre-line leading-relaxed text-sm">
                  {result.interpretation}
                </div>
              </div>

              <ShareButton className="w-full mb-3" label={t.fortune.share.shareResult} />
              <button onClick={resetAll}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-4 rounded-full hover:shadow-lg transition-all">
                {ziwei.labels.buttons.retry}
              </button>
            </div>
          )}

          {/* Open source credit */}
          <p className="mt-6 pt-4 border-t border-gray-100 text-center text-[11px] text-gray-400">
            {t.footer.creditBefore}
            <a
              href="https://github.com/rath/orrery"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-purple-600 transition-colors"
            >
              @orrery/core
            </a>
            {t.footer.creditAfter}
          </p>
        </div>
      )}
    </div>
  );
}
