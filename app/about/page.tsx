import Link from "next/link";
import SiteFooter from "../site-footer";
import SiteNav from "../site-nav";

const principles = [
  {
    title: "Strateegia enne vormi",
    copy: "Kaardistame turu, sihtrühma ja ärieesmärgi enne, kui hakkame visuaale või tehnoloogiat lukustama.",
  },
  {
    title: "Üks partner kogu teekonnal",
    copy: "Bränd, veeb, turundus, trükk ja paigaldus liiguvad samas süsteemis, mitte eraldi alltöövõtjate vahel.",
  },
  {
    title: "Detailid loevad lõpuni",
    copy: "Tüpograafia, laadimiskiirus, materjalivalik ja paigalduse täpsus mõjutavad sama palju kui suur idee.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f5f0] text-[#262626] font-sans">
      <SiteNav />

      <main>
        <section className="grid grid-cols-1 gap-12 px-4 py-16 md:grid-cols-[1fr_0.8fr] md:px-8 md:py-24 lg:px-16 xl:px-24">
          <div>
            <h1 className="max-w-4xl text-[clamp(3.5rem,10vw,8rem)] font-light leading-[0.95] tracking-tight">
              Kogemus, mis muudab ideed toimivaks ärivaraks.
            </h1>
          </div>

          <div className="max-w-xl self-end space-y-5 text-base leading-relaxed text-[#262626]/78 md:text-lg">
            <p>
              HUGEWORKi tugevus on üle kümne aasta kogemust disaini,
              turunduse, veebi ja trükimaailma ristumiskohas. Me ei vaata
              brändi ainult logona ega veebilehte ainult ekraanina.
            </p>
            <p>
              Meie roll on olla strateegiline partner: küsida õiged küsimused,
              luua selge süsteem ja viia see ellu nii digis kui füüsilises
              ruumis.
            </p>
          </div>
        </section>

        <section className="px-4 py-16 md:px-8 md:py-24 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {principles.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-[#262626]/12 p-6 md:p-8"
              >
                <h2 className="text-2xl font-light tracking-tight">
                  {item.title}
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-[#262626]/70 md:text-base">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-10 px-4 py-16 md:grid-cols-[0.8fr_1fr] md:px-8 md:py-24 lg:px-16 xl:px-24">
          <p className="font-[family-name:var(--font-instrument-serif)] text-[clamp(5rem,16vw,14rem)] leading-none">
            10+
          </p>
          <div className="max-w-2xl self-center">
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05] tracking-tight">
              Aastat praktilist kogemust.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#262626]/75 md:text-lg">
              Oleme aidanud ettevõtetel lansseerida, kasvada, rebrändida ja
              muuta oma nähtavus ühtseks kogemuseks. Ambitsioon on olulisem kui
              ettevõtte suurus.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-[#181818] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-80"
            >
              Räägime sinu projektist
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
