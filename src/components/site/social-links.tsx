import { GithubIcon, InstagramIcon, LinkedinIcon, MastodonIcon } from '@/components/site/icons';

const links = [
  { href: 'https://github.com/lexaabrahamsen', label: 'GitHub', Icon: GithubIcon },
  { href: 'https://www.linkedin.com/in/lexa-abrahamsen/', label: 'LinkedIn', Icon: LinkedinIcon },
  { href: 'https://www.instagram.com/lexaraea/', label: 'Instagram', Icon: InstagramIcon },
  { href: 'https://mastodon.social/@lexaraea', label: 'Mastodon', Icon: MastodonIcon },
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className ?? 'text-foreground/80'}`}>
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="hover:opacity-70 transition-opacity"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
