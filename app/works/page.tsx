import SiteFooter from "../site-footer";
import SiteNav from "../site-nav";
import WorksGrid from "./works-grid";

export default function WorksPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f5f0] text-[#262626] font-sans">
      <SiteNav />

      <main>
        <section className="px-4 pt-16 pb-10 md:px-8 md:pt-24 md:pb-16 lg:px-16 xl:px-24">
          <h1 className="max-w-5xl text-[clamp(3.5rem,12vw,9rem)] font-light leading-[0.95] tracking-tight">
            Brändid, veebid ja füüsilised lahendused, mis töötavad koos.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#262626]/75 md:text-lg">
            Meie töö algab ideest, aga ei lõpe kujundusfailiga. Loome süsteeme,
            mis jõuavad veebilehele, kampaaniasse, pakendile, sõidukile,
            vaateaknale ja kliendi igapäevasesse kogemusse.
          </p>
        </section>

        <WorksGrid />
      </main>

      <SiteFooter />
    </div>
  );
}
