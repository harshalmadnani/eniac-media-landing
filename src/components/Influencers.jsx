import { Reveal, SectionLabel } from "./ui";

const rowA = [
  "Crypto Rover",
  "Michael Wrubel",
  "DataDash",
  "Davinci Jeremie",
  "Professor Crypto",
  "That Martini Guy",
  "The Moon",
  "Altcoin Daily",
];
const rowB = [
  "Cameron Fous",
  "Crypto Banter",
  "Conor Kenny",
  "Crypto Mason",
  "CryptosRUs",
  "Darryl Boo",
  "Joe Parys",
  "Crypto Rover",
];

const palette = ["bg-lime/15 text-lime", "bg-electric/20 text-electric", "bg-white/10 text-bone"];

function Chip({ name, i }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return (
    <div className="flex items-center gap-3 whitespace-nowrap rounded-full border border-white/10 bg-ink-800/60 py-2 pl-2 pr-5">
      <span
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full font-display text-sm font-semibold ${
          palette[i % palette.length]
        }`}
      >
        {initials}
      </span>
      <span className="text-sm font-medium text-bone">{name}</span>
    </div>
  );
}

function Row({ items, reverse }) {
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`flex w-max gap-4 pr-4 ${reverse ? "animate-marquee-rev" : "animate-marquee"}`}
      >
        {[...items, ...items].map((name, i) => (
          <Chip key={i} name={name} i={i} />
        ))}
      </div>
    </div>
  );
}

export default function Influencers() {
  return (
    <section id="network" className="relative py-24 sm:py-32">
      <div className="container-px">
        <Reveal>
          <SectionLabel index="(05)">The network</SectionLabel>
          <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            500+ voices your audience already trusts.
          </h2>
          <p className="mt-5 max-w-xl text-muted">
            A handpicked roster of crypto-native KOLs across YouTube, X, Telegram, and
            Instagram — selected by niche fit and community quality, not just follower count.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-12 flex flex-col gap-4">
          <Row items={rowA} />
          <Row items={rowB} reverse />
        </div>
      </Reveal>
    </section>
  );
}
