'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IMG } from '@/lib/content';

export default function ServicesTrio() {
  return (
    <section className="services-trio">
      <div className="services-trio__text-tl">
        <div className="reveal-line-mask">
          <h2 className="font-display reveal-line-inner is-visible" style={{ fontSize: 'var(--fs-h2)', margin: 0 }}>
            OUR
          </h2>
        </div>
        <div className="reveal-line-mask" style={{ marginBottom: 24 }}>
          <h2
            className="font-display reveal-line-inner is-visible"
            style={{ fontSize: 'var(--fs-h2)', paddingLeft: 80, margin: 0 }}
          >
            SERVICES
          </h2>
        </div>
        <p style={{ color: 'var(--text-dim)', maxWidth: 360, fontSize: 15, lineHeight: 1.7 }}>
          We craft only the most thoughtful and visionary interiors, spanning residential, commercial and landmark
          developments across the globe. Each space is defined not by trend, but by intent — shaped with precision,
          narrative and considered vision.
        </p>
      </div>

      <div className="services-trio__images">
        <figure className="services-trio__img services-trio__img--1">
          <Image src={IMG.bathroom} alt="Bathroom design" fill sizes="(max-width: 768px) 100vw, 22vw" style={{ objectFit: 'cover' }} />
        </figure>
        <figure className="services-trio__img services-trio__img--2">
          <Image src={IMG.kitchen} alt="Kitchen design" fill sizes="(max-width: 768px) 100vw, 22vw" style={{ objectFit: 'cover' }} />
        </figure>
        <figure className="services-trio__img services-trio__img--3">
          <Image src={IMG.servicesHome} alt="Services homepage" fill sizes="(max-width: 768px) 100vw, 22vw" style={{ objectFit: 'cover' }} />
        </figure>
      </div>

      <div className="services-trio__text-br">
        <p style={{ color: 'var(--text-dim)', fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>
          At Suofeiya, we take pride in offering a comprehensive suite of services that infuse every space with curated
          luxury, thoughtful consideration and a deeply personal touch.
        </p>
        <Link href="/services" className="link-underline">
          Explore our services
        </Link>
      </div>
    </section>
  );
}
