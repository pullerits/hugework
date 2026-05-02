import Link from "next/link";

const navItems = [
  { href: "/", label: "Avaleht" },
  { href: "/works", label: "Tööd" },
  { href: "/about", label: "Meist" },
  { href: "/contact", label: "Kontakt" },
];

export default function SiteNav() {
  return (
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
  );
}
