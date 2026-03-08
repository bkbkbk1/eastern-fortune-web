'use client';

import { useState } from 'react';

export default function PrivacyPage() {
  const [isKo, setIsKo] = useState(false);

  return (
    <div className="min-h-screen bg-white p-8 max-w-3xl mx-auto">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setIsKo(!isKo)}
          className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors"
        >
          {isKo ? '🇺🇸 EN' : '🇰🇷 KO'}
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-6">{isKo ? '개인정보처리방침' : 'Privacy Policy'}</h1>
      <p className="text-sm text-gray-500 mb-8">{isKo ? '최종 수정일: 2026년 3월' : 'Last updated: March 2026'}</p>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold mb-2">{isKo ? '1. 수집하는 정보' : '1. Information We Collect'}</h2>
          <p>{isKo
            ? 'Eastern Fortune 2026은 운세 분석 및 자미두수(紫微斗數) 명반 분석을 제공하기 위해 다음 정보만 수집합니다:'
            : 'Eastern Fortune 2026 collects the following information solely to provide fortune readings and Zi Wei Dou Shu (Purple Star Astrology) analysis:'}</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>{isKo ? '생년월일, 출생시간, 성별 (사용자가 직접 입력)' : 'Birth date, birth time, and gender (entered by you)'}</li>
            <li>{isKo ? '언어 설정' : 'Language preference'}</li>
          </ul>
          <p className="mt-2">{isKo
            ? '이름, 이메일, 전화번호, 위치 정보는 수집하지 않습니다.'
            : 'We do not collect names, email addresses, phone numbers, or location data.'}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">{isKo ? '2. 블록체인 거래' : '2. Blockchain Transactions'}</h2>
          <p>{isKo
            ? '앱 내 결제는 솔라나(Solana) 블록체인에서 처리됩니다. SOL, USDC, SKR(Seeker), POOP(Poop Dodge) 토큰을 지원합니다. 지갑 주소와 거래 서명은 블록체인 특성상 공개됩니다. 지갑 개인키는 저장하지 않습니다.'
            : 'When you make a payment through the app, the transaction is processed on the Solana blockchain. We accept SOL, USDC, SKR (Seeker), and POOP (Poop Dodge) tokens. Wallet addresses and transaction signatures are publicly visible on the blockchain. We do not store your wallet private keys.'}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">{isKo ? '3. 정보 이용 목적' : '3. How We Use Information'}</h2>
          <p>{isKo
            ? '생년월일 정보는 사주팔자 또는 자미두수 명반을 계산하고 AI 해석을 생성하는 데 사용됩니다. 해석 생성 후에는 데이터를 저장하지 않습니다.'
            : 'Birth information is sent to our API to calculate your Four Pillars (Saju) or Zi Wei Dou Shu star chart and generate a fortune reading via AI. This data is not stored after the reading is generated.'}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">{isKo ? '4. 제3자 서비스' : '4. Third-Party Services'}</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>{isKo ? 'OpenAI API - AI 운세 해석' : 'OpenAI API - for AI-powered fortune interpretation'}</li>
            <li>{isKo ? 'Vercel Analytics - 익명 사용 통계' : 'Vercel Analytics - for anonymous usage statistics'}</li>
            <li>{isKo ? 'Solana 블록체인 - 결제 처리' : 'Solana blockchain - for payment processing'}</li>
            <li><a href="https://poop-dodge-game.vercel.app" className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">Poop Dodge</a> - {isKo ? 'POOP 토큰 획득 파트너 게임' : 'partner game for earning POOP tokens'}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">{isKo ? '5. 데이터 보관' : '5. Data Retention'}</h2>
          <p>{isKo
            ? '생년월일 정보나 운세 결과를 영구 저장하지 않습니다. 언어 설정은 브라우저에 로컬 저장됩니다. 지갑 주소는 토큰 전송 처리 시에만 일시적으로 보관됩니다.'
            : 'We do not permanently store your birth information or fortune readings. Language preferences are stored locally in your browser. Wallet addresses are retained temporarily during token transfer processing only.'}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">{isKo ? '6. 블록체인 데이터' : '6. Blockchain Data'}</h2>
          <p>{isKo
            ? '솔라나 메인넷에서 발생한 거래는 공개적으로 조회 가능하며 삭제할 수 없습니다. 이는 블록체인 기술의 본질적 특성이며 모든 토큰 결제(SOL, USDC, SKR, POOP)에 적용됩니다.'
            : 'Once transactions occur on Solana Mainnet, they become publicly visible and cannot be deleted. This is inherent to blockchain technology and applies to all token payments (SOL, USDC, SKR, POOP).'}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">{isKo ? '7. 이용자 권리' : '7. Your Rights'}</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>{isKo ? '브라우저 저장소를 삭제하여 로컬 데이터 제거 가능' : 'Delete local data by clearing your browser storage'}</li>
            <li>{isKo ? '언제든지 지갑 연결 해제 가능' : 'Disconnect your wallet at any time'}</li>
            <li>{isKo ? '서버 측 데이터에 대한 정보 요청 가능' : 'Request information about any server-side data'}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">{isKo ? '8. 관련 서비스' : '8. Related Services'}</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li><a href="https://poop-dodge-game.vercel.app/privacy" className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">Poop Dodge {isKo ? '개인정보처리방침' : 'Privacy Policy'}</a></li>
            <li><a href="https://poop-dodge-game.vercel.app/terms" className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">Poop Dodge {isKo ? '이용약관' : 'Terms & Conditions'}</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">{isKo ? '9. 문의' : '9. Contact'}</h2>
          <p>{isKo
            ? '개인정보 관련 문의: person.bk.scholarship@gmail.com'
            : 'For privacy concerns, contact us at person.bk.scholarship@gmail.com'}</p>
        </section>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
        <a href="/" className="text-purple-600 hover:underline">{isKo ? '← 홈으로' : '← Back to Home'}</a>
      </div>
    </div>
  );
}
