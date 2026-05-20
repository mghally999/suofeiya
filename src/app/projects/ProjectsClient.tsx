'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { projects, type Project } from '@/lib/content';
import { filterAndRank, LRUCache } from '@/lib/ds';

type Category = 'All' | Project['category'];
const categories: Category[] = ['All', 'Residential', 'Commercial', 'Development', 'Hospitality'];

const cache = new LRUCache<string, Project[]>(32);

export default function ProjectsClient() {
  const [cat, setCat] = useState<Category>('All');
  const [q, setQ] = useState('');

  const filtered = useMemo<Project[]>(() => {
    const key = `${cat}::${q}`;
    const hit = cache.get(key);
    if (hit) return hit;
    const base = cat === 'All' ? projects : projects.filter((p) => p.category === cat);
    const ranked = filterAndRank(base, q, [(p) => p.title, (p) => p.city, (p) => p.category]);
    const out = ranked.map((r) => r.item);
    cache.set(key, out);
    return out;
  }, [cat, q]);

  return (
    <>
      <div className="project-filter">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            className={c === cat ? 'is-active' : ''}
            onClick={() => setCat(c)}
            aria-pressed={c === cat}
          >
            {c}
          </button>
        ))}
        <input
          type="search"
          placeholder="Search projects"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="Search projects"
          style={{
            border: '1px solid var(--line)',
            background: 'transparent',
            padding: '8px 14px',
            borderRadius: 999,
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--text)',
            marginLeft: 'auto',
            minWidth: 220
          }}
        />
      </div>

      <div className="projects-grid">
        {filtered.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className={`project-card ${p.span}`} data-cursor="view">
            <Image src={p.image} alt={p.title} fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            <div className="project-card__overlay">
              <div className="project-card__eyebrow">{p.category}</div>
              <div className="project-card__title font-display">{p.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
