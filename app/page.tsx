import Link from "next/link";
import ProjectsSection from "./projects-section";
import ReviewsSection from "./reviews-section";
import RotatingWord from "./rotating-word";
import ServicesSection from "./services-section";
import SiteFooter from "./site-footer";
import SiteNav from "./site-nav";
import StatsSection from "./stats-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f5f0] text-[#262626] font-sans">
      <SiteNav />

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

      <section className="px-4 pt-16 pb-10 md:px-8 md:pt-12 md:pb-8 lg:px-16 xl:px-24">
        <h1 className="font-[family-name:var(--font-instrument-serif)] text-[clamp(5.5rem,24vw,11rem)] font-normal leading-none tracking-normal">
          <RotatingWord />
        </h1>
      </section>

      <section className="grid grid-cols-1 items-center gap-10 px-4 py-20 md:grid-cols-[1fr_auto] md:gap-16 md:px-8 md:py-28 lg:px-16 xl:px-24">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(2.25rem,5vw,3.75rem)] font-light leading-[1.05] tracking-tight text-[#262626]">
            Visuaalne intelligentsus.
            <br />
            Strateegiline elluviimine.
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-[#262626]/85 md:text-lg">
            <p>
              Oleme loovagentuur, mis seob maailmatasemel disaini,
              tehnoloogia, turunduse ja füüsilise teostuse üheks terviklikuks
              brändikogemuseks.
            </p>
            <p>
              Alates esimesest brändistrateegiast ja veebiplatvormist kuni
              viimase paigaldatud detailini juhime protsessi nii, et idee ei
              jääks ainult ilusaks kavandiks, vaid hakkaks äri kasvatama.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-[#181818] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-80"
            >
              Alusta projektiga
            </Link>
            <Link
              href="/works"
              className="rounded-full border border-[#262626]/25 px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition-colors hover:border-[#181818] hover:bg-[#181818] hover:text-white"
            >
              Vaata töid
            </Link>
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

      <SiteFooter />
    </div>
  );
}
