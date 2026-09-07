import Levels from "./Levels";
import PastSponsors from "./PastSponsors";
import SponsorCTA from "./SponsorCTA";

 
export default function Sponsors() {
  return (
    <main className="min-h-screen bg-[var(--background)]">

      <section className="px-5 pb-16 pt-32 text-center md:pb-20 md:pt-40">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
          Concetto 2026
        </p>

        <h1 className="mt-3 text-4xl font-black text-(--heading-text) md:text-6xl">
          Our Sponsors
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-[var(--muted)] md:text-base">
          Concetto is proudly supported by organisations and industry
          leaders who believe in innovation and young minds.
        </p>
      </section>
      <Levels/>
      <PastSponsors/>
      <SponsorCTA />

    </main>
  );
}