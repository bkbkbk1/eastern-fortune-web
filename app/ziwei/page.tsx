'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';
import { isInNativeApp, requestPayment, type PaymentToken } from '@/lib/solana-bridge';
import type { ZiweiChart, ZiweiPalace } from '@orrery/core/types';

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

const PALACE_ORDER = ['寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥', '子', '丑'];

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

function ZiweiBoard({ chart }: { chart: ZiweiChart }) {
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
        if (r === 1 && c === 1) return null;
        if (r === 1 && c === 2) return null;
        if (r === 2 && c === 1) return null;
        if (r === 2 && c === 2) return null;
        const palace = cells.find(cell => cell.zhi === zhi)?.palace;
        if (!palace) return null;
        return (
          <div key={zhi} style={{ gridRow: r + 1, gridColumn: c + 1 }}>
            <PalaceCell palace={palace} />
          </div>
        );
      })}
      {/* Center: chart info */}
      <div className="text-center bg-purple-50 rounded-lg p-3 flex flex-col justify-center" style={{ gridRow: '2/4', gridColumn: '2/4' }}>
        <p className="text-xs text-gray-500 mb-1">명궁(命宮)</p>
        <p className="text-lg font-bold text-purple-700">{chart.mingGongZhi}</p>
        <p className="text-xs text-gray-500 mt-2">오행국</p>
        <p className="text-sm font-semibold text-gray-700">{chart.wuXingJu.name}</p>
        <p className="text-xs text-gray-400">{chart.lunarYear}년생</p>
      </div>
    </div>
  );
}

function splitInterpretation(text: string): { summary: string; details: string } {
  // Split interpretation: first section (summary/overview) is free, rest is locked
  const lines = text.split('\n');
  const sectionBreaks: number[] = [];

  lines.forEach((line, i) => {
    // Detect section headers: numbered items like "1.", "2.", "**1.", or ### headers
    if (/^(\*{0,2}\s*\d+[\.\)]\s|#{1,3}\s)/.test(line.trim()) && i > 0) {
      sectionBreaks.push(i);
    }
  });

  // If we found section breaks, split after first section
  if (sectionBreaks.length >= 2) {
    const splitAt = sectionBreaks[1]; // after section 1
    return {
      summary: lines.slice(0, splitAt).join('\n').trim(),
      details: lines.slice(splitAt).join('\n').trim(),
    };
  }

  // Fallback: split at roughly 1/3
  const splitLine = Math.floor(lines.length / 3);
  return {
    summary: lines.slice(0, Math.max(splitLine, 3)).join('\n').trim(),
    details: lines.slice(Math.max(splitLine, 3)).join('\n').trim(),
  };
}

