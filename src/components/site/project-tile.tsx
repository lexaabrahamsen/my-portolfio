import { Link } from 'react-router-dom';

interface ProjectTileProps {
  title: string;
  description: string;
  image: string;
  link: string;
  discipline?: string;
}

export function ProjectTile({ title, description, image, link, discipline }: ProjectTileProps) {
  const isExternal = link.startsWith('http');

  const content = (
    <div className="group">
      <div className="relative rounded-2xl bg-card p-3">
        <div className="aspect-[4/3] overflow-hidden rounded-xl">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute -bottom-4 -right-4 flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background shadow-lg transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
          <span className="font-heading text-lg">&#8599;</span>
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
