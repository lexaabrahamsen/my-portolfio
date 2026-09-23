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
  const [heroImage, ...restImages] = images;

  return (
    <div className="mt-8">
      {heroImage && (
        <div className="relative mx-auto max-w-4xl px-4">
          <img src={heroImage} alt="" className="w-full rounded-lg" />
          <h1 className="absolute inset-0 flex items-center justify-center px-2 text-center font-sans text-5xl font-bold uppercase leading-[0.9] text-white [mix-blend-mode:difference] sm:text-7xl lg:text-8xl">
            {title}
          </h1>
        </div>
      )}

      <div className="mx-auto mt-6 flex max-w-4xl flex-wrap items-center justify-between gap-4 border-b border-border px-4 pb-8">
        <span className="font-sans text-sm font-light uppercase tracking-wide text-foreground/70">
          {category}
        </span>
        <div className="flex items-center gap-6">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-heading italic hover:opacity-70"
            >
              View demo
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-sans hover:opacity-70"
            >
              <GithubIcon className="h-4 w-4" />
              GITHUB
            </a>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 py-9 sm:px-6 md:py-12 lg:px-20 lg:py-16">
        <div className="flex flex-col justify-between gap-8 lg:flex-row">
          <div
            className={`flex w-full flex-col ${restImages.length > 0 ? 'lg:w-5/12' : 'mx-auto max-w-2xl'}`}
          >
            <div className="font-sans text-lg font-light leading-8 text-foreground/90">
              {description}
            </div>

            {techStack && techStack.length > 0 && (
              <div className="mt-8 border-t border-border pt-6">
                <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Technologies
                </h2>
                <ul className="mt-4 flex flex-col gap-2">
                  {techStack.map((tech, index) => (
                    <li key={tech} className="flex items-baseline gap-3 font-sans text-lg">
                      <span className="text-sm text-muted-foreground">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {restImages.length > 0 && (
            <div className="w-full lg:w-8/12">
              {restImages.map((src) => (
                <img key={src} src={src} alt="" className="mb-8 w-full rounded-lg" />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
