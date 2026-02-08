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

export const metadata: Metadata = {
  title: "Eastern Fortune 2026 - Four Pillars of Destiny",
  description: "Discover your 2026 fortune through Saju (Four Pillars of Destiny), an ancient Korean astrology system. Get detailed insights on wealth, career, health, and more!",
  openGraph: {
    title: "Eastern Fortune 2026",
    description: "Discover your 2026 fortune through Saju, the Four Pillars of Destiny.",
    images: ["https://saju-2026.vercel.app/og-welcome.png"],
    url: "https://saju-2026.vercel.app/fortune"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
