import { useState } from 'react';
import { TitleHeader } from '@/components/site/title-header';
import { ArrowRightIcon } from '@/components/site/icons';
import { selectedWorks } from '@/lib/projects';

export function SelectedWorksSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = selectedWorks[activeIndex];
  const total = selectedWorks.length;

  return (
    <div id="selected-work">
      <TitleHeader title="Selected" accent="work" />
      <div className="mx-auto max-w-screen-xl px-4 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-6 font-sans text-sm text-muted-foreground">
              {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </p>
            <div className="flex flex-col">
              {selectedWorks.map((work, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={work.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`border-t border-border py-6 text-left transition-colors last:border-b ${
                      isActive ? '' : 'opacity-40 hover:opacity-70'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-sans text-sm text-muted-foreground">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {work.status === 'Current' && (
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: '#5df4cc' }}
                        />
                      )}
                    </div>
                    <h3 className="font-sans text-3xl font-bold uppercase tracking-tight sm:text-4xl">
                      {work.company}
                    </h3>
                    <p className="font-accent italic text-muted-foreground">{work.role}</p>
                    <span className="mt-1 inline-flex items-center gap-1 font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {work.tag}
                      <ArrowRightIcon className="h-3 w-3" />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[400px] overflow-hidden rounded-lg lg:h-full">
            <img
              src={active.image}
              alt={active.company}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="text-xl text-white sm:text-2xl">
                {active.role} at {active.company}.
              </p>
              <div className="mt-2 flex items-center gap-3 font-sans text-sm uppercase tracking-wide text-white/60">
                <span>{active.tag}</span>
                <span>&middot;</span>
                <span>{active.status}</span>
              </div>
              <a
                href={active.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-sans text-sm font-semibold uppercase tracking-wide text-black transition-opacity hover:opacity-80"
              >
                View Project &#8599;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
