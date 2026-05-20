import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { projects } from '@/lib/content';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  return {
    title: project?.title ?? 'Project',
    description: project ? `${project.title} — ${project.category} project in ${project.city}.` : undefined
  };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <section style={{ position: 'relative', width: '100%', height: '90vh', minHeight: 520 }}>
        <Image src={project.image} alt={project.title} fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)' }} />
        <div
          style={{
            position: 'absolute',
            left: 32,
            bottom: 40,
            color: 'var(--text-cream)',
            zIndex: 2,
            maxWidth: 720
          }}
        >
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.85 }}>
            {project.category} · {project.city}
          </p>
          <h1 className="font-display" style={{ fontSize: 'clamp(40px, 6vw, 96px)', lineHeight: 1.02, margin: '12px 0 0' }}>
            {project.title}
          </h1>
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '120px 32px' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.4vw, 32px)', lineHeight: 1.4, color: 'var(--text)', maxWidth: 880 }}>
          A whole-house brief shaped end-to-end by Suofeiya — architecture, interiors, joinery, procurement and project
          management resolved within a single studio.
        </p>
        <p style={{ marginTop: 40, fontSize: 16, lineHeight: 1.7, color: 'var(--text-dim)', maxWidth: 760 }}>
          Materials were selected leaf-by-leaf and book-matched in the room itself. Every cabinet, threshold and panel was
          drawn at full size in our atelier so the installation arrived precise, on time and quietly true to the original
          drawing.
        </p>

        <div style={{ marginTop: 80 }}>
          <Link href="/projects" className="link-underline">
            ← Back to projects
          </Link>
        </div>
      </section>
    </>
  );
}
