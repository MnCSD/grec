"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

export type Language = "en" | "gr" | "tr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const STORAGE_KEY = "grec-language";
const HTML_LANG: Record<Language, string> = { en: "en", gr: "el", tr: "tr" };

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("en");

  // Read the saved choice after hydration (the server always renders English)
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "gr" || stored === "tr") {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from storage
        setLanguageState(stored);
      }
    } catch {
      /* storage unavailable */
    }
  }, []);

  // Keep <html lang> in step for fonts, hyphenation and screen readers
  useEffect(() => {
    document.documentElement.lang = HTML_LANG[language];
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage unavailable */
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
