import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { insights } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Insights, inspiration, collaborations and ideas that quietly shape our world.'
};

export default function InsightsPage() {
  return (
    <>
      <header className="page-hero">
        <p className="page-hero__eyebrow">Insights</p>
        <h1 className="page-hero__title">
          THE <em style={{ fontStyle: 'italic' }}>JOURNAL</em>
        </h1>
        <p className="page-hero__sub">
          Go beyond the finished space. Explore the insights, inspiration, collaborations and ideas that quietly shape our world.
        </p>
      </header>

      <section style={{ maxWidth: 1440, margin: '0 auto', padding: '0 32px 140px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
        {insights.map((card) => (
          <Link key={card.slug} href={`/insights/${card.slug}`} className="insight-card" data-cursor="read">
            <div className="insight-card__img">
              <Image src={card.image} alt={card.title} fill sizes="(max-width: 900px) 100vw, 30vw" style={{ objectFit: 'cover' }} />
            </div>
            <div className="insight-card__eyebrow">{card.eyebrow}</div>
            <h3 className="insight-card__title">{card.title}</h3>
            <p className="insight-card__sub">{card.sub}</p>
            <span className="link-underline">Read more</span>
          </Link>
        ))}
      </section>
    </>
  );
}
