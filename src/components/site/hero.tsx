import { Link } from 'react-router-dom';
import { DotGrid } from '@/components/site/dot-grid';

const TAKE_COMMAND_GREEN = '#2fe3a3';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <DotGrid />
      <div className="relative z-10 mx-auto max-w-screen-xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24 lg:px-10">
        <p className="font-heading text-2xl italic text-foreground/70 sm:text-3xl">currently</p>
        <h1 className="font-sans text-6xl font-bold uppercase leading-[0.95] tracking-tight sm:text-8xl lg:text-9xl">
          Front-end
          <br />
          Developer
        </h1>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground sm:text-2xl">
          Juggling health insurance at{' '}
          <a
            rel="noopener noreferrer"
            href="https://www.takecommandhealth.com/"
            target="_blank"
            className="font-semibold underline decoration-2"
            style={{ color: TAKE_COMMAND_GREEN }}
          >
            Take Command
          </a>
          . <span className="font-heading italic">Former UI/UX Designer</span> for 10 years.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            to="/about"
            className="rounded-full bg-foreground px-6 py-3 font-sans text-sm font-semibold uppercase tracking-wide text-background transition-opacity hover:opacity-80"
          >
            Know more &#8599;
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-border px-6 py-3 font-sans text-sm font-semibold uppercase tracking-wide transition-colors hover:border-foreground/50"
          >
            Contact &#8599;
          </Link>
        </div>
      </div>
    </section>
  );
}
