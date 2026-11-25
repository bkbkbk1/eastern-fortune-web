import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "사주 궁합 보는 핵심 기준 | 일주·오행 보완·합충 해석",
  description:
    "사주 궁합은 두 사람의 여덟 글자를 겹쳐 보는 일입니다. 일간의 천간합과 일지의 육합·충, 오행 보완 관계, 합·충·형·해·원진을 실제로 어떻게 해석하는지와 궁합을 보는 순서를 정리했습니다.",
  keywords: [
    "사주 궁합",
    "궁합 보는 법",
    "일주 궁합",
    "천간합",
    "육합",
    "지지 충",
    "오행 보완",
    "원진살",
    "부부 궁합",
    "배우자궁",
  ],
  alternates: {
    canonical: "https://sajuopen.com/guide/saju-compatibility",
  },
  openGraph: {
    title: "사주 궁합 보는 핵심 기준 — 일주·오행·합충",
    description:
      "일간과 일지의 관계, 오행 보완, 합·충·형·해의 해석과 궁합을 보는 순서를 정리한 가이드.",
    url: "https://sajuopen.com/guide/saju-compatibility",
    siteName: "sajuopen.com",
    images: ["https://sajuopen.com/og-welcome.png"],
    locale: "ko_KR",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "사주 궁합 보는 핵심 기준 — 일주·오행 보완·합충 해석",
  description:
    "두 사람의 일간과 일지 관계, 오행 보완, 합·충·형·해·원진의 실제 해석과 궁합을 보는 순서를 해설한 가이드.",
  inLanguage: "ko-KR",
  datePublished: "2026-11-24",
  dateModified: "2026-11-24",
  author: { "@type": "Organization", name: "sajuopen.com" },
  publisher: { "@type": "Organization", name: "sajuopen.com", url: "https://sajuopen.com" },
  mainEntityOfPage: "https://sajuopen.com/guide/saju-compatibility",
};

const relations = [
  {
    kind: "천간합(天干合)",
    pairs: "갑기·을경·병신·정임·무계",
    meaning: "끌림과 결속",
    desc:
      "두 사람의 일간이 합을 이루면 서로에게 자연스럽게 끌립니다. 합은 부부 인연의 대표적인 표시로 보지만, 합이 지나치면 서로에게 지나치게 얽매여 판단이 흐려질 수 있습니다.",
  },
  {
    kind: "육합(六合)",
    pairs: "자축·인해·묘술·진유·사신·오미",
    meaning: "생활의 화합",
    desc:
      "일지가 육합이면 함께 사는 일상에서 호흡이 잘 맞습니다. 취향과 생활 리듬이 비슷해 갈등이 적은 대신, 둘 다 물러서다 결정을 미루는 경향이 생기기도 합니다.",
  },
  {
    kind: "충(沖)",
    pairs: "자오·축미·인신·묘유·진술·사해",
    meaning: "자극과 변동",
    desc:
      "일지가 충이면 부딪히는 일이 잦지만, 그만큼 서로를 자극해 성장시키는 관계이기도 합니다. 충은 이별을 뜻하지 않습니다. 다만 생활 방식의 차이가 크므로 규칙과 역할을 문서처럼 정해 두는 것이 도움이 됩니다.",
  },
  {
    kind: "형(刑)",
    pairs: "인사신·축술미·자묘",
    meaning: "마찰과 시험",
    desc:
      "형은 예민한 지점을 서로 건드리는 관계입니다. 말투와 습관에서 잔소리가 늘 수 있으나, 문제를 회피하지 않고 정면으로 다루면 오히려 단단해집니다.",
  },
  {
    kind: "해(害)·원진(怨嗔)",
    pairs: "해: 자미·축오·인사·묘진·신해·유술 / 원진: 자미·축오·인유·묘신·진해·사술",
    meaning: "서운함과 앙금",
    desc:
      "해와 원진은 크게 싸우지는 않지만 마음속에 서운함이 쌓이는 자리입니다. 표현을 아끼면 오해가 굳어지므로, 작은 감정도 말로 확인하는 습관이 중요합니다.",
  },
];

