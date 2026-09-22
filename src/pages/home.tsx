import { useEffect, useRef } from 'react';
import { Hero } from '@/components/site/hero';
import { ManifestoSection } from '@/components/site/manifesto-section';
import { SelectedWorksSection } from '@/components/site/selected-works-section';
import { TitleHeader } from '@/components/site/title-header';
import { ProjectsSection } from '@/components/site/projects-section';

export function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.location.hash === '#development-work' && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div>
      <Hero />
      <ManifestoSection />
      <SelectedWorksSection />
      <div ref={projectsRef} id="development-work">
        <TitleHeader title="Projects" accent="all work" />
        <ProjectsSection />
      </div>
    </div>
  );
}
