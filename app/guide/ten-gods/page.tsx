import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "사주 십성(十神) 완벽 정리 | 비겁·식상·재성·관성·인성 열 가지 의미",
  description:
    "사주 십성은 일간을 기준으로 여덟 글자와의 관계를 열 가지로 나눈 틀입니다. 비견·겁재, 식신·상관, 정재·편재, 정관·칠살, 정인·편인의 성질과 강약에 따른 해석, 식상생재·관인상생 같은 조합을 정리했습니다.",
  keywords: [
    "십성",
    "십신",
    "비견 겁재",
    "식신 상관",
    "정재 편재",
    "정관 편관",
    "정인 편인",
    "식상생재",
    "관인상생",
    "사주 십성 정리",
    "사주 용어",
  ],
  alternates: {
    canonical: "https://saju2026.com/guide/ten-gods",
  },
  openGraph: {
    title: "사주 십성 완벽 정리 — 열 가지 관계로 사람과 사건을 읽는 법",
    description:
      "비겁·식상·재성·관성·인성 열 가지 십성의 의미와 강약, 식상생재·관인상생 같은 조합까지 한 번에 정리합니다.",
    url: "https://saju2026.com/guide/ten-gods",
    siteName: "saju2026.com",
    images: ["https://saju2026.com/og-welcome.png"],
    locale: "ko_KR",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "사주 십성(十神) 완벽 정리 — 비겁·식상·재성·관성·인성",
  description:
    "일간을 기준으로 여덟 글자의 관계를 열 가지로 나눈 십성의 의미와 강약, 상호 조합을 해설한 가이드.",
  inLanguage: "ko-KR",
  datePublished: "2026-11-24",
  dateModified: "2026-11-24",
  author: { "@type": "Organization", name: "saju2026.com" },
  publisher: { "@type": "Organization", name: "saju2026.com", url: "https://saju2026.com" },
  mainEntityOfPage: "https://saju2026.com/guide/ten-gods",
};

const tenGodRows = [
  { relation: "비겁", same: "비견(比肩)", diff: "겁재(劫財)", key: "나와 같은 기운" },
  { relation: "식상", same: "식신(食神)", diff: "상관(傷官)", key: "내가 생하는 기운" },
  { relation: "재성", same: "편재(偏財)", diff: "정재(正財)", key: "내가 극하는 기운" },
  { relation: "관성", same: "편관(偏官)·칠살", diff: "정관(正官)", key: "나를 극하는 기운" },
  { relation: "인성", same: "편인(偏印)", diff: "정인(正印)", key: "나를 생하는 기운" },
];

