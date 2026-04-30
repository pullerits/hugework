import ProjectsSection from "./projects-section";
import ReviewsSection from "./reviews-section";
import RotatingWord from "./rotating-word";
import ServicesSection from "./services-section";
import StatsSection from "./stats-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f5f0] text-[#262626] font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between border-b border-[#262626]/10 px-4 py-1">
        <span className="text-lg font-semibold tracking-widest uppercase font-[family-name:var(--font-libre-baskerville)]">
          HUGEWORK
        </span>
        <a
          href="#contact"
          className="text-sm font-medium text-[#262626]/60 transition-colors hover:text-[#262626]"
        >
          Contact
        </a>
      </nav>

      {/* Hero Video */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#262626]/5 sm:aspect-[16/9] md:aspect-[16/5]">
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

      <section className="px-4 pt-16 pb-10 md:pt-12 md:pb-8">
        <h1 className="font-[family-name:var(--font-instrument-serif)] text-[clamp(5.5rem,24vw,11rem)] font-normal leading-none tracking-normal">
          <RotatingWord />
        </h1>
      </section>

      {/* Welcome section */}
      <section className="grid grid-cols-1 items-center gap-10 px-4 py-20 md:grid-cols-[1fr_auto] md:gap-16 md:py-28">
        <div className="max-w-xl">
          <h2 className="text-[clamp(2.25rem,5vw,3.75rem)] font-light leading-[1.05] tracking-tight text-[#262626]">
            Welcome to
            <br />
            the HUGEWORK house.
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-[#262626]/85 md:text-lg">
            <p>
              We&apos;re your creative partner for bold moves and big
              ideas, across design, web, and print.
            </p>
            <p>
              From startups to standouts, we craft work that connects,
              sparks emotion, and actually makes things happen.
            </p>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="hidden font-[family-name:var(--font-libre-baskerville)] text-[clamp(10rem,22vw,20rem)] font-normal leading-none tracking-tighter text-[#262626] md:block"
        >
          H
        </div>
      </section>

      <ServicesSection />

      <ProjectsSection />

      <ReviewsSection />

      <StatsSection />
    </div>
  );
}
