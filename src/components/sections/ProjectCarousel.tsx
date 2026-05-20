'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getGsap, getScrollTrigger } from '@/lib/gsap-client';
import { projectSlides } from '@/lib/content';
import { DoublyLinkedList } from '@/lib/ds';

/**
 * Three pinned slides; the category word lands letter-by-letter on scrub.
 * Letters fan out at alternating Y offsets (full-drop / half-drop / 0)
 * resolution-independent via calc((100vh - 11vw) - 32px).
 * A doubly-linked-list tracks the active slide so pagination & next/prev
 * are O(1) regardless of slide count.
 */
export default function ProjectCarousel() {
  const root = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActive(0);
      return;
    }
    const gsap = getGsap();
    const ScrollTrigger = getScrollTrigger();

    // Build the DLL for slide navigation
    const dll = DoublyLinkedList.from(projectSlides.map((_, i) => i));
    let cursor = dll.head!;
    void dll;
    void cursor;

    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray<HTMLElement>('.proj-slide', root.current!);
      slides.forEach((slide, slideIdx) => {
        const letters = slide.querySelectorAll<HTMLElement>('.proj-cat span');
        letters.forEach((letter, j) => {
          const mode = j % 3;
          if (mode === 0) gsap.set(letter, { y: 0 });
          if (mode === 1) gsap.set(letter, { y: () => window.innerHeight * 0.7 });
          if (mode === 2) gsap.set(letter, { y: () => window.innerHeight * 0.35 });
        });
        gsap.to(letters, {
          y: 0,
          ease: 'power2.out',
          stagger: 0.04,
          scrollTrigger: {
            trigger: slide,
            start: 'top bottom',
            end: 'top top',
            scrub: 1,
            onUpdate: (self) => {
              if (self.progress >= 0.5) setActive(slideIdx);
            }
          }
        });
      });
    }, root);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((s) => s.kill());
    };
  }, []);

  return (
    <section className="proj-carousel" ref={root}>
      {projectSlides.map((s, i) => (
        <article key={s.category} className="proj-slide" data-cat={s.category}>
          <div className="proj-slide__bg">
            <Image src={s.image} alt={s.project} fill sizes="100vw" priority={i === 0} style={{ objectFit: 'cover' }} />
          </div>
          <h2 className="proj-cat font-display" aria-label={s.category}>
            {Array.from(s.category).map((ch, j) => (
              <span key={`${ch}-${j}`}>{ch}</span>
            ))}
          </h2>
          <div className="proj-pagination" aria-hidden>
            {projectSlides.map((_, j) => (
              <span key={j} className={j === active ? 'is-active' : ''} />
            ))}
          </div>
          <div className="proj-meta">
            <h3 className="font-display">{s.project}</h3>
            <Link href={s.href} className="link-underline" data-cursor="view project">
              view project
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
}
