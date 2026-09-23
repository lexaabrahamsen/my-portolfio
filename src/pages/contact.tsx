import { SocialLinks } from '@/components/site/social-links';

export function Contact() {
  return (
    <div className="mx-auto max-w-screen-xl px-6 py-16 sm:px-10 lg:px-10">
      <h1 className="font-sans text-4xl font-bold uppercase leading-none tracking-tight sm:text-6xl lg:text-8xl">
        Get in touch
      </h1>
      <p className="mt-2 font-heading text-2xl italic text-foreground/70 sm:text-3xl lg:text-4xl">
        let&apos;s build something
      </p>

      <div className="mt-16 border-t border-border pt-6">
        <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Reach out
        </h2>
        <a
          href="mailto:lexaraea@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
          className="mt-4 block font-heading text-3xl italic underline hover:opacity-70 sm:text-4xl"
        >
          lexaraea@gmail.com
        </a>
        <div className="mt-6">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
