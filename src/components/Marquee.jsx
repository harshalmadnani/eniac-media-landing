import { clients } from "../data/network";

export default function Marquee() {
  return (
    <section className="border-y border-white/10 bg-ink-900/40 py-10 backdrop-blur-sm">
      <div className="container-px">
        <p className="mb-8 text-center label-mono">
          Our clients — trusted by leading exchanges &amp; Web3 brands
        </p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-12 pr-12">
          {[...clients, ...clients].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Client logo"
              loading="lazy"
              className="h-9 w-auto shrink-0 opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-11"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
