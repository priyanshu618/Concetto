"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, ShoppingBag } from "lucide-react";

export default function Merchandise() {
  const [view, setView] = useState("front");

  const image =
    view === "front"
      ? "/merch/shop_front.webp"
      : "/merch/shop_back.webp";

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">

      {/* Hero */}
      <section className="px-5 pb-12 pt-32 text-center md:pt-36">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
          Official Merchandise
        </p>

        <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-(--heading-text) md:text-6xl">
          Wear Concetto<span className="text-[var(--primary)]">.</span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[var(--text-muted)]">
          The official Concetto T-shirt — made for the fest,
          designed to live beyond it.
        </p>

        <a
          href="#product"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--primary)] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[var(--primary)] transition hover:bg-[var(--primary)] hover:text-white"
        >
          Explore
          <ArrowDown size={14} />
        </a>
      </section>

      {/* Product */}
      <section id="product" className="px-5 pb-20 md:px-10">
        <div className="mx-auto grid max-w-[1200px] overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]/30 shadow-2xl lg:grid-cols-2">

          {/* Image */}
          <div className="flex min-h-[450px] items-center justify-center border-b border-[var(--border)] p-6 lg:border-b-0 lg:border-r md:p-10">
            <Image
              src={image}
              alt="Concetto official T-shirt"
              width={800}
              height={800}
              priority
              className="max-h-[500px] w-full object-contain transition-all duration-500"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center p-7 md:p-12">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
              Concetto 2026
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase leading-tight md:text-4xl">
              Official
              <br />
              Concetto T-Shirt
            </h2>

            <p className="mt-5 text-sm leading-6 text-[var(--text-muted)]">
              Premium cotton T-shirt featuring the official Concetto
              design. Comfortable, minimal and made for the community.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span className="text-3xl font-black text-[var(--primary)]">
                ₹349
              </span>

              <span className="text-sm text-[var(--text-muted)] line-through">
                ₹699
              </span>

              <span className="rounded-md bg-[var(--primary)]/10 px-2 py-1 text-[10px] font-bold uppercase text-[var(--primary)]">
                50% Off
              </span>
            </div>

            {/* View */}
            <div className="mt-8 grid grid-cols-2 gap-2">
              {["front", "back"].map((item) => (
                <button
                  key={item}
                  onClick={() => setView(item)}
                  className={`rounded-lg border px-4 py-3 text-xs font-semibold uppercase tracking-wider transition ${
                    view === item
                      ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                      : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--primary)]"
                  }`}
                >
                  {item} Side
                </button>
              ))}
            </div>

            {/* Buy */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfpnKXmFJCNMBioSIQ3lcxWpqXILSBiXlYHupIY5gDsUHlRDA/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center gap-3 rounded-xl bg-[var(--primary)] px-6 py-4 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <ShoppingBag size={18} />
              Buy Now — ₹349
              <ArrowUpRight size={16} />
            </a>

          </div>
        </div>
      </section>
    </main>
  );
}