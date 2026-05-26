export default function HeroBackground({ children, className = '' }) {
  return (
    <section className={`relative overflow-hidden ${className}`}>

      {/* ── Base gradient ── */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #000066 0%, #00003a 55%, #0d0050 100%)',
        }}
      />

      {/* ── Glowing orbs ── */}
      <div
        className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full opacity-30 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #00b050 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-32 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-[140px]"
        style={{ background: 'radial-gradient(circle, #3b00ff 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-10 blur-[100px]"
        style={{ background: 'radial-gradient(ellipse, #00b050 0%, transparent 70%)' }}
      />

      {/* ── Circuit-board grid ── */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,176,80,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,176,80,1) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* ── Circuit nodes (dots at intersections) ── */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,176,80,0.9) 1.5px, transparent 1.5px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* ── Diagonal scan line shimmer ── */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 12px)',
        }}
      />

      {/* ── Bottom fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}
