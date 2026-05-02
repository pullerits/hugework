"use client";

import { useState } from "react";

type Review = {
  name: string;
  role: string;
  quote: string;
  tagline: string;
};

const reviews: Review[] = [
  {
    name: "Amie Schneider",
    role: "Founder / Social Graces",
    tagline: "Üksteist kümnest.",
    quote:
      "HUGEWORK tõi meie brändi päriselt ellu. Nad ei teinud ainult ilusat kujundust, vaid aitasid kogu identiteedi, veebikogemuse ja turunduse ühte süsteemi siduda.",
  },
  {
    name: "Marco Vidal",
    role: "CMO / Northwind Studio",
    tagline: "Täpne ja äriliselt selge.",
    quote:
      "Tulime üsna lahtise ideega ja saime lõpuks identiteedi, veebilehe ning kampaaniasuuna, mis sobis meie müügiprotsessiga. Väga tugev strateegiline partner.",
  },
  {
    name: "Priya Anand",
    role: "Founder / Lumen Coffee",
    tagline: "Iga detail oli läbi mõeldud.",
    quote:
      "Pakenditest trükimaterjalideni oli kõik järjepidev. Kliendid pildistavad meie tooteid, sest bränd mõjub lõpuks nii digis kui päriselus ühtsena.",
  },
  {
    name: "Daniel Stokes",
    role: "Director / Field & Co.",
    tagline: "Aus nõu ja tugev teostus.",
    quote:
      "Nad kuulasid, küsisid ebamugavaid küsimusi ja viisid lõpuks idee täpselt sellisele tasemele, mida investoritele ja klientidele näidata tahtsime.",
  },
];

export default function ReviewsSection() {
  const [idx, setIdx] = useState(0);
  const total = reviews.length;
  const review = reviews[idx];

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  return (
    <section
      className="bg-[#f7f5f0] px-4 py-20 text-[#262626] md:px-8 md:py-28 lg:px-16 xl:px-24"
      aria-label="Klientide tagasiside"
    >
      <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05] tracking-tight">
        Mida kliendid ütlevad
      </h2>

      <div className="-mx-2 mt-12 flex items-stretch gap-2 md:mx-0 md:gap-4">
        <button
          type="button"
          aria-label="Eelmine tagasiside"
          onClick={prev}
          className="flex w-10 shrink-0 items-center justify-center rounded-full border border-[#262626]/25 text-xl text-[#262626]/70 transition-colors hover:border-[#181818] hover:bg-[#181818] hover:text-white md:w-14"
        >
          <span aria-hidden="true">←</span>
        </button>

        <article className="grid min-h-[520px] flex-1 grid-cols-1 gap-8 rounded-3xl bg-[#181818] p-8 text-white md:min-h-[420px] md:grid-cols-[260px_1fr] md:gap-12 md:p-12 lg:p-14">
          <div className="flex flex-col">
            <p className="font-[family-name:var(--font-instrument-serif)] text-3xl italic leading-tight text-white md:text-4xl">
              &ldquo;{review.tagline}&rdquo;
            </p>
            <div className="mt-auto pt-8">
              <p className="font-semibold tracking-tight">{review.name}</p>
              <p className="mt-1 text-sm text-white/55">{review.role}</p>
            </div>
          </div>
          <blockquote className="text-base leading-relaxed text-white/85 md:text-lg">
            &ldquo;{review.quote}&rdquo;
          </blockquote>
        </article>

        <button
          type="button"
          aria-label="Järgmine tagasiside"
          onClick={next}
          className="flex w-10 shrink-0 items-center justify-center rounded-full border border-[#262626]/25 text-xl text-[#262626]/70 transition-colors hover:border-[#181818] hover:bg-[#181818] hover:text-white md:w-14"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}
