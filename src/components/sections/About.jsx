import { motion } from "motion/react";
import ScrollReveal from "../../component/ScrollReveal";

const facts = [
  { value: "2021", label: "Studio founded" },
  { value: "40+", label: "Projects shipped" },
  { value: "12", label: "Industries served" },
  { value: "100%", label: "Client-first process" },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding scroll-mt-24 border-t border-black/15 py-20 md:py-28"
    >
      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-black/50">
        <span>About the studio</span>
        <span>02 / 05</span>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-folka-blue">
            Small team, serious craft
          </p>

          <ScrollReveal
            mode="scrub"
            splitBy="words"
            effect="rise"
            stagger={0.04}
            smoothing={0.2}
            baseOpacity={0.16}
            baseRotation={0}
            enableBlur
            blurStrength={3}
            highlightColor="#5266A5"
            containerClassName="about-reveal max-w-3xl"
          >
            We design websites that look sharp and work hard.
          </ScrollReveal>

          <div className="mt-7 max-w-2xl space-y-4 text-sm leading-7 text-black/60 md:text-base">
            <p>
              Folka is an independent studio helping small businesses and growing
              brands build a digital presence that feels intentional.
            </p>
            <p>
              Every project starts with questions, not templates. We learn how
              your business works, then design a website around real goals:
              clearer offers, stronger trust, and more qualified enquiries.
            </p>
            <p>
              Design and development sit in the same room. That means fewer
              handoffs, faster decisions, and a final product that matches the
              plan down to the last detail.
            </p>
          </div>

          <a
            href="#process"
            className="mt-9 inline-flex items-center gap-2 border-b border-folka-black pb-1 text-xs font-bold uppercase tracking-wider transition-colors hover:border-folka-blue hover:text-folka-blue"
          >
            See how we work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="grid grid-cols-2 gap-px border border-black/15 bg-black/15"
        >
          {facts.map((fact) => (
            <div key={fact.label} className="bg-folka-cream p-6 sm:p-8">
              <p className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                {fact.value}
              </p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-black/50">
                {fact.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-black/15 pt-6 text-[10px] font-bold uppercase tracking-[0.18em] text-black/45">
        <span>Strategy</span>
        <span>Identity</span>
        <span>Web design</span>
        <span>Development</span>
        <span>Launch support</span>
      </div>
    </section>
  );
}
