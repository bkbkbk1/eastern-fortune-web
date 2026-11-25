import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "오행(五行) 상생·상극과 용신 이해하기 | 목·화·토·금·수",
  description:
    "오행은 다섯 물질이 아니라 다섯 가지 움직임입니다. 목생화·화생토의 상생과 목극토·수극화의 상극, 왕상휴수사, 오행의 과부족을 읽는 법, 억부·조후·병약·통관 용신과 희신·기신까지 순서대로 설명했습니다.",
  keywords: [
    "오행",
    "상생상극",
    "목화토금수",
    "오행 상생",
    "오행 상극",
    "왕상휴수사",
    "용신",
    "희신 기신",
    "조후용신",
    "억부용신",
    "사주 오행 부족",
  ],
  alternates: {
    canonical: "https://sajuopen.com/guide/five-elements",
  },
  openGraph: {
    title: "오행 상생·상극과 용신 이해하기",
    description:
      "목·화·토·금·수의 상생과 상극, 계절에 따른 힘의 변화, 오행의 과부족과 용신을 정리한 입문 가이드.",
    url: "https://sajuopen.com/guide/five-elements",
    siteName: "sajuopen.com",
    images: ["https://sajuopen.com/og-welcome.png"],
    locale: "ko_KR",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "오행(五行) 상생·상극과 용신 이해하기",
  description:
    "오행의 성질과 대응, 상생·상극의 두 순환, 왕상휴수사, 오행의 과부족과 억부·조후·병약·통관 용신을 해설한 가이드.",
  inLanguage: "ko-KR",
  datePublished: "2026-11-24",
  dateModified: "2026-11-24",
  author: { "@type": "Organization", name: "sajuopen.com" },
  publisher: { "@type": "Organization", name: "sajuopen.com", url: "https://sajuopen.com" },
  mainEntityOfPage: "https://sajuopen.com/guide/five-elements",
};

const elements = [
  {
    name: "목(木)",
    hanja: "木",
    stem: "갑(甲)·을(乙)",
    branch: "인(寅)·묘(卯)",
    season: "봄",
    direction: "동",
    color: "청색·녹색",
    organ: "간·담, 눈, 힘줄",
    emotion: "노(怒)",
    nature: "뻗어 나가고 시작하는 기운. 성장과 기획, 인의(仁義).",
    colorClass: "text-emerald-700",
  },
  {
    name: "화(火)",
    hanja: "火",
    stem: "병(丙)·정(丁)",
    branch: "사(巳)·오(午)",
    season: "여름",
    direction: "남",
    color: "붉은색",
    organ: "심장·소장, 혀, 혈맥",
    emotion: "희(喜)",
    nature: "타오르며 밝히는 기운. 표현과 열정, 예의(禮).",
    colorClass: "text-rose-700",
  },
  {
    name: "토(土)",
    hanja: "土",
    stem: "무(戊)·기(己)",
    branch: "진(辰)·술(戌)·축(丑)·미(未)",
    season: "환절기",
    direction: "중앙",
    color: "황색",
    organ: "비장·위, 입, 근육",
    emotion: "사(思)",
    nature: "받아들이고 품는 기운. 중재와 안정, 신(信).",
    colorClass: "text-amber-700",
  },
  {
    name: "금(金)",
    hanja: "金",
    stem: "경(庚)·신(辛)",
    branch: "신(申)·유(酉)",
    season: "가을",
    direction: "서",
    color: "흰색·은색",
    organ: "폐·대장, 코, 피부",
    emotion: "우(憂)·비(悲)",
    nature: "거두고 자르는 기운. 결단과 규칙, 의(義).",
    colorClass: "text-slate-700",
  },
  {
    name: "수(水)",
    hanja: "水",
    stem: "임(壬)·계(癸)",
    branch: "해(亥)·자(子)",
    season: "겨울",
    direction: "북",
    color: "검은색·남색",
    organ: "신장·방광, 귀, 뼈",
    emotion: "공(恐)",
    nature: "낮은 곳으로 흐르는 기운. 지혜와 유연, 지(智).",
    colorClass: "text-sky-700",
  },
];

