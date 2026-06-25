import { SectionLabel, ScrollHighlight } from "./ui";

export default function Manifesto() {
  return (
    <section className="relative py-28 sm:py-40">
      <div className="container-px">
        <SectionLabel index="(00)">The thesis</SectionLabel>
        <ScrollHighlight
          className="mt-10 max-w-4xl font-display text-3xl font-semibold leading-[1.18] tracking-tight sm:text-5xl sm:leading-[1.16]"
          text="At ENIAC Media, we don't just market Web3 projects — we engineer sustainable growth, build communities, and help industry leaders scale their impact worldwide."
        />
      </div>
    </section>
  );
}
