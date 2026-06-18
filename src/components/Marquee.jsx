const partners = [
  "Binance",
  "OKX",
  "Bybit",
  "KuCoin",
  "Gate.io",
  "MEXC",
  "Bitget",
  "Uniswap",
  "CoinGecko",
  "DexScreener",
];

export default function Marquee() {
  return (
    <section className="border-y border-white/10 bg-ink-900 py-8">
      <div className="container-px">
        <p className="mb-7 text-center label-mono">
          Our partners in the decentralized future
        </p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-14 pr-14">
          {[...partners, ...partners].map((p, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-display text-2xl font-medium text-muted/70 transition-colors hover:text-bone"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
