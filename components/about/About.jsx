import SpaceBackground from "../SpaceBackground";
import Glimpses from "./Glimpses";
import Message from "./Message";
import { messages } from "@/data/messages";

export default function About() {
  return (
    <main className="relative overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      {/* Space Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,var(--primary)/12%,transparent_25%),radial-gradient(circle_at_80%_30%,#6366f1/10%,transparent_28%),radial-gradient(circle_at_50%_70%,#9333ea/8%,transparent_35%)]" />

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle, var(--foreground) 1px, transparent 1px),
              radial-gradient(circle, var(--foreground) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px, 150px 150px",
            backgroundPosition: "10px 20px, 60px 80px",
          }}
        />
      </div>

      {/* About Section */}
      <section className="relative px-5 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
            Discover Concetto
          </p>

          <h1 className="mt-3 text-4xl font-black uppercase tracking-tight md:text-6xl">
            About Us
            <span className="text-[var(--primary)]">.</span>
          </h1>

          <div className="mx-auto mt-7 max-w-3xl space-y-5 text-sm leading-7 text-[var(--muted)] md:text-base">
            <p>
              <span className="font-bold text-(--primary)">CONCETTO</span> is the renowned annual techno-management fest hosted by
              the Indian Institute of Technology (Indian School of Mines),
              Dhanbad. With its first edition held in 2011, it is reputed to be
              Eastern India's largest gathering of tech minds and innovators. It
              attracts over 20,000 spirited participants every year and
              celebrates imagination and intellect, combining technical genius
              with management prowess.
            </p>
          </div>
        </div>
      </section>
      <Glimpses/>
      {/* Messages */}

      <section className="relative px-5 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-4xl space-y-16">
          {messages.map((message) => (
            <Message key={message.name} {...message} />
          ))}
        </div>
      </section>
    </main>
  );
}
