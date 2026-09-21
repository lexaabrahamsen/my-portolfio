const TAKE_COMMAND_GREEN = '#2fe3a3';

interface GlyphProps {
  className?: string;
  size?: number;
  delay?: number;
  duration?: number;
  color?: string;
  children: React.ReactNode;
}

function Glyph({ className, size = 80, delay = 0, duration = 5, color, children }: GlyphProps) {
  return (
    <div
      className={`absolute animate-drift-slow ${className ?? ''}`}
      style={{ animationDelay: `${delay * 0.35}s` }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        stroke={color ?? 'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          style={{
            animation: `draw-line ${duration}s ease-in-out infinite`,
            animationDelay: `${delay}s`,
            // @ts-expect-error custom property for the draw-line keyframes
            '--draw-length': 140,
            strokeDasharray: 140,
          }}
        >
          {children}
        </g>
      </svg>
    </div>
  );
}

export function CodeDraw() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden text-foreground/30"
    >
      <Glyph className="right-[8%] top-[8%]" size={110} delay={0} duration={6}>
        <path d="M16 10 L6 20 L16 30" />
        <path d="M24 10 L34 20 L24 30" />
      </Glyph>

      <Glyph className="right-[24%] top-[42%]" size={64} delay={1.2} duration={5}>
        <path d="M14 8 C9 8 11 13 11 15 C11 18 8 18 8 20 C8 22 11 22 11 25 C11 27 9 32 14 32" />
        <path d="M26 8 C31 8 29 13 29 15 C29 18 32 18 32 20 C32 22 29 22 29 25 C29 27 31 32 26 32" />
      </Glyph>

      <Glyph className="right-[4%] top-[58%]" size={70} delay={2.1} duration={5.5} color={TAKE_COMMAND_GREEN}>
        <path d="M6 14 L34 26" />
        <path d="M24 14 L34 26 L24 38" />
      </Glyph>

      <Glyph className="right-[34%] top-[10%]" size={30} delay={0.6} duration={4}>
        <path d="M20 6 C21 16 21 24 20 34" />
      </Glyph>

      <Glyph className="right-[16%] top-[74%]" size={90} delay={1.7} duration={7}>
        <path d="M20 4 L36 12 L36 28 L20 36 L4 28 L4 12 Z" />
        <path d="M20 4 L20 20 M4 12 L20 20 M36 12 L20 20" />
      </Glyph>
    </div>
  );
}
