const items = [
  "KOL MARKETING",
  "USER ACQUISITION",
  "PR & MEDIA",
  "SOCIAL GROWTH",
  "TOKEN LAUNCHES",
  "EVENTS",
  "GTM & TGE",
  "COMMUNITY",
];

export default function Ribbon() {
  return (
    <section className="relative overflow-hidden border-y border-lime/15 py-7">
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-10 pr-10">
          {[...items, ...items, ...items].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-10 whitespace-nowrap font-display text-2xl font-light italic tracking-tight text-bone/80 sm:text-4xl"
            >
              {t}
              <span className="text-lime/70 not-italic">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
