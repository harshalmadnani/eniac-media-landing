import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionLabel, AnimatedHeading } from "./ui";
import { kols, categories } from "../data/network";

function Chip({ k }) {
  const [failed, setFailed] = useState(false);
  const initials = k.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return (
    <a
      href={k.href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-3 whitespace-nowrap rounded-full border border-white/10 bg-ink-800/60 py-2 pl-2 pr-4 transition-colors hover:border-lime/50"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full bg-ink-700">
        {failed ? (
          <span className="font-display text-sm font-semibold text-lime">{initials}</span>
        ) : (
          <img src={k.img} alt={k.name} loading="lazy" onError={() => setFailed(true)} className="h-full w-full object-cover" />
        )}
      </span>
      <span className="text-sm font-medium text-bone">{k.name}</span>
      <ArrowUpRight size={14} className="text-muted transition-colors group-hover:text-lime" />
    </a>
  );
}

function Row({ items, reverse }) {
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className={`flex w-max gap-4 pr-4 ${reverse ? "animate-marquee-rev" : "animate-marquee"}`}>
        {[...items, ...items].map((k, i) => (
          <Chip key={i} k={k} />
        ))}
      </div>
    </div>
  );
}

export default function Influencers() {
  const half = Math.ceil(kols.length / 2);
  return (
    <section id="network" className="relative py-24 sm:py-32">
      <div className="container-px">
        <Reveal>
          <SectionLabel index="(05)">The Network</SectionLabel>
          <AnimatedHeading
            text="A classified network of 2,000+ creators."
            accentWords={["2,000+"]}
            className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
          />
          <p className="mt-5 max-w-xl text-muted">
            Handpicked KOLs across global and regional markets — selected by niche fit and
            community quality. Tap any creator to view their socials.
          </p>
        </Reveal>

        {/* classification cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* clickable KOL marquees */}
      <Reveal delay={0.1}>
        <div className="mt-12 flex flex-col gap-4">
          <Row items={kols.slice(0, half)} />
          <Row items={kols.slice(half)} reverse />
        </div>
      </Reveal>
    </section>
  );
}
