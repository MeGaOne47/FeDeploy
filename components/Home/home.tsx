'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import About from '../About/about';
import SnowEffect from '../SnowEffect/SnowEffect';
import {
  EXPERIENCES,
  SITE_NAME,
  SITE_ROLE,
  SKILL_GROUPS,
} from '@/app/site-config';

gsap.registerPlugin(ScrollTrigger);

export default function HomeIndex() {
  const [showIntro, setShowIntro] = useState(true);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const sectionRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShowIntro(false);
      return;
    }

    const root = rootRef.current;
    const intro = introRef.current;
    const text = textRef.current;

    if (!root || !intro || !text) {
      setShowIntro(false);
      return;
    }

    const context = gsap.context(() => {
      const letters = text.querySelectorAll('span');
      const timeline = gsap.timeline({
        onComplete: () => setShowIntro(false),
      });

      gsap.set(letters, { opacity: 0, y: 24 });

      timeline
        .to(letters, {
          opacity: 1,
          y: 0,
          stagger: 0.04,
          duration: 0.5,
          ease: 'power3.out',
          delay: 0.3,
        })
        .to(intro, {
          opacity: 0,
          duration: 0.8,
          delay: 0.8,
        });

      sectionRefs.current.forEach((section, index) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.05,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 82%',
              once: true,
            },
          },
        );
      });
    }, root);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-[radial-gradient(circle_at_top,_#1e293b,_#020617_55%)] dark:text-white"
    >
      <SnowEffect />

      <main className="relative z-10 mx-auto flex max-w-7xl flex-col gap-20 px-6 py-10 sm:px-8 lg:px-10 lg:py-16">
        <section
          ref={(node) => {
            if (node) {
              sectionRefs.current[0] = node;
            }
          }}
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
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-300">
              Portfolio
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              {SITE_NAME}
            </h1>
            <p className="mt-4 text-xl text-slate-600 dark:text-slate-300">
              {SITE_ROLE} focused on building maintainable and polished web
              experiences.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 dark:text-slate-400">
              I like turning product ideas into fast interfaces, improving user
              journeys, and shipping frontend work that stays clean as projects
              grow.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link
                href="/#KinhNghiem"
                className="rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
              >
                View Experience
              </Link>
            </div>
          </div>
        </section>

        <About />

        <section
          id="KyNang"
          ref={(node) => {
            if (node) {
              sectionRefs.current[1] = node;
            }
          }}
          className="scroll-mt-28"
        >
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300">
              Skills
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">
              Core tools and technologies
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {SKILL_GROUPS.map((group) => (
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

        <section
          id="KinhNghiem"
          ref={(node) => {
            if (node) {
              sectionRefs.current[2] = node;
            }
          }}
          className="scroll-mt-28"
        >
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300">
              Experience
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">
              Selected work and product experience
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {EXPERIENCES.map((experience) => (
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
                      Visit project
                    </Link>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      </main>

      {showIntro && (
        <div
          ref={introRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[radial-gradient(circle_at_top,_#0f172a,_#020617_60%)] px-4 text-center text-white"
        >
          <h1
            ref={textRef}
            className="flex flex-wrap justify-center gap-y-2 text-3xl font-extrabold tracking-[0.3em] sm:text-5xl"
          >
            {'Welcome To My Portfolio'.split('').map((char, index) => (
              <span key={`${char}-${index}`} className="inline-block">
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
        </div>
      )}
    </div>
  );
}
