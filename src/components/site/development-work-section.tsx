import { ProjectTile } from '@/components/site/project-tile';
import { developmentProjects } from '@/lib/projects';

export function DevelopmentWorkSection() {
  return (
    <div>
      <p className="mx-auto max-w-screen-xl px-4 font-heading text-2xl italic text-muted-foreground sm:px-12 sm:text-3xl lg:px-16">
        Frontend Development
      </p>
      <div className="mx-auto mt-6 grid max-w-screen-xl grid-cols-1 gap-x-8 gap-y-12 px-4 sm:grid-cols-2 sm:px-12 lg:px-16">
        {developmentProjects.map((project) => (
          <ProjectTile key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
