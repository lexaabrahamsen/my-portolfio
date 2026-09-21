import { AmazonIcon, MetaIcon } from '@/components/site/icons';
import { SocialLinks } from '@/components/site/social-links';

const learnings = [
  {
    Icon: AmazonIcon,
    href: 'https://www.linkedin.com/learning/software-architecture-domain-driven-design/what-is-ddd?autoSkip=true&resume=false&u=138906977',
    label: 'AWS - Software Architecture: Domain-Driven Design',
  },
  {
    Icon: AmazonIcon,
    href: 'https://aws.amazon.com/training/classroom/developing-on-aws/',
    label: 'AWS Developing on AWS Course',
  },
  {
    Icon: MetaIcon,
    href: 'https://www.coursera.org/learn/advanced-react?specialization=meta-front-end-developer',
    label: 'Coursera Advanced React',
  },
];

export function Contact() {
  return (
    <div className="mx-auto max-w-screen-xl px-6 py-16 sm:px-10 lg:px-10">
      <h1 className="font-sans text-4xl font-bold uppercase leading-none tracking-tight sm:text-6xl lg:text-8xl">
        Get in touch
      </h1>
      <p className="mt-2 font-heading text-2xl italic text-foreground/70 sm:text-3xl lg:text-4xl">
        let&apos;s build something
      </p>

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-10">
          <div className="border-t border-border pt-6">
            <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              About
            </h2>
            <p className="mt-4 text-lg leading-relaxed">
              Compulsive learner with a discerning eye. Thrive on challenges, motivated by making
              things that matter. Educational background in Economics and Psychology which helps
              frame my perspective on what moves humanity.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Frontend Developer and former UI designer. With a background in Economics and
              Psychology, I bring a unique perspective to crafting digital experiences. For the
              past decade, I've been weaving together aesthetics and functionality, creating
              interfaces that not only look good but resonate deeply with users.
            </p>
          </div>

          <div className="border-t border-border pt-6">
            <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Latest learnings
            </h2>
            <div className="mt-4 flex flex-col gap-3">
              {learnings.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg italic hover:opacity-70"
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Reach out
            </h2>
            <a
              href="mailto:lexaraea@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
              className="mt-4 block font-heading text-2xl italic underline hover:opacity-70"
            >
              lexaraea@gmail.com
            </a>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="lg:pt-6">
          <img
            className="w-full rounded-lg grayscale transition-all duration-500 hover:grayscale-0"
            src="/profile.jpg"
            alt="Lexa Wong"
          />
        </div>
      </div>
    </div>
  );
}
