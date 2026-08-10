"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function HomeIntro() {
  const [visible, setVisible] = useState(true);
  const introRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const intro = introRef.current;
    const text = textRef.current;

    if (!intro || !text) {
      setVisible(false);
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(false);
      return;
    }

    const context = gsap.context(() => {
      const letters = text.querySelectorAll("span");
      const timeline = gsap.timeline({
        onComplete: () => setVisible(false),
      });

      gsap.set(letters, { opacity: 0, y: 24 });

      timeline
        .to(letters, {
          opacity: 1,
          y: 0,
          stagger: 0.04,
          duration: 0.5,
          ease: "power3.out",
          delay: 0.3,
        })
        .to(intro, {
          opacity: 0,
          duration: 0.8,
          delay: 0.8,
        });
    }, intro);

    return () => {
      context.revert();
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      ref={introRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[radial-gradient(circle_at_top,_#0f172a,_#020617_60%)] px-4 text-center text-white"
    >
      <h1
        ref={textRef}
        className="flex flex-wrap justify-center gap-y-2 text-3xl font-extrabold tracking-[0.3em] sm:text-5xl"
      >
        {"Welcome To My Portfolio".split("").map((char, index) => (
          <span key={`${char}-${index}`} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
}
