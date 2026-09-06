import { Building2, TicketCheck } from "lucide-react";

const icons = [TicketCheck, Building2];

export default function Facilities({ facilities }) {
  return (
    <section className="bg-(--surface) px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-(--primary)">
            More Benefits
          </p>

          <h2 className="text-3xl font-black uppercase text-(--foreground) md:text-4xl">
            Beyond The Workshop
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {facilities.map((facility, index) => {
            const Icon = icons[index];

            return (
              <div
                key={facility.id}
                className="rounded-2xl border border-(--border) bg-(--background) p-6 md:p-8"
              >
                <Icon size={27} className="text-(--primary)" />

                <h3 className="mt-5 text-xl font-bold text-(--foreground)">
                  {facility.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-(--text-muted)">
                  {facility.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}