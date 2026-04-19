import Link from "next/link";
import { CONTEST_DOCUMENTS } from "@/app/site-config";

const variantClassMap = {
  primary:
    "bg-sky-600 text-white hover:bg-sky-700 focus-visible:outline-sky-400",
  secondary:
    "bg-slate-200 text-slate-800 hover:bg-slate-300 focus-visible:outline-slate-400",
  success:
    "bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:outline-emerald-400",
} as const;

export default function ContestReport() {
  return (
    <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-950 dark:shadow-none">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300">
          Contest Project
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
          Thap Canh Bao Lu
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
          Du an nghien cuu va lap rap mo hinh canh bao lu som bang vat lieu de
          tim, de thay the va phu hop voi viec trinh bay trong cuoc thi.
        </p>
        <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">
          Thanh vien: Nguyen Tuan Hung, Nguyen The Anh • Truong THCS Binh An
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {CONTEST_DOCUMENTS.map((item) => {
          const href =
            "href" in item ? item.href : `/PDFView?file=${encodeURIComponent(item.file)}`;

          return (
            <Link
              key={item.label}
              href={href}
              className={`rounded-full px-5 py-3 text-sm font-semibold shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantClassMap[item.variant]}`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      <section className="mt-12 grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
        <article className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
            Tong quan du an
          </h2>
          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
            Mo hinh huong toi viec phat hien nguy co lu tran som hon va tao ra
            mot cach trinh bay de hieu cho hoc sinh. Cau truc duoc thiet ke don
            gian de thao lap, trinh bay va nang cap trong cac lan thu nghiem sau.
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-sky-500" />
              <span>Tap trung vao tinh de dung va kha nang trinh bay ro rang.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-sky-500" />
              <span>Su dung vat lieu gan gui, de thay the va co the tai su dung.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-sky-500" />
              <span>Co bo tai lieu PDF, gallery va video de minh hoa qua trinh.</span>
            </li>
          </ul>
        </article>

        <article className="rounded-[1.75rem] border border-dashed border-slate-300 bg-white p-6 dark:border-slate-700 dark:bg-slate-950">
          <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
            Media san sang de bo sung
          </h2>
          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
            Trang nay da duoc chuan hoa de mo gallery va video rieng. Neu bo
            asset chua co trong <code>/public</code>, giao dien se hien placeholder
            thay vi anh hoac video bi vo.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/ImagePage"
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-sky-300 dark:hover:text-sky-300"
            >
              Open gallery
            </Link>
            <Link
              href="/Video"
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-emerald-300 dark:hover:text-emerald-300"
            >
              Open videos
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}
