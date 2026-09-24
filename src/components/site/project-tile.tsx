import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from '@/components/site/icons';

interface ProjectTileProps {
  title: string;
  description: string;
  image: string;
  link: string;
  discipline?: string;
}

const NOTCH_MASK =
  'radial-gradient(circle 32px at calc(100% - 12px) calc(100% - 12px), transparent 32px, black 33px)';

export function ProjectTile({ title, description, image, link, discipline }: ProjectTileProps) {
  const isExternal = link.startsWith('http');

  const content = (
    <div className="group">
      <div className="relative">
        <div
          className="aspect-[4/3] overflow-hidden rounded-[28px] bg-card"
          style={{
            WebkitMaskImage: NOTCH_MASK,
            maskImage: NOTCH_MASK,
          }}
        >
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute -bottom-5 -right-5 flex h-16 w-16 items-center justify-center rounded-full bg-foreground text-background shadow-lg transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
          <ArrowUpRightIcon className="h-6 w-6" />
        </div>
      </div>

      {discipline && (
        <span className="mt-6 inline-block rounded-full bg-secondary px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wide text-secondary-foreground">
          {discipline}
        </span>
      )}

      <h3 className="mt-4 font-sans text-2xl font-bold uppercase tracking-tight">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  );

  if (isExternal) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link to={link}>{content}</Link>;
}
