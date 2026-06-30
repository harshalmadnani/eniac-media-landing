import { useState } from "react";
import { ArrowUpRight, ArrowLeft, ArrowUpRight as Ext } from "lucide-react";
import Navbar from "../components/Navbar";
import Aurora from "../components/Aurora";
import ScrollProgress from "../components/ScrollProgress";
import Footer from "../components/Footer";
import { Reveal, SectionLabel, AnimatedHeading, CountUp } from "../components/ui";
import { SmartLink } from "../lib/SmartLink";
import { kols, categories, clients, events } from "../data/network";

const stats = [
  { to: 50, suffix: "+", label: "Brands served" },
  { to: 100, suffix: "M+", label: "Impressions" },
  { to: 2000, suffix: "+", label: "KOLs & creators" },
  { to: 20, suffix: "+", label: "Events hosted" },
];

function KolCard({ k }) {
  const [failed, setFailed] = useState(false);
  const initials = k.name.split(" ").map((w) => w[0]).slice(0, 2).join("");
  return (
    <a
      href={k.href}
      target="_blank"
      rel="noreferrer"
      className="card group flex items-center gap-3 p-3 hover:border-lime/40"
    >
      <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full bg-ink-700">
        {failed ? (
          <span className="font-display text-sm font-semibold text-lime">{initials}</span>
        ) : (
          <img src={k.img} alt={k.name} loading="lazy" onError={() => setFailed(true)} className="h-full w-full object-cover" />
        )}
      </span>
      <span className="min-w-0">
        <span className="block truncate font-display text-sm font-semibold">{k.name}</span>
        <span className="text-xs text-muted">{k.platform}</span>
      </span>
      <Ext size={15} className="ml-auto text-muted transition-colors group-hover:text-lime" />
    </a>
  );
}

function EventCard({ e }) {
  return (
    <div className="card group overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={e.img} alt={e.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-5">
          <div className="font-display text-lg font-semibold">{e.name}</div>
          <div className="mt-1 text-xs text-muted">with {e.partner}</div>
        </div>
      </div>
    </div>
  );
}

export default function WhyUs() {
  return (
    <div className="relative min-h-screen">
      <Aurora />
      <ScrollProgress />
      <Navbar />

      {/* hero */}
      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-lime/10 blur-[150px]" />
        <div className="container-px relative">
          <Reveal>
            <SmartLink to="/" className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-bone">
              <ArrowLeft size={15} /> Back home
            </SmartLink>
            <SectionLabel index="✦">Why Choose Eniac Media</SectionLabel>
          </Reveal>
          <AnimatedHeading
            text="Built for Web3 Growth. Trusted by Industry Leaders."
            accentWords={["Growth", "Leaders"]}
            className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-7xl"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-muted">
              Helping Web3 projects scale through influencer marketing, user acquisition,
              community growth, exchange partnerships, and strategic execution.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-ink-900/60 px-6 py-8 text-center backdrop-blur-sm">
                  <div className="font-display text-4xl font-bold sm:text-5xl">
                    <CountUp to={s.to} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-xs text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* clients */}
      <section className="relative py-16">
        <div className="container-px">
          <Reveal>
            <SectionLabel index="(01)">Our Clients</SectionLabel>
            <AnimatedHeading
              text="The brands that trust us."
              accentWords={["trust"]}
              className="mt-6 max-w-xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-5">
              {clients.map((src, i) => (
                <div key={i} className="grid aspect-[3/2] place-items-center bg-ink-900/60 p-6 backdrop-blur-sm">
                  <img src={src} alt="Client logo" loading="lazy" className="max-h-10 w-auto opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* KOL network */}
      <section className="relative py-16">
        <div className="container-px">
          <Reveal>
            <SectionLabel index="(02)">Global KOL Network</SectionLabel>
            <AnimatedHeading
              text="Creators your audience already trusts."
              accentWords={["trusts"]}
              className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
            />
            <p className="mt-5 max-w-xl text-muted">Tap any creator to open their socials.</p>
          </Reveal>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {kols.map((k, i) => (
              <Reveal key={k.name + i} delay={(i % 3) * 0.05}>
                <KolCard k={k} />
              </Reveal>
            ))}
          </div>

          {/* classification */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="card h-full p-6">
                  <div className="font-mono text-xs text-lime">{c.stat}</div>
                  <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{c.title}</h3>
                  <p className="mt-3 text-sm text-muted">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* events */}
      <section className="relative py-16">
        <div className="container-px">
          <Reveal>
            <SectionLabel index="(03)">Our Past Events</SectionLabel>
            <AnimatedHeading
              text="Experiences that build communities."
              accentWords={["communities"]}
              className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
            />
            <p className="mt-5 max-w-xl text-muted">
              From the Trade &amp; Chill series and EmpowerFi to Token2049 and MetaMask
              activations — connecting brands with real users.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((e, i) => (
              <Reveal key={e.name} delay={(i % 3) * 0.05}>
                <EventCard e={e} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="container-px">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-800/40 p-10 text-center backdrop-blur-sm sm:p-16">
              <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-lime/15 blur-[120px]" />
              <h2 className="relative mx-auto max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                Ready to scale your Web3 project?
              </h2>
              <p className="relative mx-auto mt-5 max-w-md text-muted">
                Book a strategy call and discover how Eniac Media can accelerate your growth.
              </p>
              <SmartLink to="#contact" className="btn-primary mt-9">
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
