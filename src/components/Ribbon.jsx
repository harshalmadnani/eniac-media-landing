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
    <section className="relative overflow-hidden py-6">
      {/* two stacked counter-rotated ribbons */}
      <div className="-rotate-2 border-y border-white/10 bg-lime/90 py-4">
        <div className="flex w-max animate-marquee-fast gap-8 pr-8">
          {[...items, ...items, ...items].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-8 whitespace-nowrap font-display text-2xl font-bold text-white sm:text-4xl"
            >
              {t}
              <span className="text-white/50">✦</span>
            </span>
          ))}
        </div>
      </div>
      <div className="mt-2 rotate-2 border-y border-white/10 bg-pink/80 py-4">
        <div className="flex w-max animate-marquee-rev gap-8 pr-8">
          {[...items, ...items, ...items].reverse().map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-8 whitespace-nowrap font-display text-2xl font-bold text-white sm:text-4xl"
            >
              {t}
              <span className="text-white/50">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
