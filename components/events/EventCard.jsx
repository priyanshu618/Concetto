"use client";

import Image from "next/image";
import { MapPin, ExternalLink } from "lucide-react";

export default function EventCard({
  title,
  category,
  description,
  image,
  mode = "Online",
  href = "#",
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-(--border) bg-(--surface) shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-(--primary)/50 hover:shadow-[0_15px_45px_rgba(232,80,2,0.15)]">

      {/* Image */}
      <div className="relative aspect-16/8 shrink-0 overflow-hidden">
        <Image
          src={image}
          alt={title}
          loading="eager"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

        {/* Category */}
        <span className="absolute right-5 top-5 rounded-full bg-black/70 px-4 py-2 text-xs font-semibold lowercase text-white backdrop-blur-md">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-4 md:p-7">

        <h2 className="text-xl font-bold tracking-tight text-(--primary) md:text-2xl">
          {title}
        </h2>

        <p className="text-xs leading-7 text-(--muted)">
          {description}
        </p>

        {/* Mode */}
        <div className="mt-2 flex items-center gap-2 text-sm">
          <MapPin size={19} />
          <span>{mode}</span>
        </div>

        {/* Apply Button */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex w-full items-center justify-center gap-4 rounded-lg bg-(--primary) px-5 py-2 text-base font-medium text-white transition-all duration-300 hover:brightness-110"
        >
          <ExternalLink size={21} />
          <span>Apply Now</span>
        </a>

      </div>
    </article>
  );
}