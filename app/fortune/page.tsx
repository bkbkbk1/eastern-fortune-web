'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAccount, useConnect, useSendTransaction, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther } from 'viem';
import { useLanguage } from '@/lib/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';

export default function FortunePage() {
  const router = useRouter();
  const { isConnected, address } = useAccount();
  const { connect, connectors } = useConnect();
  const { data: hash, sendTransaction, isPending, isError, error } = useSendTransaction();
  const { t } = useLanguage();

  const [step, setStep] = useState<number | 'payment'>(1);
  const [birthDate, setBirthDate] = useState('');
  const [birthHour, setBirthHour] = useState('12');
  const [birthMinute, setBirthMinute] = useState('00');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [paid, setPaid] = useState(false);
  const [tempResult, setTempResult] = useState<any>(null);
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('사주팔자 계산 중...');

  // 트랜잭션 완료 감지
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  useEffect(() => {
    const initSDK = async () => {
      if (typeof window === 'undefined') return;

      try {
        const { sdk } = await import('@farcaster/miniapp-sdk');
        await sdk.actions.ready();
        setIsSDKLoaded(true);
      } catch (error) {
        console.error('SDK initialization error:', error);
        setIsSDKLoaded(true); // Continue anyway for browser testing
      }
    };

    initSDK();
  }, []);

  // 트랜잭션 성공 시 처리
  useEffect(() => {
    if (isConfirmed && hash) {
      console.log('✅ Transaction confirmed! Hash:', hash);
      setPaid(true);
      setResult(tempResult);
      setStep(4);
      setLoading(false);
    }
  }, [isConfirmed, hash, tempResult]);

  // Transaction error handling
  useEffect(() => {
    if (isError && error) {
      console.error('❌ Transaction error:', error);
      alert(t.fortune.errors.transactionFailed + error.message);
      setLoading(false);
    }
  }, [isError, error, t]);

  // Loading messages animation
  useEffect(() => {
    if (!loading) return;

    const messages = [
      '🔮 사주팔자 계산 중...',
      '📊 음양오행 분석 중...',
      '✨ 2026년 병오년과의 상호작용 분석 중...',
      '💫 십신론 적용 중...',
      '🌟 용신 파악 중...',
      '📅 월별 운세 계산 중...',
      '🍀 행운의 아이템 찾는 중...',
      '🔍 삼재 여부 확인 중...',
      '📝 상세한 운세 작성 중...',
      '✅ 거의 완료되었습니다...'
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % messages.length;
      setLoadingMessage(messages[currentIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, [loading]);

  const handleCalculate = async () => {
    if (!birthDate || birthDate.length !== 8) {
      alert(t.fortune.errors.birthDateInvalid);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/calculate-fortune', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          birthDate,
          birthHour: parseInt(birthHour),
          birthMinute: parseInt(birthMinute),
          gender
        })
      });

      const data = await response.json();

      console.log('API response:', data);
      console.log('Response status:', response.status);

      if (!response.ok || data.error) {
        alert(`${t.fortune.errors.apiError}${data.error || data.details || 'Unknown error'}`);
        return;
      }

      // Free version - skip payment, go directly to results
      setResult(data);
      setPaid(true);
      setStep(4);
    } catch (error) {
      console.error('Error:', error);
      alert(t.fortune.errors.calculationError + (error instanceof Error ? error.message : ''));
    } finally {
      setLoading(false);
    }
  };

  // 미니앱 환경 감지
  const isMiniApp = typeof window !== 'undefined' && (
    window.location !== window.parent.location || // iframe 안에서 실행
    /warpcast|farcaster/i.test(navigator.userAgent) // Warpcast User Agent
  );

  console.log('=== RENDER STATE ===');
  console.log('step:', step, 'typeof:', typeof step);
  console.log('result:', result ? 'exists' : 'null');
  console.log('paid:', paid);
  console.log('tempResult:', tempResult ? 'exists' : 'null');
  console.log('isConnected:', isConnected);
  console.log('isMiniApp:', isMiniApp);
  console.log('connectors.length:', connectors.length);
  console.log('==================');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center p-4">
      <LanguageToggle />

      {/* Loading Screen */}
      {loading && (
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-block animate-spin rounded-full h-24 w-24 border-8 border-purple-200 border-t-purple-600 mb-6"></div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              운세 분석 중
            </h2>

            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-6 mb-6">
              <p className="text-xl text-purple-700 font-semibold mb-4 animate-pulse">
                {loadingMessage}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-3 rounded-full animate-pulse"
                     style={{width: '100%', animation: 'pulse 1.5s ease-in-out infinite'}}></div>
              </div>
            </div>

            <div className="space-y-3 text-left bg-purple-50 rounded-xl p-6">
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <span className="text-green-500 text-lg">✓</span>
                <span>60년 경력 사주명리학 대가가 분석합니다</span>
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <span className="text-green-500 text-lg">✓</span>
                <span>13가지 상세 운세 카테고리</span>
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <span className="text-green-500 text-lg">✓</span>
                <span>12개월 월별 운세 제공</span>
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <span className="text-green-500 text-lg">✓</span>
                <span>행운의 아이템 & 삼재 분석 포함</span>
              </p>
            </div>

            <p className="text-gray-500 text-sm mt-6">
              ⏱️ 보통 20-30초 정도 소요됩니다
            </p>
          </div>
        </div>
      )}

      {/* Main Content */}
      {!loading && (
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        {/* Step 1: Birth Date */}
        {step === 1 && (
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{t.fortune.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{t.fortune.subtitle}</p>

            <div className="max-w-md mx-auto mb-8">
              <label className="block text-left text-gray-700 font-medium mb-2">
                {t.fortune.birthDate.label}
              </label>
              <input
                type="text"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value.replace(/\D/g, '').slice(0, 8))}
                placeholder={t.fortune.birthDate.placeholder}
                className="w-full px-6 py-4 text-xl text-center border-2 border-purple-300 rounded-2xl focus:outline-none focus:border-purple-600"
                maxLength={8}
              />
              <p className="text-sm text-gray-500 mt-2">{t.fortune.birthDate.helper}</p>
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={birthDate.length !== 8}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-12 py-4 rounded-full hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {t.fortune.buttons.next}
            </button>
          </div>
        )}

        {/* Step 2: Birth Time */}
        {step === 2 && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t.fortune.birthTime.title}</h2>
            <p className="text-gray-600 mb-8">{t.fortune.birthTime.subtitle}</p>

            <div className="max-w-md mx-auto mb-8">
              <label className="block text-left text-gray-700 font-medium mb-3">
                {t.fortune.birthTime.label}
              </label>

              <div className="flex gap-4 items-center justify-center">
                <div className="flex-1">
                  <select
                    value={birthHour}
                    onChange={(e) => setBirthHour(e.target.value)}
                    className="w-full px-4 py-4 text-xl border-2 border-purple-300 rounded-2xl focus:outline-none focus:border-purple-600 bg-white"
                  >
                    {Array.from({ length: 24 }, (_, i) => (
                      <option key={i} value={i.toString()}>
                        {i.toString().padStart(2, '0')} {t.fortune.birthTime.hour}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex-1">
                  <select
                    value={birthMinute}
                    onChange={(e) => setBirthMinute(e.target.value)}
                    className="w-full px-4 py-4 text-xl border-2 border-purple-300 rounded-2xl focus:outline-none focus:border-purple-600 bg-white"
                  >
                    {Array.from({ length: 60 }, (_, i) => (
                      <option key={i} value={i.toString()}>
                        {i.toString().padStart(2, '0')} {t.fortune.birthTime.minute}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-3">
                {t.fortune.birthTime.helper}
              </p>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setStep(1)}
                className="px-8 py-3 border-2 border-gray-300 rounded-full hover:border-purple-400 transition-all"
              >
                {t.fortune.buttons.prev}
              </button>
              <button
                onClick={() => setStep(3)}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-12 py-3 rounded-full hover:shadow-lg transition-all"
              >
                {t.fortune.buttons.next}
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Gender Selection */}
        {step === 3 && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t.fortune.gender.title}</h2>
            <p className="text-gray-600 mb-8">{t.fortune.gender.subtitle}</p>

            <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto">
              <button
                onClick={() => setGender('male')}
                className={`p-8 rounded-2xl border-2 transition-all ${
                  gender === 'male'
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-300 hover:border-purple-400'
                }`}
              >
                <div className="text-5xl mb-2">👨</div>
                <div className="text-xl font-semibold">{t.fortune.gender.male}</div>
              </button>

              <button
                onClick={() => setGender('female')}
                className={`p-8 rounded-2xl border-2 transition-all ${
                  gender === 'female'
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-300 hover:border-purple-400'
                }`}
              >
                <div className="text-5xl mb-2">👩</div>
                <div className="text-xl font-semibold">{t.fortune.gender.female}</div>
              </button>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setStep(2)}
                className="px-8 py-3 border-2 border-gray-300 rounded-full hover:border-purple-400 transition-all"
              >
                {t.fortune.buttons.prev}
              </button>
              <button
                onClick={handleCalculate}
                disabled={loading}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-12 py-3 rounded-full hover:shadow-lg transition-all disabled:opacity-50"
              >
                {loading ? t.fortune.buttons.calculating : t.fortune.buttons.next}
              </button>
            </div>
          </div>
        )}

        {/* Step 3.5: Payment */}
        {step === 'payment' && tempResult && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t.fortune.payment.title}</h2>
            <p className="text-gray-600 mb-8">
              {t.fortune.payment.subtitle}
            </p>

            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-8 mb-8">
              <div className="text-6xl mb-4">🔮</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {t.fortune.payment.fortuneTitle}
              </h3>
              <p className="text-gray-600 mb-6">
                {t.fortune.payment.fortuneDesc}
              </p>
              <div className="text-4xl font-bold text-purple-700">
                {t.fortune.payment.price}
              </div>
              <p className="text-sm text-gray-500 mt-2">{t.fortune.payment.priceUsd}</p>
            </div>

            <div className="space-y-3 text-left bg-white border-2 border-purple-200 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span className="text-gray-700">{t.fortune.payment.includes.pillars}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span className="text-gray-700">{t.fortune.payment.includes.analysis}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span className="text-gray-700">{t.fortune.payment.includes.categories}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span className="text-gray-700">{t.fortune.payment.includes.advice}</span>
              </div>
            </div>

            {!isConnected ? (
              <div className="space-y-4">
                <div className="text-xs bg-yellow-100 p-3 rounded mb-4">
                  <div>Environment: {isMiniApp ? '✅ MiniApp' : '❌ Browser'}</div>
                  <div>Connectors: {connectors.length}</div>
                  <div>Status: {isConnected ? 'Connected' : 'Not connected'}</div>
                </div>
                <button
                  onClick={() => {
                    console.log('Connecting... connectors:', connectors);
                    if (connectors[0]) {
                      connect({ connector: connectors[0] });
                    } else {
                      alert(t.fortune.payment.warningMiniapp);
                    }
                  }}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg py-5 rounded-full hover:shadow-2xl transition-all"
                >
                  {t.fortune.payment.connectWallet}
                </button>
                {!isMiniApp && (
                  <div className="text-sm text-red-600 text-center whitespace-pre-line">
                    {t.fortune.payment.warningBrowser}
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-sm text-gray-600 text-center">
                  {t.fortune.payment.connectedWallet} {address?.slice(0, 6)}...{address?.slice(-4)}
                </div>
                <button
                  onClick={() => {
                    console.log('=== Payment Button Clicked ===');
                    console.log('tempResult:', tempResult);
                    console.log('isConnected:', isConnected);
                    console.log('address:', address);

                    if (!tempResult) {
                      alert(t.fortune.errors.noData);
                      setStep(1);
                      return;
                    }

                    setLoading(true);

                    sendTransaction({
                      to: '0x777BEF71B74F71a97925e6D2AF3786EC08A23923',
                      value: parseEther('0.0001'),
                    });
                  }}
                  disabled={isPending || isConfirming || !tempResult}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg py-5 rounded-full hover:shadow-2xl transition-all disabled:opacity-50"
                >
                  {isPending ? t.fortune.payment.waiting : isConfirming ? t.fortune.payment.confirming : t.fortune.payment.pay}
                </button>
              </div>
            )}

            <button
              onClick={() => setStep(3)}
              className="mt-4 text-gray-500 hover:text-gray-700 transition-all"
            >
              ← {t.fortune.buttons.prev}
            </button>
          </div>
        )}

        {/* Step 4: Results */}
        {step === 4 && result && paid && (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{t.fortune.result.title}</h2>

            {/* Four Pillars */}
            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{t.fortune.result.pillarsTitle}</h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">{t.fortune.result.year}</div>
                  <div className="text-2xl font-bold text-purple-700">{result.pillars.year}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">{t.fortune.result.month}</div>
                  <div className="text-2xl font-bold text-purple-700">{result.pillars.month}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">{t.fortune.result.day}</div>
                  <div className="text-2xl font-bold text-purple-700">{result.pillars.day}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">{t.fortune.result.hour}</div>
                  <div className="text-2xl font-bold text-purple-700">{result.pillars.hour}</div>
                </div>
              </div>
            </div>

            {/* Fortune - 2026년 대박 적중 신년운세 */}
            <div className="space-y-4 mb-8">
              {/* 총운 */}
              <div className="bg-white border-2 border-purple-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">✨</span>
                  <h4 className="text-lg font-semibold text-gray-800">2026년 총운</h4>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{result.fortune.overall}</p>
              </div>

              {/* 취업운 */}
              <div className="bg-white border-2 border-blue-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">💼</span>
                  <h4 className="text-lg font-semibold text-gray-800">취업운 풀이</h4>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{result.fortune.employment}</p>
              </div>

              {/* 직장운 */}
              <div className="bg-white border-2 border-blue-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🏢</span>
                  <h4 className="text-lg font-semibold text-gray-800">직장운 풀이</h4>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{result.fortune.workplace}</p>
              </div>

              {/* 이직운 */}
              <div className="bg-white border-2 border-blue-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🔄</span>
                  <h4 className="text-lg font-semibold text-gray-800">이직운 풀이</h4>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{result.fortune.jobChange}</p>
              </div>

              {/* 대인관계운 */}
              <div className="bg-white border-2 border-pink-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">👥</span>
                  <h4 className="text-lg font-semibold text-gray-800">대인관계운 풀이</h4>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{result.fortune.relationships}</p>
              </div>

              {/* 건강운 */}
              <div className="bg-white border-2 border-green-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">💚</span>
                  <h4 className="text-lg font-semibold text-gray-800">건강운 풀이</h4>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{result.fortune.health}</p>
              </div>

              {/* 애정운 */}
              <div className="bg-white border-2 border-red-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">💕</span>
                  <h4 className="text-lg font-semibold text-gray-800">애정운 풀이</h4>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{result.fortune.love}</p>
              </div>

              {/* 결혼운 */}
              <div className="bg-white border-2 border-red-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">💑</span>
                  <h4 className="text-lg font-semibold text-gray-800">결혼운 풀이</h4>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{result.fortune.marriage}</p>
              </div>

              {/* 금전운 */}
              <div className="bg-white border-2 border-yellow-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">💰</span>
                  <h4 className="text-lg font-semibold text-gray-800">금전운 풀이</h4>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{result.fortune.wealth}</p>
              </div>

              {/* 투자운 */}
              <div className="bg-white border-2 border-yellow-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">📈</span>
                  <h4 className="text-lg font-semibold text-gray-800">투자운/재테크운 풀이</h4>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{result.fortune.investment}</p>
              </div>

              {/* 창업운 */}
              <div className="bg-white border-2 border-orange-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🚀</span>
                  <h4 className="text-lg font-semibold text-gray-800">창업운 풀이</h4>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{result.fortune.startup}</p>
              </div>

              {/* 사업운 */}
              <div className="bg-white border-2 border-orange-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">📊</span>
                  <h4 className="text-lg font-semibold text-gray-800">사업운 풀이</h4>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{result.fortune.business}</p>
              </div>

              {/* 소비운 */}
              <div className="bg-white border-2 border-purple-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🛍️</span>
                  <h4 className="text-lg font-semibold text-gray-800">소비운 풀이</h4>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{result.fortune.consumption}</p>
              </div>

              {/* 학업운 */}
              <div className="bg-white border-2 border-blue-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">📚</span>
                  <h4 className="text-lg font-semibold text-gray-800">학업운 풀이</h4>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{result.fortune.academic}</p>
              </div>

              {/* 월별 상세 운세 */}
              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">📅 1월~12월 월별 상세 운세</h3>
                <div className="space-y-3">
                  {Object.entries(result.fortune.monthly || {}).map(([month, data]: [string, any]) => (
                    <div key={month} className="bg-white rounded-lg p-4">
                      <h4 className="font-bold text-purple-700 mb-2">{month}월</h4>
                      <div className="text-sm space-y-1 text-gray-700">
                        <p><strong>총운:</strong> {data.overall}</p>
                        <p><strong>재물운:</strong> {data.wealth}</p>
                        <p><strong>애정운:</strong> {data.love}</p>
                        <p><strong>직장운:</strong> {data.career}</p>
                        <p><strong>대인관계운:</strong> {data.relationships}</p>
                        <p><strong>건강운:</strong> {data.health}</p>
                        <p><strong>여행·이동운:</strong> {data.travel}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 행운 아이템 */}
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">🍀 2026년 나에게 이로운 아이템</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🎨</div>
                    <h4 className="font-semibold mb-1">행운의 색</h4>
                    {result.fortune.luckyColors?.map((color: string, i: number) => (
                      <p key={i} className="text-sm text-gray-700">{color}</p>
                    ))}
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🔢</div>
                    <h4 className="font-semibold mb-1">행운의 숫자</h4>
                    {result.fortune.luckyNumbers?.map((num: string, i: number) => (
                      <p key={i} className="text-sm text-gray-700">{num}</p>
                    ))}
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🧭</div>
                    <h4 className="font-semibold mb-1">행운의 방향</h4>
                    {result.fortune.luckyDirections?.map((dir: string, i: number) => (
                      <p key={i} className="text-sm text-gray-700">{dir}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* 운의 흐름 */}
              <div className="bg-white border-2 border-purple-200 rounded-xl p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">⚡ 2026년의 극과 극</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-bold text-green-700 mb-2">✅ 운의 흐름이 좋아집니다</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      {result.fortune.goodHabits?.map((habit: string, i: number) => (
                        <li key={i}>• {habit}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-bold text-red-700 mb-2">⚠️ 운의 흐름에 방해를 받습니다</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      {result.fortune.badHabits?.map((habit: string, i: number) => (
                        <li key={i}>• {habit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* 삼재 풀이 */}
              <div className="bg-white border-2 border-red-300 rounded-xl p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">🔮 2026년 삼재 풀이</h3>
                <div className="space-y-3">
                  <div className={`text-center p-3 rounded-lg ${result.fortune.samjae?.isSamjae ? 'bg-red-100' : 'bg-green-100'}`}>
                    <p className="font-bold text-lg">
                      {result.fortune.samjae?.isSamjae ? '⚠️ 올해는 삼재입니다' : '✅ 올해는 삼재가 아닙니다'}
                    </p>
                  </div>
                  <p className="text-gray-700 whitespace-pre-line">{result.fortune.samjae?.explanation}</p>
                  <p className="text-sm text-gray-600"><strong>내 인생의 삼재:</strong> {result.fortune.samjae?.yearsOfSamjae}</p>
                </div>
              </div>

              {/* 최종 조언 */}
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-300 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">💡</span>
                  <h4 className="text-lg font-semibold text-gray-800">2026년 최종 조언</h4>
                </div>
                <p className="text-gray-700 font-medium whitespace-pre-line">{result.fortune.advice}</p>
              </div>
            </div>

            <button
              onClick={() => {
                setStep(1);
                setBirthDate('');
                setBirthHour('12');
                setBirthMinute('00');
                setResult(null);
                setPaid(false);
                setTempResult(null);
              }}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-4 rounded-full hover:shadow-lg transition-all"
            >
              {t.fortune.buttons.retry}
            </button>
          </div>
        )}
      </div>
      )}
    </div>
  );
}
