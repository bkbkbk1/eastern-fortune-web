'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';
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
  // 3×4 그리드 배치 (시계 반대방향)
  // 행/열 순서: 남방(위)부터 동방(왼쪽)
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

export default function ZiweiPage() {
  const { language } = useLanguage();
  const t = language === 'en' ? {
    title: 'Zi Wei Dou Shu',
    subtitle: 'Purple Star Astrology (紫微斗數)',
    birthDate: { label: 'Birth Date (양력 YYYYMMDD)', placeholder: 'e.g. 19900115', helper: 'Enter solar calendar date' },
    birthTime: { label: 'Birth Time', hour: 'h', minute: 'm', helper: 'Time of birth' },
    gender: { title: 'Gender', male: 'Male', female: 'Female' },
    buttons: { calculate: 'View Chart', calculating: 'Calculating...', retry: 'Start Over', prev: 'Back', next: 'Next' },
    board: 'Star Chart (命盤)',
    daxian: 'Major Periods (大限)',
    interpretation: 'AI Interpretation',
    currentDaxian: 'Current',
    loading: 'Calculating your Purple Star chart...',
    errors: { apiError: 'Error: ', birthDateInvalid: 'Please enter 8-digit birth date' }
  } : {
    title: '자미두수 (紫微斗數)',
    subtitle: '중국 전통 자미두수 명반 분석',
    birthDate: { label: '생년월일 (양력 YYYYMMDD)', placeholder: '예: 19900115', helper: '양력 날짜를 입력해주세요' },
    birthTime: { label: '태어난 시간', hour: '시', minute: '분', helper: '모르시면 12시로 입력하세요' },
    gender: { title: '성별 선택', male: '남성', female: '여성' },
    buttons: { calculate: '명반 보기', calculating: '계산 중...', retry: '다시 시작', prev: '이전', next: '다음' },
    board: '자미두수 명반 (命盤)',
    daxian: '대한(大限) 운세',
    interpretation: 'AI 명반 해석',
    currentDaxian: '현재',
    loading: '자미두수 명반을 계산하고 있습니다...',
    errors: { apiError: '오류: ', birthDateInvalid: '생년월일 8자리를 입력해주세요' }
  };

  const [step, setStep] = useState(1);
  const [birthDate, setBirthDate] = useState('');
  const [birthHour, setBirthHour] = useState('12');
  const [birthMinute, setBirthMinute] = useState('00');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ZiweiResult | null>(null);

  const handleCalculate = async () => {
    if (!birthDate || birthDate.length !== 8) {
      alert(t.errors.birthDateInvalid);
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
        alert(t.errors.apiError + (data.error || data.details || 'Unknown error'));
        return;
      }
      setResult(data as ZiweiResult);
      setStep(4);
    } catch (error) {
      alert(t.errors.apiError + (error instanceof Error ? error.message : ''));
    } finally {
      setLoading(false);
    }
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 to-purple-800 flex items-center justify-center p-4">
      <LanguageToggle />

      {loading && (
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
          <div className="inline-block animate-spin rounded-full h-20 w-20 border-8 border-purple-200 border-t-purple-600 mb-6"></div>
          <p className="text-xl font-bold text-gray-800 animate-pulse">{t.loading}</p>
        </div>
      )}

      {!loading && (
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8">

          {/* Step 1: Birth Date */}
          {step === 1 && (
            <div className="text-center">
              <div className="text-5xl mb-3">⭐</div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{t.title}</h1>
              <p className="text-gray-500 mb-8">{t.subtitle}</p>
              <div className="max-w-md mx-auto mb-8">
                <label className="block text-left text-gray-700 font-medium mb-2">{t.birthDate.label}</label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value.replace(/\D/g, '').slice(0, 8))}
                  placeholder={t.birthDate.placeholder}
                  className="w-full px-6 py-4 text-xl text-center border-2 border-purple-300 rounded-2xl focus:outline-none focus:border-purple-600 font-semibold text-gray-900"
                  maxLength={8}
                />
                <p className="text-sm text-gray-500 mt-2">{t.birthDate.helper}</p>
              </div>
              <button
                onClick={() => setStep(2)}
                disabled={birthDate.length !== 8}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-12 py-4 rounded-full hover:shadow-lg transition-all disabled:opacity-50"
              >
                {t.buttons.next}
              </button>
            </div>
          )}

          {/* Step 2: Birth Time */}
          {step === 2 && (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.birthTime.label}</h2>
              <div className="max-w-sm mx-auto flex gap-4 mb-8">
                <select value={birthHour} onChange={(e) => setBirthHour(e.target.value)}
                  className="flex-1 px-4 py-4 text-xl border-2 border-purple-300 rounded-2xl focus:outline-none focus:border-purple-600 bg-white">
                  {Array.from({ length: 24 }, (_, i) => (
                    <option key={i} value={i.toString()}>{i.toString().padStart(2, '0')} {t.birthTime.hour}</option>
                  ))}
                </select>
                <select value={birthMinute} onChange={(e) => setBirthMinute(e.target.value)}
                  className="flex-1 px-4 py-4 text-xl border-2 border-purple-300 rounded-2xl focus:outline-none focus:border-purple-600 bg-white">
                  {Array.from({ length: 60 }, (_, i) => (
                    <option key={i} value={i.toString()}>{i.toString().padStart(2, '0')} {t.birthTime.minute}</option>
                  ))}
                </select>
              </div>
              <p className="text-sm text-gray-500 mb-8">{t.birthTime.helper}</p>
              <div className="flex gap-4 justify-center">
                <button onClick={() => setStep(1)} className="px-8 py-3 border-2 border-gray-300 rounded-full hover:border-purple-400 transition-all">{t.buttons.prev}</button>
                <button onClick={() => setStep(3)} className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-12 py-3 rounded-full hover:shadow-lg transition-all">{t.buttons.next}</button>
              </div>
            </div>
          )}

          {/* Step 3: Gender */}
          {step === 3 && (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.gender.title}</h2>
              <div className="grid grid-cols-2 gap-4 mb-8 max-w-sm mx-auto">
                {(['male', 'female'] as const).map((g) => (
                  <button key={g} onClick={() => setGender(g)}
                    className={`p-8 rounded-2xl border-2 transition-all ${gender === g ? 'border-purple-600 bg-purple-50' : 'border-gray-300 hover:border-purple-400'}`}>
                    <div className="text-5xl mb-2">{g === 'male' ? '👨' : '👩'}</div>
                    <div className="text-xl font-semibold">{g === 'male' ? t.gender.male : t.gender.female}</div>
                  </button>
                ))}
              </div>
              <div className="flex gap-4 justify-center">
                <button onClick={() => setStep(2)} className="px-8 py-3 border-2 border-gray-300 rounded-full hover:border-purple-400 transition-all">{t.buttons.prev}</button>
                <button onClick={handleCalculate} disabled={loading}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-12 py-3 rounded-full hover:shadow-lg transition-all disabled:opacity-50">
                  {loading ? t.buttons.calculating : t.buttons.calculate}
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Results */}
          {step === 4 && result && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">{t.board}</h2>

              {/* 명반 그리드 */}
              <div className="mb-6 overflow-x-auto">
                <ZiweiBoard chart={result.chart} />
              </div>

              {/* 범례 */}
              <div className="flex flex-wrap gap-2 mb-6 text-xs">
                {Object.entries(BRIGHTNESS_COLOR).map(([k, cls]) => (
                  <span key={k} className={cls}>{k}</span>
                ))}
                <span className="text-gray-400 ml-2">※ 밝기 등급</span>
              </div>

              {/* 대한 리스트 */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{t.daxian}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-purple-50">
                        <th className="p-2 text-left rounded-tl-lg">나이</th>
                        <th className="p-2 text-left">간지</th>
                        <th className="p-2 text-left">궁명</th>
                        <th className="p-2 text-left rounded-tr-lg">주요 성</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.daxianList.map((d, i) => {
                        const isCurrent = getCurrentDaxian(result.daxianList)?.ganZhi === d.ganZhi;
                        return (
                          <tr key={i} className={`border-b ${isCurrent ? 'bg-yellow-50 font-semibold' : ''}`}>
                            <td className="p-2">
                              {d.ageStart}~{d.ageEnd}세
                              {isCurrent && <span className="ml-1 text-xs text-yellow-600">◀ {t.currentDaxian}</span>}
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

              {/* AI 해석 */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">⭐ {t.interpretation}</h3>
                <div className="text-gray-700 whitespace-pre-line leading-relaxed text-sm">
                  {result.interpretation}
                </div>
              </div>

              <button onClick={() => { setStep(1); setResult(null); setBirthDate(''); }}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-4 rounded-full hover:shadow-lg transition-all">
                {t.buttons.retry}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
