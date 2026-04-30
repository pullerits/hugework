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
    tagline: "Eleven out of ten.",
    quote:
      "The HUGEWORK team is hands down an 11 out of 10. Professional, enthusiastic, and very experienced. They started with us over two years ago and completely brought our brand to life. They've not only sharpened our identity but continue to evolve it as trends change. Their consulting and advice have been priceless.",
  },
  {
    name: "Marco Vidal",
    role: "CMO / Northwind Studio",
    tagline: "Sharp, fast, and on-brief.",
    quote:
      "We came in with a vague idea and walked out with a full identity, a site that actually converts, and a team that genuinely cared about the outcome. Worth every penny — twice over.",
  },
  {
    name: "Priya Anand",
    role: "Founder / Lumen Coffee",
    tagline: "Every detail, sweated.",
    quote:
      "From packaging to the print campaign, every detail was sweated. Our customers literally photograph the cups. That's the kind of work that pays for itself, and then some.",
  },
  {
    name: "Daniel Stokes",
    role: "Director / Field & Co.",
    tagline: "Zero ego. All output.",
    quote:
      "Fast, sharp, and zero ego. They listened, pushed back when it mattered, and delivered work that made our investors sit up in their chairs. We'll be back for round two.",
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
      className="bg-[#f7f5f0] px-4 py-20 text-[#262626] md:py-28"
      aria-label="Client reviews"
    >
      <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05] tracking-tight">
        What our clients are saying
      </h2>

      <div className="-mx-2 mt-12 flex items-stretch gap-2 md:mx-0 md:gap-4">
        <button
          type="button"
          aria-label="Previous review"
          onClick={prev}
          className="flex w-10 shrink-0 items-center justify-center rounded-full border border-[#262626]/25 text-xl text-[#262626]/70 transition-colors hover:border-[#262626] hover:bg-[#262626] hover:text-white md:w-14"
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
          aria-label="Next review"
          onClick={next}
          className="flex w-10 shrink-0 items-center justify-center rounded-full border border-[#262626]/25 text-xl text-[#262626]/70 transition-colors hover:border-[#262626] hover:bg-[#262626] hover:text-white md:w-14"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>

    </section>
  );
}
