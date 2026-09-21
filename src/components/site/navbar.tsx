import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { navigationLinks } from '@/lib/navigation';
import { SocialLinks } from '@/components/site/social-links';
import { ThemeToggle } from '@/components/site/theme-toggle';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <Link to="/" className="-m-1.5 p-1.5">
          <span className="font-heading text-xl font-medium uppercase tracking-wide">
            Lexa Wong
          </span>
        </Link>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-10 font-sans">
          {navigationLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold uppercase leading-6 hover:opacity-70 transition-opacity"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open main menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-neutral-900 text-white border-none w-full sm:max-w-sm">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <div className="mt-10 flex flex-col gap-6 px-6">
                <ThemeToggle />
                <div className="flex flex-col gap-2">
                  {navigationLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="font-heading text-4xl font-light hover:line-through"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <SocialLinks className="text-white" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
