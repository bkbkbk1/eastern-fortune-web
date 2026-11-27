import type { Language } from './translations';

/** 저장·전달된 값이 지원하는 언어 코드인지 확인합니다. */
export function isLanguage(value: string | null | undefined): value is Language {
  return value === 'ko' || value === 'en';
}

/**
 * 검색엔진·미리보기 크롤러 판별.
 * 크롤러는 보통 해외(미국) IP에서 접속하므로, 국가만 보고 영어를 내보내면
 * 한국어 검색 색인이 영어 페이지로 바뀔 수 있습니다. 그래서 크롤러에게는
 * 사이트 주 언어(한국어)를 그대로 보여 줍니다.
 */
const CRAWLER_UA =
  /bot|crawler|spider|crawling|slurp|Yeti|Daum|facebookexternalhit|Twitterbot|LinkedInBot|Pinterest|AhrefsBot|SemrushBot|GPTBot|ClaudeBot|Applebot|Google-InspectionTool|AdsBot/i;

export function isCrawler(userAgent: string | null | undefined): boolean {
  return !!userAgent && CRAWLER_UA.test(userAgent);
}

/** Vercel `x-vercel-ip-country` 값으로 언어를 정합니다. */
export function languageFromCountry(
  country: string | null | undefined
): Language | null {
  const code = country?.trim().toUpperCase();
  if (!code) return null;
  // 비어 있지 않은 국가 코드가 있으면 KR 이면 한국어, 그 외는 영어.
  return code === 'KR' ? 'ko' : 'en';
}

/**
 * 서버(SSR)에서 첫 화면 언어를 결정합니다.
 * 1) 사용자가 직접 고른 언어(쿠키)  2) 크롤러 → 한국어
 * 3) 접속 국가 → KR: ko, 그 외: en   4) 판단 불가 → null (클라이언트가 navigator.language 로 결정)
 */
export function resolveServerLanguage({
  savedLanguage,
  country,
  userAgent,
}: {
  savedLanguage?: string | null;
  country?: string | null;
  userAgent?: string | null;
}): Language | null {
  if (isLanguage(savedLanguage)) return savedLanguage;
  if (isCrawler(userAgent)) return 'ko';
  return languageFromCountry(country);
}

/** 쿠키가 없을 때 브라우저 언어로 결정합니다 (로컬 개발 등). */
export function languageFromNavigator(
  navigatorLanguage: string | null | undefined
): Language {
  return navigatorLanguage?.toLowerCase().startsWith('ko') ? 'ko' : 'en';
}
