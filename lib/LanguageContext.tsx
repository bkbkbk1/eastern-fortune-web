'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations, Language, TranslationKeys } from './translations';
import { isLanguage, languageFromNavigator } from './language-detection';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * `initialLang` 은 서버에서 계산한 첫 화면 언어입니다.
 * - 사용자가 고른 언어(쿠키) 또는 접속 국가(KR → ko, 그 외 → en)로 정해집니다.
 * - null 이면 서버가 판단할 수 없었다는 뜻이라(로컬 개발 등) 브라우저 언어를 사용합니다.
 */
export function LanguageProvider({
  children,
  initialLang = null,
}: {
  children: React.ReactNode;
  initialLang?: Language | null;
}) {
  const [language, setLanguageState] = useState<Language>(initialLang ?? 'ko');

  // 첫 마운트에서 최종 언어를 확정합니다.
  // 우선순위: 사용자가 직접 고른 값(localStorage) > 서버 판단(국가) > 브라우저 언어
  useEffect(() => {
    const saved = localStorage.getItem('language');
    const resolved: Language = isLanguage(saved)
      ? saved
      : initialLang ?? languageFromNavigator(navigator.language);
    setLanguageState((prev) => (prev === resolved ? prev : resolved));
  }, [initialLang]);

  // Keep <html lang> in sync with the selected language
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    // 서버 렌더링에서도 같은 언어로 첫 화면을 그리도록 쿠키에 함께 남깁니다.
    document.cookie = `language=${lang}; path=/; max-age=31536000; SameSite=Lax`;
  }, []);

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