export default function ZiweiPage() {
  const { t, language } = useLanguage();

  const zt = (t as any).ziwei || {
    preview: {
      title: '⭐ 자미두수 명반 미리보기',
      readMore: '▼ 전체 해석을 보려면 결제하세요',
      locked: '궁별 상세 해석이 잠겨있습니다',
      lockedDesc: '결제 후 12궁 상세 해석을 확인하세요',
      webFree: '웹 버전은 무료로 전체 해석을 확인할 수 있습니다',
      viewFull: '전체 해석 보기 →',
      summaryTitle: '총론',
    },
    payment: {
      selectToken: '결제할 토큰을 선택하세요:',
      processing: '처리 중...',
      priceNote: '약 $1.00 상당',
      paymentFailed: '결제에 실패했습니다. 다시 시도해주세요.',
    },
  };

  const labels = {
    title: language === 'en' ? 'Zi Wei Dou Shu (紫微斗數)' : '자미두수 (紫微斗數)',
    subtitle: language === 'en' ? 'Chinese Purple Star Astrology' : '중국 전통 자미두수 명반 분석',
    birthDate: {
      label: language === 'en' ? 'Birth Date (Solar YYYYMMDD)' : '생년월일 (양력 YYYYMMDD)',
      placeholder: language === 'en' ? 'e.g., 19900115' : '예: 19900115',
      helper: language === 'en' ? 'Enter your solar calendar date' : '양력 날짜를 입력해주세요',
    },
    birthTime: {
      label: language === 'en' ? 'Birth Time' : '태어난 시간',
      hour: language === 'en' ? 'Hr' : '시',
      minute: language === 'en' ? 'Min' : '분',
      helper: language === 'en' ? "If unknown, enter 12:00" : '모르시면 12시로 입력하세요',
    },
    gender: {
      title: language === 'en' ? 'Select Gender' : '성별 선택',
      male: language === 'en' ? 'Male' : '남성',
      female: language === 'en' ? 'Female' : '여성',
    },
    buttons: {
      calculate: language === 'en' ? 'View Star Chart' : '명반 보기',
      calculating: language === 'en' ? 'Calculating...' : '계산 중...',
      retry: language === 'en' ? 'Start Over' : '다시 시작',
      prev: language === 'en' ? 'Previous' : '이전',
      next: language === 'en' ? 'Next' : '다음',
    },
    board: language === 'en' ? 'Zi Wei Star Chart (命盤)' : '자미두수 명반 (命盤)',
    daxian: language === 'en' ? 'Major Periods (大限)' : '대한(大限) 운세',
    interpretation: language === 'en' ? 'AI Star Chart Interpretation' : 'AI 명반 해석',
    currentDaxian: language === 'en' ? 'Current' : '현재',
    loading: language === 'en' ? 'Calculating your Zi Wei star chart...' : '자미두수 명반을 계산하고 있습니다...',
    errors: {
      apiError: language === 'en' ? 'Error: ' : '오류: ',
      birthDateInvalid: language === 'en' ? 'Please enter birth date in 8 digits' : '생년월일 8자리를 입력해주세요',
    },
  };

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
      alert(labels.errors.birthDateInvalid);
      return;
    }
    setLoading(true);
    try {
      const response = await fetch('/api/calculate-ziwei', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ birthDate, birthHour: parseInt(birthHour), birthMinute: parseInt(birthMinute), gender, language })
      });
      const data = await response.json();
      if (!response.ok || data.error) {
        alert(labels.errors.apiError + (data.error || data.details || 'Unknown error'));
        return;
      }
      setResult(data as ZiweiResult);
      setStep(4);
    } catch (error) {
      alert(labels.errors.apiError + (error instanceof Error ? error.message : ''));
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
        setPaymentError(res.error || zt.payment.paymentFailed);
      }
    } catch {
      setPaymentError(zt.payment.paymentFailed);
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

  const currentYear = new Date().getFullYear();
  const getCurrentDaxian = (daxianList: DaxianItem[]) => {
    if (!result) return null;
    const birthYear = result.chart.solarYear;
    const currentAge = currentYear - birthYear;
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
          <p className="text-xl font-bold text-gray-800 animate-pulse">{labels.loading}</p>
        </div>
      )}

      {!loading && (
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8">

          {/* Step 1: Birth Date */}
          {step === 1 && (
            <div className="text-center">
              <div className="text-5xl mb-3">⭐</div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{labels.title}</h1>
              <p className="text-gray-500 mb-8">{labels.subtitle}</p>
              <div className="max-w-md mx-auto mb-8">
                <label className="block text-left text-gray-700 font-medium mb-2">{labels.birthDate.label}</label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value.replace(/\D/g, '').slice(0, 8))}
                  placeholder={labels.birthDate.placeholder}
                  className="w-full px-6 py-4 text-xl text-center border-2 border-purple-300 rounded-2xl focus:outline-none focus:border-purple-600 font-semibold text-gray-900"
                  maxLength={8}
                />
                <p className="text-sm text-gray-500 mt-2">{labels.birthDate.helper}</p>
              </div>
              <button
                onClick={() => setStep(2)}
                disabled={birthDate.length !== 8}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-12 py-4 rounded-full hover:shadow-lg transition-all disabled:opacity-50"
              >
                {labels.buttons.next}
              </button>
            </div>
          )}

          {/* Step 2: Birth Time */}
          {step === 2 && (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{labels.birthTime.label}</h2>
              <div className="max-w-sm mx-auto flex gap-4 mb-8">
                <select value={birthHour} onChange={(e) => setBirthHour(e.target.value)}
                  className="flex-1 px-4 py-4 text-xl border-2 border-purple-300 rounded-2xl focus:outline-none focus:border-purple-600 bg-white">
                  {Array.from({ length: 24 }, (_, i) => (
                    <option key={i} value={i.toString()}>{i.toString().padStart(2, '0')} {labels.birthTime.hour}</option>
                  ))}
                </select>
                <select value={birthMinute} onChange={(e) => setBirthMinute(e.target.value)}
                  className="flex-1 px-4 py-4 text-xl border-2 border-purple-300 rounded-2xl focus:outline-none focus:border-purple-600 bg-white">
                  {Array.from({ length: 60 }, (_, i) => (
                    <option key={i} value={i.toString()}>{i.toString().padStart(2, '0')} {labels.birthTime.minute}</option>
                  ))}
                </select>
              </div>
              <p className="text-sm text-gray-500 mb-8">{labels.birthTime.helper}</p>
              <div className="flex gap-4 justify-center">
                <button onClick={() => setStep(1)} className="px-8 py-3 border-2 border-gray-300 rounded-full hover:border-purple-400 transition-all">{labels.buttons.prev}</button>
                <button onClick={() => setStep(3)} className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-12 py-3 rounded-full hover:shadow-lg transition-all">{labels.buttons.next}</button>
              </div>
            </div>
          )}

          {/* Step 3: Gender */}
          {step === 3 && (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{labels.gender.title}</h2>
              <div className="grid grid-cols-2 gap-4 mb-8 max-w-sm mx-auto">
                {(['male', 'female'] as const).map((g) => (
                  <button key={g} onClick={() => setGender(g)}
                    className={`p-8 rounded-2xl border-2 transition-all ${gender === g ? 'border-purple-600 bg-purple-50' : 'border-gray-300 hover:border-purple-400'}`}>
                    <div className="text-5xl mb-2">{g === 'male' ? '👨' : '👩'}</div>
                    <div className="text-xl font-semibold">{g === 'male' ? labels.gender.male : labels.gender.female}</div>
                  </button>
                ))}
              </div>
              <div className="flex gap-4 justify-center">
                <button onClick={() => setStep(2)} className="px-8 py-3 border-2 border-gray-300 rounded-full hover:border-purple-400 transition-all">{labels.buttons.prev}</button>
                <button onClick={handleCalculate} disabled={loading}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-12 py-3 rounded-full hover:shadow-lg transition-all disabled:opacity-50">
                  {loading ? labels.buttons.calculating : labels.buttons.calculate}
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Preview + Payment */}
          {step === 4 && result && !paid && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">{zt.preview.title}</h2>

              {/* 명반 그리드 - FREE */}
              <div className="mb-6 overflow-x-auto">
                <ZiweiBoard chart={result.chart} />
              </div>

              {/* 범례 */}
              <div className="flex flex-wrap gap-2 mb-6 text-xs">
                {Object.entries(BRIGHTNESS_COLOR).map(([k, cls]) => (
                  <span key={k} className={cls}>{k}</span>
                ))}
                <span className="text-gray-400 ml-2">※ {language === 'en' ? 'Brightness grades' : '밝기 등급'}</span>
              </div>

              {/* 대한 리스트 - FREE */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{labels.daxian}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-purple-50">
                        <th className="p-2 text-left rounded-tl-lg">{language === 'en' ? 'Age' : '나이'}</th>
                        <th className="p-2 text-left">{language === 'en' ? 'Gan-Zhi' : '간지'}</th>
                        <th className="p-2 text-left">{language === 'en' ? 'Palace' : '궁명'}</th>
                        <th className="p-2 text-left rounded-tr-lg">{language === 'en' ? 'Stars' : '주요 성'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.daxianList.map((d, i) => {
                        const isCurrent = getCurrentDaxian(result.daxianList)?.ganZhi === d.ganZhi;
                        return (
                          <tr key={i} className={`border-b ${isCurrent ? 'bg-yellow-50 font-semibold' : ''}`}>
                            <td className="p-2">
                              {d.ageStart}~{d.ageEnd}{language === 'en' ? '' : '세'}
                              {isCurrent && <span className="ml-1 text-xs text-yellow-600">◀ {labels.currentDaxian}</span>}
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

              {/* AI 해석 - Summary FREE */}
              {interpretationParts && (
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 mb-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">⭐ {zt.preview.summaryTitle}</h3>
                  <div className="text-gray-700 whitespace-pre-line leading-relaxed text-sm">
                    {interpretationParts.summary}
                  </div>
                </div>
              )}

              {/* AI 해석 - Details LOCKED */}
              {interpretationParts && interpretationParts.details && (
                <div className="relative mb-6">
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6">
                    <div className="text-gray-700 whitespace-pre-line leading-relaxed text-sm line-clamp-3">
                      {interpretationParts.details}
                    </div>
                    <div className="mt-2 bg-gradient-to-t from-indigo-50 via-indigo-50/80 to-transparent h-6 -mt-4 relative z-10"></div>
                    <p className="text-purple-600 text-sm font-medium">{zt.preview.readMore}</p>
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
                      <p className="text-lg font-bold text-gray-800">{zt.preview.locked}</p>
                      <p className="text-sm text-gray-600">{zt.preview.lockedDesc}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Payment Section */}
              {isNative ? (
                <div>
                  <p className="text-center text-sm font-medium text-gray-700 mb-4">{zt.payment.selectToken}</p>

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
                          <div className="text-xs text-purple-600 mt-1">{zt.payment.processing}</div>
                        )}
                      </button>
                    ))}
                  </div>

                  {paymentError && (
                    <div className="text-sm text-red-600 mb-4 p-3 bg-red-50 rounded-lg">
                      {paymentError}
                    </div>
                  )}

                  <p className="text-center text-xs text-gray-500 mb-4">{zt.payment.priceNote}</p>

                  {/* Poop Dodge Promo Banner */}
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
                  <p className="text-sm text-gray-500 mb-3">{zt.preview.webFree}</p>
                  <button
                    onClick={() => { setPaid(true); setStep(5); }}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg py-4 rounded-full hover:shadow-2xl transition-all"
                  >
                    {zt.preview.viewFull}
                  </button>
                </div>
              )}

              <button
                onClick={resetAll}
                className="w-full mt-2 text-gray-500 hover:text-gray-700 transition-all text-sm"
              >
                ← {labels.buttons.retry}
              </button>
            </div>
          )}

          {/* Step 5: Full Results (paid) */}
          {step === 5 && result && paid && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">{labels.board}</h2>

              {/* 명반 그리드 */}
              <div className="mb-6 overflow-x-auto">
                <ZiweiBoard chart={result.chart} />
              </div>

              {/* 범례 */}
              <div className="flex flex-wrap gap-2 mb-6 text-xs">
                {Object.entries(BRIGHTNESS_COLOR).map(([k, cls]) => (
                  <span key={k} className={cls}>{k}</span>
                ))}
                <span className="text-gray-400 ml-2">※ {language === 'en' ? 'Brightness grades' : '밝기 등급'}</span>
              </div>

              {/* 대한 리스트 */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{labels.daxian}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-purple-50">
                        <th className="p-2 text-left rounded-tl-lg">{language === 'en' ? 'Age' : '나이'}</th>
                        <th className="p-2 text-left">{language === 'en' ? 'Gan-Zhi' : '간지'}</th>
                        <th className="p-2 text-left">{language === 'en' ? 'Palace' : '궁명'}</th>
                        <th className="p-2 text-left rounded-tr-lg">{language === 'en' ? 'Stars' : '주요 성'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.daxianList.map((d, i) => {
                        const isCurrent = getCurrentDaxian(result.daxianList)?.ganZhi === d.ganZhi;
                        return (
                          <tr key={i} className={`border-b ${isCurrent ? 'bg-yellow-50 font-semibold' : ''}`}>
                            <td className="p-2">
                              {d.ageStart}~{d.ageEnd}{language === 'en' ? '' : '세'}
                              {isCurrent && <span className="ml-1 text-xs text-yellow-600">◀ {labels.currentDaxian}</span>}
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

              {/* AI 해석 - FULL */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">⭐ {labels.interpretation}</h3>
                <div className="text-gray-700 whitespace-pre-line leading-relaxed text-sm">
                  {result.interpretation}
                </div>
              </div>

              <button onClick={resetAll}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-4 rounded-full hover:shadow-lg transition-all">
                {labels.buttons.retry}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
