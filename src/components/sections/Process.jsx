import ScrollStack, { ScrollStackItem } from "../../component/ScrollStack";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start with a conversation about your business, audience, and what a successful website needs to achieve.",
    detail: "Kickoff call, goals, references, content audit",
  },
  {
    number: "02",
    title: "Define",
    description:
      "Findings become a clear plan: sitemap, page priorities, messaging direction, and a realistic timeline.",
    detail: "Scope, sitemap, wireframe direction",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We design the full experience, review it with you, and refine until the layout feels right on every screen.",
    detail: "Visual design, responsive review, revisions",
  },
  {
    number: "04",
    title: "Build & Launch",
    description:
      "Development follows the approved design. We test, polish, deploy, and hand over a site your team can manage.",
    detail: "Development, QA, deployment, handover",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="section-padding scroll-mt-24 border-t border-black/15 py-20 md:py-28"
    >
      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-black/50">
        <span>How we work</span>
        <span>05 / 05</span>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-end">
        <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-4xl md:text-5xl">
          A process with no guesswork and no surprises.
        </h2>

        <p className="max-w-md text-sm leading-7 text-black/60 md:justify-self-end md:text-base">
          Most projects run four to six weeks. You always know what stage we are
          in, what comes next, and what we need from you.
        </p>
      </div>

      <ScrollStack
        className="mt-14"
        itemDistance={120}
        itemStackDistance={18}
        stackPosition="18%"
        itemScale={0.05}
        baseScale={0.92}
        dimAmount={0.12}
        holdDistance={220}
        smoothScroll={false}
        useWindowScroll
      >
        {steps.map((step, index) => (
          <ScrollStackItem key={step.number}>
            <div className="flex h-full flex-col justify-between gap-8">
              <div>
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em]">
                  <span className="text-folka-blue">{step.number}</span>
                  <span className="text-black/35">
                    Step {index + 1} / {steps.length}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
                  {step.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-black/60 sm:text-base">
                  {step.description}
                </p>
              </div>

              <p className="border-t border-black/15 pt-4 text-[10px] font-bold uppercase tracking-[0.14em] text-black/45">
                {step.detail}
              </p>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>

      <div className="mt-10 flex flex-col gap-4 border border-folka-black bg-folka-black p-6 text-folka-cream sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <p className="font-display text-xl font-bold tracking-tight sm:text-2xl">
            Not sure where your project fits?
          </p>
          <p className="mt-1 text-sm text-folka-cream/65">
            Send a short brief. We will reply with a clear next step.
          </p>
        </div>

        <a
          href="#contact"
          className="inline-flex w-fit items-center justify-center border border-folka-cream px-5 py-3 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-folka-cream hover:text-folka-black"
        >
          Book a free call
        </a>
      </div>
    </section>
  );
}
