"use client";

import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToTracks = () => {
    document.getElementById("workshop-tracks")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden bg-(--background) px-6 pt-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--primary)/10 blur-[140px]" />

      <div className="pointer-events-none absolute left-0 top-1/2 hidden h-px w-[30%] bg-linear-to-r from-transparent via-(--primary)/20 to-(--primary)/60 md:block" />

      <div className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-[30%] bg-linear-to-l from-transparent via-(--primary)/20 to-(--primary)/60 md:block" />

      <div className="pointer-events-none absolute left-[8%] top-[30%] hidden h-32 w-32 rounded-full border border-(--primary)/15 md:block">
        <div className="absolute inset-5 rounded-full border border-(--primary)/10" />
        <div className="absolute left-1/2 top-0 h-1/2 w-px origin-bottom rotate-[-35deg] bg-(--primary)/30" />
      </div>

      <div className="pointer-events-none absolute right-[8%] top-[30%] hidden h-32 w-32 rounded-full border border-(--primary)/15 md:block">
        <div className="absolute inset-5 rounded-full border border-(--primary)/10" />
        <div className="absolute right-1/2 top-0 h-1/2 w-px origin-bottom rotate-[35deg] bg-(--primary)/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-(--primary) md:text-sm">
          Concetto 2026
        </p>

        <h1 className="text-3xl font-black uppercase tracking-tight text-(--foreground) sm:text-4xl md:text-6xl">
          Workshops
        </h1>

        <div className="mx-auto mt-6 h-px w-24 bg-(--primary)" />

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-(--text-muted) md:text-base">
          Explore specialized workshop tracks across emerging technologies,
          science, and innovation.
        </p>

        <button
          onClick={scrollToTracks}
          className="group mt-10 inline-flex items-center gap-3 rounded-full border border-(--primary) px-6 py-3 text-xs font-semibold uppercase tracking-widest text-(--foreground) transition-all duration-300 hover:bg-(--primary) hover:text-white"
        >
          Explore Tracks
          <ArrowDown
            size={15}
            className="transition-transform group-hover:translate-y-1"
          />
        </button>
      </div>
    </section>
  );
}