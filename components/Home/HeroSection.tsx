"use client";

import Image from "next/image";
import Link from "next/link";
import { CONTENT, SITE_NAME } from "@/app/site-config";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import { useLanguage } from "@/components/Layout/LanguageProvider";

export default function HeroSection() {
  const sectionRef = useSectionReveal<HTMLElement>();
  const { language } = useLanguage();
  const content = CONTENT[language];

  return (
    <section
      ref={sectionRef}
      className="grid gap-10 rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-xl shadow-slate-200/60 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/70 dark:shadow-slate-950/30 lg:grid-cols-[auto,1fr]"
    >
      <div className="flex justify-center lg:justify-start">
        <div className="rounded-full bg-sky-100 p-2 shadow-lg shadow-sky-100/80 dark:bg-slate-800 dark:shadow-none">
          <Image
            src="/avatar_trang_1_cd729c335b.jpg"
            alt={`Avatar of ${SITE_NAME}`}
            className="h-32 w-32 rounded-full object-cover sm:h-40 sm:w-40"
            width={160}
            height={160}
            priority
          />
        </div>
      </div>

      <div className="flex flex-col justify-center text-center lg:text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-300">{content.heroKicker}</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
          {SITE_NAME}
        </h1>
        <p className="mt-4 text-xl text-slate-600 dark:text-slate-300">
          {content.heroTitle}
        </p>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 dark:text-slate-400">
          {content.heroDescription}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
          <Link
            href="/#KinhNghiem"
            className="rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
          >
            {content.viewExperience}
          </Link>
        </div>
      </div>
    </section>
  );
}
