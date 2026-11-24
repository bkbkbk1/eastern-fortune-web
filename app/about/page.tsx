import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const CONTACT_EMAIL = "person.bk.scholarship@gmail.com";

export const metadata: Metadata = {
  title: "사이트 소개와 문의 | saju2026.com",
  description:
    "saju2026.com은 2027년 정미년(丁未年) 사주팔자와 자미두수 명반을 무료로 풀어 주는 운세 정보 서비스입니다. 계산 방식과 오픈소스 엔진, AI 해석 원리, 콘텐츠 편집 원칙, 운영자 문의처를 안내합니다.",
  keywords: [
    "saju2026 소개",
    "사주 사이트 소개",
    "자미두수 무료",
    "2027 정미년 운세",
    "사주 계산 원리",
    "orrery core",
    "운세 사이트 문의",
  ],
  alternates: {
    canonical: "https://saju2026.com/about",
  },
  openGraph: {
    title: "사이트 소개와 문의 | saju2026.com",
    description:
      "2027년 정미년 사주·자미두수 무료 운세 서비스의 계산 방식, AI 해석 원리, 편집 원칙과 문의처를 안내합니다.",
    url: "https://saju2026.com/about",
    siteName: "saju2026.com",
    images: ["https://saju2026.com/og-welcome.png"],
    locale: "ko_KR",
    type: "website",
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "사이트 소개와 문의",
  description:
    "2027년 정미년 사주팔자·자미두수 무료 운세 서비스 saju2026.com의 목적, 계산 방식, AI 해석 원리, 편집 원칙과 운영자 문의 안내.",
  inLanguage: "ko-KR",
  url: "https://saju2026.com/about",
  mainEntity: {
    "@type": "Organization",
    name: "saju2026.com",
    url: "https://saju2026.com",
    email: CONTACT_EMAIL,
    description:
      "전통 사주명리학과 자미두수 12궁을 바탕으로 2027년 정미년 운세를 무료로 제공하는 정보 서비스.",
  },
  dateModified: "2026-11-24",
};

const quickLinks = [
  {
    href: "/fortune",
    icon: "🔮",
    title: "2027년 사주 풀이",
    desc: "생년월일시로 사주팔자를 세우고 재물·직업·건강·애정 등 13가지 항목을 해설합니다.",
  },
  {
    href: "/ziwei",
    icon: "⭐",
    title: "자미두수 명반",
    desc: "12궁에 배치된 주성과 사화를 계산해 명궁·대한·유년 흐름을 보여 드립니다.",
  },
  {
    href: "/guide",
    icon: "📚",
    title: "사주·자미두수 가이드",
    desc: "오행·십성·대운·궁합·14주성까지, 결과를 스스로 읽기 위한 해설 모음입니다.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 py-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
        />

        <nav aria-label="위치" className="mb-6 text-xs text-slate-400">
          <a href="/" className="hover:text-purple-600">
            홈
          </a>{" "}
          <span aria-hidden="true">/</span> <span className="text-slate-600">사이트 소개</span>
        </nav>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-9">
          <p className="text-xs font-semibold tracking-wide text-purple-600">사이트 안내</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            saju2026.com 소개와 문의
          </h1>
          <p className="mt-3 text-sm text-slate-400">최종 수정 2026년 11월 24일</p>

          <div className="mt-6 space-y-8 text-[15px] leading-8 text-slate-700">
            <section>
              <h2 className="mb-2 text-xl font-bold text-slate-900">
                왜 이 사이트를 만들었는가
              </h2>
              <p>
                saju2026.com은 2027년 정미년(丁未年, 붉은 양의 해)을 앞두고, 전통 사주명리학과
                자미두수(紫微斗數)를 같은 자리에서 무료로 볼 수 있게 만든 정보 서비스입니다.
                운세 사이트는 대개 결과만 짧게 보여 주고 끝나기 때문에, 그 결과가 어떤 계산과 어떤
                이론에서 나왔는지 알기 어렵습니다. 이 사이트는 반대로 갑니다. 생년월일시로 세운
                사주팔자와 음양오행 분포, 자미두수의 12궁과 주성 배치를 먼저 보여 주고, 그 위에
                해설을 얹습니다. 결과를 읽는 사람이 근거를 함께 볼 수 있어야 자기 상황에 맞게
                받아들일 수 있다고 생각하기 때문입니다.
              </p>
              <p className="mt-3">
                모든 해석은 오락과 자기 성찰의 자료입니다. 의료·법률·투자·진로 같은 전문적 판단을
                대신하지 않으며, 인생의 중요한 결정은 반드시 실제 정보와 전문가의 조언을 함께
                놓고 내리시길 권합니다.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-slate-900">무엇을 볼 수 있나</h2>
              <ul className="ml-1 space-y-2">
                <li className="flex gap-2">
                  <span aria-hidden="true" className="text-purple-500">
                    &#x2022;
                  </span>
                  <span>
                    <strong>사주 풀이</strong> — 양력 생년월일과 태어난 시각을 입력하면 년주·월주·일주·시주
                    네 기둥과 오행 구성을 계산하고, 재물운·직업운·건강운·애정운·투자운 등 13가지
                    항목으로 2027년 흐름을 해설합니다.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span aria-hidden="true" className="text-purple-500">
                    &#x2022;
                  </span>
                  <span>
                    <strong>자미두수 명반</strong> — 음력 기준으로 12궁에 주성과 사화(四化)를 배치한
                    명반을 그리고, 명궁·신궁과 대한·유년의 흐름을 정리합니다.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span aria-hidden="true" className="text-purple-500">
                    &#x2022;
                  </span>
                  <span>
                    <strong>가이드</strong> — 사주팔자 기초, 오행의 상생상극, 십성, 대운과 세운,
                    띠별 운세, 궁합, 자미두수 12궁과 14주성까지 아홉 편의 해설을 무료로
                    공개합니다. 결과를 스스로 읽고 싶은 분을 위한 글입니다.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-slate-900">
                어떻게 계산하는가
              </h2>
              <p>
                사주와 자미두수 계산은 오픈소스 라이브러리{" "}
                <a
                  href="https://github.com/rath/orrery"
                  className="text-purple-600 underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @orrery/core
                </a>
                (버전 0.6.0, MIT License, © 2026 Jang-Ho Hwang)를 사용합니다. 이 엔진이 양력과
                음력·윤달을 변환하고, 24절기와 입춘 시각을 기준으로 년주·월주·일주·시주를 세우며,
                자미두수의 12궁과 성요 배치를 계산합니다. 절기 계산에는 lunar-typescript를 함께
                씁니다.
              </p>
              <p className="mt-3">
                사주에서 한 해의 경계는 1월 1일이 아니라 입춘입니다. 2027년 입춘은 2월 4일
                오전이므로, 그 이전에 태어난 분의 년주는 2026년 병오년으로 계산됩니다. 음력
                설날과도 사흘 차이가 나기 때문에, 띠가 헷갈리는 구간이 생깁니다. 계산 결과가
                예상과 다르다면 생년월일과 태어난 시각, 양력·음력 선택이 맞는지 먼저 확인해
                주세요. 출생 시간을 모르면 시주를 비워 두고 계산하며, 이때 자녀·말년에 관한
                해석은 단정하지 않습니다.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-slate-900">
                AI 해석은 어떻게 만들어지나
              </h2>
              <p>
                계산된 명식과 오행 분포, 자미두수 명반은 OpenAI API로 전달되어 한국어 해설로
                정리됩니다. 모델은 미리 정해 둔 해석 원칙 — 일간을 중심으로 보고, 월지로 힘의
                강약을 판단하고, 오행의 과부족과 십성의 배치를 함께 읽는다 — 에 따라 문장을
                만듭니다. 같은 생년월일시라도 표현이 조금씩 달라질 수 있고, 반대로 서로 다른
                명식이 비슷한 문장으로 나올 수도 있습니다. AI가 쓴 글의 한계입니다.
              </p>
              <p className="mt-3">
                입력한 생년월일과 출생 시각은 해석을 만드는 데만 쓰고 저장하지 않습니다. 어떤
                정보를 어떤 목적으로 처리하는지는{" "}
                <a href="/privacy" className="text-purple-600 underline underline-offset-2">
                  개인정보처리방침
                </a>
                에, 이용 조건은{" "}
                <a href="/terms" className="text-purple-600 underline underline-offset-2">
                  이용약관
                </a>
                에 정리해 두었습니다.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-slate-900">콘텐츠 편집 원칙</h2>
              <p>
                가이드와 해설은 다음 다섯 가지 원칙으로 작성하고 점검합니다.
              </p>
              <ul className="ml-1 mt-3 space-y-2">
                <li className="flex gap-2">
                  <span aria-hidden="true" className="text-purple-500">
                    &#x2022;
                  </span>
                  <span>
                    <strong>전통 이론에 근거를 둡니다.</strong> 천간·지지, 오행의 생극, 십성,
                    합·충·형·해 같은 개념은 명리학과 자미두수의 통용되는 해석을 따르고, 근거가
                    갈리는 부분은 단정하지 않고 &lsquo;흔히 이렇게 읽는다&rsquo;고 밝힙니다.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span aria-hidden="true" className="text-purple-500">
                    &#x2022;
                  </span>
                  <span>
                    <strong>공포를 팔지 않습니다.</strong> &lsquo;올해 큰 사고가 난다&rsquo;처럼
                    겁을 주어 결제를 유도하는 표현을 쓰지 않습니다. 운은 경향과 조건이고, 선택과
                    준비가 결과를 바꿉니다.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span aria-hidden="true" className="text-purple-500">
                    &#x2022;
                  </span>
                  <span>
                    <strong>전문 영역을 대신하지 않습니다.</strong> 질병·소송·투자·이직처럼
                    실제 손실이 걸린 문제는 운세가 아니라 의사·변호사·전문가의 판단이 필요하다고
                    안내합니다.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span aria-hidden="true" className="text-purple-500">
                    &#x2022;
                  </span>
                  <span>
                    <strong>고지와 출처를 남깁니다.</strong> 계산 엔진의 라이선스와 저작자, 글의
                    작성·수정 날짜, 읽는 데 걸리는 시간을 표기합니다.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span aria-hidden="true">&#x2022;</span>
                  <span>
                    <strong>지적을 반영해 고칩니다.</strong> 오탈자, 계산 오류, 근거가 약한 서술을
                    알려 주시면 확인 후 수정하고 수정 날짜를 갱신합니다.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-slate-900">광고와 운영</h2>
              <p>
                이 사이트는 무료로 운영되며, 운영 비용은 Google AdSense 광고로 충당합니다. 광고의
                선택과 게재는 Google의 정책에 따라 이루어지고, 광고 내용은 이 사이트의 해석과
                무관합니다. 광고에 쓰이는 쿠키와 맞춤 광고 설정은{" "}
                <a href="/privacy" className="text-purple-600 underline underline-offset-2">
                  개인정보처리방침
                </a>
                에서 확인하실 수 있습니다. 운세 열람을 위해 결제나 회원 가입을 요구하지 않습니다.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-slate-900">운영자와 문의</h2>
              <p>
                saju2026.com은 법인 없이 개인이 직접 만들고 운영하는 정보 서비스입니다. 명리학과
                자미두수를 공부하면서 정리한 내용을 무료로 나누는 것이 목적이고, 상업적 제휴나
                유료 상담은 하지 않습니다.
              </p>
              <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-900">문의·오류 제보</p>
                <p className="mt-1 text-sm text-slate-600">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-purple-600 underline underline-offset-2"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  계산 결과가 이상할 때는 생년월일·출생 시각·양력/음력 선택과 함께 화면에 나온
                  오류 문구를 적어 주시면 원인을 찾기 쉽습니다. 보통 3일 안에 답장드리며, 개인정보
                  관련 요청은 개인정보처리방침에 적힌 절차를 따릅니다.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-slate-900">주요 변경 이력</h2>
              <ul className="ml-1 space-y-1 text-[15px] leading-7">
                <li className="flex gap-2">
                  <span aria-hidden="true" className="text-purple-500">
                    &#x2022;
                  </span>
                  <span>2026년 11월 24일 — 소개·문의 페이지 신설, 가이드 여섯 편(띠별 운세, 십성, 대운·세운, 오행, 궁합, 14주성) 추가.</span>
                </li>
                <li className="flex gap-2">
                  <span aria-hidden="true" className="text-purple-500">
                    &#x2022;
                  </span>
                  <span>2026년 11월 16일 — 사주팔자 기초, 자미두수 12궁 가이드 공개.</span>
                </li>
                <li className="flex gap-2">
                  <span aria-hidden="true" className="text-purple-500">
                    &#x2022;
                  </span>
                  <span>2026년 11월 — 2027년 정미년 기준으로 사이트 전면 개편, 서비스명 Eastern Fortune 2027로 정리.</span>
                </li>
              </ul>
            </section>
          </div>

          <div className="mt-8 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-bold text-slate-900">바로 가기</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-xl border border-slate-200 bg-white p-4 transition-shadow hover:border-purple-200 hover:shadow-md"
                >
                  <span className="text-xl" aria-hidden="true">
                    {link.icon}
                  </span>
                  <p className="mt-2 text-sm font-semibold text-slate-900">{link.title}</p>
                  <p className="mt-1 text-xs leading-6 text-slate-500">{link.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </article>

        <p className="mt-8 text-xs leading-6 text-slate-400">
          이 사이트의 모든 운세 해설은 전통 명리학과 자미두수 이론을 바탕으로 AI가 생성한 오락
          목적의 콘텐츠이며, 의료·법률·투자 등 전문적 판단을 대신하지 않습니다.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
