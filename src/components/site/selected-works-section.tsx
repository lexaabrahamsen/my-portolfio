import { TitleHeader } from '@/components/site/title-header';
import { ArrowRightIcon } from '@/components/site/icons';
import { selectedWorks } from '@/lib/projects';

export function SelectedWorksSection() {
  return (
    <div id="selected-work">
      <TitleHeader title="Selected" accent="work" />
      <div className="mx-auto max-w-screen-xl px-4 sm:px-12 lg:px-16">
        {selectedWorks.map((work) => (
          <a
            key={work.id}
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-start justify-between gap-2 border-t border-border py-8 last:border-b sm:flex-row sm:items-center"
          >
            <div className="flex items-baseline gap-4">
              <h3 className="font-sans text-3xl font-bold uppercase tracking-tight sm:text-4xl">
                {work.company}
              </h3>
              <span className="font-heading italic text-muted-foreground">{work.role}</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {work.status}
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
