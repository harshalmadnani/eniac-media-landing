import { SectionLabel, ScrollHighlight } from "./ui";

export default function Manifesto() {
  return (
    <section className="relative py-28 sm:py-40">
      <div className="container-px">
        <SectionLabel index="(00)">The thesis</SectionLabel>
        <ScrollHighlight
          className="mt-10 max-w-4xl font-display text-3xl font-semibold leading-[1.18] tracking-tight sm:text-5xl sm:leading-[1.16]"
          text="Most agencies chase impressions and call it growth. We engineer momentum — pairing 2,000+ vetted creators with full-funnel execution so attention becomes acquisition, communities compound, and Web3 brands scale long after the campaign ends."
        />
      </div>
    </section>
  );
}
