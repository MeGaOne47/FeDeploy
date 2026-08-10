"use client";

import Link from "next/link";
import { CONTENT, EXPERIENCES } from "@/app/site-config";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import { useLanguage } from "@/components/Layout/LanguageProvider";

export default function ExperienceSection() {
  const sectionRef = useSectionReveal<HTMLElement>();
  const { language } = useLanguage();
  const content = CONTENT[language];

  return (
    <section
      id="KinhNghiem"
      ref={sectionRef}
      className="scroll-mt-28"
    >
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300">{content.experienceKicker}</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">
          {content.experienceTitle}
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {EXPERIENCES[language].map((experience) => (
          <article
            key={experience.title}
            className="flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-300">
                {experience.role}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">
                {experience.title}
              </h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {experience.subtitle} • {experience.period}
              </p>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                {experience.summary}
              </p>
            </div>

            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {experience.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-sky-500" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {experience.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>

            {experience.link ? (
              <div className="mt-6">
                <Link
                  href={experience.link}
                  target="_blank"
                  className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-600 dark:bg-white dark:text-slate-950 dark:hover:bg-sky-300"
                >
                  {content.visitProject}
                </Link>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
