import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, MapPin } from "lucide-react";

export default function WorkshopDetail({ workshop, info }) {
  return (
    <main className="min-h-screen bg-(--background) px-5 pb-16 pt-28 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <Link
          href="/workshops"
          className="mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-(--text-muted) transition-colors hover:text-(--primary)"
        >
          <ArrowLeft size={15} />
          All Workshops
        </Link>

        <div className="grid overflow-hidden rounded-3xl border border-(--border) bg-(--surface) lg:grid-cols-2">
          <div className="relative min-h-[300px] lg:min-h-[550px]">
            <Image
              src={workshop.image}
              alt={workshop.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-transparent" />

            <span className="absolute bottom-6 left-6 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-md">
              {workshop.category}
            </span>
          </div>

          <div className="flex flex-col justify-center p-7 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-(--primary)">
              Workshop Track
            </p>

            <h1 className="mt-4 text-4xl font-black leading-tight text-(--foreground) md:text-5xl">
              {workshop.title}
            </h1>

            <p className="mt-6 text-sm leading-8 text-(--text-muted) md:text-base">
              {workshop.description}
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm text-(--text-muted)">
                <CalendarDays size={19} className="text-(--primary)" />
                <span>{info.date}</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-(--text-muted)">
                <MapPin size={19} className="text-(--primary)" />
                <span>{info.venue}</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-(--text-muted)">
                <span className="h-2 w-2 rounded-full bg-(--primary)" />
                <span>
                  {info.timing} · {workshop.mode}
                </span>
              </div>
            </div>

            <a
              href={workshop.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex items-center justify-center rounded-lg bg-(--primary) px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}