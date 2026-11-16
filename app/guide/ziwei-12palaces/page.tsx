import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "자미두수 12궁과 대한·유년 | 명궁·신궁 쉽게 이해하기",
  description:
    "자미두수 명반의 명궁과 신궁, 명궁부터 부모궁까지 12궁이 보여주는 삶의 영역, 10년 단위 대한과 해마다의 유년, 그리고 사주와 자미두수의 차이를 정리한 해설입니다.",
  keywords: ["자미두수", "자미두수 12궁", "명궁", "신궁", "대한", "유년", "삼방사정", "사주와 자미두수 차이"],
  alternates: {
    canonical: "https://saju2026.com/guide/ziwei-12palaces",
  },
  openGraph: {
    title: "자미두수 12궁과 대한·유년 — 명궁·신궁 쉽게 이해하기",
    description: "12궁의 의미와 대한·유년이 겹치는 방식, 사주와 무엇이 다른지 정리했습니다.",
    url: "https://saju2026.com/guide/ziwei-12palaces",
    siteName: "saju2026.com",
    images: ["https://saju2026.com/og-welcome.png"],
    locale: "ko_KR",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "자미두수 12궁과 대한·유년 — 명궁·신궁 쉽게 이해하기",
  description:
    "자미두수의 명궁·신궁, 12궁의 영역, 대한과 유년, 사주와의 차이를 설명하는 해설 가이드.",
  inLanguage: "ko-KR",
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  author: { "@type": "Organization", name: "saju2026.com" },
  publisher: { "@type": "Organization", name: "saju2026.com", url: "https://saju2026.com" },
  mainEntityOfPage: "https://saju2026.com/guide/ziwei-12palaces",
};

const palaces = [
  { name: "명궁(命宮)", desc: "타고난 성향과 전체 운의 중심. 명반을 볼 때 가장 먼저 읽는 자리입니다." },
  { name: "형제궁(兄弟宮)", desc: "형제·가까운 동료, 그리고 어머니와의 관계." },
  { name: "부처궁(夫妻宮)", desc: "배우자와의 인연, 결혼 생활의 결. 부부궁이라고도 합니다." },
  { name: "자녀궁(子女宮)", desc: "자녀와의 인연, 제자·후배, 창작물과의 관계." },
  { name: "재백궁(財帛宮)", desc: "돈을 버는 방식과 소비 습관, 재물이 들어오는 통로." },
  { name: "질액궁(疾厄宮)", desc: "체질과 건강의 약점, 사고와 수술의 경향." },
  { name: "천이궁(遷移宮)", desc: "집 밖에서의 활동, 이사와 이동, 대외적인 인상." },
  { name: "교우궁(交友宮)", desc: "친구·부하·거래처, 사람을 통해 들어오는 영향. 노복궁이라고도 합니다." },
  { name: "관록궁(官祿宮)", desc: "직업과 사회적 역할, 일에서의 성취 방식. 사업궁이라고도 합니다." },
  { name: "전택궁(田宅宮)", desc: "집과 부동산, 가족이 모이는 공간, 재산의 축적." },
  { name: "복덕궁(福德宮)", desc: "정신적 만족과 취향, 여가와 휴식의 질." },
  { name: "부모궁(父母宮)", desc: "부모와의 인연, 윗사람·기관과의 관계, 문서운." },
];

