export default function Hero() {
  return (
    <section className="px-5 pb-10 pt-28 text-center md:pt-36">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
        Concetto '26
      </p>

      <h1 className="mt-3 text-4xl font-bold uppercase tracking-tight text-[var(--foreground)] md:text-5xl">
        Our Team
      </h1>

      <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[var(--primary)]" />

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">
        Meet the dedicated faculty and passionate students behind Concetto.
        Together, we work to make every edition bigger and better.
      </p>
    </section>
  );
}