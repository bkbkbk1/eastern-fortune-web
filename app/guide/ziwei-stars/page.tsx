import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "자미두수 14주성(十四主星) 입문 | 자미·천기·태양부터 파군까지",
  description:
    "자미두수의 열네 주성을 자미성계 6성과 천부성계 8성으로 나누어 오행과 성질, 명궁에 앉았을 때의 해석을 정리했습니다. 사화(化祿·化權·化科·化忌)와 삼방사정, 2027 정미년 정간 사화까지 다룹니다.",
  keywords: [
    "자미두수",
    "14주성",
    "자미성",
    "천기",
    "태양",
    "무곡",
    "천동",
    "염정",
    "천부",
    "태음",
    "탐랑",
    "거문",
    "천상",
    "천량",
    "칠살",
    "파군",
    "사화",
    "삼방사정",
  ],
  alternates: {
    canonical: "https://saju2026.com/guide/ziwei-stars",
  },
  openGraph: {
    title: "자미두수 14주성 입문 — 열네 별의 성질과 명궁 해석",
    description:
      "자미·천기·태양부터 칠살·파군까지 열네 주성의 오행과 성질, 사화와 삼방사정을 정리한 입문 가이드.",
    url: "https://saju2026.com/guide/ziwei-stars",
    siteName: "saju2026.com",
    images: ["https://saju2026.com/og-welcome.png"],
    locale: "ko_KR",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "자미두수 14주성(十四主星) 입문 — 열네 별의 성질과 명궁 해석",
  description:
    "자미성계 6성과 천부성계 8성으로 나눈 자미두수 14주성의 오행과 성질, 사화·삼방사정을 해설한 입문 가이드.",
  inLanguage: "ko-KR",
  datePublished: "2026-11-24",
  dateModified: "2026-11-24",
  author: { "@type": "Organization", name: "saju2026.com" },
  publisher: { "@type": "Organization", name: "saju2026.com", url: "https://saju2026.com" },
  mainEntityOfPage: "https://saju2026.com/guide/ziwei-stars",
};

const ziweiSystem = [
  {
    name: "자미(紫微)",
    element: "음토(己土)",
    symbol: "제성(帝星)",
    body:
      "열네 주성의 중심입니다. 임금의 별이라 불리며 존귀함과 리더십, 책임을 뜻합니다. 명궁에 앉으면 체면과 품위를 중시하고 남의 지시를 받기보다 스스로 판을 짜려 합니다. 좌보·우필 같은 보좌성이 함께해야 힘이 살고, 혼자 있으면 고독과 부담으로 나타납니다.",
  },
  {
    name: "천기(天機)",
    element: "음목(乙木)",
    symbol: "지혜성",
    body:
      "생각하고 계산하고 계획하는 별입니다. 머리가 빠르고 변화에 민첩하지만, 생각이 많아 결정을 미루는 약점이 있습니다. 명궁에 앉으면 기획·연구·교육·상담처럼 지식을 다루는 일에 적성이 있고, 몸을 많이 쓰기보다 머리를 쓰는 쪽으로 흐릅니다.",
  },
  {
    name: "태양(太陽)",
    element: "양화(丙火)",
    symbol: "명예성",
    body:
      "하늘의 해처럼 넓게 비추는 별입니다. 공직·교육·언론·영업처럼 사람을 만나 알리는 일과 잘 맞고, 남을 돕는 데서 보람을 느낍니다. 명궁에 앉으면 활동적이고 책임감이 강하지만, 지나치면 남의 일에 지나치게 개입하거나 자기 몫을 돌보지 못합니다.",
  },
  {
    name: "무곡(武曲)",
    element: "음금(辛金)",
    symbol: "재성(財星)",
    body:
      "재물과 실행의 별입니다. 말보다 결과로 증명하고, 숫자와 현실에 강합니다. 명궁에 앉으면 금융·회계·제조·군경처럼 정확함이 요구되는 분야에 적성이 있고, 결단이 빠른 대신 융통성이 부족해 고집으로 보이기 쉽습니다.",
  },
  {
    name: "천동(天同)",
    element: "양수(壬水)",
    symbol: "복성(福星)",
    body:
      "복과 온화함을 맡는 별입니다. 성격이 부드럽고 사람을 편하게 하며, 삶의 여유를 즐길 줄 압니다. 명궁에 앉으면 서비스·복지·식음료·문화 쪽에 어울리고 인복이 있지만, 편안함을 좇다 보면 추진력이 약해지고 미루는 습관이 생깁니다.",
  },
  {
    name: "염정(廉貞)",
    element: "음화(丁火)",
    symbol: "차도화(次桃花)",
    body:
      "감정과 절제, 예술적 감각의 별입니다. 매력과 승부욕이 함께 있어 사람을 끄는 힘이 있고, 규칙과 감정 사이에서 흔들립니다. 명궁에 앉으면 디자인·예술·영업·법무처럼 감각과 판단이 함께 필요한 분야에 어울리며, 감정 기복과 인간관계의 피로를 다스리는 것이 과제입니다.",
  },
];

