export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-black/5">
        <span className="text-sm font-semibold tracking-widest uppercase">
          HUGEWORK
        </span>
        <a
          href="#contact"
          className="text-sm font-medium text-black/60 hover:text-black transition-colors"
        >
          Contact
        </a>
      </nav>

      {/* Hero Video */}
      <div className="relative w-full aspect-[16/5] overflow-hidden bg-black/5">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-top"
        >
          <source src="/output_dither.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Action Row */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-black/5">
        <div className="flex items-center gap-3">
          <a
            href="#work"
            className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-xs font-medium hover:bg-black/[.03] transition-colors"
          >
            <span className="text-[10px]">+</span> Our Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-black/10 px-4 py-2 text-xs font-medium hover:bg-black/[.03] transition-colors"
          >
            Get In Touch
          </a>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-black/50">
          <span className="inline-block w-8 h-4 rounded-full bg-black/80 relative">
            <span className="absolute right-0.5 top-0.5 w-3 h-3 rounded-full bg-white" />
          </span>
          Available Now
        </div>
      </div>

      {/* Headline */}
      <div className="px-6 pt-10 pb-6">
        <h1 className="max-w-2xl text-4xl sm:text-5xl font-medium leading-[1.1] tracking-tight">
          We Design, Build & Print
          <br />
          Everything Your Brand
          <br />
          Needs To Stand Out
        </h1>
      </div>

      {/* Service Descriptions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 pt-4 pb-16 border-t border-black/5">
        <div className="pt-6">
          <p className="text-xs leading-relaxed text-black/50">
            From brand identity systems to campaign visuals, we craft designs
            that communicate clearly and leave a lasting impression. Every pixel
            is intentional, every layout considered.
          </p>
        </div>
        <div className="pt-6">
          <p className="text-xs leading-relaxed text-black/50">
            We build fast, responsive websites and web applications tailored to
            your goals. Clean code, modern frameworks, and seamless user
            experiences — from landing pages to full-scale platforms.
          </p>
        </div>
        <div className="pt-6">
          <p className="text-xs leading-relaxed text-black/50">
            Business cards, packaging, large-format banners, and beyond. We
            handle the full print pipeline — from prepress preparation to
            final production — so your brand looks sharp in the real world.
          </p>
        </div>
      </div>
    </div>
  );
}