const cycles = [
  {
    title: "상생(相生): 낳고 키우는 순환",
    items: ["목생화", "화생토", "토생금", "금생수", "수생목"],
    body:
      "나무가 타서 불이 되고, 불이 재가 되어 흙이 되고, 흙 속에서 쇠가 나고, 쇠에 물방울이 맺히고, 물이 나무를 키웁니다. 상생은 앞의 기운이 뒤의 기운에게 힘을 보태는 관계입니다. 내 사주에서 나를 생해 주는 오행은 인성(보호·배움)이 되고, 내가 생해 주는 오행은 식상(표현·결과물)이 됩니다. 상생이 끊기면 그 지점에서 도움과 표현의 통로가 막힌 것으로 읽습니다.",
  },
  {
    title: "상극(相剋): 누르고 다스리는 순환",
    items: ["목극토", "토극수", "수극화", "화극금", "금극목"],
    body:
      "나무뿌리가 흙을 파고들고, 흙이 물길을 막고, 물이 불을 끄고, 불이 쇠를 녹이고, 쇠가 나무를 벱니다. 상극은 앞의 기운이 뒤의 기운을 제어하는 관계입니다. 내가 극하는 오행은 재성(재물·현실), 나를 극하는 오행은 관성(규율·책임)이 됩니다. 상극은 나쁜 것이 아니라 균형을 잡는 힘입니다. 제어가 없으면 오행은 넘쳐 흐르고, 제어가 지나치면 눌려 숨이 막힙니다.",
  },
];

