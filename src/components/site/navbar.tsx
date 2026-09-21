import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { navigationLinks } from '@/lib/navigation';
import { SocialLinks } from '@/components/site/social-links';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur">
      <nav className="flex items-center justify-between p-6 lg:px-10" aria-label="Global">
        <Link
          to="/"
          className="rounded-full border border-border px-4 py-1.5 font-heading text-lg tracking-wide hover:border-foreground/40 transition-colors"
        >
          Lexa Wong
        </Link>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-10 font-sans">
          {navigationLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-wider leading-6 text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open main menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black text-white border-l border-border w-full sm:max-w-sm">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <div className="mt-10 flex flex-col gap-8 px-6">
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
