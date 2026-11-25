import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "대운(大運)과 세운(歲運) 보는 법 | 10년 운의 흐름과 2027 정미년",
  description:
    "대운은 10년 단위로 바뀌는 큰 흐름, 세운은 해마다의 사건입니다. 대운수 계산(3일=1년), 순행·역행의 구분, 대운과 세운을 겹쳐 읽는 순서, 2027년 정미년 세운이 일간과 만드는 관계까지 정리했습니다.",
  keywords: [
    "대운",
    "세운",
    "대운 보는 법",
    "세운 보는 법",
    "대운수 계산",
    "순행 역행",
    "교운기",
    "2027 정미년 세운",
    "년운",
    "월운",
  ],
  alternates: {
    canonical: "https://saju-free.vercel.app/guide/daewoon-saewoon",
  },
  openGraph: {
    title: "대운과 세운 보는 법 — 10년의 흐름과 한 해의 사건",
    description:
      "대운수 계산부터 순행·역행, 대운과 세운을 겹쳐 읽는 법, 2027 정미년 세운의 작용까지 정리한 가이드.",
    url: "https://saju-free.vercel.app/guide/daewoon-saewoon",
    siteName: "saju-free.vercel.app",
    images: ["https://saju-free.vercel.app/og-welcome.png"],
    locale: "ko_KR",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "대운(大運)과 세운(歲運) 보는 법 — 10년의 흐름과 한 해의 사건",
  description:
    "대운수 계산과 순행·역행, 대운·세운·월운을 겹쳐 읽는 순서, 2027년 정미년 세운의 작용을 해설한 가이드.",
  inLanguage: "ko-KR",
  datePublished: "2026-11-24",
  dateModified: "2026-11-24",
  author: { "@type": "Organization", name: "saju-free.vercel.app" },
  publisher: { "@type": "Organization", name: "saju-free.vercel.app", url: "https://saju-free.vercel.app" },
  mainEntityOfPage: "https://saju-free.vercel.app/guide/daewoon-saewoon",
};

const layers = [
  {
    name: "대운(大運)",
    span: "10년",
    role: "배경과 환경",
    desc:
      "내가 서 있는 판. 어떤 분야의 문이 열리고 어떤 압박이 오래 지속되는지를 결정합니다. 대운이 좋으면 세운의 흉도 견딜 만하고, 대운이 무거우면 세운의 길함도 크게 드러나기 어렵습니다.",
  },
  {
    name: "세운(歲運)",
    span: "1년",
    role: "사건과 계기",
    desc:
      "그해에 실제로 일어나는 일. 입춘을 기준으로 바뀌며, 그해의 간지가 내 명식의 글자와 합·충·형을 이루면서 구체적인 사건의 모양을 만듭니다.",
  },
  {
    name: "월운(月運)",
    span: "1개월",
    desc:
      "타이밍. 같은 해에도 어느 달에 계약하고 어느 달에 쉬어야 하는지를 알려 줍니다. 절입일을 기준으로 바뀌므로 양력 1일과는 다릅니다.",
    role: "시기와 타이밍",
  },
];

const yearPillarExamples = [
  {
    ilgan: "갑목(甲木) 일간",
    relation: "상관(傷官)",
    body:
      "정화가 상관으로 들어옵니다. 표현과 재능이 밖으로 나가는 해여서 말·글·콘텐츠로 성과를 내기 좋고, 동시에 윗사람과 부딪히기 쉬운 해입니다. 말을 아끼고 결과물로 보여 주는 편이 유리합니다.",
  },
  {
    ilgan: "병화(丙火) 일간",
    relation: "겁재(劫財)",
    body:
      "같은 불이 음양을 달리해 겹칩니다. 추진력과 승부욕이 커지지만 지출과 경쟁도 함께 늘어납니다. 동업·보증·공동 지출의 경계를 미리 정해 두는 것이 이 해의 핵심입니다.",
  },
  {
    ilgan: "무토(戊土) 일간",
    relation: "정인(正印)",
    body:
      "정화가 나를 생하는 인성으로 들어옵니다. 배움·자격·문서·보호의 기운이 들어오는 해여서, 공부와 계약, 조직의 지원을 활용하기 좋습니다. 다만 준비만 하다 실행이 늦어지지 않도록 마감을 정해야 합니다.",
  },
  {
    ilgan: "경금(庚金) 일간",
    relation: "정관(正官)",
    body:
      "정화가 나를 바르게 누르는 관성으로 들어옵니다. 직장과 책임, 명예의 자리가 정돈되는 해여서 승진·이직·계약에 유리합니다. 스스로를 너무 옥죄지 말고 융통성을 남겨 두십시오.",
  },
  {
    ilgan: "임수(壬水) 일간",
    relation: "정재(正財)",
    body:
      "정화가 내가 극하는 재성으로 들어옵니다. 근로와 관리로 쌓이는 재물의 흐름이 열리는 해여서, 수입 구조를 정리하고 저축 비율을 올리기에 좋습니다. 재물에 마음이 묶이지 않도록 주의합니다.",
  },
];

