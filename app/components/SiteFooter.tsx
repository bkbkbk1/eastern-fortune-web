const CONTACT_EMAIL = "person.bk.scholarship@gmail.com";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-3xl px-5 py-8 text-sm text-slate-500">
        <nav aria-label="바닥글 메뉴" className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-600">
          <a href="/" className="hover:text-purple-600 transition-colors">
            홈
          </a>
          <span aria-hidden="true" className="text-slate-300">
            |
          </span>
          <a href="/fortune" className="hover:text-purple-600 transition-colors">
            사주 풀이
          </a>
          <span aria-hidden="true" className="text-slate-300">
            |
          </span>
          <a href="/ziwei" className="hover:text-purple-600 transition-colors">
            자미두수 명반
          </a>
          <span aria-hidden="true" className="text-slate-300">
            |
          </span>
          <a href="/guide" className="hover:text-purple-600 transition-colors">
            사주·자미두수 가이드
          </a>
          <span aria-hidden="true" className="text-slate-300">
            |
          </span>
          <a href="/about" className="hover:text-purple-600 transition-colors">
            사이트 소개
          </a>
          <span aria-hidden="true" className="text-slate-300">
            |
          </span>
          <a href="/privacy" className="hover:text-purple-600 transition-colors">
            개인정보처리방침
          </a>
          <span aria-hidden="true" className="text-slate-300">
            |
          </span>
          <a href="/terms" className="hover:text-purple-600 transition-colors">
            이용약관
          </a>
        </nav>

        <p className="mb-2">
          문의·오류 제보:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-purple-600 underline underline-offset-2">
            {CONTACT_EMAIL}
          </a>
        </p>
        <p className="mb-2 leading-relaxed">
          saju-free.vercel.app의 모든 운세 해설은 동아시아 전통 명리·자미두수 이론을 바탕으로 AI가 생성한
          오락 목적의 콘텐츠이며, 의료·법률·투자 등 전문적 판단을 대신하지 않습니다.
        </p>
        <p className="text-xs text-slate-400">
          © 2026 saju-free.vercel.app · 사주·자미두수 계산 엔진: @orrery/core (MIT License)
        </p>
      </div>
    </footer>
  );
}
