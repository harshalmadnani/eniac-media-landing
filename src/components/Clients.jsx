import { Reveal, SectionLabel, AnimatedHeading } from "./ui";
import { clients } from "../data/network";

export default function Clients() {
  return (
    <section id="clients" className="relative py-24 sm:py-32">
      <div className="container-px">
        <Reveal>
          <SectionLabel index="✦">Our Clients</SectionLabel>
          <AnimatedHeading
            text="Partners. Platforms. Clients."
            accentWords={["Clients."]}
            className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
          />
          <p className="mt-5 max-w-xl text-muted">
            From global exchanges to emerging Web3 protocols — the brands that trust ENIAC
            Media to drive their growth.
          </p>
        </Reveal>

        {/* logo collage wall */}
        <Reveal delay={0.08}>
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-4">
            {clients.map((src, i) => (
              <div
                key={i}
                className="group grid aspect-[3/2] place-items-center bg-ink-900/60 p-7 backdrop-blur-sm transition-colors hover:bg-ink-800/60"
              >
                <img
                  src={src}
                  alt="Client logo"
                  loading="lazy"
                  className="max-h-12 w-auto opacity-65 grayscale transition duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
