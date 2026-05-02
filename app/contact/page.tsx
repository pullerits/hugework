import SiteNav from "../site-nav";

const contactMethods = [
  {
    label: "E-post",
    value: "hello@hugework.studio",
    href: "mailto:hello@hugework.studio",
  },
  {
    label: "Telefon",
    value: "+372 5555 0101",
    href: "tel:+37255550101",
  },
  {
    label: "Asukoht",
    value: "Tallinn / tööd üle Eesti",
    href: null,
  },
];

const inquiryPoints = [
  "Millist brändi, veebilahendust, kampaaniat või füüsilist teostust vajad?",
  "Mis on projekti eesmärk ja soovitud ajaraam?",
  "Kas sul on olemas brändimaterjalid, veeb, turunduskanalid või trükifailid?",
];

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f5f0] text-[#262626] font-sans">
      <SiteNav />

      <main className="flex flex-1 flex-col">
        <section className="grid flex-1 grid-cols-1 gap-12 px-4 py-16 md:grid-cols-[1fr_0.8fr] md:px-8 md:py-24 lg:px-16 xl:px-24">
          <div>
            <h1 className="max-w-5xl text-[clamp(3.5rem,12vw,9rem)] font-light leading-[0.95] tracking-tight">
              Alustame sinu ettevõtte uut peatükki.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#262626]/75 md:text-lg">
              Kirjuta meile ideest, eesmärgist või probleemist, mida lahendada
              tahad. Esmalt kaardistame vajaduse, seejärel paneme kokku selge
              tegevussuuna ja pakkumise.
            </p>
          </div>

          <div className="self-end rounded-lg bg-[#181818] p-6 text-white md:p-8">
            <h2 className="text-3xl font-light tracking-tight">
              Päringu jaoks on kasulik teada
            </h2>
            <ul className="mt-8 space-y-5 text-sm leading-relaxed text-white/72 md:text-base">
              {inquiryPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-3 px-4 pb-20 md:grid-cols-3 md:px-8 md:pb-28 lg:px-16 xl:px-24">
          {contactMethods.map((method) => (
            <article
              key={method.label}
              className="rounded-lg border border-[#262626]/12 p-6 md:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#262626]/55">
                {method.label}
              </p>
              {method.href ? (
                <a
                  href={method.href}
                  className="mt-4 block text-2xl font-light tracking-tight transition-opacity hover:opacity-60"
                >
                  {method.value}
                </a>
              ) : (
                <p className="mt-4 text-2xl font-light tracking-tight">
                  {method.value}
                </p>
              )}
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
