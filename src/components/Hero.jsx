import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { SmartLink } from "../lib/SmartLink";
import ErrorBoundary from "./ErrorBoundary";
import { DECKS_URL } from "../data/network";

const Scene3D = lazy(() => import("./Scene3D"));

function VisualFallback() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="h-48 w-48 animate-pulseglow rounded-full bg-[radial-gradient(circle,rgba(139,92,255,0.5),transparent_70%)] blur-2xl" />
      <img
        src="/brand/eniac-icon.png"
        alt=""
        aria-hidden
        className="absolute h-20 w-20 animate-floaty opacity-90"
      />
    </div>
  );
}

const word = {
  hidden: { opacity: 0, y: "0.7em" },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, delay: 0.15 + i * 0.09, ease: [0.16, 1, 0.3, 1] },
  }),
};

const headline = [
  { t: "The", accent: false },
  { t: "World's", accent: false },
  { t: "Leading", accent: false },
  { t: "Web3", accent: true },
  { t: "Marketing", accent: false },
  { t: "&", accent: false },
  { t: "Growth", accent: true },
  { t: "Agency", accent: false },
];

const stats = [
  ["3,000+", "KOL partners"],
  ["500K+", "Users acquired"],
  ["50+", "Brands served"],
  ["20+", "Countries"],
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-px relative grid min-h-[100svh] items-center gap-12 pt-32 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-28">
        {/* left: copy */}
        <div className="relative z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-muted backdrop-blur-md lg:mx-0"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            Web3 marketing &amp; growth agency
          </motion.div>

          <h1 className="mt-7 font-display text-[11vw] font-semibold leading-[1] tracking-[-0.02em] sm:text-5xl lg:text-[4.25rem]">
            <span className="flex flex-wrap justify-center gap-x-[0.28em] lg:justify-start">
              {headline.map((w, i) => (
                <span key={i} className="overflow-hidden pb-[0.06em]">
                  <motion.span
                    variants={word}
                    custom={i}
                    initial="hidden"
                    animate="show"
                    className={`inline-block ${w.accent ? "text-gradient" : ""}`}
                  >
                    {w.t}
                  </motion.span>
                </span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto mt-7 max-w-lg text-balance text-base text-muted sm:text-lg lg:mx-0"
          >
            KOL Marketing · PR · Social Media · User Acquisition · Token Launches
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.62 }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:items-start"
          >
            <SmartLink to="#contact" className="btn-primary w-full sm:w-auto">
              Book a strategy call <ArrowUpRight size={16} />
            </SmartLink>
            <a
              href={DECKS_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost w-full sm:w-auto"
            >
              <Download size={16} /> View decks
            </a>
          </motion.div>

          {/* trust stats */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mx-auto mt-12 grid max-w-md grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-4 sm:max-w-none lg:mx-0"
          >
            {stats.map(([n, l]) => (
              <div key={l} className="text-center lg:text-left">
                <dt className="font-display text-2xl font-bold sm:text-3xl">{n}</dt>
                <dd className="mt-1 text-xs text-muted">{l}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* right: contained 3D panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[42vh] min-h-[320px] lg:h-[72vh]"
        >
          <div className="gradient-border relative h-full w-full overflow-hidden rounded-[28px] border border-white/10 bg-ink-800/30 backdrop-blur-sm">
            <div className="halftone absolute inset-0 opacity-[0.12]" />
            <VisualFallback />
            <ErrorBoundary fallback={null}>
              <Suspense fallback={null}>
                <Scene3D />
              </Suspense>
            </ErrorBoundary>
            {/* floating status chip */}
            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-ink-900/60 px-3 py-1.5 text-[11px] text-muted backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" /> 2,000+ KOLs · live network
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
