import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Strategy & Discovery",
    description:
      "We map your audience, offers, and goals before a single pixel moves. Clear direction saves time and money later.",
    items: ["Positioning", "Content structure", "Competitor review"],
  },
  {
    number: "02",
    title: "Web Design",
    description:
      "Distinctive layouts built around your brand. Every screen is designed for readability, trust, and a clear next step.",
    items: ["Wireframes", "UI design", "Responsive layouts"],
  },
  {
    number: "03",
    title: "Web Development",
    description:
      "Fast, accessible, maintainable builds. Clean code that works across devices and is easy for your team to update.",
    items: ["React & Vite", "CMS integration", "Performance tuning"],
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We handle the technical details of going live, then stay available for fixes, tweaks, and the next round of growth.",
    items: ["Deployment", "Analytics setup", "Ongoing care"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding scroll-mt-24 border-t border-black/15 py-20 md:py-28"
    >
      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-black/50">
        <span>What we do</span>
        <span>03 / 05</span>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-end">
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-4xl md:text-5xl">
          Four steps from idea to a website that earns attention.
        </h2>

        <p className="max-w-md text-sm leading-7 text-black/60 md:justify-self-end md:text-base">
          Whether you need a new site or a rebuild, the process stays focused on
          what moves your business forward.
        </p>
      </div>

      <div className="mt-14 border-t border-black/15">
        {services.map((service, index) => (
          <motion.article
            key={service.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="group grid gap-5 border-b border-black/15 py-8 transition-colors hover:bg-black/[0.03] md:grid-cols-[4rem_1.1fr_1.4fr] md:gap-8 md:py-10"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-folka-blue">
              {service.number}
            </span>

            <h3 className="flex items-start justify-between gap-4 font-display text-2xl font-bold tracking-tight md:text-[1.7rem]">
              {service.title}
              <ArrowUpRight
                size={20}
                className="mt-1 shrink-0 text-black/25 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-folka-blue"
              />
            </h3>

            <div>
              <p className="max-w-xl text-sm leading-7 text-black/60">
                {service.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="border border-black/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black/55"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
