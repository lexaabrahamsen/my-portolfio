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
    <div className="group relative overflow-hidden rounded-lg">
      <img src={image} alt={title} className="w-full rounded-lg" />
      <div className="absolute inset-0 flex flex-col items-start justify-end rounded-lg bg-black/0 p-5 opacity-0 transition-all duration-300 group-hover:bg-black/60 group-hover:opacity-100">
        <h3 className="font-heading text-2xl text-white">{title}</h3>
        <p className="font-sans text-sm text-white/90">{description}</p>
      </div>
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
