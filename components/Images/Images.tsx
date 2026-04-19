"use client";

import { useState } from "react";
import { GALLERY_ITEMS } from "@/app/site-config";

function GalleryCard({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <article className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
      {!hasError ? (
        <img
          src={src}
          alt={title}
          loading="lazy"
          onError={() => setHasError(true)}
          className="h-64 w-full object-cover"
        />
      ) : (
        <div className="flex h-64 items-center justify-center bg-slate-100 px-6 text-center text-sm leading-6 text-slate-500 dark:bg-slate-900 dark:text-slate-400">
          Chua tim thay asset <code>{src}</code> trong thu muc public.
        </div>
      )}

      <div className="p-4">
        <h3 className="text-base font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>
      </div>
    </article>
  );
}

export default function Images() {
  return (
    <section className="mx-auto max-w-7xl">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300">
          Gallery
        </p>
        <h1 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">
          Hinh anh du an
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
          Trang da co fallback de khong bi vo giao dien khi file media chua duoc
          them vao <code>/public</code>.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {GALLERY_ITEMS.map((image) => (
          <GalleryCard key={image.id} src={image.src} title={image.title} />
        ))}
      </div>
    </section>
  );
}
