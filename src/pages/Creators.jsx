import { Wallet, GraduationCap, KeyRound, Home, Target, Lock, Sparkles, ArrowUpRight, ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Aurora from "../components/Aurora";
import ScrollProgress from "../components/ScrollProgress";
import Footer from "../components/Footer";
import { Reveal, SectionLabel, AnimatedHeading } from "../components/ui";
import { SmartLink } from "../lib/SmartLink";

// TODO: replace with the official Google Form URL when available.
const FORM_URL = "#";

const overview = [
  ["Cohort size", "Limited to 20 micro-KOLs"],
  ["Follower range", "2–10K followers to apply"],
  ["Compensation", "₹20,000 / month + Brand Deals"],
  ["Commitment", "3-month Eniac exclusive agreement"],
];

const give = [
  {
    icon: Wallet,
    title: "Stable income",
    desc: "A reliable ₹20,000/month + brand deals so you can focus entirely on improving your craft and consistency.",
  },
  {
    icon: GraduationCap,
    title: "Growth support",
    desc: "Weekly online mentorship and growth sessions — structure hooks, edit efficiently, and command the algorithm.",
  },
  {
    icon: KeyRound,
    title: "VIP access",
    desc: "Skip the cold-outreach phase. Direct access to Eniac's elite client brands, platforms, and top-tier KOL network.",
  },
  {
    icon: Home,
    title: "The finale — Creator House",
    desc: "Month 3 culminates in a potential sponsored Creator House: top retained creators live, trade, and create together.",
  },
];

const expect = [
  { icon: Target, title: "Discipline", desc: "A proven track record of consistency in trading and content creation." },
  { icon: Lock, title: "Exclusivity", desc: "Dedication through a 3-month exclusive bond with Eniac Media and our partner brands." },
  { icon: Sparkles, title: "Ambition", desc: "A genuine desire to learn from experienced voices and scale your digital presence." },
];

export default function Creators() {
  return (
    <div className="relative min-h-screen">
      <Aurora />
      <ScrollProgress />
      <Navbar />

      {/* hero */}
      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44">
        <div className="container-px relative">
          <Reveal>
            <SmartLink to="/" className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-bone">
              <ArrowLeft size={15} /> Back home
            </SmartLink>
            <SectionLabel index="✦">Creators Program</SectionLabel>
          </Reveal>
          <AnimatedHeading
            text="Get paid to grow into a top creator."
            accentWords={["grow"]}
            className="mt-6 max-w-3xl font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-7xl"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-muted">
              A rising crypto, trading, or finance creator? Eniac Media is launching an
              exclusive 3-month acceleration program for a strictly limited cohort of 20
              hungry, disciplined micro-KOLs. Get paid to learn, grow, and build alongside
              the best in Web3.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <a href={FORM_URL} target="_blank" rel="noreferrer" className="btn-primary mt-9">
              Apply for the Creators Graduation Program <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* program overview */}
      <section className="relative py-16">
        <div className="container-px">
          <Reveal>
            <SectionLabel index="(01)">Program overview</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {overview.map(([k, v]) => (
                <div key={k} className="bg-ink-900/60 p-7 backdrop-blur-sm">
                  <div className="label-mono">{k}</div>
                  <div className="mt-3 font-display text-lg font-semibold leading-snug">{v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* what we give */}
      <section className="relative py-16">
        <div className="container-px">
          <Reveal>
            <SectionLabel index="(02)">What we give you</SectionLabel>
            <AnimatedHeading
              text="Real backing, from day one."
              accentWords={["backing"]}
              className="mt-6 max-w-xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {give.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.06}>
                <div className="card h-full p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-lime">
                    <g.icon size={20} />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold">{g.title}</h3>
                  <p className="mt-3 text-sm text-muted">{g.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* what we expect */}
      <section className="relative py-16">
        <div className="container-px">
          <Reveal>
            <SectionLabel index="(03)">What we expect from you</SectionLabel>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {expect.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.06}>
                <div className="card h-full p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-lime">
                    <e.icon size={20} />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-semibold">{e.title}</h3>
                  <p className="mt-3 text-sm text-muted">{e.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* apply CTA */}
      <section className="relative py-24">
        <div className="container-px">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-800/40 p-10 text-center backdrop-blur-sm sm:p-16">
              <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-lime/15 blur-[120px]" />
              <div className="relative">
                <span className="label-mono">First cohort · 20 spots</span>
                <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                  Ready to elevate your brand with real industry backing?
                </h2>
                <p className="mx-auto mt-5 max-w-md text-muted">
                  We're actively scouting our first 20 spots. If you fit the profile,
                  register your interest below.
                </p>
                <a href={FORM_URL} target="_blank" rel="noreferrer" className="btn-primary mt-9">
                  Apply for the Creators Graduation Program <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
