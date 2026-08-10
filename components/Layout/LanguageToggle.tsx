"use client";

import { useLanguage } from "@/components/Layout/LanguageProvider";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const nextLanguage = language === "vi" ? "en" : "vi";

  return (
    <button
      type="button"
      onClick={() => setLanguage(nextLanguage)}
      className="inline-flex h-10 min-w-12 items-center justify-center rounded-full border border-slate-200 px-3 text-xs font-bold text-slate-700 transition hover:border-sky-400 hover:text-sky-600 dark:border-slate-700 dark:text-slate-100 dark:hover:border-sky-300 dark:hover:text-sky-300"
      aria-label={language === "vi" ? "Switch to English" : "Chuyển sang tiếng Việt"}
    >
      {language === "vi" ? "EN" : "VI"}
    </button>
  );
}
