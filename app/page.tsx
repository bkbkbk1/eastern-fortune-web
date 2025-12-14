'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import LanguageToggle from './components/LanguageToggle';

export default function Home() {
  const { t } = useLanguage();

  // Initialize Farcaster SDK
  useEffect(() => {
    const initSDK = async () => {
      if (typeof window === 'undefined') return;

      try {
        const { sdk } = await import('@farcaster/miniapp-sdk');
        await sdk.actions.ready();
      } catch (error) {
        console.error('SDK initialization error:', error);
      }
    };

    initSDK();
  }, []);

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

          {/* 쿠팡 파트너스 배너 */}
          <div className="mt-8">
            <p className="text-xs text-gray-400 text-center mb-3">추천 상품</p>
            <div className="flex justify-center">
              <iframe
                src="https://ads-partners.coupang.com/widgets.html?id=950096&template=carousel&trackingCode=AF9626171&subId=&width=468&height=60&tsource="
                width="468"
                height="60"
                frameBorder="0"
                scrolling="no"
                referrerPolicy="unsafe-url"
                className="max-w-full"
              ></iframe>
            </div>
            <p className="text-xs text-gray-400 text-center mt-2">
              이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
