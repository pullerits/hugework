"use client";

import { useState, type ReactNode } from "react";

type Stat = {
  illustration: ReactNode;
  percent: string;
  copy: string;
};

const stats: Stat[] = [
  {
    illustration: <CardsIllustration />,
    percent: "70%",
    copy: "ettevõtetest kaotab kehva kasutajakogemuse tõttu müügivõimalusi.",
  },
  {
    illustration: <ScaleIllustration />,
    percent: "94%",
    copy: "esmamuljest kujuneb disaini põhjal. Teist esimest korda ei tule.",
  },
  {
    illustration: <DaisyIllustration />,
    percent: "86%",
    copy: "ostjatest maksab rohkem brändi eest, millega tekib päris side.",
  },
  {
    illustration: <PencilIllustration />,
    percent: "75%",
    copy: "kasutajatest hindab ettevõtte usaldusväärsust disaini järgi.",
  },
];

export default function StatsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      className="bg-[#f7f5f0] px-4 py-14 text-[#262626] md:px-8 md:py-20 lg:px-16 xl:px-24"
      aria-label="Why design matters"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05] tracking-tight">
          Numbrid ei valeta.
        </h2>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-1.5 sm:grid-cols-2 md:gap-2">
        {stats.map((s, i) => {
          const revealed = hovered === i;
          return (
            <article
              key={s.percent}
              tabIndex={0}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered((h) => (h === i ? null : h))}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered((h) => (h === i ? null : h))}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-[#0f0f0f] p-2 text-white outline-none focus-visible:ring-2 focus-visible:ring-[#262626]/40 md:aspect-[5/4]"
            >
              <div className="absolute inset-x-0 bottom-0 px-6 pt-4 pb-5 text-center">
                <p className="font-[family-name:var(--font-instrument-serif)] text-3xl leading-none md:text-4xl">
                  {s.percent}
                </p>
                <p className="mx-auto mt-1 max-w-sm text-xs text-white/65 md:text-sm">
                  {s.copy}
                </p>
              </div>

              <div
                className={`absolute top-2 right-2 left-2 z-10 flex items-center justify-center overflow-hidden rounded-xl bg-[#181818] px-6 transition-[bottom] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  revealed
                    ? "bottom-[6.75rem] md:bottom-[7.25rem]"
                    : "bottom-2"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center text-white/70"
                >
                  <span className="hidden max-md:block">
                    <EyeIcon open={true} />
                  </span>
                  <span className="hidden md:block">
                    <EyeIcon open={revealed} />
                  </span>
                </span>

                {s.illustration}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function EyeIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7S2.5 12 2.5 12z" />
        <circle cx="12" cy="12" r="2.6" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M3 13c2.5 2.5 5.5 4 9 4s6.5-1.5 9-4" />
      <path d="M5 15.5l-1.2 1.6" />
      <path d="M9 17.2l-.5 1.9" />
      <path d="M15 17.2l.5 1.9" />
      <path d="M19 15.5l1.2 1.6" />
    </svg>
  );
}

function CardsIllustration() {
  return (
    <svg
      viewBox="0 0 220 160"
      className="h-auto w-[58%] max-w-[260px]"
      aria-hidden="true"
    >
      <g fill="#ffffff">
        <rect x="14" y="10" width="56" height="140" rx="6" />
        <rect x="82" y="10" width="56" height="140" rx="6" />
        <rect x="150" y="10" width="56" height="140" rx="6" />
      </g>
      <circle cx="42" cy="80" r="11" fill="#181818" />
      <g fill="#181818">
        <rect x="96" y="56" width="28" height="8" rx="2" />
        <rect x="96" y="76" width="28" height="8" rx="2" />
        <rect x="96" y="96" width="28" height="8" rx="2" />
      </g>
      <circle cx="178" cy="80" r="11" fill="#181818" />
    </svg>
  );
}

function ScaleIllustration() {
  return (
    <svg
      viewBox="0 0 220 160"
      className="h-auto w-[62%] max-w-[280px]"
      aria-hidden="true"
    >
      <g fill="#5a5a5a">
        <path d="M30 78 Q55 66 80 78 L70 96 Q55 102 40 96 Z" />
        <path d="M140 78 Q165 66 190 78 L180 96 Q165 102 150 96 Z" />
        <rect x="105" y="76" width="10" height="40" rx="1" />
        <path d="M85 122 L135 122 L120 138 L100 138 Z" />
        <rect x="30" y="74" width="160" height="2" rx="1" />
      </g>
      <line
        x1="55"
        y1="76"
        x2="55"
        y2="60"
        stroke="#5a5a5a"
        strokeWidth="1.5"
      />
      <line
        x1="165"
        y1="76"
        x2="165"
        y2="60"
        stroke="#5a5a5a"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function DaisyIllustration() {
  const petals = Array.from({ length: 8 }, (_, i) => i);
  return (
    <svg
      viewBox="0 0 200 200"
      className="h-auto w-[55%] max-w-[240px]"
      aria-hidden="true"
    >
      <g transform="translate(100 100)" fill="#5a5a5a">
        {petals.map((i) => (
          <ellipse
            key={i}
            cx="0"
            cy="-50"
            rx="14"
            ry="38"
            transform={`rotate(${i * 45})`}
          />
        ))}
      </g>
      <circle cx="100" cy="100" r="26" fill="#7a7a7a" />
      <circle cx="92" cy="96" r="2.6" fill="#181818" />
      <circle cx="108" cy="96" r="2.6" fill="#181818" />
      <path
        d="M90 106 Q100 116 110 106"
        stroke="#181818"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function PencilIllustration() {
  return (
    <svg
      viewBox="0 0 240 160"
      className="h-auto w-[64%] max-w-[280px]"
      aria-hidden="true"
    >
      <path
        d="M10 120 Q60 100 110 120 T210 120"
        stroke="#5a5a5a"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <g transform="translate(140 30) rotate(35)">
        <rect x="0" y="0" width="22" height="80" fill="#7a7a7a" />
        <rect x="0" y="0" width="22" height="14" fill="#5a5a5a" />
        <rect x="2" y="14" width="18" height="3" fill="#3a3a3a" />
        <polygon points="0,80 22,80 11,100" fill="#d0d0d0" />
        <polygon points="6,92 16,92 11,100" fill="#181818" />
      </g>
    </svg>
  );
}
