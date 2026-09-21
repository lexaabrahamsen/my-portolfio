import { Link } from 'react-router-dom';

interface ProjectTileProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function ProjectTile({ title, description, image, link }: ProjectTileProps) {
  const isExternal = link.startsWith('http');

  const content = (
    <div className="group">
      <div className="overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-border pt-3">
        <h3 className="font-sans text-xl font-bold uppercase tracking-tight">{title}</h3>
        <span className="shrink-0 font-heading italic text-foreground/60 transition-transform group-hover:translate-x-1">
          &#8599;
        </span>
      </div>
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
