/**
 * Feature 15: Multilingual Support
 * Provides a React context + hook for EN / HI / MR language toggling.
 */
import { createContext, useContext, useState, useMemo } from "react";
import en from "../i18n/en";
import hi from "../i18n/hi";
import mr from "../i18n/mr";

const LOCALES = { en, hi, mr };

const LangContext = createContext({ lang: "en", t: en, setLang: () => {} });

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem("portfolio_lang") || "en"; } catch { return "en"; }
  });

  const value = useMemo(() => ({
    lang,
    t: LOCALES[lang] || en,
    setLang: (l) => {
      setLang(l);
      try { localStorage.setItem("portfolio_lang", l); } catch {}
    },
  }), [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
