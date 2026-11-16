import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "2026년 병오년 운세 | 사주·자미두수 무료 풀이",
  description: "생년월일시와 성별을 입력하면 ChatGPT가 2026년 병오년 운세를 해석해드립니다. 재물운, 직업운, 건강운까지 상세하게!",
  alternates: {
    canonical: "https://saju2026.com/fortune",
  },
  other: {
    'fc:miniapp': JSON.stringify({
      version: "1",
      imageUrl: "https://saju2026.com/og-welcome.png",
      button: {
        title: "운세 보기",
        action: {
          type: "launch_miniapp"
        }
      }
    })
  }
};

export default function FortuneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
