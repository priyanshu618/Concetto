"use client";

import { useMemo, useState } from "react";
import EventFilter from "@/components/events/EventFilter";
import EventGrid from "@/components/events/EventGrid";
import { events } from "@/data/events";

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    ...new Set(events.map((event) => event.category)),
  ];

  const filteredEvents = useMemo(() => {
    const query = search.toLowerCase().trim();

    return events.filter((event) => {
      const matchesCategory =
        activeCategory === "All" ||
        event.category.toLowerCase() === activeCategory.toLowerCase();

      const matchesSearch =
        !query ||
        event.title.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="min-h-screen bg-(--background) px-5 pb-24 pt-32 md:px-10 md:pt-40">
      <div className="mx-auto max-w-[1600px]">

        {/* Heading */}
        <div className="mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-(--primary)">
            Concetto 2026
          </p>

          <h1 className="text-4xl font-black uppercase tracking-tight text-(--heading-text) md:text-5xl">
            Explore
            <span className="text-[var(--primary)]"> Events.</span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-(--muted)">
            Discover competitions, challenges and experiences at Concetto 2026.
          </p>
        </div>

        {/* Search + Filters */}
        <EventFilter
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          search={search}
          setSearch={setSearch}
        />

        {/* Events */}
        {filteredEvents.length > 0 ? (
          <EventGrid events={filteredEvents} />
        ) : (
          <div className="flex min-h-55 items-center justify-center rounded-2xl border border-(--border) bg-(--surface)">
            <p className="text-sm text-(--muted)">
              No events found.
            </p>
          </div>
        )}

      </div>
    </main>
  );
}