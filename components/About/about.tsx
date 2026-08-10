"use client";

import { CONTENT } from "@/app/site-config";
import { useLanguage } from "@/components/Layout/LanguageProvider";

export default function About() {
  const { language } = useLanguage();
  const content = CONTENT[language];

  return (
    <section id="GioiThieu" className="mx-auto max-w-3xl scroll-mt-28 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300">{content.aboutKicker}</p>
      <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">{content.aboutTitle}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{content.aboutDescription}</p>
    </section>
  );
}
