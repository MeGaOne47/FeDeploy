"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { NAV_ITEMS, SITE_NAME } from "@/app/site-config";

export default function HeaderComponent() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isDark = resolvedTheme === "dark";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl transition-colors dark:border-slate-800/70 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-[0.2em] text-slate-900 transition hover:text-sky-600 dark:text-white dark:hover:text-sky-300"
        >
          {SITE_NAME}
        </Link>

        <div className="hidden items-center gap-8 sm:flex">
          <ul className="flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-200">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition hover:text-sky-600 dark:hover:text-sky-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-sky-400 hover:text-sky-600 dark:border-slate-700 dark:text-slate-100 dark:hover:border-sky-300 dark:hover:text-sky-300"
            aria-label="Toggle color theme"
          >
            {mounted ? (
              isDark ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )
            ) : (
              <span className="h-5 w-5" />
            )}
          </button>
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-sky-400 hover:text-sky-600 dark:border-slate-700 dark:text-slate-100 dark:hover:border-sky-300 dark:hover:text-sky-300"
            aria-label="Toggle color theme"
          >
            {mounted ? (
              isDark ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )
            ) : (
              <span className="h-5 w-5" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-sky-400 hover:text-sky-600 dark:border-slate-700 dark:text-slate-100 dark:hover:border-sky-300 dark:hover:text-sky-300"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-slate-200/70 bg-white px-4 py-4 dark:border-slate-800/70 dark:bg-slate-950 sm:hidden">
          <ul className="flex flex-col gap-3 text-sm font-medium text-slate-700 dark:text-slate-100">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-2xl px-3 py-2 transition hover:bg-slate-100 hover:text-sky-600 dark:hover:bg-slate-900 dark:hover:text-sky-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
