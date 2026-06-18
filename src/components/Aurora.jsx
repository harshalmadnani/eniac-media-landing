// Restrained dark-luxe backdrop: deep black with a few slow, soft gold glows + film grain.
export default function Aurora() {
  return (
    <div className="grain pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-900">
      <div className="absolute left-1/2 top-[-12%] h-[60vh] w-[60vw] -translate-x-1/2 animate-aurora1 rounded-full bg-lime/[0.07] blur-[150px]" />
      <div className="absolute right-[-8%] top-[35%] h-[45vh] w-[40vw] animate-aurora2 rounded-full bg-amber/[0.05] blur-[150px]" />
      <div className="absolute bottom-[-12%] left-[10%] h-[45vh] w-[45vw] animate-aurora1 rounded-full bg-mint/[0.04] blur-[160px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(6,6,5,0.7)_100%)]" />
    </div>
  );
}
