import {
  Award,
  FileCheck2,
  FlaskConical,
  BriefcaseBusiness,
  Compass,
} from "lucide-react";

const icons = [
  Award,
  FileCheck2,
  FlaskConical,
  BriefcaseBusiness,
  Compass,
];

export default function Benefits({ benefits }) {
  return (
    <section className="bg-(--background) px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-(--primary)">
            What You Gain
          </p>

          <h2 className="text-3xl font-black uppercase text-(--foreground) md:text-4xl">
            Key Benefits
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((benefit, index) => {
            const Icon = icons[index];

            return (
              <div
                key={benefit.id}
                className="rounded-2xl border border-(--border) bg-(--surface) p-5 transition-all duration-300 hover:border-(--primary)/50"
              >
                <Icon size={24} className="text-(--primary)" />

                <h3 className="mt-5 font-bold text-(--foreground)">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-xs leading-6 text-(--text-muted)">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}