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
    category: "BRÄNDING",
    headline: "Identiteet, mis ei kao mürasse.",
    description:
      "Loome visuaalseid identiteete, CVI-süsteeme, illustratsioone ja kampaaniamaterjale, mis annavad brändile selge hääle ning aitavad turul eristuda.",
    tags: [
      "LOGOD",
      "CVI",
      "VISUAALNE IDENTITEET",
      "ILLUSTRATSIOON",
      "PAKENDID",
      "ART DIRECTION",
    ],
  },
  {
    numeral: "02",
    category: "VEEB",
    headline: "Kiired veebid, mis töötavad müügikanalina.",
    description:
      "Disainime ja arendame maandumislehti, kodulehti, e-poode ja sisuhalduslahendusi, mille fookus on kasutajakogemusel, kiirusel ja mõõdetaval tulemusel.",
    tags: [
      "VEEBIDISAIN",
      "ARENDUS",
      "UX / UI",
      "E-KAUBANDUS",
      "CMS",
      "KIIRUS",
      "SEO",
    ],
  },
  {
    numeral: "03",
    category: "TURUNDUS",
    headline: "Strateegia, mis viib brändi õigete inimesteni.",
    description:
      "Planeerime digiturundust, SEO-d, kampaaniaid ja sisu nii, et iga kanal toetaks ühtset brändi ning iga eelarve-euro oleks põhjendatud.",
    tags: [
      "STRATEEGIA",
      "SEO",
      "GOOGLE ADS",
      "SOTSIAALMEEDIA",
      "COPYWRITING",
      "ANALÜÜTIKA",
    ],
  },
  {
    numeral: "04",
    category: "TRÜKK",
    headline: "Füüsiline teostus, mis kannab brändi päris maailmas.",
    description:
      "Toodame trükiseid, erilahendusi, sõidukigraafikat, riidebrändingut, kleebiseid ja ruumigraafikat koos täpse paigaldusega üle Eesti.",
    tags: [
      "DIGITRÜKK",
      "SUURFORMAAT",
      "KLEEBISED",
      "SÕIDUKID",
      "RIIETUS",
      "PAIGALDUS",
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
      aria-label="Teenused"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-4 py-10 md:px-8 lg:px-16 xl:px-24">
        <div className="grid w-full grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
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

          <div className="flex flex-col">
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05] tracking-tight">
              Mõtleme tervikuna.
              <br />
              Teostame lõpuni.
            </h2>

            <div className="relative mt-10 min-h-[380px] md:mt-14 md:min-h-[320px]">
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

            <div className="mt-10 flex items-center gap-2">
              {services.map((s, i) => (
                <span
                  key={s.numeral}
                  aria-label={`${s.category} ${i === active ? "(aktiivne)" : ""}`}
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
