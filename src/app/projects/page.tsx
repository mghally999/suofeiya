import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A curated selection of Suofeiya projects across residential, commercial, development and hospitality work.'
};

export default function ProjectsPage() {
  return (
    <>
      <header className="page-hero">
        <p className="page-hero__eyebrow">Selected work</p>
        <h1 className="page-hero__title">
          OUR <em style={{ fontStyle: 'italic' }}>WORK</em>
        </h1>
        <p className="page-hero__sub">
          Storytelling through design — a curated selection of over 100 projects worldwide. Filter by category to see how the studio
          approaches each typology.
        </p>
      </header>
      <ProjectsClient />
    </>
  );
}
