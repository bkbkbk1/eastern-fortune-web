import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "사주·자미두수 가이드 | 2027년 정미년 운세 읽는 법",
  description:
    "2027년 정미년(붉은 양의 해)의 의미, 사주팔자와 음양오행·십신 기초, 자미두수 12궁과 대한·유년까지. 사주와 자미두수를 처음 접하는 분을 위한 한국어 해설 가이드입니다.",
  keywords: [
    "사주 가이드",
    "사주팔자 기초",
    "2027 정미년",
    "붉은 양의 해",
    "자미두수 12궁",
    "음양오행",
    "십신",
    "대한 유년",
  ],
  alternates: {
    canonical: "https://saju2026.com/guide",
  },
  openGraph: {
    title: "사주·자미두수 가이드 | 2027년 정미년 운세 읽는 법",
    description:
      "정미년의 의미부터 사주팔자 기초, 자미두수 12궁까지 — 운세를 제대로 읽기 위한 한국어 해설 가이드.",
    url: "https://saju2026.com/guide",
    siteName: "saju2026.com",
    images: ["https://saju2026.com/og-welcome.png"],
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
