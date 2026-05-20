import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { IMG, studio } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Studio',
  description: 'Where refinement, innovation and craftsmanship converge — meet the Suofeiya studio.'
};

export default function StudioPage() {
  return (
    <>
      <section className="studio-hero">
        <Image src={IMG.team} alt="Suofeiya studio" fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
        <div className="studio-hero__title">OUR STUDIO</div>
      </section>

      <section className="studio-statement">
        <p className="eyebrow" style={{ marginBottom: 32 }}>
          Type · Studio · {studio.city}, {studio.country}
        </p>
        <h2 className="font-display">
          WHERE REFINEMENT, <em style={{ fontStyle: 'italic' }}>INNOVATION</em>
          <br />
          AND <em style={{ fontStyle: 'italic' }}>CRAFTSMANSHIP</em> CONVERGE
        </h2>
        <p>
          The Suofeiya ethos is centred on the meticulous creation of truly visionary luxury designs and underpinned by
          exceptional levels of thought, material discipline and atelier-grade joinery.
        </p>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px 120px' }}>
        <Image src={IMG.livingRoom} alt="Studio interior" width={1600} height={900} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
      </section>

      <section style={{ maxWidth: 880, margin: '0 auto', padding: '0 32px 160px' }}>
        <p className="eyebrow" style={{ marginBottom: 24 }}>
          The Studio
        </p>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.4vw, 32px)', lineHeight: 1.45 }}>
          Founded to redefine luxury design through a seamless integration of architecture, interiors and project delivery,
          Suofeiya brings together specialists, collaborators and craftspeople in one cohesive studio. Every project is
          shepherded by a senior designer from first conversation to final installation.
        </p>
        <div style={{ marginTop: 60 }}>
          <Link href="/careers" className="link-underline">
            View careers
          </Link>
        </div>
      </section>
    </>
  );
}
