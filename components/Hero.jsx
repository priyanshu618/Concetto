"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";
import StarField from "./StarField";
import SpaceBackground from "./SpaceBackground";

export default function Hero() {
  const scrollToTimeline = () => {
    document.getElementById("timeline")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-(--background) pt-24">
      <SpaceBackground />
      <StarField />

      {/* Central glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--primary)/10 blur-[140px]" />

      {/* Left decorative elements */}
      <div className="pointer-events-none absolute left-0 top-1/2 hidden h-[65%] w-[30%] -translate-y-1/2 md:block">
        <div className="absolute left-0 top-1/2 h-px w-[75%] bg-linear-to-r from-transparent via-(--primary)/20 to-(--primary)/60" />

        <div className="absolute left-[8%] top-[32%] h-36 w-36 rounded-full border border-(--primary)/15">
          <div className="absolute inset-5 rounded-full border border-(--primary)/15" />
          <div className="absolute left-1/2 top-0 h-1/2 w-px origin-bottom rotate-[-35deg] bg-(--primary)/30" />
          <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--primary)" />
        </div>

        <div className="absolute left-[7%] top-[23%] flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full border border-(--primary)" />
          <span className="h-px w-24 bg-(--border)" />
        </div>

        <div className="absolute left-[18%] top-[67%] h-px w-40 bg-(--primary)/25" />

        <div className="absolute left-[25%] top-[14%] flex items-center gap-3 opacity-50">
          <div className="h-7 w-7 rotate-45 border border-(--primary)/40">
            <div className="h-full w-full border border-(--primary)/15" />
          </div>
          <div className="h-px w-12 bg-(--primary)/30" />
        </div>

        <div className="absolute bottom-[18%] left-[5%] flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-(--primary)" />
          <span className="h-px w-14 bg-(--border)" />
          <span className="text-[8px] uppercase tracking-[0.3em] text-(--text-muted)">
            SYS_01
          </span>
        </div>
      </div>

      {/* Right decorative elements */}
      <div className="pointer-events-none absolute right-0 top-1/2 hidden h-[65%] w-[30%] -translate-y-1/2 md:block">
        <div className="absolute right-0 top-1/2 h-px w-[75%] bg-linear-to-l from-transparent via-(--primary)/20 to-(--primary)/60" />

        <div className="absolute right-[8%] top-[32%] h-36 w-36 rounded-full border border-(--primary)/15">
          <div className="absolute inset-5 rounded-full border border-(--primary)/15" />
          <div className="absolute right-1/2 top-0 h-1/2 w-px origin-bottom rotate-[35deg] bg-(--primary)/30" />
          <div className="absolute right-1/2 top-1/2 h-1.5 w-1.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-(--primary)" />
        </div>

        <div className="absolute right-[7%] top-[23%] flex items-center gap-2">
          <span className="h-px w-24 bg-(--border)" />
          <span className="h-1.5 w-1.5 rounded-full border border-(--primary)" />
        </div>

        <div className="absolute right-[18%] top-[67%] h-px w-40 bg-(--primary)/25" />

        <div className="absolute right-[25%] top-[14%] flex items-center gap-3 opacity-50">
          <div className="h-px w-12 bg-(--primary)/30" />
          <div className="h-7 w-7 -rotate-45 border border-(--primary)/40">
            <div className="h-full w-full border border-(--primary)/15" />
          </div>
        </div>

        <div className="absolute bottom-[18%] right-[5%] flex items-center gap-2">
          <span className="text-[8px] uppercase tracking-[0.3em] text-(--text-muted)">
            SYS_02
          </span>
          <span className="h-px w-14 bg-(--border)" />
          <span className="h-1.5 w-1.5 rounded-full bg-(--primary)" />
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center px-6 text-center">

        {/* Top text */}
        <div className="flex flex-col items-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.5em] text-(--text-muted) md:text-sm">
            IIT (ISM) Dhanbad presents
          </p>

          <p className="text-sm uppercase tracking-[0.35em] text-(--muted) md:text-base">
            The Techno-Management Fest
          </p>
        </div>

        {/* Logos */}
        <div className="mt-2 flex w-full items-center justify-center">

          {/* Geometric C logo — intentionally larger */}
          <div className="relative h-[clamp(8rem,16vw,12rem)] w-[clamp(7rem,14vw,11rem)] shrink-0">
            <Image
              src="/home/logo_final.png"
              alt="Concetto geometric logo"
              fill
              priority
              sizes="(max-width: 768px) 28vw, 180px"
              className="object-contain"
            />
          </div>

          {/* Main CONCETTO logo — intentionally smaller */}
          <div className="relative -ml-3 h-[clamp(6rem,14vw,10rem)] w-[clamp(17rem,52vw,38rem)] shrink-0 md:-ml-16">
            <Image
              src="/home/hero_logo.png"
              alt="Concetto logo"
              fill
              priority
              sizes="(max-width: 768px) 75vw, 650px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Bottom text — brought closer to logo */}
        <div className="mt-2 flex flex-col items-center gap-2">
          <div className="h-px w-20 bg-(--primary)" />

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-(--text-muted) md:text-sm">
            Centauri Synapse — Forged Over a Century
          </p>

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-(--primary) md:text-sm">
            Soaring Towards Infinity
          </p>
        </div>

        {/* Explore */}
        <button
          className="group mt-8 flex items-center gap-3 rounded-full border border-(--primary) px-6 py-3 text-xs font-semibold uppercase tracking-widest transition-all hover:bg-(--primary) hover:text-white"
          onClick={scrollToTimeline}
        >
          Explore

          <ArrowDown
            size={15}
            className="transition-transform group-hover:translate-y-1"
          />
        </button>
      </div>
    </section>
  );
}