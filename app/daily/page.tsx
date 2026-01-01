'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';

export default function DailyFortunePage() {
  const { t } = useLanguage();
  const [step, setStep] = useState<number>(1);
  const [birthDate, setBirthDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const today = new Date();
  const todayStr = `${today.getMonth() + 1}월 ${today.getDate()}일`;

  const handleCalculate = async () => {
    if (!birthDate || birthDate.length !== 8) {
      alert('생년월일 8자리를 입력해주세요');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/daily-fortune', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ birthDate })
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        alert(`오류: ${data.error || 'Unknown error'}`);
        return;
      }

      setResult(data);
      setStep(2);
    } catch (error) {
      console.error('Error:', error);
      alert('운세 계산 중 오류가 발생했습니다');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <LanguageToggle />

      {loading && (
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-block animate-spin rounded-full h-24 w-24 border-8 border-indigo-200 border-t-indigo-600 mb-6"></div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              오늘의 운세 분석 중...
            </h2>
            <p className="text-gray-600">
              잠시만 기다려주세요
            </p>
          </div>
        </div>
      )}

      {!loading && (
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          {step === 1 && (
            <div className="text-center">
              <div className="text-6xl mb-4">📅</div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">오늘의 운세</h1>
              <p className="text-2xl text-indigo-600 font-semibold mb-8">{todayStr}</p>

              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-6 mb-8">
                <p className="text-gray-700">
                  매일 바뀌는 나만의 운세를 확인하세요<br/>
                  생년월일만 입력하면 OK!
                </p>
              </div>

              <div className="max-w-md mx-auto mb-8">
                <label className="block text-left text-gray-700 font-medium mb-2">
                  생년월일
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value.replace(/\D/g, '').slice(0, 8))}
                  placeholder="19900101"
                  className="w-full px-6 py-4 text-xl text-center text-gray-900 placeholder:text-gray-400 border-2 border-indigo-300 rounded-2xl focus:outline-none focus:border-indigo-600 font-semibold"
                  maxLength={8}
                />
                <p className="text-sm text-gray-500 mt-2">예: 1990년 1월 1일 → 19900101</p>
              </div>

              <button
                onClick={handleCalculate}
                disabled={birthDate.length !== 8}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-12 py-4 rounded-full hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                오늘의 운세 보기
              </button>

              <div className="mt-8 text-sm text-gray-500">
                <a href="/" className="hover:text-indigo-600">← 2026년 신년운세 보기</a>
              </div>
            </div>
          )}

          {step === 2 && result && (
            <div>
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">🌟</div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">오늘의 운세</h2>
                <p className="text-xl text-indigo-600 font-semibold">{result.date}</p>
              </div>

              {/* 오늘의 한마디 */}
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-300 rounded-2xl p-6 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl">💬</span>
                  <h3 className="text-xl font-bold text-gray-800">오늘의 한마디</h3>
                </div>
                <p className="text-lg font-medium text-gray-800">{result.fortune.message}</p>
              </div>

              {/* 운세 카드들 */}
              <div className="space-y-4 mb-6">
                {/* 재물운 */}
                <div className="bg-white border-2 border-yellow-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">💰</span>
                    <h4 className="text-lg font-semibold text-gray-800">재물운</h4>
                  </div>
                  <p className="text-gray-700">{result.fortune.wealth}</p>
                </div>

                {/* 애정운 */}
                <div className="bg-white border-2 border-red-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">💕</span>
                    <h4 className="text-lg font-semibold text-gray-800">애정운</h4>
                  </div>
                  <p className="text-gray-700">{result.fortune.love}</p>
                </div>

                {/* 건강운 */}
                <div className="bg-white border-2 border-green-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">💚</span>
                    <h4 className="text-lg font-semibold text-gray-800">건강운</h4>
                  </div>
                  <p className="text-gray-700">{result.fortune.health}</p>
                </div>

                {/* 직장운 */}
                <div className="bg-white border-2 border-blue-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">💼</span>
                    <h4 className="text-lg font-semibold text-gray-800">직장운</h4>
                  </div>
                  <p className="text-gray-700">{result.fortune.work}</p>
                </div>
              </div>

              {/* 행운 아이템 */}
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">🍀 오늘의 행운 아이템</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🎨</div>
                    <h4 className="font-semibold mb-1">행운의 색</h4>
                    <p className="text-sm text-gray-700">{result.fortune.luckyColor}</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🔢</div>
                    <h4 className="font-semibold mb-1">행운의 숫자</h4>
                    <p className="text-sm text-gray-700">{result.fortune.luckyNumber}</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">⏰</div>
                    <h4 className="font-semibold mb-1">행운의 시간</h4>
                    <p className="text-sm text-gray-700">{result.fortune.luckyTime}</p>
                  </div>
                </div>
              </div>

              {/* 오늘의 조언 */}
              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 border-2 border-blue-300 rounded-xl p-5 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">💡</span>
                  <h4 className="text-lg font-semibold text-gray-800">오늘의 조언</h4>
                </div>
                <p className="text-gray-700 font-medium">{result.fortune.advice}</p>
              </div>

              {/* 카카오 애드핏 320x100 */}
              <div className="my-6">
                <p className="text-xs text-gray-400 text-center mb-3">광고</p>
                <div className="flex justify-center">
                  <ins className="kakao_ad_area" style={{display: 'none'}}
                    data-ad-unit="DAN-mHJn9kNMYQ0lX3f9"
                    data-ad-width="320"
                    data-ad-height="100"></ins>
                </div>
                <script type="text/javascript" src="//t1.daumcdn.net/kas/static/ba.min.js" async></script>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setStep(1);
                    setBirthDate('');
                    setResult(null);
                  }}
                  className="flex-1 bg-white border-2 border-gray-300 text-gray-700 font-semibold py-3 rounded-full hover:border-indigo-400 transition-all"
                >
                  다시 보기
                </button>
                <a
                  href="/fortune"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 rounded-full hover:shadow-lg transition-all text-center"
                >
                  2026년 신년운세 →
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
