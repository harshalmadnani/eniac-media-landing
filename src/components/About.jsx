import { Target, Eye } from "lucide-react";
import { Reveal, SectionLabel, CountUp, AnimatedHeading } from "./ui";

const stats = [
  { to: 100, suffix: "+", label: "Successful campaigns" },
  { to: 5, suffix: "+", label: "Years of experience" },
  { to: 500, suffix: "K+", label: "Users acquired" },
  { to: 3000, suffix: "+", label: "KOL partnerships" },
  { to: 20, suffix: "+", label: "Countries reached" },
  { to: 10, suffix: "+", label: "Top-tier exchange clients" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-px">
        <Reveal>
          <SectionLabel index="(01)">About Eniac</SectionLabel>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <AnimatedHeading
              text="A leading Web3 marketing & growth agency."
              accentWords={["growth"]}
              className="max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
            />
            <p className="mt-6 max-w-xl text-muted">
              ENIAC Media is trusted by 50+ blockchain, crypto, and fintech brands worldwide.
              We help exchanges, protocols, AI projects, and trading ecosystems accelerate
              growth through strategic marketing, creator partnerships, community building,
              and performance-driven campaigns — from leaders like Binance, Bybit, MEXC,
              Bitget, and CoinDCX to protocols like Covalent, Arcana, Router Protocol, and
              MIND AI.
            </p>
          </div>

          <div className="grid gap-4 lg:col-span-5">
            <Reveal delay={0.05}>
              <div className="card p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-lime/15 text-lime">
                    <Target size={18} />
                  </span>
                  <h3 className="font-display text-lg font-semibold">Our Mission</h3>
                </div>
                <p className="mt-4 text-sm text-muted">
                  Empowering Web3 growth through creative strategies, powerful storytelling,
                  and trusted influence.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="card p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-mint/15 text-mint">
                    <Eye size={18} />
                  </span>
                  <h3 className="font-display text-lg font-semibold">Our Vision</h3>
                </div>
                <p className="mt-4 text-sm text-muted">
                  To become the go-to partner for Web3 brands seeking impactful marketing
                  and global reach.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* stat band */}
        <Reveal delay={0.1}>
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-ink-900 px-5 py-9 text-center">
                <div className="font-display text-4xl font-bold text-bone sm:text-5xl">
                  <CountUp to={s.to} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-xs text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
