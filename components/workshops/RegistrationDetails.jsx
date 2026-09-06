import { BadgeIndianRupee, CalendarDays, Clock3, MapPin } from "lucide-react";

export default function RegistrationDetails({
  info,
  registration,
}) {
  return (
    <section className="bg-(--surface) px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-(--primary)">
            Registration
          </p>

          <h2 className="text-3xl font-black uppercase text-(--foreground) md:text-4xl">
            Registration Details
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-(--border) bg-(--background) p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-(--primary)">
              {registration.twoDay.label}
            </p>

            <div className="mt-4 flex items-center gap-2">
              <BadgeIndianRupee
                size={22}
                className="text-(--primary)"
              />

              <span className="text-3xl font-black text-(--foreground)">
                {registration.twoDay.price}
              </span>
            </div>

            <p className="mt-4 text-sm leading-7 text-(--text-muted)">
              {registration.twoDay.details}
            </p>
          </div>

          <div className="rounded-2xl border border-(--border) bg-(--background) p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-(--primary)">
              {registration.oneDay.label}
            </p>

            <div className="mt-4 flex items-center gap-2">
              <BadgeIndianRupee
                size={22}
                className="text-(--primary)"
              />

              <span className="text-3xl font-black text-(--foreground)">
                {registration.oneDay.price}
              </span>
            </div>

            <p className="mt-4 text-sm leading-7 text-(--text-muted)">
              {registration.oneDay.details}
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-xl border border-(--border) p-4">
            <CalendarDays size={19} className="text-(--primary)" />
            <div>
              <p className="text-xs text-(--text-muted)">Date</p>
              <p className="text-sm font-semibold text-(--foreground)">
                {info.date}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-(--border) p-4">
            <Clock3 size={19} className="text-(--primary)" />
            <div>
              <p className="text-xs text-(--text-muted)">Timing</p>
              <p className="text-sm font-semibold text-(--foreground)">
                {info.timing}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-(--border) p-4">
            <MapPin size={19} className="text-(--primary)" />
            <div>
              <p className="text-xs text-(--text-muted)">Venue</p>
              <p className="text-sm font-semibold text-(--foreground)">
                {info.venue}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}