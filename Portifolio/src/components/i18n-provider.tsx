"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";

import { dictionaries, type Dict, type Lang } from "@/lib/content";

const STORAGE_KEY = "mf-lang";
const listeners = new Set<() => void>();

function isLang(value: unknown): value is Lang {
  return typeof value === "string" && value in dictionaries;
}

function readLang(): Lang {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) return saved;
  } catch {
    // storage indisponível (modo privado etc.)
  }
  const nav = (navigator.language || "pt").toLowerCase();
  if (nav.startsWith("en")) return "en";
  if (nav.startsWith("es")) return "es";
  return "pt";
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function setLang(lang: Lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // ignora
  }
  listeners.forEach((l) => l());
}

type I18nValue = { lang: Lang; t: Dict; setLang: (lang: Lang) => void };

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, readLang, () => "pt" as Lang);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, t: dictionaries[lang], setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n precisa estar dentro de <I18nProvider>");
  return ctx;
}
