"use client";

import About from "@/components/About/about";
import SnowEffect from "@/components/SnowEffect/SnowEffect";
import ExperienceSection from "@/components/Home/ExperienceSection";
import HeroSection from "@/components/Home/HeroSection";
import HomeIntro from "@/components/Home/HomeIntro";
import SkillsSection from "@/components/Home/SkillsSection";

export default function HomeIndex() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-[radial-gradient(circle_at_top,_#1e293b,_#020617_55%)] dark:text-white">
      <SnowEffect />

      <main className="relative z-10 mx-auto flex max-w-7xl flex-col gap-20 px-6 py-10 sm:px-8 lg:px-10 lg:py-16">
        <HeroSection />
        <About />
        <SkillsSection />
        <ExperienceSection />
      </main>

      <HomeIntro />
    </div>
  );
}
