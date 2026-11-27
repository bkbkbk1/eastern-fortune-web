'use client';

import { LanguageProvider } from '@/lib/LanguageContext';
import type { Language } from '@/lib/translations';

export function Providers({
  children,
  initialLang = null,
}: {
  children: React.ReactNode;
  initialLang?: Language | null;
}) {
  return (
    <LanguageProvider initialLang={initialLang}>
      {children}
    </LanguageProvider>
  );
}
