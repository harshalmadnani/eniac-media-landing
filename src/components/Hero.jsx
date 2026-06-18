import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { SmartLink } from "../lib/SmartLink";

const Scene3D = lazy(() => import("./Scene3D"));

const word = {
  hidden: { opacity: 0, y: "0.8em" },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.3, delay: 0.2 + i * 0.13, ease: [0.16, 1, 0.3, 1] },
  }),
};

const headline = [
  { t: "We", accent: false },
  { t: "drive", accent: false },
  { t: "real", accent: false },
  { t: "token", accent: false },
  { t: "growth", accent: true },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* ambient glows */}
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-lime/10 blur-[160px]" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-[360px] w-[360px] rounded-full bg-mint/10 blur-[140px]" />

      {/* 3D centerpiece behind the text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[80vh] w-full max-w-[1000px] opacity-80">
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </div>
      </div>
      {/* contrast scrim so the headline stays readable over the 3D */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_center,rgba(8,9,11,0.72)_0%,rgba(8,9,11,0)_70%)]" />

      <div className="container-px relative flex min-h-[100svh] flex-col items-center justify-center pt-28 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-ink-900/60 px-4 py-1.5 text-xs text-muted backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
          </span>
          Crypto-native marketing · Live in 24–48h
        </motion.div>

        <h1 className="mt-8 max-w-5xl font-display text-[15vw] font-bold leading-[0.9] tracking-tight sm:text-7xl lg:text-[7.5rem]">
          <span className="flex flex-wrap justify-center gap-x-5">
            {headline.map((w, i) => (
              <span key={i} className="overflow-hidden pb-[0.08em]">
                <motion.span
                  variants={word}
                  custom={i}
                  initial="hidden"
                  animate="show"
                  className={`inline-block ${w.accent ? "text-lime" : ""}`}
                >
                  {w.t}
                </motion.span>
              </span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-7 max-w-xl text-balance text-base text-muted sm:text-lg"
        >
          Not one-off hype. Data-driven influencer campaigns, exchange partnerships,
          and community engineering that grow volume and cultivate long-term holders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <SmartLink to="#contact" className="btn-primary w-full sm:w-auto">
            Book a strategy call <ArrowUpRight size={16} />
          </SmartLink>
          <SmartLink to="/work" className="btn-ghost w-full bg-ink-900/40 backdrop-blur-md sm:w-auto">
            <Download size={16} /> View case studies
          </SmartLink>
        </motion.div>
      </div>

      {/* operating principle strip (valid.co-style) */}
      <div className="relative border-y border-white/10 bg-ink-900/60 backdrop-blur-md">
        <div className="container-px flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl font-display text-lg text-bone/90 sm:text-xl">
            Reach makes the volume.{" "}
            <span className="text-muted">Volume sharpens the next campaign.</span>{" "}
            Every loop compounds your token's growth.
          </p>
          <span className="label-mono shrink-0">— The Eniac operating principle</span>
        </div>
      </div>
    </section>
  );
}
