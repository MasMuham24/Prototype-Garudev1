import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Nusa Coffee",
    category: "Food & Beverage / Concept Website",
    year: "2026",
    note: "Warm, editorial site for a neighborhood roastery.",
    theme: {
      wrapper: "bg-[#F1EDE5]",
      accent: "bg-[#C77F64]",
      text: "text-[#252722]",
      brand: "NUSA COFFEE.",
      headline: (
        <>
          A LITTLE
          <br />
          TASTE OF
          <br />
          HAPPINESS.
        </>
      ),
      kicker: "Coffee / Culture / Community",
    },
  },
  {
    name: "Garu Build",
    category: "Construction / Company Profile",
    year: "2025",
    note: "Direct, confident presentation for a growing contractor.",
    theme: {
      wrapper: "bg-[#252722]",
      accent: "bg-[#5266A5]",
      text: "text-[#F1EDE5]",
      brand: "GARU BUILD.",
      headline: (
        <>
          BUILT
          <br />
          TO LAST.
        </>
      ),
      kicker: "Design / Build / Deliver",
    },
  },
  {
    name: "Loka Skincare",
    category: "Beauty / E-commerce Concept",
    year: "2025",
    note: "Calm, ingredient-led storefront for a local label.",
    theme: {
      wrapper: "bg-[#A8B49E]",
      accent: "bg-[#F1EDE5]",
      text: "text-[#252722]",
      brand: "LOKA.",
      headline: (
        <>
          SIMPLE
          <br />
          CARE,
          <br />
          DAILY.
        </>
      ),
      kicker: "Skin / Ritual / Balance",
    },
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding scroll-mt-24 border-t border-black/15 py-20 md:py-28"
    >
      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-black/50">
        <span>Selected work</span>
        <span>04 / 05</span>
      </div>

      <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-4xl md:text-5xl">
          Projects built with a purpose, not just a look.
        </h2>

        <a
          href="#contact"
          className="inline-flex w-fit items-center gap-2 border-b border-folka-black pb-1 text-xs font-bold uppercase tracking-wider transition-colors hover:border-folka-blue hover:text-folka-blue"
        >
          Start your project
          <ArrowUpRight size={14} />
        </a>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="group"
          >
            <div className="overflow-hidden rounded-sm border border-black/10 bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-black/10">
              <div className="flex h-8 items-center justify-between border-b border-black/10 px-3">
                <div className="flex gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-black/15" />
                  <span className="h-1.5 w-1.5 rounded-full bg-black/15" />
                  <span className="h-1.5 w-1.5 rounded-full bg-black/15" />
                </div>
                <span className="text-[8px] text-black/35">
                  {project.name.toLowerCase().replace(/\s+/g, "")}.example
                </span>
              </div>

              <div className={`${project.theme.wrapper} p-4`}>
                <div
                  className={`flex items-center justify-between ${project.theme.text}`}
                >
                  <span className="font-display text-[11px] font-extrabold tracking-tight">
                    {project.theme.brand}
                  </span>
                  <span className="text-[7px] font-semibold uppercase tracking-[0.2em]">
                    Menu &nbsp; About
                  </span>
                </div>

                <div
                  className={`relative mt-3 flex aspect-[1.4] flex-col justify-center overflow-hidden p-5 ${project.theme.accent} ${
                    project.name === "Garu Build"
                      ? "text-[#F1EDE5]"
                      : "text-[#252722]"
                  }`}
                >
                  <span className="text-[7px] font-bold uppercase tracking-[0.22em]">
                    {project.theme.kicker}
                  </span>

                  <p className="mt-2 font-display text-2xl font-extrabold leading-[0.9] tracking-[-0.06em] sm:text-3xl">
                    {project.theme.headline}
                  </p>

                  <span className="mt-3 w-fit border-b border-current pb-0.5 text-[7px] font-bold uppercase">
                    View project ↗
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-bold tracking-tight">
                  {project.name}
                </h3>
                <p className="mt-1 text-xs text-black/50">{project.category}</p>
                <p className="mt-2 max-w-xs text-xs leading-5 text-black/45">
                  {project.note}
                </p>
              </div>

              <span className="text-xs text-black/40">{project.year}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
