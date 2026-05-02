"use client";

import { useState, type CSSProperties } from "react";

type Category = "Bränding" | "Digital" | "Kampaania";

type Project = {
  name: string;
  tags: string[];
  category: Category;
  bg: string;
  logo: string;
  logoClass: string;
  logoStyle?: CSSProperties;
};

const projects: Project[] = [
  {
    name: "Altar",
    tags: ["BRÄNDING", "ILLUSTRATSIOON", "STRATEEGIA", "CVI"],
    category: "Bränding",
    bg: "radial-gradient(120% 80% at 30% 30%, #c46b3a 0%, #7a3320 55%, #2d1410 100%)",
    logo: "Altar.",
    logoClass:
      "font-[family-name:var(--font-instrument-serif)] text-white/95 italic",
    logoStyle: { fontSize: "clamp(3rem, 7vw, 5rem)" },
  },
  {
    name: "Farm Rio",
    tags: ["BRÄNDING", "VEEB", "MOTION", "KAMPAANIA"],
    category: "Kampaania",
    bg: "linear-gradient(115deg, #f0a5d3 0%, #b06bd6 45%, #4f3aa1 100%)",
    logo: "FARM RIO",
    logoClass: "text-white tracking-tight",
    logoStyle: { fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 300 },
  },
  {
    name: "Rivers",
    tags: ["IDENTITEET", "TRÜKK", "EDITORIAL"],
    category: "Bränding",
    bg: "linear-gradient(180deg, #f1ece1 0%, #d8cfbb 100%)",
    logo: "R",
    logoClass:
      "font-[family-name:var(--font-instrument-serif)] text-[#2c2418] italic",
    logoStyle: { fontSize: "clamp(8rem, 18vw, 14rem)", lineHeight: 1 },
  },
  {
    name: "Moon Lab",
    tags: ["VEEB", "ARENDUS", "UX/UI"],
    category: "Digital",
    bg: "radial-gradient(80% 80% at 70% 30%, #2d3358 0%, #0d1024 70%)",
    logo: "● moon lab",
    logoClass: "text-white tracking-[0.15em]",
    logoStyle: { fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 300 },
  },
  {
    name: "Pulse",
    tags: ["KAMPAANIA", "MOTION", "ART DIRECTION"],
    category: "Kampaania",
    bg: "linear-gradient(135deg, #ff5e3a 0%, #d61a76 60%, #5b1166 100%)",
    logo: "PULSE/",
    logoClass: "text-white tracking-tight",
    logoStyle: { fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700 },
  },
  {
    name: "Loop",
    tags: ["PAKEND", "TRÜKK", "BRÄNDING"],
    category: "Bränding",
    bg: "linear-gradient(160deg, #b9d4a3 0%, #5d8466 60%, #1f3a2a 100%)",
    logo: "loop",
    logoClass: "text-white",
    logoStyle: { fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 300 },
  },
];

const filters = ["Kõik", "Bränding", "Digital", "Kampaania"] as const;
type Filter = (typeof filters)[number];

export default function WorksGrid() {
  const [filter, setFilter] = useState<Filter>("Kõik");

  const filtered =
    filter === "Kõik" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="px-4 pb-24 md:px-8 md:pb-32 lg:px-16 xl:px-24">
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => {
          const active = f === filter;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                active
                  ? "border-[#181818] bg-[#181818] text-white"
                  : "border-[#262626]/20 text-[#262626]/70 hover:border-[#181818] hover:text-[#181818]"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 md:mt-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16">
        {filtered.map((p) => (
          <article key={p.name} className="group">
            <div
              className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-[0_24px_60px_-32px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:-translate-y-1"
              style={{ background: p.bg }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={p.logoClass} style={p.logoStyle}>
                  {p.logo}
                </span>
              </div>
            </div>

            <div className="mt-5 px-1">
              <h3 className="text-xl font-light tracking-tight text-[#262626] md:text-2xl">
                {p.name}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-[#262626]/20 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-[#262626]/70"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
