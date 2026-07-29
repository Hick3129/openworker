import { useState, useEffect } from "react";
import { en, type TranslationKeys } from "./en.ts";
import { zhTW } from "./zh-TW.ts";

export type Language = "zh-TW" | "en";

const STORAGE_KEY = "openworker_language";

const dictionaries: Record<Language, Record<TranslationKeys, string>> = {
  "zh-TW": zhTW,
  en: en,
};

// Current active language setting (default to zh-TW)
let currentLanguage: Language = (localStorage.getItem(STORAGE_KEY) as Language) || "zh-TW";

const listeners: Array<(lang: Language) => void> = [];

export function getLanguage(): Language {
  return currentLanguage;
}

export function setLanguage(lang: Language): void {
  currentLanguage = lang;
  localStorage.setItem(STORAGE_KEY, lang);
  listeners.forEach((listener) => listener(lang));
}

export function t(key: TranslationKeys, fallback?: string): string {
  const dict = dictionaries[currentLanguage] || dictionaries["zh-TW"];
  return dict[key] || fallback || en[key] || key;
}

export function useTranslation() {
  const [lang, setLangState] = useState<Language>(currentLanguage);

  useEffect(() => {
    const handleLanguageChange = (newLang: Language) => {
      setLangState(newLang);
    };
    listeners.push(handleLanguageChange);
    return () => {
      const idx = listeners.indexOf(handleLanguageChange);
      if (idx !== -1) listeners.splice(idx, 1);
    };
  }, []);

  return {
    lang,
    setLanguage,
    t: (key: TranslationKeys, fallback?: string) => t(key, fallback),
  };
}
