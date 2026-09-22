import { useEffect, useRef } from 'react';
import { loadScript } from '@/lib/load-script';

interface VantaEffect {
  destroy: () => void;
}

declare global {
  interface Window {
    THREE?: unknown;
    VANTA?: {
      DOTS: (options: Record<string, unknown>) => VantaEffect;
    };
  }
}

const THREE_SRC = 'https://cdn.jsdelivr.net/npm/three@0.134.0/build/three.min.js';
const VANTA_DOTS_SRC = 'https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.dots.min.js';

export function VantaDots() {
  const ref = useRef<HTMLDivElement>(null);
  const effectRef = useRef<VantaEffect | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      if (!window.THREE) {
        await loadScript(THREE_SRC);
      }
      if (!window.VANTA?.DOTS) {
        await loadScript(VANTA_DOTS_SRC);
      }
      if (cancelled || !ref.current || effectRef.current || !window.VANTA) return;

      effectRef.current = window.VANTA.DOTS({
        el: ref.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xffffff,
        color2: 0xf45d85,
        backgroundColor: 0x0,
        backgroundAlpha: 0,
        size: 3.2,
        spacing: 38.0,
        showLines: true,
      });
    }

    init();

    return () => {
      cancelled = true;
      effectRef.current?.destroy();
      effectRef.current = null;
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 [&_canvas]:!pointer-events-auto"
    />
  );
}
