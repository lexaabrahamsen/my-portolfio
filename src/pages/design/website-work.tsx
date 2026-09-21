import { ArrowRightIcon } from '@/components/site/icons';
import { websiteProjects } from '@/lib/projects';

export function WebsiteWork() {
  return (
    <div className="mx-auto mt-12 max-w-screen-xl px-4 py-9 sm:px-6 md:py-12 lg:px-20 lg:py-16">
      <div className="flex flex-col justify-between gap-10 lg:flex-row">
        <div className="flex w-full flex-col lg:w-5/12">
          <h1 className="font-heading mt-2 text-4xl font-bold tracking-tight">Website Work</h1>
          <p className="mt-4 font-sans text-sm font-light uppercase tracking-wide text-foreground/70">
            Website work
          </p>
          <p className="mt-6 font-sans text-lg font-light leading-8 text-foreground/90">
            Website work is a collection of websites I have designed and built.
          </p>
        </div>

        <div className="w-full lg:w-8/12">
          {websiteProjects.map((project) => (
            <div key={project.id} className="mb-10">
              <img src={project.image} alt={project.title} className="w-full rounded-lg" />
              <h3 className="mt-4 font-sans text-3xl font-medium tracking-tight">
                {project.title}
              </h3>
              <p className="font-sans text-sm font-light uppercase leading-7 text-foreground/70">
                {project.description}
              </p>
              <div className="mt-6 flex items-center gap-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-lg underline hover:opacity-70"
                >
                  View demo
                </a>
                <ArrowRightIcon className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
