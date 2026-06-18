import { useState } from "react";
import { Reveal, SectionLabel, AnimatedHeading } from "./ui";

const rowA = [
  { name: "Crypto Rover", img: "/influencers/crypto-rover.avif" },
  { name: "Michael Wrubel", img: "/influencers/michael-wrubel.avif" },
  { name: "DataDash", img: "/influencers/datadash.webp" },
  { name: "Davinci Jeremie", img: "/influencers/davinci-jeremie.webp" },
  { name: "Professor Crypto", img: "/influencers/professor-crypto.webp" },
  { name: "That Martini Guy", img: "/influencers/that-martini-guy.webp" },
  { name: "The Moon", img: "/influencers/the-moon.webp" },
  { name: "Altcoin Daily", img: "/influencers/altcoin-daily.webp" },
];
const rowB = [
  { name: "Cameron Fous", img: "/influencers/cameron-fous.webp" },
  { name: "Crypto Banter", img: "/influencers/crypto-banter.webp" },
  { name: "Conor Kenny", img: "/influencers/conor-kenny.webp" },
  { name: "Crypto Mason", img: "/influencers/crypto-mason.png" },
  { name: "CryptosRUs", img: "/influencers/cryptosrus.webp" },
  { name: "Darryl Boo", img: "/influencers/darryl-boo.webp" },
  { name: "Joe Parys", img: "/influencers/joe-parys.webp" },
  { name: "Crypto Rover", img: "/influencers/crypto-rover.avif" },
];

function Chip({ name, img }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return (
    <div className="flex items-center gap-3 whitespace-nowrap rounded-full border border-white/10 bg-ink-800/60 py-2 pl-2 pr-5 transition-colors hover:border-lime/40">
      <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full bg-ink-700">
        {failed ? (
          <span className="font-display text-sm font-semibold text-lime">{initials}</span>
        ) : (
          <img
            src={img}
            alt={name}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover"
          />
        )}
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
        {[...items, ...items].map((p, i) => (
          <Chip key={i} name={p.name} img={p.img} />
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
          <AnimatedHeading
            text="500+ voices your audience already trusts."
            accentWords={["500+"]}
            className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
          />
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
