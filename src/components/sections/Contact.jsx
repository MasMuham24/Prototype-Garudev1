import { motion } from "motion/react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding scroll-mt-24 border-t border-black/15 py-20 md:py-28"
    >
      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-black/50">
        <span>Contact</span>
        <span>Let's build</span>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.06em]">
            Have a project
            <br />
            in mind<span className="text-folka-blue">?</span>
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-7 text-black/60 md:text-base">
            Tell us what you are building and where you want it to go. We will
            reply within two business days with honest feedback and a clear next
            step.
          </p>

          <a
            href="mailto:hello@folka.studio?subject=Project%20enquiry"
            className="group mt-9 inline-flex items-center gap-3 border-b border-folka-black pb-1.5 font-display text-lg font-bold tracking-tight transition-colors hover:border-folka-blue hover:text-folka-blue sm:text-xl"
          >
            hello@folka.studio
            <ArrowUpRight
              size={20}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="border border-black/15 p-6 sm:p-8"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/45">
            Project enquiry
          </p>

          <ol className="mt-5 space-y-4 text-sm leading-6 text-black/60">
            <li className="flex gap-3">
              <span className="text-[10px] font-bold text-folka-blue">01</span>
              Your business and what you offer.
            </li>
            <li className="flex gap-3">
              <span className="text-[10px] font-bold text-folka-blue">02</span>
              What the website needs to achieve.
            </li>
            <li className="flex gap-3">
              <span className="text-[10px] font-bold text-folka-blue">03</span>
              Timeline, budget range, and any references.
            </li>
          </ol>

          <div className="mt-7 space-y-3 border-t border-black/15 pt-5 text-sm">
            <a
              href="mailto:hello@folka.studio"
              className="flex items-center gap-3 transition-colors hover:text-folka-blue"
            >
              <Mail size={15} className="text-black/40" />
              hello@folka.studio
            </a>

            <p className="flex items-center gap-3 text-black/60">
              <MapPin size={15} className="text-black/40" />
              Jakarta, Indonesia
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-16 flex flex-col gap-3 border-t border-black/15 pt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-black/45 sm:flex-row sm:items-center sm:justify-between">
        <span>Response within 2 business days</span>
        <span>Available for new projects</span>
      </div>
    </section>
  );
}
