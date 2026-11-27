import type { Metadata } from "next";
import Script from "next/script";
import { cookies, headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from '@vercel/analytics/react';
import { resolveServerLanguage } from "@/lib/language-detection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://sajuopen.com";
const SITE_TITLE = "2027 정미년 AI 사주 & 자미두수 운세 | sajuopen.com";

/*
 * Google AdSense 연동 지점.
 * NEXT_PUBLIC_ADSENSE_ID 에 본인 게시자 ID(pub-...)를 넣으면
 * 아래 스크립트와 /ads.txt 가 자동으로 활성화됩니다.
 * 값이 없으면 아무것도 렌더링하지 않으므로 승인 전에도 안전합니다.
 */
const ADSENSE_PUB_ID = process.env.NEXT_PUBLIC_ADSENSE_ID?.trim() ?? "";
const ADSENSE_CLIENT = /^pub-\d{16}$/.test(ADSENSE_PUB_ID)
  ? ADSENSE_PUB_ID
  : /^ca-pub-\d{16}$/.test(ADSENSE_PUB_ID)
    ? ADSENSE_PUB_ID.replace(/^ca-/, "")
    : "";
const SITE_DESCRIPTION =
  "생년월일시만 입력하면 AI가 2027년 정미년 사주팔자와 자미두수 명반을 풀어드립니다. 재물운·직업운·건강운·애정운·투자운까지 13가지 카테고리 상세 해설을 무료로 확인하세요.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: "sajuopen.com",
  keywords: [
    "2027 운세",
    "2027 정미년",
    "정미년",
    "붉은 양의 해",
    "양띠",
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
    title: "2027 정미년 AI 사주 & 자미두수 운세",
    description:
      "AI가 풀어주는 2027년 정미년 사주·자미두수 운세. 재물운, 직업운, 건강운, 애정운 13가지 상세 해설을 무료로 확인하세요.",
    url: SITE_URL,
    siteName: "sajuopen.com",
    images: [
      {
        url: `${SITE_URL}/og-welcome.png`,
        width: 1536,
        height: 1024,
        alt: "2027 정미년 AI 사주 & 자미두수 운세",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "2027 정미년 AI 사주 & 자미두수 운세",
    description:
      "AI가 풀어주는 2027년 정미년 사주·자미두수 운세를 무료로 확인하세요.",
    images: [`${SITE_URL}/og-welcome.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
  ...(ADSENSE_CLIENT
    ? { other: { "google-adsense-account": `ca-${ADSENSE_CLIENT}` } }
    : {}),
};

/*
 * 첫 화면 언어 결정.
 * - 사용자가 언어 버튼으로 고른 값(쿠키 language)이 있으면 그것을 유지합니다.
 * - 없으면 Vercel 접속 국가(x-vercel-ip-country)로 정합니다: KR → 한국어, 그 외 → 영어.
 * - 헤더가 없는 환경(로컬 개발)이면 null 을 넘겨 클라이언트가 navigator.language 로 정합니다.
 * 쿠키만 보고 판단하면 첫 방문에는 아직 쿠키가 없어 한국어로 한 번 그려진 뒤 바뀌므로,
 * 국가 헤더를 SSR 단계에서 함께 읽어 깜빡임 없이 첫 화면부터 언어가 맞도록 합니다.
 */
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cookieStore, headerStore] = await Promise.all([cookies(), headers()]);
  const initialLang = resolveServerLanguage({
    savedLanguage: cookieStore.get("language")?.value,
    country: headerStore.get("x-vercel-ip-country"),
    userAgent: headerStore.get("user-agent"),
  });

  return (
    <html lang={initialLang ?? "ko"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {ADSENSE_CLIENT ? (
          <Script
            id="google-adsense-account"
            async
            strategy="afterInteractive"
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${ADSENSE_CLIENT}`}
          />
        ) : null}
        <Providers initialLang={initialLang}>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