const tenGods = [
  {
    title: "비견(比肩) — 같은 오행, 같은 음양",
    tone: "자존과 동료",
    body:
      "비견은 나와 똑같은 글자입니다. 자아와 의지, 형제와 동료, 나란히 서는 경쟁자를 뜻합니다. 비견이 적당하면 주관이 뚜렷하고 남에게 휘둘리지 않으며, 힘든 일을 혼자 견디는 근성이 생깁니다. 지나치면 내 뜻을 굽히지 않아 고집으로 읽히고, 재물은 지키는 힘이 약해져 지출과 보증, 동업의 갈등으로 새기 쉽습니다. 사주에서 재성이 약한데 비견이 여럿이면 &lsquo;벌어도 나누는 구조&rsquo;로 보아, 공동 지출을 줄이고 저축을 자동화하는 편이 실제로 도움이 됩니다. 직업으로는 전문 기술, 운동, 자영업처럼 자기 이름으로 서는 일과 잘 맞습니다.",
  },
  {
    title: "겁재(劫財) — 같은 오행, 다른 음양",
    tone: "추진과 승부",
    body:
      "겁재는 비견과 같은 오행이지만 음양이 달라, 같은 편이면서도 서로 다른 결을 띱니다. 밖으로 뻗는 추진력과 승부욕이 강하고, 판을 키우는 데 능합니다. 적당하면 결단이 빠르고 위기를 돌파하는 힘이 되지만, 넘치면 성급함과 과소비, 사람과의 금전 다툼으로 나타납니다. 겁재는 재성을 극하는 힘이므로 재물이 들어오는 통로를 흔들기 쉽습니다. 이 기운이 강한 사람은 현금 흐름을 주 단위로 확인하고, 카드보다 체크카드나 한도 설정을 쓰는 습관이 실질적인 대비가 됩니다. 영업·투자·스포츠·요식업처럼 승부가 걸린 현장에서 강점을 보입니다.",
  },
  {
    title: "식신(食神) — 내가 생하는 오행, 같은 음양",
    tone: "풍요와 안정",
    body:
      "식신은 내가 생해 주는 기운이 순하게 흐르는 자리입니다. 먹을 복, 여유, 소박한 즐거움, 그리고 무엇인가를 만들어 내는 재능을 뜻합니다. 적당하면 성실하고 표현이 부드러우며, 꾸준히 결과물을 쌓는 힘이 있습니다. 재성과 이어지면 식상생재가 되어 재능이 곧 수입이 되는 구조가 됩니다. 지나치면 게으름과 안일함, 체중과 식습관의 문제로 나타나고, 관성(규율)을 누르므로 조직 생활에서 매듭이 흐려지기 쉽습니다. 요리·교육·집필·콘텐츠·서비스처럼 손으로 만들고 대접하는 일이 이 기운과 잘 맞습니다.",
  },
  {
    title: "상관(傷官) — 내가 생하는 오행, 다른 음양",
    tone: "재능과 비판",
    body:
      "상관은 재능이 날카롭게 밖으로 나가는 자리입니다. 말과 글, 기술과 예술에서 두각을 보이고, 기존의 틀을 의심하는 힘이 있습니다. 적당하면 임기응변과 표현력이 뛰어나 사람을 끄는 매력이 되지만, 넘치면 비판이 세지고 윗사람과 부딪히며, 여성 사주에서는 배우자 자리인 관성을 상하게 한다고 보아 관계의 마찰로 읽습니다. 상관이 강한데 재성이 없으면 재능이 수입으로 이어지지 않으므로, 결과물을 상품이나 기록으로 남기는 습관이 중요합니다. 방송·마케팅·디자인·강의·엔지니어링처럼 &lsquo;정확하게 다르게&rsquo; 보여 주는 분야에서 힘을 냅니다.",
  },
  {
    title: "편재(偏財) — 내가 극하는 오행, 같은 음양",
    tone: "유동과 사업",
    body:
      "편재는 내가 극하는 기운 가운데 음양이 같은 쪽으로, 재물이 크게 움직이고 여러 곳으로 흩어지는 성질을 뜻합니다. 사업과 투자, 영업과 중개처럼 판이 넓은 재물과 연결되고, 사람을 아우르는 씀씀이로 인맥을 만듭니다. 적당하면 판단이 빠르고 기회를 잡는 감각이 좋으며, 지나치면 큰돈이 들어와도 남지 않고 씀씀이가 앞서는 구조가 됩니다. 편재가 강한 사주는 재물을 가두기보다 회전시키는 쪽이 맞으므로, 벌어들인 돈의 일정 비율을 자동으로 떼어 두는 장치가 필요합니다. 남성 사주에서는 이성과의 인연, 여성 사주에서는 아버지나 사업 파트너로도 읽습니다.",
  },
  {
    title: "정재(正財) — 내가 극하는 오행, 다른 음양",
    tone: "근로와 축적",
    body:
      "정재는 한곳에 차곡차곡 쌓이는 재물입니다. 월급과 성과급, 임대료처럼 예측 가능한 수입, 성실한 관리와 저축을 뜻합니다. 적당하면 현실 감각이 좋고 약속을 지키며, 가정과 생활을 안정적으로 꾸립니다. 지나치면 지나친 근면과 융통성 부족, 돈에 대한 불안으로 나타나고, 재물을 지키는 데 마음이 묶여 기회를 놓치기 쉽습니다. 정재가 강한 사람은 큰 변동보다 꾸준한 적립이 유리하고, 반대로 편재가 전혀 없으면 사업보다 전문직·조직 생활이 안정적입니다. 남성 사주에서는 배우자 자리로도 읽습니다.",
  },
  {
    title: "정관(正官) — 나를 극하는 오행, 다른 음양",
    tone: "질서와 명예",
    body:
      "정관은 나를 바르게 누르는 기운입니다. 규칙과 책임, 조직과 직위, 사회적 신용과 명예를 뜻합니다. 적당하면 절제가 있고 신뢰를 얻으며, 공직·대기업·관리직처럼 질서 안에서 성취를 이루는 힘이 됩니다. 인성과 이어지는 관인상생은 배움과 자격이 직위로 이어지는 좋은 구조로 봅니다. 지나치면 스스로를 옥죄어 융통성이 떨어지고, 반대로 정관이 약하거나 상관에게 상하면 규율이 흐려져 잦은 이직이나 약속의 변동으로 나타납니다. 여성 사주에서는 배우자 자리로 읽으며, 정관이 깨끗한지가 관계의 안정과 연결됩니다.",
  },
  {
    title: "편관(偏官)·칠살(七殺) — 나를 극하는 오행, 같은 음양",
    tone: "압박과 결단",
    body:
      "편관은 칠살이라고도 하며, 나를 강하게 누르는 기운입니다. 압박과 경쟁, 위기와 결단, 군인·경찰·의료·법조처럼 강한 규율이 필요한 분야를 뜻합니다. 적당하면 책임을 견디는 힘과 돌파력이 커지고, 식신이 이 기운을 다스리는 식신제살이 되면 재능으로 난관을 푸는 구조가 됩니다. 인성이 감싸는 살인상생도 좋은 조합으로 봅니다. 지나치면 조급함과 사고, 수술과 분쟁으로 나타나고, 정관과 섞이면 관살혼잡이라 하여 책임이 겹쳐 방향을 잃기 쉽습니다. 편관은 나쁜 별이 아니라 &lsquo;세게 미는 힘&rsquo;이며, 이를 감당할 재성과 인성이 있으면 큰일을 해내는 원동력이 됩니다.",
  },
  {
    title: "정인(正印) — 나를 생하는 오행, 다른 음양",
    tone: "배움과 보호",
    body:
      "정인은 나를 따뜻하게 감싸 주는 기운입니다. 어머니와 스승, 학업과 자격, 문서와 계약, 소속과 보호를 뜻합니다. 적당하면 배움에 대한 존중과 안정된 정서, 남을 돌보는 마음이 생깁니다. 관성과 이어지는 관인상생은 조직의 신뢰를 얻어 자리로 이어지는 흐름입니다. 지나치면 의존과 우유부단, 실행보다 준비만 하는 습관으로 나타나고, 식상을 누르므로 표현과 결과물이 늦어지기 쉽습니다. 정인이 강한 사람은 배운 것을 실제로 꺼내 쓰는 연습 — 강의, 글쓰기, 작은 프로젝트 — 을 일부러 해 두면 균형이 잡힙니다.",
  },
  {
    title: "편인(偏印) — 나를 생하는 오행, 같은 음양",
    tone: "직관과 특수",
    body:
      "편인은 정인과 같은 방향이지만 결이 다릅니다. 남들이 가지 않는 길을 파고드는 직관과 특수 기술, 연구와 상징을 다루는 능력입니다. 적당하면 관찰이 날카롭고 한 분야를 깊게 파는 힘이 있어, 연구·의료·상담·역술·프로그래밍처럼 전문성이 중요한 일에 어울립니다. 지나치면 생각이 많아 실행이 늦고, 사람과의 거리감이나 의심이 생기며, 식신을 눌러 식신도식이라 하여 먹을 복과 여유가 줄어드는 구조로 봅니다. 편인이 강한 사람은 혼자 있는 시간을 확보하되, 결정을 미루지 않도록 마감을 스스로에게 걸어 두는 편이 좋습니다.",
  },
];

