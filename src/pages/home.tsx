import { useEffect } from 'react';
import { Hero } from '@/components/site/hero';
import { ManifestoSection } from '@/components/site/manifesto-section';
import { SelectedWorksSection } from '@/components/site/selected-works-section';
import { TitleHeader } from '@/components/site/title-header';
import { ProjectsSection } from '@/components/site/projects-section';

export function Home() {
  useEffect(() => {
    if (!window.location.hash) return;
    const el = document.getElementById(window.location.hash.slice(1));
    el?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div>
      <Hero />
      <ManifestoSection />
      <SelectedWorksSection />
      <div id="development-work">
        <TitleHeader title="Projects" accent="all work" />
        <ProjectsSection />
      </div>
    </div>
  );
}
