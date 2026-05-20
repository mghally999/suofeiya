import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';
import { processSteps, awards, IMG } from '@/lib/content';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Interior design, architecture, procurement, project management and bespoke cabinetry.'
};

export default function ServicesPage() {
  return (
    <>
      <header className="page-hero">
        <p className="page-hero__eyebrow">Suofeiya · Studio</p>
        <h1 className="page-hero__title">
          OUR <em style={{ fontStyle: 'italic' }}>SERVICES</em>
        </h1>
        <p className="page-hero__sub">
          One studio shaping the whole house — architecture, interiors, joinery, procurement and project management held together
          by a single creative direction.
        </p>
      </header>

      <ServicesClient />

      <section className="process">
        <h2>A REFINED PROCESS</h2>
        <div className="process__grid">
          {processSteps.map((s) => (
            <div key={s.title} className="process__step">
              <h3>{s.title}</h3>
              <p>{s.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="awards">
        <h2>AWARDS</h2>
        <ul className="awards-list">
          {awards.map((a) => (
            <li key={a.title}>
              <span>{a.title}</span>
              <span className="meta">{a.year}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="intention">
        <div className="intention__inner">
          <h2>
            DESIGNED WITH
            <br />
            <em style={{ fontStyle: 'italic' }}>INTENTION</em>
          </h2>
          <div className="intention__body">
            <p className="eyebrow" style={{ marginBottom: 16 }}>
              Sustainability ethos · We are PRIME
            </p>
            <p>
              At Suofeiya, designing with intention means creating spaces that honour both our clients’ vision and the world we
              share. We source responsibly, work with enduring materials, and partner with craftspeople who share our commitment
              to quality and sustainability.
            </p>
            <p>Find out more about the PRIME Principles at wearprime.org.</p>
            <Image
              src={IMG.intention}
              alt="Designed with intention"
              width={520}
              height={320}
              style={{ marginTop: 24, width: '100%', height: 'auto', maxWidth: 520 }}
            />
          </div>
        </div>
        <div className="intention__badge">
          II<span>PRIME SCORE</span>
        </div>
      </section>
    </>
  );
}
