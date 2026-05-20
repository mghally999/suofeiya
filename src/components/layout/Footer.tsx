'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { studio, nav } from '@/lib/content';
import { getGsap, getScrollTrigger } from '@/lib/gsap-client';

export default function Footer() {
  const wordRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const gsap = getGsap();
    const ScrollTrigger = getScrollTrigger();
    const ctx = gsap.context(() => {
      if (!wordRef.current) return;
      gsap.fromTo(
        wordRef.current,
        { x: '5%' },
        {
          x: '-10%',
          ease: 'none',
          scrollTrigger: {
            trigger: wordRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <footer className="site-footer">
      <h2 ref={wordRef} className="site-footer__wordmark" aria-hidden>
        SUOFEIYA
      </h2>

      <div className="site-footer__cols">
        <div>
          <h4>Studio</h4>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 22, lineHeight: 1.4, margin: 0 }}>
            {studio.city}, {studio.country}
            <br />
            {studio.street}
          </p>
        </div>

        <div>
          <h4>Navigate</h4>
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Reach</h4>
          <ul>
            <li>
              <a href={`mailto:${studio.email}`}>{studio.email}</a>
            </li>
            <li>
              <a href={`tel:${studio.phone.replace(/\s+/g, '')}`}>{studio.phone}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Follow</h4>
          <ul>
            {studio.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} Suofeiya</span>
        <span>Designed with intention</span>
      </div>
    </footer>
  );
}