export default function DaewoonSaewoonPage() {
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
        <span aria-hidden="true">/</span> <span className="text-slate-600">대운과 세운</span>
      </nav>

      <article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-9">
        <p className="text-xs font-semibold tracking-wide text-purple-600">시간과 운</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          대운(大運)과 세운(歲運) 보는 법
        </h1>
        <p className="mt-3 text-sm text-slate-400">2026년 11월 24일 · 읽는 시간 약 8분</p>

        <div className="mt-6 space-y-8 text-[15px] leading-8 text-slate-700">
          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">
              사주는 &lsquo;무엇&rsquo;, 운은 &lsquo;언제&rsquo;
            </h2>
            <p>
              태어난 여덟 글자는 변하지 않습니다. 그런데 같은 사람의 인생에도 열기가 오르는
              시기와 숨을 고르는 시기가 번갈아 옵니다. 그 변화를 만드는 것이 운(運)입니다. 운은
              세 겹으로 겹쳐 있습니다. 10년 단위로 바뀌는 대운(大運), 해마다 바뀌는 세운(歲運),
              달마다 바뀌는 월운(月運)입니다. 사주가 악보라면 대운은 곡의 조성이고, 세운은 그해의
              연주이고, 월운은 박자입니다. 악보를 읽을 줄 알아도 조성과 박자를 모르면 연주가
              엉킵니다.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {layers.map((layer) => (
                <div
                  key={layer.name}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="text-sm font-bold text-slate-900">{layer.name}</p>
                  <p className="mt-0.5 text-xs font-semibold text-purple-600">
                    {layer.span} · {layer.role}
                  </p>
                  <p className="mt-2 text-xs leading-6 text-slate-600">{layer.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">
              대운은 어떻게 세우는가
            </h2>
            <p>
              대운은 월주(月柱)에서 출발해 간지를 순서대로 이어 붙입니다. 60갑자의 순서를 앞으로
              갈지 뒤로 갈지는 태어난 해의 음양과 성별로 정합니다. 양(陽)의 해에 태어난 남자와
              음(陰)의 해에 태어난 여자는 순행(順行), 음의 해에 태어난 남자와 양의 해에 태어난
              여자는 역행(逆行)합니다. &lsquo;양남음녀는 순행, 음남양녀는 역행&rsquo;이 그것입니다.
              성별을 기준으로 하는 이 규칙은 전통 명리학의 관습이므로, 성별을 다르게 입력하면
              해석이 달라질 수 있습니다.
            </p>
            <p className="mt-3">
              대운이 시작되는 나이(대운수)는 절입일까지의 날짜로 계산합니다. 순행이면 생일에서
              다음 절입일까지, 역행이면 생일에서 지난 절입일까지의 날수를 세어 3으로 나눕니다.
              3일이 1년이고, 남는 하루는 4개월, 한 시간은 5일로 환산합니다. 예를 들어 절입까지
              9일이 남았다면 3년 뒤부터 첫 대운이 시작되고, 17일이라면 5년 8개월이 됩니다. 그래서
              같은 해에 태어난 사람도 생일이 어디에 걸려 있느냐에 따라 대운이 바뀌는 나이가
              달라집니다.
            </p>
            <p className="mt-3">
              대운의 간지는 10년 동안 유지되지만, 천간이 앞 5년, 지지가 뒤 5년을 맡는다고 나누어
              보는 방식도 널리 쓰입니다. 천간은 겉으로 드러나는 일과 사회적 관계에, 지지는
              실제 생활과 몸에 더 가깝게 작용한다고 봅니다. 두 방식을 함께 놓고 읽으면 같은
              10년도 훨씬 입체적으로 보입니다.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">
              세운은 입춘에서 시작한다
            </h2>
            <p>
              세운은 그해의 간지가 내 사주에 더해지는 것입니다. 2027년은 정미년(丁未年)이고, 한
              해의 경계는 1월 1일도 설날도 아닌 입춘입니다. 2027년 입춘은 2월 4일 오전 10시
              46분이므로, 그 전에 태어난 사람은 아직 병오년의 세운 안에 있습니다. 세운은 대운
              위에 얹혀 그해의 구체적인 사건을 만듭니다. 대운이 &lsquo;10년짜리 배경&rsquo;이라면
              세운은 그 배경 위에 놓이는 &lsquo;한 해의 사건&rsquo;입니다.
            </p>
            <p className="mt-3">
              세운을 읽을 때는 세 가지를 봅니다. 첫째, 그해의 천간과 지지가 내 일간과 어떤 십성이
              되는지. 둘째, 내 명식의 글자와 합·충·형·해를 이루는지. 셋째, 지금 지나고 있는
              대운과 세운이 서로 돕는지 누르는지. 이 셋이 겹치는 지점에서 그해의 사건이
              구체화됩니다. 예를 들어 재성이 세운으로 들어오는데 대운이 비겁을 키우고 있다면,
              돈이 들어오는 통로가 열리되 새는 곳도 함께 열린 것으로 보아 지출 관리가 과제가
              됩니다.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">
              2027 정미년 세운, 일간별로 이렇게 읽는다
            </h2>
            <p>
              정미년의 천간은 정화(丁火), 지지는 미토(未土)입니다. 천간과 지지가 화생토로 이어지는
              안정된 조합이라, 같은 해라도 일간에 따라 작용하는 십성이 달라집니다. 아래는 대표적인
              다섯 경우입니다.
            </p>
            <div className="mt-4 space-y-3">
              {yearPillarExamples.map((example) => (
                <div
                  key={example.ilgan}
                  className="rounded-xl border border-slate-200 p-4"
                >
                  <p className="text-sm font-bold text-slate-900">
                    {example.ilgan}{" "}
                    <span className="font-semibold text-purple-600">→ {example.relation}</span>
                  </p>
                  <p className="mt-1.5 text-sm leading-7 text-slate-600">{example.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-3">
              미토는 열두 지지 가운데 목(木)이 들어가 잠드는 창고이고, 사오미 화국의 마지막
              자리입니다. 그래서 정미년에는 새 일을 벌이는 힘보다 이미 벌인 일을 마무리하고
              저장하는 힘이 강합니다. 명식에 축(丑)이 있으면 축미충으로 창고가 열려 이동과 정리가
              생기고, 술(戌)이 있으면 축술미 삼형의 한 자리가 걸려 계약과 건강을 한 번 더 살펴야
              합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">
              교운기: 대운이 바뀌는 1~2년
            </h2>
            <p>
              대운이 넘어가는 시기를 교운기(交運期)라고 합니다. 보통 새 대운이 시작되기 1~2년
              전부터 마음이 들뜨고, 하던 일을 정리하고 싶은 충동이 생기며, 이사·이직·이별처럼
              삶의 구조가 흔들리는 일이 나타납니다. 이것은 나쁜 징조가 아니라 새 판을 향해 몸이
              먼저 움직이는 현상으로 읽습니다. 교운기에는 큰 결정을 서두르지 말고, 새 대운이
              시작된 뒤에 계약과 투자를 확정하는 편이 안전합니다. 이 시기에 무엇을 정리하고 무엇을
              남길지 미리 적어 두면, 새 10년의 출발이 한결 가벼워집니다.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">
              운을 쓰는 태도
            </h2>
            <p>
              대운과 세운은 미래를 확정하는 예언이 아니라 조건의 지도입니다. 같은 세운에도
              준비한 사람과 그렇지 않은 사람의 결과는 크게 갈립니다. 흉한 흐름이 보이면 그해에
              새로 크게 벌이지 않고, 이미 가진 것을 점검하고, 몸과 문서를 먼저 챙기는 방식으로
              대비합니다. 길한 흐름이 보이면 미뤄 둔 신청과 제안을 그해 안에 실행합니다. 운은
              문을 여는 힘이지, 문을 지나가는 발은 내 것입니다.
            </p>
          </section>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-100 pt-6 text-sm">
          <a
            href="/guide/jeongmi-2027"
            className="rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-700 hover:bg-slate-200 transition-colors"
          >
            ← 2027 정미년 해설
          </a>
          <a
            href="/guide/zodiac-2027"
            className="rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-700 hover:bg-slate-200 transition-colors"
          >
            12띠별 운세 보기 →
          </a>
          <a
            href="/guide/ten-gods"
            className="rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-700 hover:bg-slate-200 transition-colors"
          >
            십성 정리 보기 →
          </a>
        </div>
      </article>

      <section className="mt-8 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 p-7 text-center text-white">
        <h2 className="text-xl font-bold">내 대운과 2027년 세운 확인하기</h2>
        <p className="mt-2 text-sm text-purple-50">
          생년월일시를 입력하면 대운의 흐름과 2027년 정미년 세운을 함께 계산해 무료로 보여
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
