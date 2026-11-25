import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "사주팔자 기초: 년주·월주·일주·시주와 음양오행·십신 | saju-free 가이드",
  description:
    "사주팔자 여덟 글자의 구조와 년주·월주·일주·시주가 뜻하는 바, 음양오행의 상생·상극, 십신(비겁·식상·재성·관성·인성)의 기초를 순서대로 설명한 입문 가이드입니다.",
  keywords: ["사주팔자 기초", "년주 월주 일주 시주", "음양오행", "상생상극", "십신", "비겁 식상 재성 관성 인성", "사주 보는 법"],
  alternates: {
    canonical: "https://saju-free.vercel.app/guide/saju-basics",
  },
  openGraph: {
    title: "사주팔자 기초: 네 기둥과 다섯 기운, 열 가지 관계",
    description: "년주·월주·일주·시주, 음양오행의 상생상극, 십신의 기초를 한 번에 정리합니다.",
    url: "https://saju-free.vercel.app/guide/saju-basics",
    siteName: "saju-free.vercel.app",
    images: ["https://saju-free.vercel.app/og-welcome.png"],
    locale: "ko_KR",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "사주팔자 기초: 년주·월주·일주·시주와 음양오행·십신",
  description:
    "사주 여덟 글자의 구조, 오행의 상생과 상극, 십신 다섯 묶음을 설명하는 입문 가이드.",
  inLanguage: "ko-KR",
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  author: { "@type": "Organization", name: "saju-free.vercel.app" },
  publisher: { "@type": "Organization", name: "saju-free.vercel.app", url: "https://saju-free.vercel.app" },
  mainEntityOfPage: "https://saju-free.vercel.app/guide/saju-basics",
};

const fiveElements = [
  {
    name: "목(木)",
    season: "봄",
    color: "text-emerald-700",
    desc: "나무가 자라듯 뻗어 나가는 기운. 시작과 성장, 기획과 인의(仁義)를 맡고 간과 담, 눈과 힘줄에 연결됩니다.",
  },
  {
    name: "화(火)",
    season: "여름",
    color: "text-rose-700",
    desc: "타오르며 사방을 밝히는 기운. 표현과 열정, 예의와 확산을 맡고 심장과 소장, 혈액과 연결됩니다.",
  },
  {
    name: "토(土)",
    season: "환절기",
    color: "text-amber-700",
    desc: "가운데에서 받아들이고 품는 기운. 중재와 안정, 신뢰를 맡고 비장과 위, 소화에 연결됩니다.",
  },
  {
    name: "금(金)",
    season: "가을",
    color: "text-slate-700",
    desc: "단단하게 거두고 자르는 기운. 결단과 규칙, 수확을 맡고 폐와 대장, 피부와 연결됩니다.",
  },
  {
    name: "수(水)",
    season: "겨울",
    color: "text-sky-700",
    desc: "낮은 곳으로 흐르며 스며드는 기운. 지혜와 유연, 저장을 맡고 신장과 방광, 뼈와 연결됩니다.",
  },
];

