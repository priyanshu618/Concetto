"use client";

import { ArrowUpRight, CheckCircle2, Home, MapPin } from "lucide-react";
import SpaceBackground from "../SpaceBackground";

const notes = [
  "Accommodation will be provided in designated hostels/guest facilities.",
  "Accommodation and food charges will be mentioned in the official registration form.",
  "Participants must carry a valid college ID card during check-in.",
  "Participants are expected to follow all hostel and campus guidelines.",
];

export default function Accommodation() {
  return (
    <main className="relative overflow-hidden bg-[var(--background)]">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--primary)]/5 blur-[140px]" />

      {/* ================= HERO ================= */}
      <section className="relative px-5 pb-20 pt-32 md:px-10 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-[900px] text-center">

          <div className="mb-5 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--primary)]/30 bg-[var(--surface)] text-[var(--primary)]">
              <Home size={22} />
            </div>
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
            Concetto 2026
          </p>

          <h1 className="text-4xl font-black uppercase tracking-tight text-[var(--foreground)] md:text-6xl">
            Accommodation
          </h1>

          <div className="mx-auto mt-5 h-px w-20 bg-[var(--primary)]" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">
            Welcome to Concetto 2026 — IIT (ISM) Dhanbad's Annual
            Techno-Management Fest. We provide accommodation facilities
            for participants visiting the campus from other institutes.
          </p>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[var(--muted)]">
            Accommodation and related facilities are subject to availability
            and will be allocated according to the official registration
            process.
          </p>

          {/* Official form */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdjceqjXB7BJhZT4LKZMeFvKzsv91WwTQjLmy7MgoNEkerS2g/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/40 bg-[var(--surface)] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[var(--primary)] transition-all duration-300 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
          >
            Official Accommodation Form
            <ArrowUpRight size={14} />
          </a>

          {/* Main CTA */}
          <div className="mt-8">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdjceqjXB7BJhZT4LKZMeFvKzsv91WwTQjLmy7MgoNEkerS2g/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-lg bg-[var(--primary)] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_35px_rgba(232,80,2,0.25)]"
            >
              <Home size={17} />
              Apply for Accommodation
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

        </div>
      </section>

      {/* ================= IMPORTANT NOTES ================= */}
      <section className="relative border-y border-[var(--border)] bg-[var(--surface)]/30 px-5 py-16 md:px-10 md:py-20">

        <div className="mx-auto max-w-[850px]">

          <div className="mb-8 text-center">
            <div className="mb-3 flex justify-center">
              <MapPin
                size={20}
                className="text-[var(--primary)]"
              />
            </div>

            <h2 className="text-2xl font-bold uppercase tracking-tight text-[var(--foreground)] md:text-3xl">
              Important Notes
            </h2>

            <p className="mt-3 text-sm text-[var(--muted)]">
              Please read the following information before applying.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)]/70 p-5 shadow-[0_15px_50px_rgba(0,0,0,0.15)] backdrop-blur-md md:p-7">
            <div className="space-y-4">
              {notes.map((note, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-[var(--primary)]"
                  />

                  <p className="text-sm leading-6 text-[var(--muted)]">
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden px-5 py-20 md:px-10 md:py-28">

        <div className="absolute inset-0 bg-[var(--primary)]/[0.04]" />

        <div className="relative mx-auto max-w-[900px] rounded-3xl border border-[var(--primary)]/20 bg-[var(--surface)]/60 px-6 py-12 text-center shadow-[0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur-md md:px-12 md:py-16">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
            Join Us
          </p>

          <h2 className="mt-3 text-2xl font-black uppercase tracking-tight text-[var(--foreground)] md:text-4xl">
            Ready to Join Concetto 2026?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[var(--muted)]">
            We look forward to welcoming you to IIT (ISM) Dhanbad and
            making your Concetto experience comfortable and memorable.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdjceqjXB7BJhZT4LKZMeFvKzsv91WwTQjLmy7MgoNEkerS2g/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-3 rounded-lg bg-[var(--primary)] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_35px_rgba(232,80,2,0.25)]"
          >
            <Home size={17} />
            Apply Now for Accommodation
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

        </div>
      </section>

    </main>
  );
}