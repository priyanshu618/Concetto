"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Events", href: "/events" },
  { name: "Accommodation", href: "/accommodation" },
  { name: "Workshops", href: "/workshops" },
   { name: "Sponsors", href: "/sponsors" },
   { name: "About Us", href: "/about-us" },
   { name: "Merchandise", href: "/merchandise" },
 
  { name: "Teams", href: "/teams" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { theme, setTheme } = useTheme();

  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });

        ticking = true;
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Navbar */}
      <nav
        className={`
          flex
          h-20
          items-center
          border
          border-(--border)
          bg-(--background)/85
          backdrop-blur-xl

          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          md:h-24

          ${
            scrolled
              ? "w-full rounded-none px-6 md:px-8"
              : "mx-auto mt-3 w-[calc(100%-2rem)] rounded-full px-6 md:mt-4 md:w-[calc(100%-4rem)] md:px-8"
          }
        `}
      >
        {/* Logo */}
        <Link
          href="/"
          className="relative h-14 w-14 shrink-0 md:h-16 md:w-16"
        >
          <Image
            src="/home/logo_final.png"
            alt="Concetto"
            fill
            sizes="64px"
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
<div
  className="
    absolute
    left-1/2
    hidden
    -translate-x-1/2
    items-center
    gap-8
    lg:flex
    xl:gap-10
  "
>
  {navItems.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className={`
        whitespace-nowrap
        text-xs
        font-medium
        uppercase
        tracking-wide
        transition-colors
        duration-200
        ${item.href == pathname ? "text-(--primary) " : "hover:text-(--primary) text-(--text-muted)"}
        xl:text-sm
      `}
    >
      {item.name}
    </Link>
  ))}
</div>

        {/* Desktop Theme Toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          className="
            ml-auto
            hidden
            shrink-0
            rounded-full
            border
            border-(--border)
            p-2.5
            transition-colors
            duration-200
            hover:border-(--primary)
            lg:block
          "
          aria-label="Toggle theme"
        >
          {mounted &&
            (theme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            ))}
        </button>

        {/* Mobile Controls */}
        <div className="ml-auto flex items-center gap-3 lg:hidden">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="
              shrink-0
              rounded-full
              border
              border-(--border)
              p-2.5
              transition-colors
              duration-200
              hover:border-(--primary)
            "
            aria-label="Toggle theme"
          >
            {mounted &&
              (theme === "dark" ? (
                <Sun size={19} />
              ) : (
                <Moon size={19} />
              ))}
          </button>

          {/* Menu */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="shrink-0 rounded-full p-1"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div
          className={`
            mx-2
            mt-2
            rounded-2xl
            border
            border-(--border)
            bg-(--background)/95
            p-6
            backdrop-blur-xl
            lg:hidden
          `}
        >
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`
                  text-sm
                  font-medium
                  uppercase
                  tracking-wider
                  transition-colors
                  ${item.href == pathname ? "text-(--primary)" : "hover:text-(--primary) text-(--foreground)"}
                  
                `}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}