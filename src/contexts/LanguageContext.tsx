import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations, type Language, type TranslationKeys } from '@/i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKeys) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function detectBrowserLanguage(): Language {
  try {
    const stored = localStorage.getItem('orofx-lang');
    if (stored === 'en' || stored === 'de' || stored === 'it') return stored;
  } catch {
    // localStorage not available
  }

  const browserLang = navigator.language || (navigator as any).userLanguage || 'en';
  const lang = browserLang.toLowerCase().split('-')[0];
  if (lang === 'de') return 'de';
  if (lang === 'it') return 'it';
  return 'en';
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(detectBrowserLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('orofx-lang', lang);
    } catch {
      // localStorage not available
    }
    // Update HTML lang attribute
    document.documentElement.lang = lang;
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = useCallback(
    (key: TranslationKeys): string => {
      return translations[language][key] || translations['en'][key] || key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
