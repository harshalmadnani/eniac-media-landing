import { Reveal, SectionLabel, AnimatedHeading, Parallax } from "./ui";

const imgs = [
  "crypto-rover.avif", "datadash.webp", "altcoin-daily.webp", "crypto-banter.webp",
  "the-moon.webp", "cryptosrus.webp", "michael-wrubel.avif", "professor-crypto.webp",
  "joe-parys.webp", "davinci-jeremie.webp", "cameron-fous.webp", "that-martini-guy.webp",
  "conor-kenny.webp", "darryl-boo.webp", "crypto-mason.png", "datadash.webp",
].map((f) => `/influencers/${f}`);

function Tile({ src }) {
  return (
    <div className="relative h-28 w-44 shrink-0 overflow-hidden rounded-xl border border-white/10 sm:h-36 sm:w-56">
      <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 to-transparent" />
    </div>
  );
}

function Row({ slice, reverse, speed = "animate-marquee" }) {
  return (
    <div className="flex gap-4">
      <div className={`flex w-max gap-4 ${reverse ? "animate-marquee-rev" : speed}`}>
        {[...slice, ...slice].map((src, i) => (
          <Tile key={i} src={src} />
        ))}
      </div>
    </div>
  );
}

export default function Showreel() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-px">
        <Reveal>
          <SectionLabel index="(05)">In motion</SectionLabel>
          <AnimatedHeading
            text="Our reach, in motion."
            accentWords={["motion"]}
            className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
          />
        </Reveal>
      </div>

      {/* creator montage */}
      <Reveal delay={0.1}>
        <div className="relative mt-12">
          <Parallax speed={45}>
            <div className="relative mx-auto flex max-w-[1400px] flex-col gap-4 overflow-hidden px-4 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
              <Row slice={imgs.slice(0, 8)} />
              <Row slice={imgs.slice(4, 12)} reverse />
              <Row slice={imgs.slice(8, 16)} />
            </div>
          </Parallax>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,9,11,0.45)_0%,transparent_70%)]" />
        </div>
      </Reveal>
    </section>
  );
}
