'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';
import { isInNativeApp, requestPayment, type PaymentToken } from '@/lib/solana-bridge';

export default function FortunePage() {
  const { t, language } = useLanguage();

  const [step, setStep] = useState<number>(1);
  const [birthDate, setBirthDate] = useState('');
  const [birthHour, setBirthHour] = useState('12');
  const [birthMinute, setBirthMinute] = useState('00');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [paid, setPaid] = useState(false);
  const [pendingResult, setPendingResult] = useState<any>(null);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [selectedToken, setSelectedToken] = useState<PaymentToken | null>(null);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [isNative, setIsNative] = useState(false);

  useEffect(() => {
    setIsNative(isInNativeApp());
  }, []);

  // Loading messages animation
  useEffect(() => {
    if (!loading) return;

    const messages = t.fortune.loadingMessages;
    let currentIndex = 0;
    setLoadingMessage(messages[0]);

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % messages.length;
      setLoadingMessage(messages[currentIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, [loading, t]);

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
          gender,
          language
        })
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        alert(`${t.fortune.errors.apiError}${data.error || data.details || 'Unknown error'}`);
        return;
      }

      // If in native app, go to payment step
      if (isNative) {
        setPendingResult(data);
        setStep(4); // payment step
      } else {
        // Web: free version - show results directly
        setResult(data);
        setPaid(true);
        setStep(5);
      }
    } catch (error) {
      console.error('Error:', error);
      alert(t.fortune.errors.calculationError + (error instanceof Error ? error.message : ''));
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = async (token: PaymentToken) => {
    setSelectedToken(token);
    setPaymentError(null);

    try {
      const result = await requestPayment(token);
      if (result.success) {
        setPaid(true);
        setResult(pendingResult);
        setStep(5);
      } else {
        setPaymentError(result.error || t.fortune.errors.paymentFailed);
      }
    } catch (error) {
      setPaymentError(t.fortune.errors.paymentFailed);
    } finally {
      setSelectedToken(null);
    }
  };

  const tokenOptions: { token: PaymentToken; label: string; amount: string }[] = [
    { token: 'SOL', label: 'SOL', amount: '0.001 SOL' },
    { token: 'USDC', label: 'USDC', amount: '0.20 USDC' },
    { token: 'SKR', label: 'Seeker', amount: '3 SKR' },
    { token: 'POOP', label: 'POOP', amount: '10 POOP' },
  ];

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
              {t.fortune.loading.title}
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
              {t.fortune.loading.features.map((feature: string, i: number) => (
                <p key={i} className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="text-green-500 text-lg">✓</span>
                  <span>{feature}</span>
                </p>
              ))}
            </div>

            <p className="text-gray-500 text-sm mt-6">
              {t.fortune.loading.time}
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
                inputMode="numeric"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value.replace(/\D/g, '').slice(0, 8))}
                placeholder={t.fortune.birthDate.placeholder}
                className="w-full px-6 py-4 text-xl text-center text-gray-900 placeholder:text-gray-400 border-2 border-purple-300 rounded-2xl focus:outline-none focus:border-purple-600 font-semibold"
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
                {loading ? t.fortune.buttons.calculating : t.fortune.buttons.calculate}
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Payment (Native app only) */}
        {step === 4 && pendingResult && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t.fortune.payment.title}</h2>
            <p className="text-gray-600 mb-8">{t.fortune.payment.subtitle}</p>

            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-8 mb-8">
              <div className="text-6xl mb-4">🔮</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {t.fortune.payment.fortuneTitle}
              </h3>
              <p className="text-gray-600 mb-4">
                {t.fortune.payment.fortuneDesc}
              </p>
              <p className="text-sm text-gray-500">{t.fortune.payment.priceNote}</p>
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

            <p className="text-sm font-medium text-gray-700 mb-4">{t.fortune.payment.selectToken}</p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {tokenOptions.map(({ token, label, amount }) => (
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
                  {selectedToken === token && (
                    <div className="text-xs text-purple-600 mt-1">{t.fortune.payment.processing}</div>
                  )}
                </button>
              ))}
            </div>

            {paymentError && (
              <div className="text-sm text-red-600 mb-4 p-3 bg-red-50 rounded-lg">
                {paymentError}
              </div>
            )}

            <button
              onClick={() => setStep(3)}
              className="mt-2 text-gray-500 hover:text-gray-700 transition-all"
            >
              ← {t.fortune.buttons.prev}
            </button>
          </div>
        )}

        {/* Step 5: Results */}
        {step === 5 && result && paid && (
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

            {/* Fortune sections */}
            <div className="space-y-4 mb-8">
              <div className="bg-white border-2 border-purple-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">✨</span>
                  <h4 className="text-lg font-semibold text-gray-800">{t.fortune.result.sections.overall}</h4>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{result.fortune.overall}</p>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">💼</span>
                  <h4 className="text-lg font-semibold text-gray-800">{t.fortune.result.sections.employment}</h4>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{result.fortune.employment}</p>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🏢</span>
                  <h4 className="text-lg font-semibold text-gray-800">{t.fortune.result.sections.workplace}</h4>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{result.fortune.workplace}</p>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🔄</span>
                  <h4 className="text-lg font-semibold text-gray-800">{t.fortune.result.sections.jobChange}</h4>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{result.fortune.jobChange}</p>
              </div>

              <div className="bg-white border-2 border-pink-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">👥</span>
                  <h4 className="text-lg font-semibold text-gray-800">{t.fortune.result.sections.relationships}</h4>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{result.fortune.relationships}</p>
              </div>

              <div className="bg-white border-2 border-green-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">💚</span>
                  <h4 className="text-lg font-semibold text-gray-800">{t.fortune.result.sections.health}</h4>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{result.fortune.health}</p>
              </div>

              <div className="bg-white border-2 border-red-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">💕</span>
                  <h4 className="text-lg font-semibold text-gray-800">{t.fortune.result.sections.love}</h4>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{result.fortune.love}</p>
              </div>

              <div className="bg-white border-2 border-red-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">💑</span>
                  <h4 className="text-lg font-semibold text-gray-800">{t.fortune.result.sections.marriage}</h4>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{result.fortune.marriage}</p>
              </div>

              <div className="bg-white border-2 border-yellow-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">💰</span>
                  <h4 className="text-lg font-semibold text-gray-800">{t.fortune.result.sections.wealth}</h4>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{result.fortune.wealth}</p>
              </div>

              <div className="bg-white border-2 border-yellow-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">📈</span>
                  <h4 className="text-lg font-semibold text-gray-800">{t.fortune.result.sections.investment}</h4>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{result.fortune.investment}</p>
              </div>

              <div className="bg-white border-2 border-orange-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🚀</span>
                  <h4 className="text-lg font-semibold text-gray-800">{t.fortune.result.sections.startup}</h4>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{result.fortune.startup}</p>
              </div>

              <div className="bg-white border-2 border-orange-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">📊</span>
                  <h4 className="text-lg font-semibold text-gray-800">{t.fortune.result.sections.business}</h4>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{result.fortune.business}</p>
              </div>

              <div className="bg-white border-2 border-purple-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🛍️</span>
                  <h4 className="text-lg font-semibold text-gray-800">{t.fortune.result.sections.consumption}</h4>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{result.fortune.consumption}</p>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">📚</span>
                  <h4 className="text-lg font-semibold text-gray-800">{t.fortune.result.sections.academic}</h4>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{result.fortune.academic}</p>
              </div>

              {/* Lucky Items */}
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{t.fortune.result.sections.luckyItems}</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🎨</div>
                    <h4 className="font-semibold mb-1">{t.fortune.result.sections.luckyColor}</h4>
                    {result.fortune.luckyColors?.map((color: string, i: number) => (
                      <p key={i} className="text-sm text-gray-700">{color}</p>
                    ))}
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🔢</div>
                    <h4 className="font-semibold mb-1">{t.fortune.result.sections.luckyNumber}</h4>
                    {result.fortune.luckyNumbers?.map((num: string, i: number) => (
                      <p key={i} className="text-sm text-gray-700">{num}</p>
                    ))}
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🧭</div>
                    <h4 className="font-semibold mb-1">{t.fortune.result.sections.luckyDirection}</h4>
                    {result.fortune.luckyDirections?.map((dir: string, i: number) => (
                      <p key={i} className="text-sm text-gray-700">{dir}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fortune Flow */}
              <div className="bg-white border-2 border-purple-200 rounded-xl p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{t.fortune.result.sections.fortuneFlow}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-bold text-green-700 mb-2">{t.fortune.result.sections.goodHabits}</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      {result.fortune.goodHabits?.map((habit: string, i: number) => (
                        <li key={i}>• {habit}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-bold text-red-700 mb-2">{t.fortune.result.sections.badHabits}</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      {result.fortune.badHabits?.map((habit: string, i: number) => (
                        <li key={i}>• {habit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Final Advice */}
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-300 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">💡</span>
                  <h4 className="text-lg font-semibold text-gray-800">{t.fortune.result.sections.advice}</h4>
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
                setPendingResult(null);
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
