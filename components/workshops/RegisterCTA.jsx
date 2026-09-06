import { ArrowRight } from "lucide-react";

export default function RegisterCTA() {
  return (
    <section className="relative overflow-hidden bg-(--surface) px-5 py-20 md:px-10 md:py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--primary)/10 blur-[100px]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-(--primary)">
          Concetto 2026
        </p>

        <h2 className="mt-4 text-3xl font-black uppercase text-(--foreground) md:text-5xl">
          Choose Your Track
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-(--text-muted)">
          Explore the available workshops and find the track that interests
          you.
        </p>

        <a
          href="#workshop-tracks"
          className="mt-8 inline-flex items-center gap-3 rounded-full border border-(--primary) px-6 py-3 text-xs font-semibold uppercase tracking-widest text-(--foreground) transition-all hover:bg-(--primary) hover:text-white"
        >
          Explore Workshops
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}