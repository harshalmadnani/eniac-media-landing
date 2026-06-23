// Site-wide animated purple field: drifting aurora blobs + a slowly rotating
// conic sweep + fine grid, fixed behind the entire landing.
export default function Aurora() {
  return (
    <div className="grain pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-900">
      {/* slow rotating conic sweep — subtle */}
      <div className="absolute left-1/2 top-1/2 h-[170vmax] w-[170vmax] -translate-x-1/2 -translate-y-1/2 animate-spinslow opacity-[0.07] [background:conic-gradient(from_0deg,transparent_0deg,rgba(139,92,255,0.5)_50deg,transparent_140deg,rgba(167,139,250,0.4)_240deg,transparent_320deg)] [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" />

      {/* drifting aurora blobs — restrained */}
      <div className="absolute left-[-10%] top-[-10%] h-[55vh] w-[50vw] animate-aurora1 rounded-full bg-lime/[0.12] blur-[130px]" />
      <div className="absolute right-[-10%] top-[25%] h-[50vh] w-[42vw] animate-aurora2 rounded-full bg-blue/[0.1] blur-[140px]" />
      <div className="absolute bottom-[-12%] left-[18%] h-[50vh] w-[48vw] animate-aurora1 rounded-full bg-mint/[0.07] blur-[150px]" />

      {/* fine grid + center vignette */}
      <div className="grid-lines absolute inset-0 opacity-[0.08]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(8,7,13,0.78)_100%)]" />
    </div>
  );
}
