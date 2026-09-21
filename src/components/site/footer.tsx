import { Link } from 'react-router-dom';
import { navigationLinks } from '@/lib/navigation';
import { SocialLinks } from '@/components/site/social-links';

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Link
        to="/contact"
        className="block overflow-hidden py-12 text-center transition-opacity hover:opacity-80"
      >
        <span className="font-sans text-5xl font-bold uppercase tracking-tight sm:text-7xl lg:text-8xl">
          Let&apos;s talk
        </span>
      </Link>
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center gap-4 border-t border-border px-5 py-6 md:flex-row md:justify-between">
        <span className="text-sm font-sans text-muted-foreground">© 2026. All Rights Reserved.</span>
        <SocialLinks />
        <ul className="flex flex-wrap items-center gap-1 text-sm font-medium">
          {navigationLinks.map((item) => (
            <li key={item.name} className="px-5">
              <a
                href={item.href}
                className="font-sans text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