const tianfuSystem = [
  {
    name: "천부(天府)",
    element: "양토(戊土)",
    symbol: "재고(財庫)",
    body:
      "곳간을 맡는 별입니다. 안정과 보존, 신뢰와 포용을 뜻하며 큰 그릇으로 사람을 품습니다. 명궁에 앉으면 관리·재무·부동산·조직 운영에 강하고, 지나치면 변화를 꺼려 기회를 놓칩니다.",
  },
  {
    name: "태음(太陰)",
    element: "음수(癸水)",
    symbol: "부성(富星)",
    body:
      "달과 어머니, 여성성과 감성을 상징합니다. 섬세하고 청결하며 마음이 깊습니다. 명궁에 앉으면 재물을 쌓는 감각과 예술적 취향이 있고, 부동산·금융·교육·돌봄 쪽에 인연이 있습니다. 지나치면 걱정이 많고 속마음을 드러내지 않습니다.",
  },
  {
    name: "탐랑(貪狼)",
    element: "양목(甲木)·음수(癸水)",
    symbol: "도화(桃花)·욕망",
    body:
      "욕망과 재주가 함께 있는 별입니다. 배우고 즐기는 힘이 강해 술·음악·여행·인간관계에서 재능을 보입니다. 명궁에 앉으면 영업·방송·요식·문화 사업에 어울리고 인기를 얻기 쉽지만, 욕심을 다스리지 못하면 소비와 인간관계의 소모가 커집니다.",
  },
  {
    name: "거문(巨門)",
    element: "음수(癸水)",
    symbol: "구설(口舌)",
    body:
      "말과 탐구의 별입니다. 의심이 많고 파고드는 힘이 있어 연구·법률·교육·언론에 어울립니다. 명궁에 앉으면 말로 먹고사는 재능이 있으나, 표현이 날카로워 구설과 오해를 부르기 쉽습니다. 말을 아끼는 훈련이 이 별의 가장 큰 숙제입니다.",
  },
  {
    name: "천상(天相)",
    element: "양수(壬水)",
    symbol: "인성(印星)",
    body:
      "조화와 중재, 문서와 예의를 맡는 별입니다. 균형 감각이 좋고 사람을 편하게 하며, 조직의 살림을 잘 꾸립니다. 명궁에 앉으면 행정·비서·상담·서비스에 어울리고 인상이 부드럽습니다. 지나치면 결정을 남에게 미루고 체면을 앞세웁니다.",
  },
  {
    name: "천량(天梁)",
    element: "양토(戊土)",
    symbol: "수성(壽星)·보호",
    body:
      "어른과 보호, 의약과 종교의 별입니다. 원칙이 분명하고 남을 돌보는 마음이 있습니다. 명궁에 앉으면 의료·교육·복지·법조·종교에 인연이 있고 위기에서 도움을 받는 복이 있습니다. 다만 간섭이 잦고 말이 직설적이어서 관계의 마찰이 생깁니다.",
  },
  {
    name: "칠살(七殺)",
    element: "양금(庚金)",
    symbol: "장성(將星)",
    body:
      "결단과 돌파의 별입니다. 독립심이 강하고 위기에서 힘을 냅니다. 명궁에 앉으면 군경·의료·스포츠·창업처럼 결단이 필요한 분야에 어울리고, 한번 정하면 밀어붙이는 힘이 있습니다. 지나치면 성급함과 사고, 인간관계의 단절로 나타납니다.",
  },
  {
    name: "파군(破軍)",
    element: "음수(癸水)",
    symbol: "파괴와 개척",
    body:
      "허물고 새로 짓는 별입니다. 기존 질서에 만족하지 못하고 판을 바꾸는 힘이 있어, 개척·구조조정·기술 혁신에 어울립니다. 명궁에 앉으면 변화가 많고 이동과 이직이 잦습니다. 파괴는 나쁜 뜻이 아니라 &lsquo;다시 세우기&rsquo;이므로, 무엇을 남기고 무엇을 버릴지 정하는 것이 이 별의 핵심입니다.",
  },
];

