import type { ReactNode } from 'react';
import { GithubIcon, ArrowRightIcon } from '@/components/site/icons';

interface ProjectDetailProps {
  title: string;
  category: string;
  description: ReactNode;
  images: string[];
  demoUrl?: string;
  githubUrl?: string;
  techStack?: string[];
}

export function ProjectDetail({
  title,
  category,
  description,
  images,
  demoUrl,
  githubUrl,
  techStack,
}: ProjectDetailProps) {
  return (
    <div className="mx-auto mt-12 max-w-screen-xl px-4 py-9 sm:px-6 md:py-12 lg:px-20 lg:py-16">
      <div className="flex flex-col justify-between gap-8 lg:flex-row">
        <div className="flex w-full flex-col lg:w-5/12">
          <h1 className="font-heading mt-2 text-4xl font-bold tracking-tight">{title}</h1>
          <p className="mt-4 font-sans text-sm font-light uppercase tracking-wide text-foreground/70">
            {category}
          </p>
          <div className="mt-6 font-sans text-lg font-light leading-8 text-foreground/90">
            {description}
          </div>

          {techStack && techStack.length > 0 && (
            <div className="mt-8 border-t border-border pt-6">
              <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Technologies
              </h2>
              <ul className="mt-4 flex flex-col gap-2">
                {techStack.map((tech) => (
                  <li key={tech} className="font-sans text-lg">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {demoUrl && (
            <div className="mt-8 flex items-center gap-2 border-t border-border pb-2 pt-6">
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-lg underline hover:opacity-70"
              >
                View demo
              </a>
              <ArrowRightIcon className="h-4 w-4" />
            </div>
          )}

          {githubUrl && (
            <div className="mt-2 flex items-center gap-2 pb-2">
              <GithubIcon className="h-5 w-5" />
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-lg underline hover:opacity-70"
              >
                GITHUB
              </a>
            </div>
          )}
        </div>

        <div className="w-full lg:w-8/12">
          {images.map((src) => (
            <img key={src} src={src} alt="" className="mb-8 w-full rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}
