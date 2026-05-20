'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { getGsap, getScrollTrigger } from '@/lib/gsap-client';
import { IMG, statementLines } from '@/lib/content';

/**
 * Pinned, scrubbed manifesto.
 * Phase 1: words fade in
 * Phase 2: 5 sticky images slide up
 * Phase 3: marked fade-words fade out
 * Phase 4: line gaps collapse upward
 * Phase 5: images slide out upward
 */
export default function Statement() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    if (window.matchMedia('(max-width: 1024px)').matches) return;

    const gsap = getGsap();
    const ScrollTrigger = getScrollTrigger();
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>('.statement__line', root.current!);
      const allWords = gsap.utils.toArray<HTMLElement>('.statement .sw', root.current!);
      const fadeWords = gsap.utils.toArray<HTMLElement>('.statement .fade-word', root.current!);
      const imgs = gsap.utils.toArray<HTMLElement>('.statement__img', root.current!);

      lines.forEach((line) => {
        const x = Number(line.dataset.x || 0);
        const y = Number(line.dataset.y || 0);
        gsap.set(line, { x, y });
      });
      gsap.set(allWords, { opacity: 0 });
      imgs.forEach((img, i) => gsap.set(img, { yPercent: 220 + i * 40 }));

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: '.statement__pin',
          pinSpacing: false,
          scrub: 1
        }
      });

      tl.to(allWords, { opacity: 1, duration: 0.15, stagger: 0.005 }, 0);

      imgs.forEach((img, i) => {
        tl.to(img, { yPercent: 0, duration: 0.18 }, 0.12 + i * 0.04);
      });

      tl.to(fadeWords, { opacity: 0, duration: 0.4, stagger: 0.04 }, 0.4);

      const collapse = [-30, -55, -85, -100, -140, -170, -200];
      lines.forEach((line, i) => {
        tl.to(line, { y: collapse[i] ?? -200, duration: 0.3 }, 0.55 + i * 0.005);
      });

      imgs.forEach((img, i) => {
        tl.to(img, { yPercent: -180 - i * 40, duration: 0.18 }, 0.84 + i * 0.02);
      });
    }, root);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((s) => s.kill());
    };
  }, []);

  const stickyImgs = [
    { src: IMG.villaInterior, alt: 'Villa interior' },
    { src: IMG.apartment, alt: 'Apartment' },
    { src: IMG.hotel, alt: 'Hospitality' },
    { src: IMG.livingRoom, alt: 'Living room' },
    { src: IMG.exterior, alt: 'Exterior' }
  ];

  return (
    <section className="statement" ref={root} id="statement">
      <div className="statement__pin">
        {stickyImgs.map((it, i) => (
          <div key={it.src} className={`statement__img statement__img--${i + 1}`}>
            <Image src={it.src} alt={it.alt} fill sizes="22vw" style={{ objectFit: 'cover' }} />
          </div>
        ))}

        <p className="statement__copy">
          {statementLines.map((line, idx) => (
            <span key={idx} className="statement__line" data-x={line.x} data-y={line.y}>
              {line.words.map((w, j) => (
                <span key={j} className={`sw${w.em ? ' em' : ''}${w.fade ? ' fade-word' : ''}`}>
                  {w.text}
                </span>
              ))}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
