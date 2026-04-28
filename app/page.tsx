import RotatingWord from "./rotating-word";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f5f0] text-[#38342e] font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between border-b border-[#38342e]/10 px-4 py-1">
        <span className="text-lg font-semibold tracking-widest uppercase font-[family-name:var(--font-libre-baskerville)]">
          HUGEWORK
        </span>
        <a
          href="#contact"
          className="text-sm font-medium text-[#38342e]/60 transition-colors hover:text-[#38342e]"
        >
          Contact
        </a>
      </nav>

      {/* Hero Video */}
      <div className="relative aspect-[16/5] w-full overflow-hidden bg-[#38342e]/5">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-top"
        >
          <source src="/output_dither.av1.mp4" type="video/mp4" />
        </video>
      </div>

      <section className="px-4 pt-5 pb-8">
        <h1 className="font-[family-name:var(--font-instrument-serif)] text-[clamp(3rem,14vw,11rem)] font-normal leading-none tracking-normal">
          <RotatingWord />
        </h1>
      </section>
    </div>
  );
}
