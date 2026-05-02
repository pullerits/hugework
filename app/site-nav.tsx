"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Avaleht" },
  { href: "/works", label: "Tööd" },
  { href: "/about", label: "Meist" },
  { href: "/contact", label: "Kontakt" },
];

export default function SiteNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="flex items-center justify-between border-b border-[#262626]/10 px-4 py-2 md:px-8 lg:px-16 xl:px-24">
        <Link
          href="/"
          className="text-lg font-semibold tracking-widest uppercase font-[family-name:var(--font-libre-baskerville)]"
        >
          HUGEWORK
        </Link>

        <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.12em] text-[#262626]/60 sm:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[#262626]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      <button
        type="button"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
        className={`fixed right-4 top-4 z-50 flex h-24 w-24 items-center justify-center bg-[#f7f5f0] shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-[opacity,transform] duration-300 md:right-8 md:top-8 ${
          hasScrolled || isMenuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        {isMenuOpen ? (
          <span className="relative h-10 w-10" aria-hidden="true">
            <span className="absolute left-1/2 top-1/2 h-0.5 w-12 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#262626]" />
            <span className="absolute left-1/2 top-1/2 h-0.5 w-12 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[#262626]" />
          </span>
        ) : (
          <span className="flex w-12 flex-col gap-3" aria-hidden="true">
            <span className="h-1 w-full bg-[#262626]" />
            <span className="h-1 w-full bg-[#262626]" />
            <span className="h-1 w-full bg-[#262626]" />
          </span>
        )}
      </button>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-40 flex min-h-screen flex-col bg-[#f7f5f0] px-4 py-36 text-[#262626] md:px-8 md:py-40 lg:px-16 xl:px-24">
          <div className="grid flex-1 grid-cols-1 gap-2 md:grid-cols-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex min-h-[150px] items-center justify-center bg-[#181818] px-6 text-center font-[family-name:var(--font-libre-baskerville)] text-[clamp(2.5rem,8vw,5rem)] font-light leading-none tracking-tight text-white sm:min-h-[210px] md:min-h-0"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
