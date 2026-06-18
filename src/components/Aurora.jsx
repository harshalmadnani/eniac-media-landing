// Fixed, full-viewport animated aurora made of blurred vibrant color blobs.
export default function Aurora() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-900">
      <div className="absolute -left-[10%] top-[-10%] h-[55vh] w-[55vw] animate-aurora1 rounded-full bg-lime/25 blur-[120px]" />
      <div className="absolute right-[-10%] top-[10%] h-[50vh] w-[45vw] animate-aurora2 rounded-full bg-pink/20 blur-[130px]" />
      <div className="absolute bottom-[-15%] left-[20%] h-[55vh] w-[55vw] animate-aurora1 rounded-full bg-cyan/15 blur-[140px]" />
      <div className="absolute bottom-[5%] right-[15%] h-[40vh] w-[35vw] animate-aurora2 rounded-full bg-blue/20 blur-[120px]" />
      {/* subtle grain/grid overlay */}
      <div className="grid-lines absolute inset-0 opacity-[0.15]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(8,9,11,0.6)_100%)]" />
    </div>
  );
}
