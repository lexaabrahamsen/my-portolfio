import { navigationLinks } from '@/lib/navigation';
import { SocialLinks } from '@/components/site/social-links';

export function Footer() {
  return (
    <footer className="border-t border-border p-5">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center gap-4 md:flex-row md:justify-between">
        <span className="px-5 text-sm font-sans">© 2026. All Rights Reserved.</span>
        <SocialLinks />
        <ul className="flex flex-wrap items-center gap-1 text-sm font-medium">
          {navigationLinks.map((item) => (
            <li key={item.name} className="px-5">
              <a href={item.href} className="font-sans hover:opacity-70 transition-opacity">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