const steps = [
  {
    title: "1. 일간(日干)의 관계를 본다",
    body:
      "두 사람의 일간이 천간합인지, 상생인지, 상극인지 확인합니다. 상생이면 한쪽이 자연스럽게 다른 쪽을 돕고, 상극이면 서로의 방식을 이해하는 데 시간이 걸립니다. 상극이라도 음양이 다르면 부드럽게 작용하고, 같은 음양끼리 극하면 강하게 부딪힙니다.",
  },
  {
    title: "2. 일지(日支)의 관계를 본다",
    body:
      "일지는 배우자 자리이자 생활의 터전입니다. 여기에 육합이 있으면 생활 리듬이 맞고, 충이 있으면 리듬이 어긋납니다. 삼합이나 반합이면 공통의 목표가 생기고, 형·해·원진이면 감정의 결이 예민해집니다.",
  },
  {
    title: "3. 오행이 서로를 채워 주는가",
    body:
      "한쪽에 지나치게 많은 오행을 다른 쪽이 적게 가지고 있으면, 그 기운을 서로 보완하는 관계가 됩니다. 반대로 두 사람 모두 같은 오행이 넘치면 그 기운이 충돌하거나 함께 과열되기 쉽습니다. 내게 부족한 오행을 상대가 가지고 있는지가 실질적인 궁합의 핵심입니다.",
  },
  {
    title: "4. 명식 전체의 균형을 견준다",
    body:
      "일주만 보면 반쪽입니다. 상대의 사주가 내 용신을 해치는 오행을 지나치게 많이 가졌는지, 내가 상대의 약한 자리를 계속 건드리게 되는 구조인지 봅니다. 두 사람의 오행 분포를 나란히 놓고 보면 생활에서 무엇이 반복되는 갈등인지 보입니다.",
  },
  {
    title: "5. 세운으로 시기를 본다",
    body:
      "궁합은 사람의 문제이고, 결혼과 동거는 시기의 문제입니다. 두 사람의 세운에 배우자 자리를 자극하는 합이나 충이 들어오는 해를 함께 봅니다. 시기가 무르익지 않았는데 관계만 앞서가면 불안이 커지고, 시기가 맞으면 결정이 자연스러워집니다.",
  },
];

