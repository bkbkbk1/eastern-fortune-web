const groups = [
  {
    key: "basics",
    title: "사주 기초 다지기",
    caption: "여덟 글자와 다섯 기운, 열 가지 관계라는 언어를 먼저 익힙니다.",
    articles: [
      {
        href: "/guide/saju-basics",
        icon: "🧭",
        title: "사주팔자 기초: 네 기둥과 다섯 기운",
        tag: "기초 이론",
        description:
          "사주팔자의 여덟 글자는 어디서 오는지, 년주·월주·일주·시주가 각각 무엇을 뜻하는지부터 시작합니다. 음양오행의 상생과 상극, 그리고 비겁·식상·재성·관성·인성 다섯 묶음(십신)으로 사람과 사건을 읽는 틀을 설명합니다.",
        points: ["년주·월주·일주·시주 읽는 순서", "오행의 상생·상극", "십신 다섯 묶음의 의미"],
      },
      {
        href: "/guide/five-elements",
        icon: "🌱",
        title: "오행 상생·상극과 용신 이해하기",
        tag: "기초 이론",
        description:
          "목·화·토·금·수는 물질이 아니라 움직임입니다. 생하는 순환과 누르는 순환, 계절에 따라 힘이 달라지는 왕상휴수사, 오행의 넘침과 모자람을 읽는 법, 그리고 억부·조후·병약·통관 용신과 희신·기신까지 정리했습니다.",
        points: ["목생화·수극화의 두 순환", "왕상휴수사와 강약 판단", "용신 네 가지와 희신·기신"],
      },
      {
        href: "/guide/ten-gods",
        icon: "🔟",
        title: "사주 십성(十神) 완벽 정리",
        tag: "기초 이론",
        description:
          "비견·겁재부터 정인·편인까지 열 가지 십성의 성질과 강할 때·약할 때의 모습, 재물·직업·관계에서 어떻게 쓰이는지를 하나씩 풀었습니다. 식상생재·관인상생·살인상생처럼 십성이 이어지는 조합과 강약을 판단하는 순서도 담았습니다.",
        points: ["열 가지 십성의 성질과 그림자", "식상생재·관인상생 조합", "득령·득지·득세로 강약 판단"],
      },
    ],
  },
  {
    key: "time",
    title: "시간과 운 읽기",
    caption: "2027년이라는 해와 10년 단위의 흐름을 내 사주에 얹습니다.",
    articles: [
      {
        href: "/guide/jeongmi-2027",
        icon: "🐑",
        title: "2027년 정미년, 붉은 양의 해",
        tag: "연운(年運)",
        description:
          "2027년이 왜 정미년인지, 천간 정화(丁火)와 지지 미토(未土)가 만날 때 어떤 기운이 만들어지는지 정리했습니다. 불이 흙을 낳는 상생 구조에서 나오는 재물·직장·건강의 흐름을 사주 논리로 읽는 법과, 내 명식에서 확인해야 할 세 가지 지점까지 다룹니다.",
        points: ["정화와 미토의 성질", "화생토가 만드는 재물 구조", "직장·건강에서 조심할 지점"],
      },
      {
        href: "/guide/daewoon-saewoon",
        icon: "⏳",
        title: "대운(大運)과 세운(歲運) 보는 법",
        tag: "시간과 운",
        description:
          "대운은 10년의 배경, 세운은 한 해의 사건, 월운은 타이밍입니다. 대운수를 계산하는 3일=1년의 원리와 순행·역행의 구분, 대운과 세운을 겹쳐 읽는 순서, 교운기에 나타나는 변화, 그리고 2027 정미년 세운이 일간별로 어떻게 작용하는지를 정리했습니다.",
        points: ["대운수 계산과 순행·역행", "대운·세운·월운을 겹쳐 읽기", "정미년 세운의 일간별 작용"],
      },
      {
        href: "/guide/zodiac-2027",
        icon: "🐇",
        title: "2027년 정미년 12띠별 운세 총정리",
        tag: "띠별 운세",
        description:
          "쥐·소·호랑이부터 돼지까지 열두 띠가 미토와 맺는 합·충·형·해 관계를 표로 정리하고, 띠별로 재물·직장·관계에서 조심할 지점과 살릴 지점을 풀었습니다. 입춘 기준으로 띠가 갈리는 구간과 띠운세를 내 명식에 얹는 순서도 함께 담았습니다.",
        points: ["12띠의 합·충·형·해 관계표", "띠별 주의점과 활용법", "띠운세를 사주에 얹는 순서"],
      },
    ],
  },
  {
    key: "relation",
    title: "관계와 궁합",
    caption: "두 사람의 여덟 글자를 겹쳐 관계의 결을 읽습니다.",
    articles: [
      {
        href: "/guide/saju-compatibility",
        icon: "💞",
        title: "사주 궁합 보는 핵심 기준",
        tag: "관계 분석",
        description:
          "궁합은 점수가 아니라 관계의 결을 읽는 일입니다. 일간의 천간합과 일지의 육합·충, 오행이 서로를 채워 주는 관계, 합·충·형·해·원진을 실제 생활에서 어떻게 해석하는지, 그리고 궁합을 보는 다섯 단계를 정리했습니다.",
        points: ["천간합과 육합·충의 실제 해석", "오행 보완이 실질적인 궁합", "궁합을 보는 다섯 단계"],
      },
    ],
  },
  {
    key: "ziwei",
    title: "자미두수",
    caption: "12궁과 14주성으로 사주와는 다른 지도 위에 삶을 그립니다.",
    articles: [
      {
        href: "/guide/ziwei-12palaces",
        icon: "✨",
        title: "자미두수 12궁과 대한·유년",
        tag: "자미두수",
        description:
          "자미두수에서 명궁과 신궁이 무엇을 맡는지, 12개의 궁이 삶의 어떤 영역을 나누어 보여주는지, 그리고 10년 단위 대한과 해마다의 유년이 어떻게 겹치는지를 풀어냈습니다. 사주와 자미두수가 무엇이 다른지도 비교했습니다.",
        points: ["명궁·신궁의 역할", "12궁이 보여주는 영역", "사주와 자미두수의 차이"],
      },
      {
        href: "/guide/ziwei-stars",
        icon: "🌟",
        title: "자미두수 14주성 입문",
        tag: "자미두수",
        description:
          "자미성계 여섯 성과 천부성계 여덟 성으로 나누어 열네 주성의 오행과 성질, 명궁에 앉았을 때의 해석을 정리했습니다. 화록·화권·화과·화기 사화의 뜻과 2027 정미년 정간 사화, 삼방사정으로 궁을 읽는 법까지 담았습니다.",
        points: ["14주성의 성질과 적성", "사화와 정미년 정간 사화", "삼방사정과 대한·유년"],
      },
    ],
  },
];

