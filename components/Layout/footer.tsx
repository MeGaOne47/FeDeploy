import { Facebook, Github } from "lucide-react";
import { SOCIAL_LINKS, SITE_NAME } from "@/app/site-config";

const iconMap = {
  Facebook,
  GitHub: Github,
} as const;

export default function FooterComponent() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50/80 py-8 text-slate-600 transition-colors dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-slate-900 dark:text-white">
            {SITE_NAME}
          </span>
          . All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((item) => {
            const Icon = iconMap[item.label];

            return (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-600 dark:border-slate-800 dark:text-slate-300 dark:hover:border-sky-300 dark:hover:text-sky-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
