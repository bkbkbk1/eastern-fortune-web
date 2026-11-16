import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from '@vercel/analytics/react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://saju2026.com";
const SITE_TITLE = "2026 병오년 AI 사주 & 자미두수 운세 | saju2026.com";
const SITE_DESCRIPTION =
  "생년월일시만 입력하면 AI가 2026년 병오년 사주팔자와 자미두수 명반을 풀어드립니다. 재물운·직업운·건강운·애정운·투자운까지 13가지 카테고리 상세 해설을 무료로 확인하세요.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: "saju2026.com",
  keywords: [
    "2026 운세",
    "2026 병오년",
    "사주",
    "사주팔자",
    "무료 사주",
    "자미두수",
    "신년운세",
    "토정비결",
    "재물운",
    "직업운",
    "이직운",
    "애정운",
    "AI 사주",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "2026 병오년 AI 사주 & 자미두수 운세",
    description:
      "AI가 풀어주는 2026년 병오년 사주·자미두수 운세. 재물운, 직업운, 건강운, 애정운 13가지 상세 해설을 무료로 확인하세요.",
    url: SITE_URL,
    siteName: "saju2026.com",
    images: [
      {
        url: `${SITE_URL}/og-welcome.png`,
        width: 1536,
        height: 1024,
        alt: "2026 병오년 AI 사주 & 자미두수 운세",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "2026 병오년 AI 사주 & 자미두수 운세",
    description:
      "AI가 풀어주는 2026년 병오년 사주·자미두수 운세를 무료로 확인하세요.",
    images: [`${SITE_URL}/og-welcome.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