export default function SajuBasicsPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <nav aria-label="위치" className="mb-6 text-xs text-slate-400">
        <a href="/" className="hover:text-purple-600">
          홈
        </a>{" "}
        <span aria-hidden="true">/</span>{" "}
        <a href="/guide" className="hover:text-purple-600">
          가이드
        </a>{" "}
        <span aria-hidden="true">/</span> <span className="text-slate-600">사주팔자 기초</span>
      </nav>

      <article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-9">
        <p className="text-xs font-semibold tracking-wide text-purple-600">기초 이론</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          사주팔자 기초: 네 기둥과 다섯 기운, 열 가지 관계
        </h1>
        <p className="mt-3 text-sm text-slate-400">2026년 11월 16일 · 읽는 시간 약 8분</p>

        <div className="mt-6 space-y-8 text-[15px] leading-8 text-slate-700">
          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">여덟 글자는 어디서 오는가</h2>
            <p>
              사주(四柱)는 태어난 연·월·일·시를 각각 한 기둥으로 세운 네 개의 기둥이고, 팔자(八字)는
              그 기둥마다 위아래 두 글자씩 붙어 여덟 글자가 된다는 뜻입니다. 위쪽 글자를 천간(天干),
              아래쪽 글자를 지지(地支)라고 합니다. 천간은 갑·을·병·정·무·기·경·신·임·계의 열 글자,
              지지는 자·축·인·묘·진·사·오·미·신·유·술·해의 열두 글자여서, 둘을 조합하면 육십갑자가
              됩니다. 사주를 세울 때는 24절기를 기준으로 하며, 특히 해의 경계는 입춘, 달의 경계는
              각 절입일입니다. 그래서 양력 1월에 태어난 사람의 년주가 전년도로 계산되는 일이 흔히
              생깁니다.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">네 기둥이 보여주는 것</h2>
            <p>
              전통적으로 각 기둥은 시간의 구간과 삶의 영역을 함께 맡습니다. 다만 이 배속은 해석의
              출발점일 뿐 절대적인 규칙은 아닙니다.
            </p>
            <ul className="ml-1 mt-3 space-y-2">
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-purple-500">
                  &#x2022;
                </span>
                <span>
                  <strong>년주(年柱)</strong> — 초년과 조상, 태어난 시대와 사회적 환경. 집안의 배경과
                  어린 시절의 분위기가 여기에 담깁니다.
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-purple-500">
                  &#x2022;
                </span>
                <span>
                  <strong>월주(月柱)</strong> — 청년기와 부모·형제, 직장 환경. 월지는 계절 그 자체라
                  사주에서 기운의 세기를 가장 크게 좌우합니다. 봄에 태어났는지 겨울에 태어났는지가
                  오행의 힘을 가르는 이유입니다.
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-purple-500">
                  &#x2022;
                </span>
                <span>
                  <strong>일주(日柱)</strong> — 나 자신과 중년, 배우자. 일간(日干)은 사주의 주인공이고,
                  일지(日支)는 배우자 자리이자 생활의 터전입니다. 그래서 사주를 읽을 때는 언제나
                  일간을 중심에 놓고 나머지 일곱 글자와의 관계를 봅니다.
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-purple-500">
                  &#x2022;
                </span>
                <span>
                  <strong>시주(時柱)</strong> — 자녀와 노년, 그리고 겉으로 잘 드러나지 않는 내면.
                  태어난 시간을 모르면 세 기둥으로 보되, 자녀와 말년에 관한 해석은 단정하지 않는 것이
                  좋습니다.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">음양오행: 다섯 가지 기운</h2>
            <p>
              여덟 글자는 결국 다섯 가지 기운의 배합으로 환산됩니다. 오행은 물질의 목록이 아니라
              움직임의 성질입니다. 같은 나무라도 봄의 나무와 마른 나무가 다르듯, 오행은 계절과
              방향, 장기, 감정까지 함께 묶어 읽습니다.
            </p>
            <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-slate-600">
                  <tr>
                    <th className="px-4 py-2 font-semibold">오행</th>
                    <th className="px-4 py-2 font-semibold">계절</th>
                    <th className="px-4 py-2 font-semibold">성질</th>
                  </tr>
                </thead>
                <tbody>
                  {fiveElements.map((el) => (
                    <tr key={el.name} className="border-t border-slate-100 align-top">
                      <td className={`px-4 py-3 font-semibold ${el.color}`}>{el.name}</td>
                      <td className="px-4 py-3 text-slate-500">{el.season}</td>
                      <td className="px-4 py-3 text-slate-600">{el.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">상생과 상극</h2>
            <p>
              오행은 서로를 낳고(생) 서로를 누릅니다(극). 낳는 흐름은 목생화, 화생토, 토생금,
              금생수, 수생목입니다. 나무가 타서 불이 되고, 불이 재가 되어 흙이 되고, 흙 속에서
              쇠가 나고, 쇠에 물이 맺히고, 물이 나무를 키운다는 순환입니다. 누르는 흐름은 목극토,
              토극수, 수극화, 화극금, 금극목입니다. 나무뿌리가 흙을 파고들고, 흙이 물길을 막고,
              물이 불을 끄고, 불이 쇠를 녹이고, 쇠가 나무를 벤다는 이미지입니다. 사주의 균형은 이
              두 흐름이 적당히 맞물릴 때 잡힙니다. 한 오행이 지나치게 많으면 그것이 낳는 쪽은
              넘치고 누르는 쪽은 상합니다. 예를 들어 화가 넘치는 사주에서는 금이 상하기 쉬운데,
              금이 재물이라면 재물이 새는 구조로 읽는 식입니다.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">십신: 나와 여덟 글자의 관계</h2>
            <p>
              십신(十神)은 일간을 기준으로 다른 글자와의 오행 관계를 다섯으로 나누고, 다시 음양이
              같은지 다른지로 열 가지로 세분한 것입니다. 같은 오행끼리는 비겁, 내가 생하는 오행은
              식상, 내가 극하는 오행은 재성, 나를 극하는 오행은 관성, 나를 생하는 오행은 인성입니다.
            </p>
            <ul className="ml-1 mt-3 space-y-2">
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-purple-500">
                  &#x2022;
                </span>
                <span>
                  <strong>비겁(比肩·劫財)</strong> — 자아와 의지, 동료와 경쟁. 강하면 주관이 뚜렷하지만
                  고집과 지출이 늘기 쉽습니다.
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-purple-500">
                  &#x2022;
                </span>
                <span>
                  <strong>식상(食神·傷官)</strong> — 표현과 재능, 결과물. 기획·창작·강의처럼 만들어
                  내는 일과 연결됩니다.
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-purple-500">
                  &#x2022;
                </span>
                <span>
                  <strong>재성(正財·偏財)</strong> — 재물과 현실 감각, 성실한 관리. 남성 사주에서는
                  배우자를 뜻하기도 합니다.
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-purple-500">
                  &#x2022;
                </span>
                <span>
                  <strong>관성(正官·七殺)</strong> — 규율과 직장, 명예와 책임. 여성 사주에서는 배우자
                  자리로도 읽습니다.
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-purple-500">
                  &#x2022;
                </span>
                <span>
                  <strong>인성(正印·偏印)</strong> — 배움과 보호, 문서와 자격. 어머니와 스승, 소속감이
                  여기에 담깁니다.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">사주를 읽는 순서</h2>
            <p>
              실전에서는 보통 네 단계를 밟습니다. 첫째, 일간이 무엇인지 확인해 그 사람의 중심 성질을
              잡습니다. 둘째, 월지를 기준으로 일간이 힘이 센지 약한지 판단합니다. 셋째, 오행의 분포를
              세어 넘치는 것과 모자란 것을 찾습니다. 넷째, 십신의 배치로 재물·직업·관계의 통로를
              봅니다. 여기에 대운과 세운을 얹으면 &lsquo;언제&rsquo;가 더해집니다. 이 순서를 지키지
              않고 눈에 띄는 글자 하나만 붙잡으면 해석이 쉽게 흔들립니다.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">한계를 알고 쓰는 도구</h2>
            <p>
              사주는 결정론이 아니라 경향의 지도입니다. 같은 사주를 가진 사람도 선택과 환경에 따라
              전혀 다른 삶을 삽니다. 그래서 사주는 &lsquo;무슨 일이 반드시 일어난다&rsquo;가 아니라
              &lsquo;어디가 약하고 어디가 강한지&rsquo;를 미리 알아 준비하는 데 쓰는 것이 가장
              현명합니다.
            </p>
          </section>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-100 pt-6 text-sm">
          <a
            href="/guide/jeongmi-2027"
            className="rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-700 hover:bg-slate-200 transition-colors"
          >
            ← 2027년 정미년 해설 읽기
          </a>
          <a
            href="/guide/ziwei-12palaces"
            className="rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-700 hover:bg-slate-200 transition-colors"
          >
            자미두수 12궁 알아보기 →
          </a>
          <a
            href="/guide/ten-gods"
            className="rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-700 hover:bg-slate-200 transition-colors"
          >
            십성 자세히 보기 →
          </a>
        </div>
      </article>

      <section className="mt-8 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 p-7 text-center text-white">
        <h2 className="text-xl font-bold">내 사주팔자 직접 세워 보기</h2>
        <p className="mt-2 text-sm text-purple-50">
          생년월일시를 입력하면 네 기둥과 오행 구성을 계산해 2027년 해석까지 무료로 보여드립니다.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a
            href="/fortune"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-purple-700 hover:bg-purple-50 transition-colors"
          >
            내 사주 보기
          </a>
          <a
            href="/ziwei"
            className="rounded-full border border-white/70 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            자미두수 명반 보기
          </a>
        </div>
      </section>
    </main>
  );
}