export default function FiveElementsPage() {
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
        <span aria-hidden="true">/</span> <span className="text-slate-600">오행과 용신</span>
      </nav>

      <article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-9">
        <p className="text-xs font-semibold tracking-wide text-purple-600">기초 이론</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          오행(五行) 상생·상극과 용신 이해하기
        </h1>
        <p className="mt-3 text-sm text-slate-400">2026년 11월 24일 · 읽는 시간 약 8분</p>

        <div className="mt-6 space-y-8 text-[15px] leading-8 text-slate-700">
          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">
              오행은 물질이 아니라 움직임이다
            </h2>
            <p>
              오행(五行)을 처음 배울 때 가장 흔한 오해는 나무·불·흙·쇠·물을 실제 물건으로
              받아들이는 것입니다. 오행은 물질의 목록이 아니라 기운이 움직이는 다섯 가지 방식입니다.
              뻗어 나가는 움직임이 목, 위로 타오르는 움직임이 화, 가운데에서 품는 움직임이 토,
              거두고 자르는 움직임이 금, 아래로 흐르며 스며드는 움직임이 수입니다. 그래서 사주에서
              &lsquo;물이 부족하다&rsquo;는 말은 실제 물을 마셔야 한다는 뜻이 아니라, 흐르고
              유연하게 받아들이는 힘이 약하다는 뜻에 가깝습니다.
            </p>
            <p className="mt-3">
              여덟 글자는 결국 이 다섯 기운의 배합으로 환산됩니다. 천간 열 글자와 지지 열두 글자가
              각각 오행과 음양을 가지므로, 사주를 세우면 곧 오행의 분포표가 나옵니다. 같은
              오행이라도 어느 계절에 태어났는지에 따라 힘이 달라지고, 위에 드러났는지 땅속에
              뿌리내렸는지에 따라 쓰임이 달라집니다.
            </p>

            <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-slate-600">
                  <tr>
                    <th className="px-3 py-2 font-semibold">오행</th>
                    <th className="px-3 py-2 font-semibold">천간</th>
                    <th className="px-3 py-2 font-semibold">지지</th>
                    <th className="px-3 py-2 font-semibold">계절·방위</th>
                    <th className="px-3 py-2 font-semibold">몸</th>
                    <th className="px-3 py-2 font-semibold">감정</th>
                  </tr>
                </thead>
                <tbody>
                  {elements.map((el) => (
                    <tr key={el.name} className="border-t border-slate-100 align-top">
                      <td className={`px-3 py-2.5 font-semibold ${el.colorClass}`}>{el.name}</td>
                      <td className="px-3 py-2.5 text-slate-600">{el.stem}</td>
                      <td className="px-3 py-2.5 text-slate-600">{el.branch}</td>
                      <td className="px-3 py-2.5 text-slate-600">
                        {el.season} · {el.direction}
                      </td>
                      <td className="px-3 py-2.5 text-slate-600">{el.organ}</td>
                      <td className="px-3 py-2.5 text-slate-600">{el.emotion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              오행의 성질: 목은 성장·기획, 화는 표현·열정, 토는 중재·안정, 금은 결단·규칙, 수는
              지혜·유연. 색으로는 청·적·황·백·흑, 맛으로는 산·고·감·신·함에 대응합니다.
            </p>
          </section>

          {cycles.map((cycle) => (
            <section key={cycle.title}>
              <h2 className="mb-2 text-xl font-bold text-slate-900">{cycle.title}</h2>
              <div className="mb-3 flex flex-wrap gap-2">
                {cycle.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p>{cycle.body}</p>
            </section>
          ))}

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">
              상생 속에도 상극이 있다
            </h2>
            <p>
              오행의 관계는 두 순환으로만 끝나지 않습니다. 낳는 관계 안에도 누르는 힘이 숨어
              있습니다. 예를 들어 목생화인데, 목이 너무 많으면 불이 오히려 꺼지듯 목다화식(木多火熄)이
              됩니다. 반대로 극하는 관계 안에도 살리는 힘이 있습니다. 금극목이지만 목이
              지나치게 강하면 쇠가 이지러지고, 토극수이지만 물이 넘치면 흙이 무너집니다. 그래서
              사주를 볼 때는 &lsquo;무엇이 무엇을 생한다&rsquo;보다 &lsquo;그 힘이 감당할 만한
              크기인가&rsquo;를 먼저 봅니다.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">
              왕상휴수사: 계절이 힘을 정한다
            </h2>
            <p>
              같은 오행도 계절에 따라 힘이 다릅니다. 이를 다섯 단계로 나눈 것이
              왕상휴수사(旺相休囚死)입니다. 그 계절을 지배하는 오행은 왕(旺), 왕을 생해 주는
              오행은 상(相), 왕이 생해 주는 오행은 휴(休), 왕을 극하는 오행은 수(囚), 왕에게
              극받는 오행은 사(死)입니다. 봄에는 목이 왕하고 화가 상하며 수가 휴, 금이 수,
              토가 사입니다.
              여름에는 화가 왕하고 토가 상하며 목이 휴, 금이 사입니다.
            </p>
            <p className="mt-3">
              사주에서 월지(月支)가 계절을 대표하므로, 월지가 내 일간을 생하거나 같은 계절이면
              힘이 세고(득령), 극하는 계절이면 약합니다. 여기에 일지와 다른 지지의 뿌리(통근),
              천간으로 드러난 같은 편(투출)을 더해 강약을 판단합니다. 이 판단이 서지 않으면
              어떤 오행이 좋고 나쁜지 말할 수 없습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">
              넘치면 병, 모자라도 병
            </h2>
            <p>
              오행은 많고 적음이 문제가 아니라 균형이 문제입니다. 한 오행이 지나치게 많으면
              태과(太過)라 하여 그 기운이 낳는 쪽은 넘치고 누르는 쪽은 상합니다. 화가 넘치면
              금이 상하기 쉬운데, 금이 재물이라면 재물이 새는 구조로 읽습니다. 반대로 모자라면
              불급(不及)이라 하여 그 기운이 맡은 영역이 약해집니다. 다만 무조건 모자란 오행을
              채우는 것이 답은 아닙니다. 넘치는 오행을 누르는 것이 더 급할 때도 많고, 모자란
              오행이 오히려 이로운 경우도 있습니다.
            </p>
            <p className="mt-3">
              실전에서는 세 가지를 봅니다. 첫째, 어느 오행이 계절의 힘을 받아 왕한가. 둘째,
              그 오행이 천간에 드러나 실제로 작동하는가, 아니면 지지에 묻혀 잠재력으로 남는가.
              셋째, 오행 사이에 합이나 충으로 묶이거나 흔들리는 자리가 있는가. 이 셋을 놓고
              보면 &lsquo;무엇이 병이고 무엇이 약인지&rsquo;가 드러납니다.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">
              용신: 사주의 병을 다스리는 한 글자
            </h2>
            <p>
              용신(用神)은 사주의 불균형을 바로잡아 주는 중심 오행입니다. 흔히 네 가지로
              설명합니다.
            </p>
            <ul className="ml-1 mt-3 space-y-2">
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-purple-500">
                  &#x2022;
                </span>
                <span>
                  <strong>억부용신(抑扶用神)</strong> — 일간이 강하면 억눌러 균형을 잡는 가장 기본적인 방식입니다. 일간이 약하면 도와서
                  힘을 보태는 쪽으로 쓰입니다.
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-purple-500">
                  &#x2022;
                </span>
                <span>
                  <strong>조후용신(調候用神)</strong> — 한난과 조습을 맞추는 방식입니다. 겨울에
                  태어난 사주에는 불, 여름에 태어난 사주에는 물이 균형의 열쇠가 됩니다.
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-purple-500">
                  &#x2022;
                </span>
                <span>
                  <strong>병약용신(病藥用神)</strong> — 사주를 병들게 하는 글자를 찾아 없애고
                  약이 되는 글자를 쓰는 방식입니다.
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-purple-500">
                  &#x2022;
                </span>
                <span>
                  <strong>통관용신(通關用神)</strong> — 두 오행이 정면으로 부딪힐 때 사이를 이어
                  주는 오행을 쓰는 방식입니다. 목과 토가 싸우면 화가 중재자가 됩니다.
                </span>
              </li>
            </ul>
            <p className="mt-3">
              용신을 돕는 오행을 희신(喜神), 용신을 해치는 오행을 기신(忌神), 기신을 돕는 오행을
              구신(仇神), 용신을 방해하지 않는 오행을 한신(閑神)이라고 합니다. 용신이 무엇인지
              정해지면 그사람에게 유리한 계절·방향·일의 성질이 함께 정해지고, 대운과 세운이
              용신을 돕는 시기를 좋은 흐름으로 읽습니다. 다만 용신은 학파에 따라 견해가 갈리는
              개념이므로, 단정하기보다 여러 근거를 함께 놓고 보는 편이 안전합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">
              부족한 오행을 채우는 현실적인 방법
            </h2>
            <p>
              전통적으로는 부족한 오행을 색·방위·숫자·직업으로 보완했습니다. 목이 부족하면
              동쪽과 청색, 화가 부족하면 남쪽과 붉은색처럼 상징을 붙여 생활에 배치하는 방식입니다.
              이 상징은 마음의 방향을 잡아 주는 장치로는 쓸모가 있지만, 그것만으로 운이 바뀐다고
              기대하기는 어렵습니다. 실제로 체감이 달라지는 것은 생활 습관입니다. 물이 부족하면
              수분을 챙기고 잠을 충분히 자며 흐르듯 유연하게 대응하는 연습을 하고, 화가 부족하면
              사람을 만나 표현하고 몸을 움직이는 시간을 늘리는 식입니다. 오행은 그 사람이 어떤
              방식으로 에너지를 쓰는지를 보여 주는 지도이므로, 보완도 결국 행동의 변화로
              완성됩니다.
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
            href="/guide/ten-gods"
            className="rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-700 hover:bg-slate-200 transition-colors"
          >
            십성 정리 보기 →
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
        <h2 className="text-xl font-bold">내 사주의 오행 분포 보기</h2>
        <p className="mt-2 text-sm text-purple-50">
          생년월일시를 입력하면 목·화·토·금·수의 분포와 부족한 기운을 계산해 무료로 보여
          드립니다.
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
