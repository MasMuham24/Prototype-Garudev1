import { ArrowUp, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="section-padding border-t border-black/15 bg-folka-cream pb-10 pt-16">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a
            href="#top"
            className="font-display text-4xl font-extrabold uppercase tracking-[-0.06em] sm:text-5xl"
          >
            Folka<span className="text-folka-blue">.</span>
          </a>

          <p className="mt-5 max-w-sm text-sm leading-7 text-black/55">
            Independent digital studio building websites for businesses ready to
            grow.
          </p>
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/45">
            Navigate
          </p>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {[
              ["Services", "#services"],
              ["Projects", "#projects"],
              ["About", "#about"],
              ["Process", "#process"],
            ].map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="transition-colors hover:text-folka-blue"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/45">
            Get in touch
          </p>
          <a
            href="mailto:hello@folka.studio"
            className="mt-4 inline-flex items-center gap-2 border-b border-folka-black pb-1 text-sm font-semibold transition-colors hover:border-folka-blue hover:text-folka-blue"
          >
            hello@folka.studio
            <ArrowUpRight size={14} />
          </a>

          <p className="mt-5 text-sm text-black/55">
            Jakarta, Indonesia
            <br />
            Working worldwide
          </p>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-4 border-t border-black/15 pt-5 text-[10px] font-bold uppercase tracking-wider sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Folka Studio. All rights reserved.</span>

        <div className="flex items-center gap-6">
          <a href="#contact" className="transition-colors hover:text-folka-blue">
            Instagram
          </a>
          <a href="#contact" className="transition-colors hover:text-folka-blue">
            LinkedIn
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-folka-blue"
          >
            Back to top
            <ArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