const transforms = [
  { name: "화록(化祿)", meaning: "이익과 기회", desc: "돈과 인연이 들어오는 자리입니다." },
  { name: "화권(化權)", meaning: "권한과 추진", desc: "결정권과 힘이 붙는 자리입니다." },
  { name: "화과(化科)", meaning: "명예와 문서", desc: "이름과 신용, 시험과 자격이 좋아지는 자리입니다." },
  { name: "화기(化忌)", meaning: "집착과 장애", desc: "걸리고 막히는 자리입니다. 나쁜 별이 아니라 그 주제에 마음이 묶인다는 뜻으로 읽습니다." },
];

export default function ZiweiStarsPage() {
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
        <span aria-hidden="true">/</span> <span className="text-slate-600">자미두수 14주성</span>
      </nav>

      <article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-9">
        <p className="text-xs font-semibold tracking-wide text-purple-600">자미두수</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          자미두수 14주성(十四主星) 입문
        </h1>
        <p className="mt-3 text-sm text-slate-400">2026년 11월 24일 · 읽는 시간 약 8분</p>

        <div className="mt-6 space-y-8 text-[15px] leading-8 text-slate-700">
          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">
              열네 별이 명반의 뼈대를 만든다
            </h2>
            <p>
              자미두수는 태어난 연·월·일·시를 바탕으로 12궁에 별을 배치해 삶을 읽는 체계입니다.
              그중에서도 열네 개의 주성(主星)이 명반의 성격을 결정합니다. 주성은 다시 두 계열로
              나뉩니다. 자미(紫微)를 중심으로 배열되는 자미성계 여섯 성 — 자미·천기·태양·무곡·천동·염정
              — 과, 천부(天府)를 중심으로 배열되는 천부성계 여덟 성 — 천부·태음·탐랑·거문·천상·천량·칠살·파군
              — 입니다.
            </p>
            <p className="mt-3">
              사주의 십성처럼 별의 이름 자체에 길흉이 있는 것은 아닙니다. 어느 궁에 앉았는지,
              어떤 별과 나란히 있는지, 사화가 붙었는지에 따라 같은 별이 전혀 다른 얼굴이 됩니다.
              칠살이 명궁에 있다고 사고가 나는 것이 아니고, 천동이 있다고 평생 편안한 것도
              아닙니다. 그래서 14주성은 외우는 대상이 아니라 읽는 언어입니다.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">자미성계 6성</h2>
            <div className="space-y-3">
              {ziweiSystem.map((star) => (
                <div key={star.name} className="rounded-xl border border-slate-200 p-4">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <p className="text-sm font-bold text-slate-900">{star.name}</p>
                    <p className="text-xs font-semibold text-purple-600">
                      {star.element} · {star.symbol}
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{star.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">천부성계 8성</h2>
            <div className="space-y-3">
              {tianfuSystem.map((star) => (
                <div key={star.name} className="rounded-xl border border-slate-200 p-4">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <p className="text-sm font-bold text-slate-900">{star.name}</p>
                    <p className="text-xs font-semibold text-purple-600">
                      {star.element} · {star.symbol}
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{star.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">
              사화(四化): 별에 색을 입히는 네 가지 변화
            </h2>
            <p>
              자미두수에서 별의 성질을 실제 사건으로 바꾸는 장치가 사화입니다. 그해나 그 대운의
              천간에 따라 네 개의 별이 화록·화권·화과·화기로 변합니다. 화록은 이익과 기회,
              화권은 권한과 추진, 화과는 명예와 문서, 화기는 집착과 장애입니다. 같은 태음이라도
              화록이 붙으면 재물의 통로가 되고, 화기가 붙으면 걱정과 미련의 자리가 됩니다.
            </p>
            <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-slate-600">
                  <tr>
                    <th className="px-4 py-2 font-semibold">사화</th>
                    <th className="px-4 py-2 font-semibold">뜻</th>
                    <th className="px-4 py-2 font-semibold">해석</th>
                  </tr>
                </thead>
                <tbody>
                  {transforms.map((item) => (
                    <tr key={item.name} className="border-t border-slate-100 align-top">
                      <td className="px-4 py-2.5 font-semibold text-slate-800">{item.name}</td>
                      <td className="px-4 py-2.5 text-slate-600">{item.meaning}</td>
                      <td className="px-4 py-2.5 text-slate-600">{item.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              2027년 정미년의 천간은 정(丁)입니다. 정간 사화는 태음 화록, 천동 화권, 천기 화과,
              거문 화기로 보는 것이 널리 쓰입니다. 그래서 2027년에는 태음이 있는 궁에서 재물과
              인연의 이익이, 거문이 있는 궁에서 말과 구설의 막힘이 두드러진다고 읽습니다. 다만
              사화의 배속은 유파에 따라 조금씩 다르므로, 하나의 정답으로 단정하지 않는 편이
              좋습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">
              삼방사정: 한 궁을 네 방향에서 본다
            </h2>
            <p>
              자미두수는 궁 하나만 보지 않습니다. 명궁을 기준으로 재백궁(재물), 관록궁(일과 명예),
              천이궁(이동과 대외 활동)을 함께 놓고 읽는데, 이를 삼방사정(三方四正)이라고 합니다.
              명궁은 나의 성격이고, 재백궁은 돈을 다루는 방식, 관록궁은 일하는 방식, 천이궁은
              밖에서 보이는 나입니다. 이 네 궁에 어떤 주성이 모여 있는지가 그 사람의 삶의
              방향을 결정합니다.
            </p>
            <p className="mt-3">
              여기에 시간을 더하면 대한(大運)과 유년(流年)이 됩니다. 대한은 10년마다 옮겨 가는
              큰 흐름이고, 유년은 해마다의 흐름입니다. 사주의 대운·세운과 같은 구조여서, 명반의
              궁을 옮겨 가며 그 시기에 어떤 별과 사화가 들어오는지를 봅니다. 2027년에는 유년의
              궁위에 정간 사화가 얹혀 한 해의 사건이 구체화됩니다.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">
              길성과 살성, 그리고 읽는 순서
            </h2>
            <p>
              주성 곁에는 보좌하는 길성(좌보·우필·문창·문곡·천괴·천월)과 긴장을 만드는
              살성(경양·타라·화성·영성·지공·지겁)이 함께 놓입니다. 길성은 주성의 힘을 북돋고,
              살성은 그 힘을 시험합니다. 살성이 있다고 나쁜 것이 아니라, 그 자리에서 무엇을
              조심해야 하는지를 알려 주는 표지입니다.
            </p>
            <p className="mt-3">
              읽는 순서는 이렇습니다. 첫째, 명궁과 신궁을 확인해 중심 성향을 잡습니다. 둘째,
              삼방사정의 주성 조합으로 삶의 방향을 봅니다. 셋째, 사화가 어느 궁에 붙었는지로
              그해의 이익과 걸림을 확인합니다. 넷째, 대한과 유년을 겹쳐 시기를 봅니다. 이 순서를
              지키면 별 하나에 놀라지 않고 전체의 균형을 읽을 수 있습니다.
            </p>
            <p className="mt-3">
              마지막으로, 자미두수는 사주와 계산 방식이 다르므로 두 결과가 다르게 나오는 것이
              정상입니다. 사주는 절기와 천간지지로, 자미두수는 음력과 태어난 시각으로 명반을
              세웁니다. 한쪽이 좋고 다른 쪽이 나쁘다고 걱정하기보다, 두 지도가 같은 방향을
              가리키는지 견주어 보는 것이 현명합니다.
            </p>
          </section>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-100 pt-6 text-sm">
          <a
            href="/guide/ziwei-12palaces"
            className="rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-700 hover:bg-slate-200 transition-colors"
          >
            ← 자미두수 12궁
          </a>
          <a
            href="/guide/jeongmi-2027"
            className="rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-700 hover:bg-slate-200 transition-colors"
          >
            2027 정미년 해설 →
          </a>
          <a
            href="/guide/saju-basics"
            className="rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-700 hover:bg-slate-200 transition-colors"
          >
            사주팔자 기초 →
          </a>
        </div>
      </article>

      <section className="mt-8 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 p-7 text-center text-white">
        <h2 className="text-xl font-bold">내 자미두수 명반 보기</h2>
        <p className="mt-2 text-sm text-purple-50">
          생년월일시를 입력하면 12궁에 열네 주성과 사화를 배치한 명반을 무료로 보여 드립니다.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a
            href="/ziwei"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-purple-700 hover:bg-purple-50 transition-colors"
          >
            자미두수 명반 보기
          </a>
          <a
            href="/fortune"
            className="rounded-full border border-white/70 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            2027 사주 풀이
          </a>
        </div>
      </section>
    </main>
  );
}
