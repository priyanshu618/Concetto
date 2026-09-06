import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WorkshopCard({ workshop }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-(--border) bg-(--surface) transition-all duration-300 hover:-translate-y-1 hover:border-(--primary)/50 hover:shadow-[0_15px_45px_rgba(232,80,2,0.12)]">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={workshop.image}
          alt={workshop.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />

        <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-md">
          {String(workshop.id).padStart(2, "0")}
        </span>

        <span className="absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-widest text-white/80">
          {workshop.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6 gap-2">
        <h2 className="text-xl font-bold text-(--foreground)">
          {workshop.title}
        </h2>

        <Link
          href={`/workshops/${workshop.slug}`}
          className="mt-auto flex items-center justify-center gap-3 rounded-lg bg-(--primary) px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110"
        >
          Explore Workshop
          <ArrowRight
            size={17}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}