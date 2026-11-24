export default function GuideIndexPage() {
  const articles = [
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
      href: "/guide/saju-basics",
      icon: "🧭",
      title: "사주팔자 기초: 네 기둥과 다섯 기운",
      tag: "기초 이론",
      description:
        "사주팔자의 여덟 글자는 어디서 오는지, 년주·월주·일주·시주가 각각 무엇을 뜻하는지부터 시작합니다. 음양오행의 상생과 상극, 그리고 비겁·식상·재성·관성·인성 다섯 묶음(십신)으로 사람과 사건을 읽는 틀을 설명합니다.",
      points: ["년주·월주·일주·시주 읽는 순서", "오행의 상생·상극", "십신 다섯 묶음의 의미"],
    },
    {
      href: "/guide/ziwei-12palaces",
      icon: "✨",
      title: "자미두수 12궁과 대한·유년",
      tag: "자미두수",
      description:
        "자미두수에서 명궁과 신궁이 무엇을 맡는지, 12개의 궁이 삶의 어떤 영역을 나누어 보여주는지, 그리고 10년 단위 대한과 해마다의 유년이 어떻게 겹치는지를 풀어냈습니다. 사주와 자미두수가 무엇이 다른지도 비교했습니다.",
      points: ["명궁·신궁의 역할", "12궁이 보여주는 영역", "사주와 자미두수의 차이"],
    },
  ];

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
        읽어낼 수 있도록, 꼭 필요한 개념만 순서대로 정리한 세 편의 해설을 담았습니다.
      </p>

      <section className="mt-10 space-y-5">
        {articles.map((article) => (
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
            <h2 className="text-xl font-bold text-slate-900">{article.title}</h2>
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
      </section>

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
          처음이라면 <strong>사주팔자 기초</strong> → <strong>2027년 정미년</strong> →{" "}
          <strong>자미두수 12궁</strong> 순서를 권합니다. 첫 글에서 네 기둥과 오행·십신이라는
          언어를 익히고, 두 번째 글에서 그 언어로 올해라는 시간을 읽고, 세 번째 글에서 사주와는
          다른 방식으로 삶을 구획하는 도구를 만나게 됩니다. 이미 사주를 어느 정도 아는 분이라면
          정미년 해설부터 읽어도 좋습니다.
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
        오락과 자기 성찰의 자료로 활용하는 것을 권합니다.
      </p>
    </main>
  );
}
