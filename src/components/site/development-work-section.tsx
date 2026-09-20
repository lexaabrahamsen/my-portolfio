import { useEffect, useRef } from 'react';
import { TitleHeader } from '@/components/site/title-header';
import { ProjectTile } from '@/components/site/project-tile';
import { developmentProjects } from '@/lib/projects';

export function DevelopmentWorkSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.location.hash === '#development-work' && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div ref={ref} id="development-work">
      <TitleHeader title="Development Work" />
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-5 px-4 sm:grid-cols-2 sm:px-12 lg:px-16">
        {developmentProjects.map((project) => (
          <ProjectTile key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
