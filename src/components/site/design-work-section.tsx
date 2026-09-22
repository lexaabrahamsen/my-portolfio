import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { designProjects } from '@/lib/projects';

export function DesignWorkSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    scrollerRef.current?.scrollBy({ left: direction === 'left' ? -360 : 360, behavior: 'smooth' });
  };

  return (
    <div className="mt-20">
      <p className="mx-auto max-w-screen-xl px-4 font-heading text-2xl italic text-muted-foreground sm:px-12 sm:text-3xl lg:px-16">
        UI / UX Designer
      </p>
      <div className="relative mx-auto mt-6 max-w-screen-xl px-4 sm:px-12 lg:px-16">
        <div ref={scrollerRef} className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2">
          {designProjects.map((project) => (
            <Link key={project.id} to={project.link} className="group shrink-0 snap-start">
              <img
                src={project.image}
                alt={project.title}
                className="h-96 aspect-video rounded-sm object-cover object-center transition-opacity group-hover:opacity-80"
              />
              <p className="mt-3 font-sans text-sm font-bold uppercase tracking-wide">
                {project.title}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex justify-end gap-3">
          <Button
            variant="outline"
            size="icon"
            aria-label="Slide back"
            className="rounded-full"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            aria-label="Slide forward"
            className="rounded-full"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
