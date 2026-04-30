"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";

type Project = {
  name: string;
  tags: string[];
  bg: string;
  logo: string;
  logoClass: string;
  logoStyle?: CSSProperties;
};

const projects: Project[] = [
  {
    name: "Altar",
    tags: ["BRANDING", "ILLUSTRATION", "STRATEGY", "VISUAL IDENTITY"],
    bg: "radial-gradient(120% 80% at 30% 30%, #c46b3a 0%, #7a3320 55%, #2d1410 100%)",
    logo: "Altar.",
    logoClass:
      "font-[family-name:var(--font-instrument-serif)] text-white/95 italic",
    logoStyle: { fontSize: "clamp(3rem, 7vw, 5rem)" },
  },
  {
    name: "Farm Rio",
    tags: ["BRANDING", "WEB", "MOTION", "CAMPAIGN"],
    bg: "linear-gradient(115deg, #f0a5d3 0%, #b06bd6 45%, #4f3aa1 100%)",
    logo: "FARM RIO",
    logoClass: "text-white tracking-tight",
    logoStyle: { fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 300 },
  },
  {
    name: "Rivers",
    tags: ["IDENTITY", "PRINT", "EDITORIAL"],
    bg: "linear-gradient(180deg, #f1ece1 0%, #d8cfbb 100%)",
    logo: "R",
    logoClass:
      "font-[family-name:var(--font-instrument-serif)] text-[#2c2418] italic",
    logoStyle: { fontSize: "clamp(8rem, 18vw, 14rem)", lineHeight: 1 },
  },
  {
    name: "Moon Lab",
    tags: ["WEB", "DEVELOPMENT", "UX/UI"],
    bg: "radial-gradient(80% 80% at 70% 30%, #2d3358 0%, #0d1024 70%)",
    logo: "◐ moon lab",
    logoClass: "text-white tracking-[0.15em]",
    logoStyle: { fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 300 },
  },
  {
    name: "Pulse",
    tags: ["CAMPAIGN", "MOTION", "ART DIRECTION"],
    bg: "linear-gradient(135deg, #ff5e3a 0%, #d61a76 60%, #5b1166 100%)",
    logo: "PULSE/",
    logoClass: "text-white tracking-tight",
    logoStyle: { fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700 },
  },
  {
    name: "Loop",
    tags: ["PACKAGING", "PRINT", "BRANDING"],
    bg: "linear-gradient(160deg, #b9d4a3 0%, #5d8466 60%, #1f3a2a 100%)",
    logo: "loop",
    logoClass: "text-white",
    logoStyle: {
      fontSize: "clamp(3rem, 7vw, 5.5rem)",
      fontWeight: 300,
      letterSpacing: "-0.04em",
    },
  },
];

