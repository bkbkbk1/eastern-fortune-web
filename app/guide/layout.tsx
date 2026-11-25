import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "사주·자미두수 가이드 | 2027년 정미년 운세 읽는 법",
  description:
    "2027년 정미년(붉은 양의 해)의 의미, 12띠별 운세, 사주팔자·오행·십성·대운과 세운, 궁합, 자미두수 12궁과 14주성까지. 사주와 자미두수를 처음 접하는 분을 위한 한국어 해설 아홉 편입니다.",
  keywords: [
    "사주 가이드",
    "사주팔자 기초",
    "2027 정미년",
    "붉은 양의 해",
    "12띠 운세",
    "자미두수 12궁",
    "자미두수 14주성",
    "음양오행",
    "상생상극",
    "용신",
    "십성",
    "대운 세운",
    "사주 궁합",
  ],
  alternates: {
    canonical: "https://saju-free.vercel.app/guide",
  },
  openGraph: {
    title: "사주·자미두수 가이드 | 2027년 정미년 운세 읽는 법",
    description:
      "정미년의 의미부터 12띠 운세, 오행과 십성, 대운·세운, 궁합, 자미두수 14주성까지 — 운세를 제대로 읽기 위한 한국어 해설 가이드.",
    url: "https://saju-free.vercel.app/guide",
    siteName: "saju-free.vercel.app",
    images: ["https://saju-free.vercel.app/og-welcome.png"],
    locale: "ko_KR",
    type: "website",
  },
};

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
