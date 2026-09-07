"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { Mail, MapPin } from "lucide-react";

const links = [
  { name: "Events", href: "events" },
  { name: "Workshops", href: "workshops" },
  { name: "About Us", href: "about-us" },
  { name: "Teams", href: "teams" },
  { name: "IIT (ISM)", href: "https://www.iitism.ac.in/" },
];

const socials = [
  { icon: FaInstagram, href: "https://www.instagram.com/concetto.iitism/", label: "Instagram" },
  { icon: FaFacebookF, href: "https://www.facebook.com/concetto.iitdhanbad.9", label: "Facebook" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/concetto-iitism-dhanbad/", label: "LinkedIn" },
  { icon: FaYoutube, href: "https://www.youtube.com/watch?v=lABucqX4DPw", label: "YouTube" },
  { icon: FaXTwitter, href: "#", label: "X" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden px-4 pb-5 pt-16 md:px-8 md:pt-24 opacity-90">

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/2 h-72 w-72 rounded-full bg-[var(--primary)]/10 blur-[120px]" />
        <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-orange-600/10 blur-[120px]" />
      </div>

      {/* Main footer */}
      <div className="relative mx-auto max-w-[1800px] overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]/90 px-7 py-10 shadow-[0_0_60px_rgba(232,80,2,0.08)] backdrop-blur-xl md:px-12 md:py-14 lg:px-20">

        {/* Decorative lines */}
        <div className="pointer-events-none absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-60" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-px w-1/3 bg-gradient-to-l from-transparent via-[var(--primary)] to-transparent opacity-60" />

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-[var(--primary)]">
              Quick Contact
            </h3>

            <div className="mt-3 h-px w-32 bg-[var(--primary)]/50" />

            <p className="mt-7 max-w-xs text-sm leading-7">
              If you have any questions or need help, feel free to contact
              the Concetto team.
            </p>

            <a
              href="mailto:concetto@iitism.ac.in"
              className="mt-6 flex items-center gap-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--primary)]"
            >
              <Mail size={19} className="text-[var(--primary)]" />
              concetto@iitism.ac.in
            </a>

            <div className="mt-6 flex items-start gap-3 text-sm leading-6">
              <MapPin
                size={19}
                className="mt-1 shrink-0 text-[var(--primary)]"
              />

              <span>
                Indian Institute of Technology (ISM)
                <br />
                Dhanbad - 826004
                <br />
                Jharkhand, India
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-semibold text-[var(--primary)]">
              Important Links
            </h3>

            <div className="mt-3 h-px w-36 bg-[var(--primary)]/50" />

            <div className="mt-7 flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="w-fit text-sm font-medium transition-all duration-300 hover:translate-x-1 hover:text-[var(--primary)]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Merchandise */}
          <div>
            <h3 className="text-xl font-semibold text-[var(--primary)]">
              Merchandise
            </h3>

            <div className="mt-3 h-px w-32 bg-[var(--primary)]/50" />

            <Link
              href="/merchandise"
              className="mt-7 block w-fit text-sm font-medium transition-colors hover:text-[var(--primary)]"
            >
              T-Shirts
            </Link>
          </div>

          {/* Sponsorship */}
          <div>
            <h3 className="text-xl font-semibold text-[var(--primary)]">
              Sponsorship
            </h3>

            <div className="mt-3 h-px w-32 bg-[var(--primary)]/50" />

            <a
              href="mailto:sponsorship.concetto@iitism.ac.in"
              className="mt-7 flex items-start gap-3 text-sm font-medium leading-6 transition-colors hover:text-[var(--primary)]"
            >
              <Mail
                size={19}
                className="mt-1 shrink-0 text-[var(--primary)]"
              />

              sponsorship.concetto@iitism.ac.in
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[var(--border)] pt-7 md:flex-row">

          <p className="text-xs">
            © 2026 Concetto, IIT (ISM) Dhanbad. All rights reserved.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
                >
                  <Icon size={17} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}