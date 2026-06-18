import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Users, Radio, Calendar, Building2, ArrowUpRight, ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TokenCoin from "../components/TokenCoin";
import Sparkline from "../components/Sparkline";
import { Reveal, SectionLabel, AnimatedHeading, CountUp } from "../components/ui";
import { SmartLink } from "../lib/SmartLink";
import { cases, totals } from "../data/cases";

const filters = ["All", "Pump", "Push"];

const stats = [
  { label: "Total volume driven", to: 3.2, suffix: "M+", prefix: "$", dec: true },
  { label: "Campaigns delivered", to: 250, suffix: "+" },
  { label: "Avg. price change", to: 52, suffix: "%", prefix: "+" },
  { label: "New holders", to: 50, suffix: "K+" },
];

function Metric({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-2">
      <Icon size={14} className="text-lime" />
      <span className="text-xs text-muted">{label}</span>
      <span className="ml-auto text-xs font-semibold text-bone">{value}</span>
    </div>
  );
}

export default function Work() {
  const [active, setActive] = useState("All");
  const list = active === "All" ? cases : cases.filter((c) => c.type === active);

  return (
    <div className="relative min-h-screen bg-ink-900">
      <Navbar />

      {/* header */}
      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-lime/10 blur-[150px]" />
        <div className="container-px relative">
          <Reveal>
            <SmartLink
              to="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-bone"
            >
              <ArrowLeft size={15} /> Back home
            </SmartLink>
            <SectionLabel index="(04)">Case studies</SectionLabel>
          </Reveal>
          <AnimatedHeading
            text="Campaigns that moved markets."
            accentWords={["moved", "markets"]}
            className="mt-6 max-w-3xl font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-7xl"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-muted">
              A selection of pump and push campaigns — each one measured by real price
              action, trading volume, and net new holders.
            </p>
          </Reveal>

          {/* totals */}
          <Reveal delay={0.15}>
            <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-ink-900 px-6 py-8 text-center">
                  <div className="font-display text-4xl font-bold text-bone sm:text-5xl">
                    {s.prefix}
                    {s.dec ? s.to.toFixed(1) : <CountUp to={s.to} />}
                    {s.suffix}
                  </div>
                  <div className="mt-2 text-xs text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* filters + grid */}
      <section className="relative pb-28">
        <div className="container-px">
          <div className="mb-10 flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                  active === f
                    ? "border-lime bg-lime text-white"
                    : "border-white/10 text-muted hover:border-white/30 hover:text-bone"
                }`}
              >
                {f}
                {f !== "All" && (
                  <span className="ml-2 text-xs opacity-60">
                    {cases.filter((c) => c.type === f).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((c) => (
                <motion.article
                  key={c.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6 }}
                  className="card group flex flex-col overflow-hidden p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <TokenCoin token={c.token} img={c.img} size={42} />
                      <div>
                        <div className="font-display text-lg font-semibold leading-none">
                          {c.token}
                        </div>
                        <div className="mt-1 text-xs text-muted">{c.name}</div>
                      </div>
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-wider text-muted">
                      {c.type}
                    </span>
                  </div>

                  <div className="mt-5 flex items-end justify-between">
                    <div className="flex items-center gap-1.5 font-display text-3xl font-bold text-lime">
                      <TrendingUp size={22} /> {c.change}
                    </div>
                    <span className="text-xs text-muted">{c.duration}</span>
                  </div>

                  <div className="my-5 h-14">
                    <Sparkline data={c.series} height={56} />
                  </div>

                  <p className="text-sm text-muted">{c.summary}</p>

                  <div className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                    <Metric icon={TrendingUp} label="Volume" value={c.volume} />
                    <Metric icon={Users} label="New holders" value={c.holders} />
                    <Metric icon={Radio} label="KOLs activated" value={c.kols} />
                    <Metric icon={Building2} label="Exchange" value={c.exchange} />
                    <Metric icon={Calendar} label="Timeline" value={c.date} />
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA */}
          <Reveal delay={0.1}>
            <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-ink-800/60 p-8 text-center sm:flex-row sm:text-left">
              <div>
                <h3 className="font-display text-2xl font-semibold">
                  Your token could be the next case study.
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Tell us your goals — we'll show you what we'd ship in week one.
                </p>
              </div>
              <SmartLink to="#contact" className="btn-primary shrink-0">
                Book a strategy call <ArrowUpRight size={16} />
              </SmartLink>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
