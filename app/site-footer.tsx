const footerLinks = ["Instagram", "LinkedIn", "Newsletter"];

const offices = [
  {
    city: "Tallinn",
    address: "Rotermanni 8, 10111 Tallinn",
  },
  {
    city: "Helsinki",
    address: "Mannerheimintie 12, 00100 Helsinki",
  },
];

const gravityLetters = [
  { char: "h", className: "gravity-letter gravity-letter-0" },
  { char: "u", className: "gravity-letter gravity-letter-1" },
  { char: "g", className: "gravity-letter gravity-letter-2" },
  { char: "e", className: "gravity-letter gravity-letter-3" },
  { char: "w", className: "gravity-letter gravity-letter-4" },
  { char: "o", className: "gravity-letter gravity-letter-5" },
  { char: "r", className: "gravity-letter gravity-letter-6" },
  { char: "k", className: "gravity-letter gravity-letter-7" },
];

export default function SiteFooter() {
  return (
    <footer
      id="contact"
      className="relative flex min-h-screen flex-col overflow-hidden bg-[#f7f5f0] px-4 pt-20 text-[#050505] md:pt-24"
      aria-label="Contact"
    >
      <div className="grid flex-1 grid-cols-1 gap-12 md:grid-cols-[1.1fr_0.9fr_1fr] md:gap-16">
        <div className="flex flex-col justify-between gap-16">
          <div>
            <p className="max-w-[9ch] text-[clamp(3.75rem,8vw,7rem)] font-black uppercase leading-[0.82] tracking-tight">
              Let&apos;s make huge work
            </p>
          </div>
          <p className="text-xs uppercase tracking-normal">
            © All right reserved. 2026 Hugework
          </p>
        </div>

        <div className="grid content-start gap-16 text-xs uppercase leading-relaxed md:pt-1">
          <div>
            <a className="block hover:opacity-55" href="mailto:hello@hugework.studio">
              hello@hugework.studio
            </a>
            <a className="block hover:opacity-55" href="mailto:job@hugework.studio">
              job@hugework.studio
            </a>
            <a className="block hover:opacity-55" href="tel:+37255550101">
              +372 5555 0101
            </a>
          </div>

          <nav aria-label="Social links">
            {footerLinks.map((link) => (
              <a key={link} className="block hover:opacity-55" href="#">
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className="grid content-start gap-16 text-xs uppercase leading-relaxed md:pt-1">
          {offices.map((office) => (
            <address key={office.city} className="not-italic">
              <p className="text-base font-black leading-none">
                <span aria-hidden="true">→ </span>
                {office.city}
              </p>
              <p className="mt-2">{office.address}</p>
            </address>
          ))}
        </div>
      </div>

      <div
        className="pointer-events-none relative -mx-4 mt-2 h-[clamp(18rem,30vw,34rem)] shrink-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-x-0 bottom-[-0.18em] flex items-end justify-center px-[1vw] font-[family-name:var(--font-instrument-serif)] text-[clamp(8.5rem,27vw,31rem)] font-normal lowercase leading-[0.72] tracking-normal">
          {gravityLetters.map((letter) => (
            <span key={`${letter.char}-${letter.className}`} className={letter.className}>
              {letter.char}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