export default function CompatibilityPage() {
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
        <span aria-hidden="true">/</span> <span className="text-slate-600">사주 궁합</span>
      </nav>

      <article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-9">
        <p className="text-xs font-semibold tracking-wide text-purple-600">관계 분석</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          사주 궁합 보는 핵심 기준
        </h1>
        <p className="mt-3 text-sm text-slate-400">2026년 11월 24일 · 읽는 시간 약 7분</p>

        <div className="mt-6 space-y-8 text-[15px] leading-8 text-slate-700">
          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">
              궁합은 두 사람의 여덟 글자를 겹쳐 보는 일
            </h2>
            <p>
              사주 궁합은 흔히 &lsquo;몇 점짜리 인연&rsquo;으로 소비되지만, 실제로는 두 사람의
              여덟 글자를 나란히 놓고 관계의 결을 읽는 작업입니다. 같은 두 사람이라도 무엇을
              보느냐에 따라 답이 달라지므로, 점수보다 &lsquo;어디가 맞고 어디가 부딪히는지&rsquo;를
              보는 편이 훨씬 쓸모가 있습니다. 궁합에서 가장 무게를 두는 자리는 일주(日柱)입니다.
              일간은 나 자신이고, 일지는 배우자 자리이자 함께 사는 생활의 터전이기 때문입니다.
            </p>
            <p className="mt-3">
              다만 일주만으로 판단하면 위험합니다. 두 사람의 오행 분포, 나머지 기둥의 배치,
              지금 지나고 있는 대운과 세운이 모두 겹쳐서 작용합니다. 궁합이 좋다는 말은
              &lsquo;노력하지 않아도 된다&rsquo;는 뜻이 아니고, 궁합이 나쁘다는 말은
              &lsquo;헤어진다&rsquo;는 뜻도 아닙니다.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">
              관계의 다섯 가지 모양
            </h2>
            <p>
              두 사주가 만날 때 생기는 관계는 크게 다섯으로 정리됩니다. 합은 끌림, 충은 자극,
              형은 마찰, 해와 원진은 서운함입니다. 아래 표의 조합은 두 사람의 일간이나 일지를
              맞대어 확인하는 기본 목록입니다.
            </p>
            <div className="mt-4 space-y-3">
              {relations.map((relation) => (
                <div key={relation.kind} className="rounded-xl border border-slate-200 p-4">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <p className="text-sm font-bold text-slate-900">{relation.kind}</p>
                    <p className="text-xs font-semibold text-purple-600">{relation.meaning}</p>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">{relation.pairs}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{relation.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">
              오행 보완이 실질적인 궁합이다
            </h2>
            <p>
              합과 충이 관계의 표정이라면, 오행의 보완은 관계의 실속입니다. 한 사람에게 물이
              넘치고 다른 사람에게 물이 부족하면, 넘치는 쪽이 부족한 쪽에게 유연함과 지혜를
              보태는 관계가 됩니다. 반대로 두 사람 모두 불이 넘치면 열정은 크지만 감정의 기복도
              함께 커집니다. 이때는 한 사람이 물의 역할 — 쉬어 가기, 감정 진정시키기, 결정을
              미루기 — 을 의식적으로 맡아야 균형이 잡힙니다.
            </p>
            <p className="mt-3">
              내 사주에 부족한 오행을 상대가 가지고 있는지 확인하려면, 두 사람의 오행 분포표를
              나란히 놓고 세어 보면 됩니다. 상대의 오행이 내 용신과 겹치면 그 사람과 있을 때
              마음이 편해지는 경험을 하게 되고, 내 기신과 겹치면 이유 없이 피곤해지기도 합니다.
              이 감각은 실제 관계에서도 자주 확인됩니다.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">
              충이 있어도 함께 사는 법
            </h2>
            <p>
              궁합 상담에서 가장 많이 나오는 질문이 &lsquo;충이 있는데 헤어져야 하나&rsquo;입니다.
              답은 아닙니다. 충은 두 사람의 생활 리듬이 어긋난다는 뜻이지, 감정이 없다는 뜻이
              아닙니다. 어긋난 리듬은 규칙으로 메울 수 있습니다. 돈을 쓰는 기준, 집안일의 분담,
              서로의 혼자 있는 시간, 명절과 가족 행사에 대한 기대치 — 이 네 가지를 미리 말로
              정해 두면 충의 마찰이 크게 줄어듭니다.
            </p>
            <p className="mt-3">
              형과 원진도 마찬가지입니다. 형은 예민한 지점을 서로 건드리는 관계여서 말투가
              문제가 되고, 원진은 서운함이 쌓이는 관계여서 표현이 문제가 됩니다. 두 경우 모두
              &lsquo;상대가 알아서 해 주겠지&rsquo;라는 기대를 버리고, 원하는 것을 구체적으로
              말하는 연습이 처방이 됩니다.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">궁합을 보는 순서</h2>
            <div className="mt-3 space-y-3">
              {steps.map((step) => (
                <div key={step.title} className="rounded-xl bg-slate-50 p-4">
                  <p className="text-sm font-bold text-slate-900">{step.title}</p>
                  <p className="mt-1.5 text-sm leading-7 text-slate-600">{step.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">
              궁합이 말해 주지 않는 것
            </h2>
            <p>
              궁합은 두 사람이 어떤 방식으로 부딪히고 어떤 방식으로 채워 주는지를 보여 줄 뿐,
              관계의 결말을 정하지 않습니다. 같은 궁합이라도 서로의 말을 듣는 습관에 따라 전혀
              다른 결혼 생활이 됩니다. 또한 궁합은 시간이 지나면 달라집니다. 두 사람의 대운이
              함께 움직이면서 어느 해에는 가까워지고 어느 해에는 멀어지는 구간이 생깁니다.
              그래서 궁합은 한 번 보고 끝내는 진단이 아니라, 관계의 계절을 함께 확인하는
              지도로 쓰는 것이 좋습니다. 상대를 바꾸려 하기보다 우리 사이의 규칙을 만드는 데
              쓰십시오.
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
            오행 보완 이해하기 →
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
        <h2 className="text-xl font-bold">내 사주와 오행 구성 확인하기</h2>
        <p className="mt-2 text-sm text-purple-50">
          두 사람의 생년월일시를 각각 입력하면 일간·일지와 오행 분포를 계산해 비교할 수 있습니다.
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
