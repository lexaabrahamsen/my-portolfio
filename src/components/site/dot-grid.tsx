export function DotGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)]"
    >
      <div className="absolute inset-0 animate-dot-drift bg-[radial-gradient(circle,theme(colors.foreground)_1px,transparent_1px)] bg-[length:28px_28px] opacity-[0.22]" />
      <div className="absolute inset-0 animate-dot-pulse bg-[radial-gradient(circle,theme(colors.foreground)_1.5px,transparent_1.5px)] bg-[length:28px_28px] [background-position:14px_14px]" />
    </div>
  );
}
