'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { getGsap, getScrollTrigger } from '@/lib/gsap-client';
import { IMG, heroWords } from '@/lib/content';

export default function Hero() {
  const root = useRef<HTMLElement | null>(null);
  const bg = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const gsap = getGsap();
    const ScrollTrigger = getScrollTrigger();
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>('.hero__word', root.current!);
      gsap.delayedCall(0.9, () => {
        words.forEach((w, i) => {
          setTimeout(() => w.classList.add('is-in'), i * 220);
        });
      });

      if (bg.current && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.to(bg.current, {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });
      }

      return () => ScrollTrigger.getAll().forEach((s) => s.kill());
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={root}>
      <div className="hero__bg" ref={bg}>
        <Image
          src={IMG.livingRoom}
          alt="Suofeiya — tailored interior"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="hero__words">
        {heroWords.map((w, i) => (
          <span key={w} className={`hero__word hero__word--${i + 1}`}>
            {w}
          </span>
        ))}
      </div>
    </section>
  );
}
