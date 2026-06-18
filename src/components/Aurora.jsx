// Site-wide animated purple field: drifting aurora blobs + a slowly rotating
// conic sweep + fine grid, fixed behind the entire landing.
export default function Aurora() {
  return (
    <div className="grain pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-900">
      {/* slow rotating conic sweep */}
      <div className="absolute left-1/2 top-1/2 h-[160vmax] w-[160vmax] -translate-x-1/2 -translate-y-1/2 animate-spinslow opacity-[0.18] [background:conic-gradient(from_0deg,transparent_0deg,rgba(139,92,255,0.5)_40deg,transparent_120deg,rgba(167,139,250,0.4)_220deg,transparent_300deg)] [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" />

      {/* drifting aurora blobs */}
      <div className="absolute left-[-10%] top-[-10%] h-[60vh] w-[55vw] animate-aurora1 rounded-full bg-lime/25 blur-[120px]" />
      <div className="absolute right-[-10%] top-[20%] h-[55vh] w-[45vw] animate-aurora2 rounded-full bg-blue/25 blur-[130px]" />
      <div className="absolute bottom-[-15%] left-[15%] h-[60vh] w-[55vw] animate-aurora1 rounded-full bg-pink/20 blur-[140px]" />
      <div className="absolute bottom-[10%] right-[10%] h-[40vh] w-[35vw] animate-aurora2 rounded-full bg-mint/15 blur-[120px]" />

      {/* fine grid + center vignette */}
      <div className="grid-lines absolute inset-0 opacity-[0.12]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(8,7,13,0.72)_100%)]" />
    </div>
  );
}
