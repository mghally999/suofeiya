'use client';

import { useEffect, useRef } from 'react';

/**
 * Custom mix-blend cursor. Lerps toward the pointer at ~0.18 stiffness so the
 * dot trails the mouse instead of snapping.
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let curX = -100;
    let curY = -100;
    let raf = 0;
    let running = true;

    const onMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (!labelRef.current) return;
      const interactive = target?.closest('a, button, [data-cursor]');
      const label = interactive?.getAttribute('data-cursor') ?? '';
      if (interactive) {
        labelRef.current.textContent = label || (target?.closest('a') ? 'view' : '');
        labelRef.current.classList.add('is-visible');
      } else {
        labelRef.current.classList.remove('is-visible');
      }
    };

    const tick = () => {
      if (!running) return;
      curX += (mouseX - curX) * 0.18;
      curY += (mouseY - curY) * 0.18;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${curX - 7}px, ${curY - 8}px, 0)`;
      if (labelRef.current) labelRef.current.style.transform = `translate3d(${curX + 18}px, ${curY - 4}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerover', onOver, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerover', onOver);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={dotRef} aria-hidden>
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.05 10.02 2.89 15.34.41 0l13.16 8.26-6.52 1.76Z" />
        </svg>
      </div>
      <div className="cursor-label" ref={labelRef} aria-hidden />
    </>
  );
}
