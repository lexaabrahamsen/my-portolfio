import { ProjectTile } from '@/components/site/project-tile';
import { developmentProjects, designProjects } from '@/lib/projects';

function interleave<T>(a: T[], b: T[]): T[] {
  const result: T[] = [];
  const max = Math.max(a.length, b.length);
  for (let i = 0; i < max; i++) {
    if (a[i]) result.push(a[i]);
    if (b[i]) result.push(b[i]);
  }
  return result;
}

const allProjects = interleave(developmentProjects, designProjects);

export function ProjectsSection() {
  return (
    <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-x-8 gap-y-16 px-4 sm:grid-cols-2 sm:px-12 lg:grid-cols-3 lg:px-16">
      {allProjects.map((project) => (
        <ProjectTile key={project.link} {...project} />
      ))}
    </div>
  );
}
