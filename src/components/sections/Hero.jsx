import { motion } from "motion/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import TechText from "../../component/TechText";
import HoloCard from "../../component/HoloCard";
import nusaCoffeePreview from "../../assets/nusa-coffee-preview.svg";

export default function Hero() {
  return (
    <section className="section-padding relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden pb-8 pt-8">
      {/* Top information */}
      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider md:text-xs">
        <span>Independent Digital Studio</span>
        <span className="hidden sm:block">Digital Presence, Built Better.</span>
        <span>Indonesia / 2026</span>
      </div>

      <h1 className="relative">
        <span className="sr-only">Garudev</span>
        <div
          aria-hidden="true"
          className="relative h-[clamp(7rem,27vw,25rem)] w-full"
        >
          <TechText
            text="Garudev"
            fontFamily="Manrope, sans-serif"
            fontWeight={800}
            fontSize={272}
            letterSpacing={-0.095}
            align="left"
            color="#252722"
            accentColor="#5266A5"
            reveal="letter"
            dashLength={4}
            dashGap={2}
            specks={15}
            intro="assemble"
            introDuration={2.4}
            clickKick
            guides={false}
          />
        </div>
      </h1>

      {/* Description and project preview */}
      <div className="relative mt-10 grid flex-1 gap-10 md:mt-0 md:grid-cols-2 md:items-start">
        {/* Left description */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start justify-between gap-8 pt-4 md:pt-16"
        >
          <div>
            <p className="max-w-xl font-display text-2xl font-medium leading-[1.35] tracking-tight sm:text-3xl md:text-4xl">
              Building digital experiences for businesses ready to grow.
            </p>

            <p className="mt-5 max-w-md text-sm leading-7 text-black/55 md:text-base">
              Kami membantu UMKM dan bisnis membangun kehadiran digital melalui
              website yang dirancang dengan strategi, estetika, dan tujuan.
            </p>
          </div>

          <a
            href="#about"
            className="group inline-flex items-center gap-2 border-b border-folka-black pb-1 text-xs font-bold uppercase tracking-wide transition-colors hover:border-folka-blue hover:text-folka-blue"
          >
            Learn more about us
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>

        {/* Floating project preview */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="relative z-10 mx-auto w-full max-w-[440px] md:-mt-32 md:mr-[8%] md:ml-auto"
        >
          <div className="flex justify-center">
            <HoloCard
              image={nusaCoffeePreview}
              alt="Nusa Coffee concept website preview"
              preset="gold"
              width={440}
              radius={6}
              intensity={0.62}
              scale={0.9}
              edgeSparkle={0.7}
              frame={4}
              glare={0.4}
              foilColor="#e2d4b8"
              tiltMax={16}
              hoverScale={1.03}
            />
          </div>

          {/* Project caption */}
          <div className="mt-4 flex justify-between text-xs">
            <div>
              <p className="font-semibold">Nusa Coffee</p>
              <p className="mt-0.5 text-black/50">
                Concept Website / Food & Beverage
              </p>
            </div>

            <span className="text-black/40">2026</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom information */}
      <div className="mt-14 flex items-center justify-between border-t border-black/15 pt-5 text-[10px] font-bold uppercase tracking-wider md:mt-16 md:text-xs">
        <span>Design / Develop / Launch</span>

        <a
          href="#services"
          className="flex items-center gap-2 transition-colors hover:text-folka-blue"
        >
          Scroll to explore
          <ArrowDownRight size={15} />
        </a>
      </div>
    </section>
  );
}