export default function GuideIndexPage() {
  const totalArticles = groups.reduce((sum, group) => sum + group.articles.length, 0);

  return (
    <main className="mx-auto max-w-3xl px-5 py-10">
      <nav aria-label="위치" className="mb-6 text-xs text-slate-400">
        <a href="/" className="hover:text-purple-600">
          홈
        </a>{" "}
        <span aria-hidden="true">/</span> <span className="text-slate-600">가이드</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        사주·자미두수 가이드
      </h1>
      <p className="mt-4 text-[15px] leading-8 text-slate-700">
        운세 풀이는 결과만 읽어도 재미있지만, 그 결과가 어떤 원리에서 나온 것인지 알면 훨씬
        쓸모가 있습니다. 같은 &lsquo;재물운이 좋다&rsquo;는 말도 내 사주에서 재성이 무엇을
        가리키는지에 따라 해석이 달라지고, 같은 정미년이라도 타고난 오행의 구성에 따라 체감이
        정반대로 갈립니다. 이 가이드는 사주와 자미두수를 처음 접하는 분이 풀이 결과를 스스로
        읽어낼 수 있도록, 꼭 필요한 개념만 순서대로 정리한 {totalArticles}편의 해설을 담았습니다.
      </p>

      <nav aria-label="가이드 목차" className="mt-6 flex flex-wrap gap-2 text-xs">
        {groups.map((group) => (
          <a
            key={group.key}
            href={`#${group.key}`}
            className="rounded-full border border-slate-200 bg-white px-3 py-1.5 font-medium text-slate-600 hover:border-purple-200 hover:text-purple-700 transition-colors"
          >
            {group.title}
          </a>
        ))}
      </nav>

      {groups.map((group) => (
        <section key={group.key} id={group.key} className="mt-10 scroll-mt-24">
          <h2 className="text-xl font-bold text-slate-900">{group.title}</h2>
          <p className="mt-1 text-sm text-slate-500">{group.caption}</p>

          <div className="mt-4 space-y-5">
            {group.articles.map((article) => (
              <a
                key={article.href}
                href={article.href}
                className="block rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:border-purple-200 hover:shadow-md"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-2xl" aria-hidden="true">
                    {article.icon}
                  </span>
                  <span className="rounded-full bg-purple-50 px-2.5 py-0.5 text-xs font-semibold text-purple-700">
                    {article.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{article.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-slate-600">{article.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {article.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-slate-600">
                      <span aria-hidden="true" className="mt-0.5 text-purple-500">
                        &#x2022;
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-semibold text-purple-600">글 읽기 →</p>
              </a>
            ))}
          </div>
        </section>
      ))}

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-bold text-slate-900">운세를 읽을 때 흔한 오해 세 가지</h2>
        <ul className="mt-3 space-y-3 text-[15px] leading-7 text-slate-700">
          <li className="flex gap-2">
            <span aria-hidden="true" className="mt-0.5 text-purple-500">&#x2022;</span>
            <span>
              <strong>&ldquo;좋은 별, 나쁜 별이 정해져 있다&rdquo;</strong> — 자미두수의 성요도
              사주의 십신도 그 자체로 길흉이 아닙니다. 어느 궁에 앉았는지, 무엇과 마주 보는지에
              따라 같은 별이 전혀 다른 얼굴이 됩니다.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden="true" className="mt-0.5 text-purple-500">&#x2022;</span>
            <span>
              <strong>&ldquo;올해 운이 나쁘면 아무것도 안 된다&rdquo;</strong> — 세운은 배경이고
              선택이 전경입니다. 같은 해에도 준비한 사람과 그렇지 않은 사람의 결과는 크게
              갈립니다.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden="true" className="mt-0.5 text-purple-500">&#x2022;</span>
            <span>
              <strong>&ldquo;생일만 알면 된다&rdquo;</strong> — 사주는 절기를, 자미두수는 음력과
              태어난 시각을 기준으로 삼습니다. 입력이 틀리면 계산 자체가 달라지므로 생년월일시를
              정확히 확인하는 것이 첫걸음입니다.
            </span>
          </li>
        </ul>
        <p className="mt-4 text-[15px] leading-7 text-slate-600">
          이 세 가지만 기억해도 풀이를 훨씬 담담하게, 그리고 실용적으로 읽을 수 있습니다.
        </p>
      </section>

      <section className="mt-12 rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <h2 className="text-lg font-bold text-slate-900">어떤 순서로 읽으면 좋을까요?</h2>
        <p className="mt-2 text-[15px] leading-7 text-slate-700">
          처음이라면 <strong>사주팔자 기초 → 오행과 용신 → 십성</strong> 순서로 언어를 익히고,{" "}
          <strong>2027년 정미년 → 대운과 세운 → 12띠별 운세</strong>로 시간을 읽은 뒤,{" "}
          <strong>궁합</strong>으로 관계를, 마지막에 <strong>자미두수 12궁 → 14주성</strong>으로
          사주와는 다른 지도를 만나 보시길 권합니다. 아홉 편을 순서대로 읽으면 대략 한 시간이고,
          각 글은 5~8분 분량이라 하루에 두 편씩 나누어 읽어도 좋습니다.
        </p>
        <p className="mt-3 text-[15px] leading-7 text-slate-700">
          이미 사주를 어느 정도 아는 분이라면 <strong>정미년 해설</strong>과{" "}
          <strong>대운·세운</strong>부터 읽어도 됩니다. 오행과 십성은 결과를 해석하다 막힐 때
          다시 찾아오는 사전처럼 쓰시면 됩니다.
        </p>
      </section>

      <section className="mt-10 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 p-7 text-center text-white">
        <h2 className="text-xl font-bold">내 명식으로 바로 확인해 보기</h2>
        <p className="mt-2 text-sm text-purple-50">
          생년월일시만 입력하면 2027년 정미년 사주 풀이와 자미두수 명반을 무료로 볼 수 있습니다.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a
            href="/fortune"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-purple-700 hover:bg-purple-50 transition-colors"
          >
            사주 풀이 보기
          </a>
          <a
            href="/ziwei"
            className="rounded-full border border-white/70 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            자미두수 명반 보기
          </a>
        </div>
      </section>

      <p className="mt-8 text-xs leading-6 text-slate-400">
        이 가이드는 전통 명리학과 자미두수 이론을 소개하는 교육 목적의 글이며, 운세 해석은
        오락과 자기 성찰의 자료로 활용하는 것을 권합니다. 계산 방식과 편집 원칙은{" "}
        <a href="/about" className="underline underline-offset-2 hover:text-purple-600">
          사이트 소개
        </a>
        에 정리해 두었습니다.
      </p>
    </main>
  );
}
