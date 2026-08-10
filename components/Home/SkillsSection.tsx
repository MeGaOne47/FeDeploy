"use client";

import { CONTENT, SKILL_GROUPS } from "@/app/site-config";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import { useLanguage } from "@/components/Layout/LanguageProvider";

export default function SkillsSection() {
  const sectionRef = useSectionReveal<HTMLElement>();
  const { language } = useLanguage();
  const content = CONTENT[language];

  return (
    <section
      id="KyNang"
      ref={sectionRef}
      className="scroll-mt-28"
    >
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300">{content.skillsKicker}</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">
          {content.skillsTitle}
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {SKILL_GROUPS[language].map((group) => (
          <fieldset
            key={group.title}
            className="rounded-[1.75rem] border border-slate-200 bg-white/85 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/75"
          >
            <legend className="px-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-300">
              {group.title}
            </legend>
            <ul className="mt-4 grid grid-cols-2 gap-3">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-2xl bg-slate-100 px-3 py-2 text-center text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-100"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </fieldset>
        ))}
      </div>
    </section>
  );
}
