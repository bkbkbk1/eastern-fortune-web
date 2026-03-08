'use client';

import { useLanguage } from '@/lib/LanguageContext';
import LanguageToggle from './components/LanguageToggle';

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center p-4">
      <LanguageToggle />
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t.home.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t.home.subtitle}
          </p>

          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-6 mb-8">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {t.home.description}
            </p>
          </div>

          {/* What is Saju section */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6 mb-8 text-left">
            <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center">{t.home.sajuIntro.title}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{t.home.sajuIntro.description}</p>
            <div className="space-y-2">
              {t.home.sajuIntro.pillars.map((pillar: string, i: number) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold mt-0.5">&#x2022;</span>
                  <span className="text-gray-700 text-sm">{pillar}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 text-left">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💰</span>
              <div>
                <h3 className="font-semibold text-gray-800">{t.home.wealth.title}</h3>
                <p className="text-gray-600 text-sm">{t.home.wealth.desc}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🏆</span>
              <div>
                <h3 className="font-semibold text-gray-800">{t.home.career.title}</h3>
                <p className="text-gray-600 text-sm">{t.home.career.desc}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">💚</span>
              <div>
                <h3 className="font-semibold text-gray-800">{t.home.health.title}</h3>
                <p className="text-gray-600 text-sm">{t.home.health.desc}</p>
              </div>
            </div>
          </div>

          <div className="mt-10 p-6 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-500 mb-3">
              {t.home.cta}
            </p>
            <a
              href="/fortune"
              className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg transition-all"
            >
              {t.home.button}
            </a>
          </div>

          {/* Ziwei section */}
          <div className="mt-8 p-6 bg-gradient-to-r from-violet-50 to-indigo-50 border-2 border-violet-200 rounded-2xl">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-3xl">⭐</span>
              <h2 className="text-2xl font-bold text-gray-800">
                {language === 'en' ? 'Zi Wei Dou Shu' : '자미두수 (紫微斗數)'}
              </h2>
            </div>
            <p className="text-center text-gray-700 mb-4">
              {language === 'en'
                ? 'Chinese Purple Star Astrology — a comprehensive 12-palace star chart analysis'
                : '중국 전통 자미두수 명반으로 12궁의 성요 배치를 통해 운명을 분석합니다'}
            </p>
            <div className="flex justify-center">
              <a
                href="/ziwei"
                className="inline-block bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg transition-all"
              >
                {language === 'en' ? 'View Star Chart' : '명반 보기'}
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-8 pt-6 border-t border-gray-200 flex justify-center gap-4 text-xs text-gray-400">
            <a href="/privacy" className="hover:text-purple-600 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="/terms" className="hover:text-purple-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  );
}