export default function ZiweiTwelvePalacesPage() {
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
        <span aria-hidden="true">/</span> <span className="text-slate-600">자미두수 12궁</span>
      </nav>

      <article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-9">
        <p className="text-xs font-semibold tracking-wide text-purple-600">자미두수</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          자미두수 12궁과 대한·유년
        </h1>
        <p className="mt-3 text-sm text-slate-400">2026년 11월 16일 · 읽는 시간 약 8분</p>

        <div className="mt-6 space-y-8 text-[15px] leading-8 text-slate-700">
          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">자미두수는 무엇을 보는가</h2>
            <p>
              자미두수(紫微斗數)는 하늘의 별자리 배치를 사람의 명반에 옮겨 읽는 동아시아 점성
              체계입니다. 전승에 따르면 북송 초의 도학자 진희이(陳希夷)에게서 이어졌다고 하며,
              중심이 되는 자미성(紫微星)의 이름에서 체계의 이름이 나왔습니다. 사주가 여덟 글자의
              오행 관계를 저울질하는 학문이라면, 자미두수는 열두 개의 방에 별을 앉혀 그 방마다의
              사정을 읽는 학문입니다. 그래서 &#39;무엇이 일어나는가&#39;를 영역별로 나누어 보는 데
              강합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">명반은 이렇게 세워진다</h2>
            <p>
              명반을 만들려면 음력 생년월일과 태어난 시각, 그리고 성별이 필요합니다. 먼저 출생
              연월일시로 오행국(수이국·목삼국·금사국·토오국·화육국)을 정하고, 이어서 명궁과 신궁의
              자리를 잡습니다. 그 위에 자미성을 비롯한 주성과 보성, 사화(화록·화권·화과·화기)를
              배치하면 열두 칸의 명반이 완성됩니다. 사주가 절기 기준의 양력을 쓰는 것과 달리
              자미두수는 음력을 기준으로 삼는다는 점도 기억해 둘 차이입니다.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">명궁과 신궁</h2>
            <p>
              명궁(命宮)은 명반의 주인방입니다. 타고난 성격과 재능, 평생을 관통하는 큰 흐름이 여기에
              모입니다. 신궁(身宮)은 후천적으로 몸과 생활을 이끄는 자리로, 나이가 들수록 비중이
              커집니다. 흔히 35세를 전후해 명궁보다 신궁의 작용이 앞선다고 말합니다. 명궁과 신궁이
              같은 방에 놓이면 명신동궁(命身同宮)이라 하여 자기 주관이 매우 강한 사람으로 읽습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">열두 개의 방, 12궁</h2>
            <p>
              명궁을 기준으로 시계 반대 방향으로 열두 영역이 이어집니다. 각 궁은 삶의 한 부문을
              전담하므로, 같은 별이라도 어느 궁에 앉았는지에 따라 전혀 다른 이야기가 됩니다.
            </p>
            <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-slate-600">
                  <tr>
                    <th className="px-4 py-2 font-semibold">궁</th>
                    <th className="px-4 py-2 font-semibold">보여주는 영역</th>
                  </tr>
                </thead>
                <tbody>
                  {palaces.map((palace) => (
                    <tr key={palace.name} className="border-t border-slate-100 align-top">
                      <td className="whitespace-nowrap px-4 py-3 font-semibold text-violet-700">
                        {palace.name}
                      </td>
                      <td className="px-4 py-3 text-slate-600">{palace.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">한 궁만 보지 않는 이유: 삼방사정</h2>
            <p>
              자미두수에서는 한 궁을 그 방 하나로 판단하지 않습니다. 그 궁과 네 칸씩 떨어진 두 궁,
              그리고 마주 보는 궁을 함께 묶어 읽는데 이를 삼방사정(三方四正)이라고 합니다. 예컨대
              재백궁은 관록궁·명궁·복덕궁과 함께 놓여야 &lsquo;돈을 버는 방식&rsquo;이 온전히
              드러납니다. 직업이 재물의 통로가 되는지, 취향이 소비를 이끄는지가 이 그물에서
              판가름됩니다.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">대한(大限): 10년의 큰 흐름</h2>
            <p>
              대한은 열 해 단위로 옮겨 가는 큰 운입니다. 오행국에 따라 대한이 시작되는 나이가 달라
              지고(수이국 2세, 목삼국 3세, 금사국 4세, 토오국 5세, 화육국 6세), 양남음녀는 순행,
              음남양녀는 역행합니다. 지금 내가 어느 궁의 대한에 들어와 있는지를 알면 그 시기의
              관심사와 사건의 무대를 짐작할 수 있습니다. 대한의 궁이 재백궁이면 재물이, 관록궁이면
              일이 삶의 전면에 나섭니다.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">유년(流年): 한 해의 초점</h2>
            <p>
              유년은 해마다 바뀌는 운으로, 그해의 지지에 해당하는 궁이 유년 명궁이 됩니다. 2026년은
              오(午)의 해이므로 유년 명궁이 오에 놓이고, 그 자리와 삼방사정에 어떤 별이 있는지가
              한 해의 화두를 정합니다. 대한이 배경이라면 유년은 그 위에 얹히는 조명입니다. 배경이
              어두워도 조명이 밝으면 좋은 한 해가 되고, 배경이 좋아도 조명이 흐리면 힘겨운 한 해가
              됩니다.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">사주와 자미두수는 무엇이 다른가</h2>
            <div className="mt-3 overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-slate-600">
                  <tr>
                    <th className="px-4 py-2 font-semibold">구분</th>
                    <th className="px-4 py-2 font-semibold">사주명리</th>
                    <th className="px-4 py-2 font-semibold">자미두수</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-t border-slate-100 align-top">
                    <td className="px-4 py-3 font-semibold text-slate-700">바탕</td>
                    <td className="px-4 py-3">양력·절기, 천간과 지지 여덟 글자</td>
                    <td className="px-4 py-3">음력 생년월일시와 성별, 별의 배치</td>
                  </tr>
                  <tr className="border-t border-slate-100 align-top">
                    <td className="px-4 py-3 font-semibold text-slate-700">보는 방식</td>
                    <td className="px-4 py-3">오행의 세기와 균형, 십신의 관계</td>
                    <td className="px-4 py-3">궁위마다 앉은 성요의 밝기와 조합</td>
                  </tr>
                  <tr className="border-t border-slate-100 align-top">
                    <td className="px-4 py-3 font-semibold text-slate-700">강점</td>
                    <td className="px-4 py-3">기질과 구조, 삶의 큰 방향</td>
                    <td className="px-4 py-3">영역별 사건과 시기, 구체적인 정황</td>
                  </tr>
                  <tr className="border-t border-slate-100 align-top">
                    <td className="px-4 py-3 font-semibold text-slate-700">시간축</td>
                    <td className="px-4 py-3">대운·세운·월운</td>
                    <td className="px-4 py-3">대한·유년·유월</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              두 체계는 대립하지 않습니다. 사주로 사람의 그릇과 기질을 잡고, 자미두수로 그 그릇이
              어느 영역에서 어떤 사건으로 드러나는지를 확인하면 같은 사람에 대한 그림이 훨씬
              입체적으로 완성됩니다.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">읽을 때의 태도</h2>
            <p>
              자미두수는 별의 이름이 강렬해서 단정적인 해석으로 흐르기 쉽습니다. 그러나 명반은
              가능성의 지도이고, 실제 삶은 그 위에서 매일의 선택으로 채워집니다. 흉한 별이 있다는
              것은 피해야 할 습관이 있다는 뜻에 가깝습니다.
            </p>
          </section>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-100 pt-6 text-sm">
          <a
            href="/guide/saju-basics"
            className="rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-700 hover:bg-slate-200 transition-colors"
          >
            ← 사주팔자 기초 읽기
          </a>
          <a
            href="/guide/byeongo-2026"
            className="rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-700 hover:bg-slate-200 transition-colors"
          >
            2026년 병오년 해설 →
          </a>
        </div>
      </article>

      <section className="mt-8 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 p-7 text-center text-white">
        <h2 className="text-xl font-bold">내 자미두수 명반 보기</h2>
        <p className="mt-2 text-sm text-violet-50">
          생년월일시와 성별을 입력하면 12궁 명반과 대한·유년 흐름을 무료로 확인할 수 있습니다.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a
            href="/ziwei"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-violet-700 hover:bg-violet-50 transition-colors"
          >
            명반 보기
          </a>
          <a
            href="/fortune"
            className="rounded-full border border-white/70 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            2026 사주 풀이 보기
          </a>
        </div>
      </section>
    </main>
  );
}
