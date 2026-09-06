"use client";

export default function Filters({ active, setActive, departments }) {
  return (
    <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-2 px-5 pb-10">
      {["All Team", ...departments].map((item) => (
        <button
          key={item}
          onClick={() => setActive(item)}
          className={`min-w-24 rounded-lg border px-4 py-2 text-xs font-medium transition-all duration-300 md:px-5 md:py-2.5 md:text-sm ${
            active === item
              ? "border-[var(--primary)] bg-[var(--primary)] text-white shadow-[0_0_20px_rgba(232,80,2,0.2)]"
              : "border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}