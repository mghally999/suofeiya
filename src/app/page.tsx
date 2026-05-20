import dynamic from 'next/dynamic';
import Hero from '@/components/sections/Hero';
import SectionIntro from '@/components/sections/SectionIntro';
import ServicesTrio from '@/components/sections/ServicesTrio';
import Leading from '@/components/sections/Leading';
import GetInTouchCTA from '@/components/sections/GetInTouchCTA';
import InsightsGrid from '@/components/sections/InsightsGrid';

const Statement = dynamic(() => import('@/components/sections/Statement'), { ssr: false });
const ProjectCarousel = dynamic(() => import('@/components/sections/ProjectCarousel'), { ssr: false });
const ObjectsOfDesire = dynamic(() => import('@/components/sections/ObjectsOfDesire'), { ssr: false });

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statement />
      <SectionIntro
        topLine="OUR"
        bottomLine="PROJECTS"
        indent={100}
        body="Storytelling through design — a curated selection of over 100 projects worldwide."
        cta={{ label: 'View projects', href: '/projects' }}
      />
      <ProjectCarousel />
      <ServicesTrio />
      <Leading />
      <ObjectsOfDesire />
      <GetInTouchCTA />
      <InsightsGrid />
    </>
  );
}
