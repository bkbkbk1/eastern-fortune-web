import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "2027 자미두수 명반 무료 풀이 | 사주2026",
  description: "생년월일시를 입력하면 12궁 명반과 대한(大限)·유년 운세, AI 상세 해석까지 무료로 확인할 수 있습니다. 중국 전통 자미두수(紫微斗數)로 보는 2027년 정미년 운세.",
  alternates: {
    canonical: "https://saju2026.com/ziwei",
  },
  openGraph: {
    title: "2027 자미두수 명반 무료 풀이",
    description: "12궁 명반과 대한·유년 운세, AI 상세 해석을 무료로 확인하세요.",
    url: "https://saju2026.com/ziwei",
    siteName: "saju2026.com",
    images: ["https://saju2026.com/og-welcome.png"],
    locale: "ko_KR",
    type: "website",
  },
};

export default function ZiweiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
