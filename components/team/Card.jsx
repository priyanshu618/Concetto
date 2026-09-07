"use client";

import Image from "next/image";
import { useState } from "react";
import { FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Card({ member }) {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      {/* Team Card */}
      <article className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/60">

        {/* Photo */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={member.image || "/team/default.jpg"}
            alt={member.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          {/* View Profile Button */}
          <button
            onClick={() => setShowProfile(true)}
            className="absolute bottom-3 right-3 rounded-lg bg-black/75 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm transition hover:bg-[var(--primary)]"
          >
            View Profile
          </button>
        </div>

        {/* Basic Info */}
        <div className="p-5 bg-(--surface)">
          <h3 className="text-base font-bold text-[var(--foreground)]">
            {member.name}
          </h3>

        </div>
      </article>

      {/* Profile Popup */}
      {showProfile && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
          onClick={() => setShowProfile(false)}
        >
          <div
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setShowProfile(false)}
              className="absolute right-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-base text-white transition hover:bg-[var(--primary)]"
            >
              ×
            </button>

            {/* Profile Image */}
            <div className="relative h-48 w-full">
              <Image
                src={member.image || "/team/default.jpg"}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Heading */}
            <div className="px-5 pt-5">
              <h2 className="text-xl font-bold text-[var(--foreground)]">
                {member.name || "—"}
              </h2>
              
          <p className="mt-1 text-xs font-medium text-[var(--primary)]">
            {member.role}
          </p>

          <p className="mt-1 text-[11px] text-[var(--muted)]">
            {member.department}
          </p>
            </div>

            {/* Contact Details */}
            <div className="px-5 py-5 space-y-3">

              {/* Email */}
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-sm text-[var(--primary)]" />

                <div>
                  <p className="text-[9px] uppercase tracking-wider text-[var(--muted)]">
                    College Email
                  </p>
                  <p className="mt-0.5 break-all text-xs text-[var(--foreground)]">
                    {member.email || "—"}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <FaPhone className="text-sm text-[var(--primary)]" />

                <div>
                  <p className="text-[9px] uppercase tracking-wider text-[var(--muted)]">
                    Phone
                  </p>
                  <p className="mt-0.5 text-xs text-[var(--foreground)]">
                    {member.phone || "—"}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 border-t border-[var(--border)] px-5 py-4">

              {/* LinkedIn */}
              {member.linkedin ? (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--foreground)] transition hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
                >
                  <FaLinkedinIn className="text-sm" />
                </a>
              ) : (
                <div
                  aria-label="LinkedIn unavailable"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted)]"
                >
                  <FaLinkedinIn className="text-sm" />
                </div>
              )}

              {/* Instagram */}
              {member.instagram ? (
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--foreground)] transition hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
                >
                  <FaInstagram className="text-sm" />
                </a>
              ) : (
                <div
                  aria-label="Instagram unavailable"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted)]"
                >
                  <FaInstagram className="text-sm" />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

