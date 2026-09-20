import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { TitleHeader } from '@/components/site/title-header';
import { designProjects } from '@/lib/projects';

export function DesignWorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.location.hash === '#design-work' && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    scrollerRef.current?.scrollBy({ left: direction === 'left' ? -360 : 360, behavior: 'smooth' });
  };

  return (
    <div>
      <TitleHeader title="Design Work" />
      <div ref={sectionRef} id="design-work" className="relative mx-auto flex max-w-screen-xl items-center px-4 sm:px-12 lg:px-16">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Slide back"
          className="absolute left-0 z-10"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <div ref={scrollerRef} className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2">
          {designProjects.map((project) => (
            <Link
              key={project.id}
              to={project.link}
              className="shrink-0 snap-start"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-96 aspect-video rounded-sm object-cover object-center"
              />
            </Link>
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Slide forward"
          className="absolute right-0 z-10"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
