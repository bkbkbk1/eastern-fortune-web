export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-5 py-4">
        <a href="/" className="text-lg font-bold tracking-tight text-slate-900">
          sajuopen<span className="text-purple-600">.com</span>
        </a>
        <nav aria-label="주요 메뉴" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-600">
          <a href="/fortune" className="hover:text-purple-600 transition-colors">
            사주 풀이
          </a>
          <a href="/ziwei" className="hover:text-purple-600 transition-colors">
            자미두수
          </a>
          <a href="/guide" className="font-semibold text-purple-700 hover:text-purple-800 transition-colors">
            가이드
          </a>
          <a href="/about" className="hover:text-purple-600 transition-colors">
            소개
          </a>
        </nav>
      </div>
    </header>
  );
}