export default function TenGodsPage() {
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
        <span aria-hidden="true">/</span> <span className="text-slate-600">십성(十神)</span>
      </nav>

      <article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-9">
        <p className="text-xs font-semibold tracking-wide text-purple-600">기초 이론</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          사주 십성(十神) 완벽 정리
        </h1>
        <p className="mt-3 text-sm text-slate-400">2026년 11월 24일 · 읽는 시간 약 8분</p>

        <div className="mt-6 space-y-8 text-[15px] leading-8 text-slate-700">
          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">
              십성은 어떻게 열 가지가 되는가
            </h2>
            <p>
              십성(十神)은 사주를 읽는 언어 가운데 가장 실용적인 틀입니다. 기준은 언제나
              일간(日干), 곧 사주의 주인공인 나입니다. 나머지 일곱 글자가 일간과 어떤 오행
              관계에 있는지를 다섯으로 나누고 — 같은 오행, 내가 생하는 오행, 내가 극하는 오행,
              나를 극하는 오행, 나를 생하는 오행 — 각각을 다시 음양이 같은지 다른지로 둘로
              나누면 열 가지가 됩니다. 오행의 생극은 방향이고, 음양은 그 방향의 결을 결정합니다.
              같은 방향이라도 음양이 같으면 강하고 곧은 쪽(비견·식신·편재·편관·편인)으로, 다르면
              부드럽고 안정된 쪽(겁재·상관·정재·정관·정인)으로 읽습니다.
            </p>
            <p className="mt-3">
              이름에 &lsquo;신(神)&rsquo;이 붙어 신비롭게 들리지만, 실제로는 관계의 이름표입니다.
              재성이 많다고 반드시 부자가 되고 관성이 있다고 반드시 출세하는 것이 아닙니다.
              같은 십성도 일간이 힘이 센지 약한지, 어느 기둥에 앉았는지, 무엇과 붙어 있는지에
              따라 정반대로 작동합니다.
            </p>

            <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-slate-600">
                  <tr>
                    <th className="px-4 py-2 font-semibold">관계</th>
                    <th className="px-4 py-2 font-semibold">음양 같음</th>
                    <th className="px-4 py-2 font-semibold">음양 다름</th>
                    <th className="px-4 py-2 font-semibold">뜻</th>
                  </tr>
                </thead>
                <tbody>
                  {tenGodRows.map((row) => (
                    <tr key={row.relation} className="border-t border-slate-100 align-top">
                      <td className="px-4 py-2.5 font-semibold text-slate-800">{row.relation}</td>
                      <td className="px-4 py-2.5 text-slate-600">{row.same}</td>
                      <td className="px-4 py-2.5 text-slate-600">{row.diff}</td>
                      <td className="px-4 py-2.5 text-slate-500">{row.key}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {tenGods.map((god) => (
            <section key={god.title}>
              <h2 className="mb-1 text-xl font-bold text-slate-900">{god.title}</h2>
              <p className="mb-2 text-xs font-semibold text-purple-600">{god.tone}</p>
              <p>{god.body}</p>
            </section>
          ))}

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">
              십성은 따로 보지 않고 이어서 본다
            </h2>
            <p>
              십성 열 가지는 서로를 낳고 누르는 고리로 이어져 있습니다. 비겁이 식상을 낳고,
              식상이 재성을 낳고, 재성이 관성을 낳고, 관성이 인성을 낳고, 인성이 다시 비겁을
              낳습니다. 이 고리가 끊기지 않고 흐르면 삶의 통로가 열린 것으로, 중간이 막히면 그
              지점에서 문제가 생긴 것으로 읽습니다. 대표적인 조합은 다음과 같습니다.
            </p>
            <ul className="ml-1 mt-3 space-y-2">
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-purple-500">
                  &#x2022;
                </span>
                <span>
                  <strong>식상생재(食傷生財)</strong> — 재능이 재물로 이어지는 구조. 만들고
                  표현하는 힘이 있고 재성이 받아 주면, 기술·콘텐츠·서비스로 수입이 나는
                  흐름이 됩니다.
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-purple-500">
                  &#x2022;
                </span>
                <span>
                  <strong>관인상생(官印相生)</strong> — 조직의 신뢰가 배움과 자격을 거쳐 자리로
                  이어지는 구조. 공직·전문직·관리직에서 안정적으로 올라가는 흐름입니다.
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-purple-500">
                  &#x2022;
                </span>
                <span>
                  <strong>재생관(財生官)</strong> — 재물이 명예와 책임을 떠받치는 구조. 사업이
                  사회적 위치로 이어지지만, 재성이 약하면 책임만 무거워집니다.
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-purple-500">
                  &#x2022;
                </span>
                <span>
                  <strong>살인상생(殺印相生)</strong> — 강한 압박(편관)을 인성이 감싸 안아 쓰임새
                  있는 힘으로 바꾸는 구조. 위기 관리와 전문성이 강점이 됩니다.
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-purple-500">
                  &#x2022;
                </span>
                <span>
                  <strong>상관견관(傷官見官)</strong> — 재능이 규율을 넘어서는 구조. 조직에서
                  마찰이 생기기 쉽고, 창업이나 프리랜서 쪽이 오히려 맞을 수 있습니다.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">
              강약을 먼저 판단해야 십성이 산다
            </h2>
            <p>
              십성을 읽는 순서는 늘 같습니다. 첫째, 일간이 득령(得令)했는지 봅니다. 월지가
              일간을 생하거나 같은 계절이면 힘이 세고, 극하는 계절이면 약합니다. 둘째,
              득지(得地)와 득세(得勢)를 봅니다. 일지와 다른 지지에 뿌리(통근)가 있는지, 천간에
              같은 편이 드러났는지(투출)를 확인합니다. 셋째, 그 힘을 바탕으로 무엇이 많은지
              셉니다. 일간이 강하면 재성·관성·식상으로 흘려보내는 쪽이 이롭고, 약하면 인성·비겁으로
              받쳐 주는 쪽이 이롭습니다. 넷째, 계절의 온도(조후)를 봅니다. 겨울에 태어난 사주는
              불이, 여름에 태어난 사주는 물이 균형을 잡아 줍니다.
            </p>
            <p className="mt-3">
              이 순서를 건너뛰고 &lsquo;재성이 두 개니까 재물운이 좋다&rsquo;처럼 세기만 하면,
              일간이 약한 사주에서 재성은 오히려 감당하기 어려운 부담으로 나타납니다. 재물이
              많아도 그것을 지킬 힘이 없으면 새는 그릇이 되기 때문입니다.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">자주 하는 오해 세 가지</h2>
            <ul className="ml-1 space-y-3">
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-purple-500">
                  &#x2022;
                </span>
                <span>
                  <strong>&ldquo;편관·겁재·상관은 나쁜 십성이다&rdquo;</strong> — 아닙니다. 셋 다
                  강한 힘이고, 감당할 재성·인성·재능이 있으면 큰일을 해내는 원동력이 됩니다.
                  이름이 아니라 배치가 길흉을 만듭니다.
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-purple-500">
                  &#x2022;
                </span>
                <span>
                  <strong>&ldquo;재성이 많으면 부자다&rdquo;</strong> — 재성은 재물을 인식하는
                  감각이지 재물 그 자체가 아닙니다. 일간이 강하고 식상이 재성을 받쳐 줄 때 실제
                  수입으로 이어집니다.
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-purple-500">
                  &#x2022;
                </span>
                <span>
                  <strong>&ldquo;인성이 많으면 똑똑하다&rdquo;</strong> — 인성은 배움과 보호이지
                  성취가 아닙니다. 실행을 맡는 식상이 없으면 배우기만 하고 남기지 못하는 구조가
                  됩니다.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">정리</h2>
            <p>
              십성은 사람을 재단하는 라벨이 아니라, 나와 세상이 주고받는 다섯 가지 방향에 이름을
              붙인 것입니다. 내 사주에서 어느 십성이 강하고 어느 통로가 막혀 있는지 알면, 무엇을
              키우고 무엇을 줄일지 판단할 수 있습니다. 다음 단계로는 대운과 세운을 얹어
              &lsquo;언제&rsquo;를 더하고, 오행의 과부족을 함께 보아 균형을 잡는 것이 순서입니다.
            </p>
          </section>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-100 pt-6 text-sm">
          <a
            href="/guide/saju-basics"
            className="rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-700 hover:bg-slate-200 transition-colors"
          >
            ← 사주팔자 기초
          </a>
          <a
            href="/guide/five-elements"
            className="rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-700 hover:bg-slate-200 transition-colors"
          >
            오행과 용신 이해하기 →
          </a>
          <a
            href="/guide/daewoon-saewoon"
            className="rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-700 hover:bg-slate-200 transition-colors"
          >
            대운·세운 보는 법 →
          </a>
        </div>
      </article>

      <section className="mt-8 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 p-7 text-center text-white">
        <h2 className="text-xl font-bold">내 사주의 십성 구성 보기</h2>
        <p className="mt-2 text-sm text-purple-50">
          생년월일시를 입력하면 여덟 글자의 십성 배치와 오행 분포를 계산해 무료로 보여 드립니다.
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
