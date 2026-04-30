"use client";

import { useEffect, useRef, useState } from "react";

type Service = {
  numeral: string;
  category: string;
  headline: string;
  description: string;
  tags: string[];
};

const services: Service[] = [
  {
    numeral: "01",
    category: "DESIGN",
    headline: "Bold ideas, beautifully made.",
    description:
      "Identities and design systems that refuse to whisper — sharp strategy, smart layouts, and the kind of detail that makes people stop scrolling.",
    tags: [
      "BRANDING",
      "VISUAL IDENTITY",
      "ART DIRECTION",
      "ILLUSTRATION",
      "MOTION",
      "PACKAGING",
      "EDITORIAL",
    ],
  },
  {
    numeral: "02",
    category: "BUILD",
    headline: "Sites that load fast and hit harder.",
    description:
      "From landing pages to full platforms, we ship modern web experiences that look sharp, feel snappy, and actually move the numbers.",
    tags: [
      "WEB DESIGN",
      "DEVELOPMENT",
      "UX / UI",
      "E-COMMERCE",
      "CMS",
      "PERFORMANCE",
      "SEO",
    ],
  },
  {
    numeral: "03",
    category: "PRINT",
    headline: "Ink that earns its weight.",
    description:
      "Posters, packaging, business cards, books — printed work made with the right paper, the right finishes, and a healthy obsession with the details.",
    tags: [
      "POSTERS",
      "PACKAGING",
      "BUSINESS CARDS",
      "BOOKS",
      "BROCHURES",
      "SIGNAGE",
      "LARGE FORMAT",
    ],
  },
];

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const update = () => {
      const node = containerRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) {
        setActive(0);
        return;
      }
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const progress = scrolled / total;
      const idx =
        progress >= 0.9999
          ? services.length - 1
          : Math.min(services.length - 1, Math.floor(progress * services.length));
      setActive(idx);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#f7f5f0] text-[#262626]"
      style={{ height: `${services.length * 100}vh` }}
      aria-label="Services"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-4 py-10">
        <div className="grid w-full grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
          {/* Left: rotating numeral */}
          <div className="relative hidden h-[55vh] md:block">
            {services.map((s, i) => (
              <span
                key={s.numeral}
                aria-hidden="true"
                className={`absolute inset-0 flex items-center justify-center font-[family-name:var(--font-instrument-serif)] text-[clamp(10rem,28vw,26rem)] leading-none tracking-tight transition-all duration-700 ease-out ${
                  i === active
                    ? "translate-y-0 opacity-100"
                    : i < active
                      ? "-translate-y-6 opacity-0"
                      : "translate-y-6 opacity-0"
                }`}
              >
                {s.numeral}
              </span>
            ))}
          </div>

          {/* Right: heading + swappable card */}
          <div className="flex flex-col">
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05] tracking-tight">
              We think big.
              <br />
              Then make it real.
            </h2>

            <div className="relative mt-10 min-h-[340px] md:mt-14 md:min-h-[300px]">
              {services.map((s, i) => (
                <article
                  key={s.category}
                  aria-hidden={i !== active}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    i === active
                      ? "translate-y-0 opacity-100"
                      : i < active
                        ? "pointer-events-none -translate-y-4 opacity-0"
                        : "pointer-events-none translate-y-4 opacity-0"
                  }`}
                >
                  <p className="text-xs font-semibold tracking-[0.18em] text-[#262626]/70">
                    {s.category}
                  </p>
                  <p className="mt-3 text-[clamp(1.5rem,2.6vw,2.25rem)] font-light leading-tight">
                    {s.headline}
                  </p>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-[#262626]/75">
                    {s.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-[#262626]/25 px-4 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-[#262626]/85"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            {/* Dot indicators */}
            <div className="mt-10 flex items-center gap-2">
              {services.map((s, i) => (
                <span
                  key={s.numeral}
                  aria-label={`${s.category} ${i === active ? "(current)" : ""}`}
                  className={`h-2.5 rounded-full bg-[#262626] transition-all duration-500 ease-out ${
                    i === active ? "w-9 opacity-100" : "w-2.5 opacity-25"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
