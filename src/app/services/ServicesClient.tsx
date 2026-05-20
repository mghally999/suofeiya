'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { services } from '@/lib/content';

export default function ServicesClient() {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const idx = refs.current.findIndex((el) => el === visible[0].target);
          if (idx >= 0) setActive(idx);
        }
      },
      { rootMargin: '-30% 0px -30% 0px', threshold: [0.1, 0.3, 0.5, 0.7, 0.9] }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="split-pane">
      <div className="split-pane__left">
        {services.map((s, i) => (
          <div key={s.title} className={`sp-image${i === active ? ' is-active' : ''}`}>
            <Image src={s.image} alt={s.title} fill sizes="50vw" style={{ objectFit: 'cover' }} />
            <figcaption>Project · {s.project} →</figcaption>
          </div>
        ))}
      </div>
      <div className="split-pane__right">
        {services.map((s, i) => (
          <article
            key={s.title}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className="service-block"
          >
            <div className="service-num">{s.number}</div>
            <h2>{s.title}</h2>
            <p>{s.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
