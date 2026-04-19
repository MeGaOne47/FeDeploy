"use client";

import { useState } from "react";
import { VIDEO_ITEMS } from "@/app/site-config";

function VideoCard({
  description,
  src,
  title,
}: {
  description: string;
  src: string;
  title: string;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <article className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
      {!hasError ? (
        <video
          controls
          muted
          playsInline
          preload="metadata"
          onError={() => setHasError(true)}
          className="aspect-video w-full bg-black"
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div className="flex aspect-video items-center justify-center bg-slate-100 px-6 text-center text-sm leading-6 text-slate-500 dark:bg-slate-900 dark:text-slate-400">
          Chua tim thay asset <code>{src}</code> trong thu muc public.
        </div>
      )}

      <div className="p-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function Video() {
  return (
    <section className="mx-auto max-w-6xl">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-300">
          Video
        </p>
        <h1 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">
          Video thu nghiem
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
          Moi the hien se hien placeholder thay vi video bi hong neu asset chua
          co trong <code>/public</code>.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {VIDEO_ITEMS.map((video) => (
          <VideoCard
            key={video.id}
            description={video.description}
            src={video.src}
            title={video.title}
          />
        ))}
      </div>
    </section>
  );
}