export default function ProjectsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({
    active: false,
    pointerId: -1,
    startX: 0,
    startScroll: 0,
    moved: false,
  });
  const targetIdx = useRef(0);
  const wheelLockUntil = useRef(0);
  const [active, setActive] = useState(0);

  const goToCard = (idx: number) => {
    const node = trackRef.current;
    if (!node) return;
    const first = node.firstElementChild as HTMLElement | null;
    if (!first) return;
    const gap = parseFloat(getComputedStyle(node).columnGap || "0") || 0;
    const stride = first.offsetWidth + gap;
    if (stride <= 0) return;
    const clamped = Math.max(0, Math.min(projects.length - 1, idx));
    targetIdx.current = clamped;
    const max = node.scrollWidth - node.clientWidth;
    const target = Math.max(0, Math.min(max, clamped * stride));
    node.scrollTo({ left: target, behavior: "smooth" });
  };

  const settleToNearest = () => {
    const node = trackRef.current;
    if (!node) return;
    const first = node.firstElementChild as HTMLElement | null;
    if (!first) return;
    const gap = parseFloat(getComputedStyle(node).columnGap || "0") || 0;
    const stride = first.offsetWidth + gap;
    if (stride <= 0) return;
    const idx = Math.round(node.scrollLeft / stride);
    goToCard(idx);
  };

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    // Leave touch alone — native horizontal scroll already feels right
    if (e.pointerType === "touch") return;
    const node = trackRef.current;
    if (!node) return;
    node.setPointerCapture(e.pointerId);
    drag.current = {
      active: true,
      pointerId: e.pointerId,
      startX: e.clientX,
      startScroll: node.scrollLeft,
      moved: false,
    };
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!drag.current.active || drag.current.pointerId !== e.pointerId) return;
    const node = trackRef.current;
    if (!node) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    node.scrollLeft = drag.current.startScroll - dx;
  };

  const endDrag = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (drag.current.pointerId !== e.pointerId) return;
    const node = trackRef.current;
    if (!node) return;
    if (node.hasPointerCapture(e.pointerId)) {
      node.releasePointerCapture(e.pointerId);
    }
    const wasMoved = drag.current.moved;
    drag.current.active = false;
    // Magnet to the nearest card after the drag ends
    if (wasMoved) settleToNearest();
    // Clear "moved" on next tick so the swallowing click handler still sees it
    window.setTimeout(() => {
      drag.current.moved = false;
    }, 0);
  };

  // One wheel notch advances exactly one card. A short cooldown prevents a
  // rapid scroll from blowing through the whole row at once. Edge wheels pass
  // through so the page keeps scrolling vertically.
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      const node = trackRef.current;
      if (!node) return;
      const target = e.target as Node | null;
      if (!target || !node.contains(target)) return;

      // Trackpad horizontal swipe — let the carousel scroll natively
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      const delta = e.deltaY;
      if (delta === 0) return;

      const lastIdx = projects.length - 1;
      const direction = delta > 0 ? 1 : -1;
      const current = targetIdx.current;
      if (
        (direction < 0 && current <= 0) ||
        (direction > 0 && current >= lastIdx)
      ) {
        // At the edge in the wheel's direction — let the page scroll
        return;
      }

      e.preventDefault();

      const now = performance.now();
      if (now < wheelLockUntil.current) return;
      wheelLockUntil.current = now + 450;

      goToCard(current + direction);
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  // Track active card from scroll position
  useEffect(() => {
    const node = trackRef.current;
    if (!node) return;
    const onScroll = () => {
      const first = node.firstElementChild as HTMLElement | null;
      if (!first) return;
      const cardW = first.offsetWidth;
      const gap = parseFloat(getComputedStyle(node).columnGap || "0") || 0;
      const idx = Math.round(node.scrollLeft / (cardW + gap));
      const clamped = Math.min(projects.length - 1, Math.max(0, idx));
      setActive(clamped);
      // Keep the wheel's notion of "current card" in sync with reality, but
      // not during a wheel-driven smooth animation (it would clobber itself).
      if (performance.now() >= wheelLockUntil.current) {
        targetIdx.current = clamped;
      }
    };
    onScroll();
    node.addEventListener("scroll", onScroll, { passive: true });
    return () => node.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="bg-[#f7f5f0] py-20 text-[#262626] md:py-28"
      aria-label="Selected work"
    >
      <div className="flex items-end justify-between gap-6 px-4">
        <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05] tracking-tight">
          Our greatest hits.
        </h2>
        <p className="hidden text-sm text-[#262626]/60 md:block">
          Drag, scroll, or swipe →
        </p>
      </div>

      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={(e) => {
          if (drag.current.moved) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
        className="mt-10 flex cursor-grab gap-4 overflow-x-auto overscroll-x-contain px-4 pb-4 select-none active:cursor-grabbing [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((p) => (
          <article
            key={p.name}
            className="relative aspect-[4/5] w-[82vw] shrink-0 overflow-hidden rounded-2xl shadow-[0_20px_60px_-30px_rgba(0,0,0,0.4)] sm:w-[60vw] md:aspect-[5/6] md:w-[480px] lg:w-[520px]"
            style={{ background: p.bg }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={p.logoClass} style={p.logoStyle}>
                {p.logo}
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-5 text-white">
              <h3 className="text-2xl font-light tracking-tight">{p.name}</h3>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-white/35 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em]"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 px-4">
        {projects.map((p, i) => (
          <span
            key={p.name}
            aria-hidden="true"
            className={`h-1.5 rounded-full bg-[#262626] transition-all duration-300 ${
              i === active ? "w-8 opacity-100" : "w-1.5 opacity-25"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
