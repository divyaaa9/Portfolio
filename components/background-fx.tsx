export function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* base charcoal */}
      <div className="absolute inset-0 bg-base" />

      {/* subtle grid */}
      <div className="absolute inset-0 bg-grid-faint bg-grid opacity-[0.6] [mask-image:radial-gradient(ellipse_85%_65%_at_50%_0%,black,transparent_78%)]" />

      {/* primary top spotlight — brighter and wider than before */}
      <div className="absolute inset-x-0 top-0 h-[85vh] bg-[radial-gradient(ellipse_65%_55%_at_50%_-5%,rgba(245,245,242,0.11),rgba(245,245,242,0)_72%)]" />

      {/* secondary off-center glow, mid-page, for a sense of movement/depth */}
      <div className="absolute left-1/2 top-[55vh] h-[70vh] w-[140vw] -translate-x-1/2 bg-[radial-gradient(ellipse_45%_40%_at_30%_50%,rgba(245,245,242,0.05),rgba(245,245,242,0)_70%)]" />

      {/* faint diagonal sheen across the whole canvas for tonal variation */}
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(245,245,242,0.045)_0%,rgba(245,245,242,0)_28%,rgba(245,245,242,0)_72%,rgba(245,245,242,0.03)_100%)]" />

      {/* faint vertical vignette so content stays readable at edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base/60" />

      {/* film-grain noise texture */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay bg-noise bg-repeat" />
    </div>
  );
}
