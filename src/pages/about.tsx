import { AmazonIcon, MetaIcon } from '@/components/site/icons';

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

export function About() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <img
          src="/profile.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[50%_25%] opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-24 sm:px-6 sm:py-32 lg:px-10">
          <p className="font-heading text-2xl italic text-foreground/70 sm:text-3xl">
            hi there, I&apos;m
          </p>
          <h1 className="font-sans text-6xl font-bold uppercase leading-none tracking-tight sm:text-8xl lg:text-9xl">
            Lexa Wong
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-10">
        <p className="text-center font-heading text-3xl italic text-foreground/70 sm:text-4xl">
          the resume
        </p>
        <p className="mx-auto mt-6 max-w-3xl text-center text-xl leading-relaxed sm:text-2xl">
          Compulsive learner with a discerning eye. Thrive on challenges, motivated by making
          things that matter. Educational background in Economics and Psychology which helps
          frame my perspective on what moves humanity.
        </p>
        <p className="mx-auto mt-6 max-w-3xl text-center text-xl leading-relaxed text-muted-foreground sm:text-2xl">
          Frontend Developer and former UI designer. With a background in Economics and
          Psychology, I bring a unique perspective to crafting digital experiences. For the past
          decade, I've been weaving together aesthetics and functionality, creating interfaces
          that not only look good but resonate deeply with users. I thrive on challenges and stay
          ahead of the curve, constantly evolving in the ever-changing tech landscape.
        </p>
      </section>

      <section className="mx-auto max-w-screen-xl border-t border-border px-4 py-16 sm:px-6 lg:px-10">
        <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Latest learnings
        </h2>
        <div className="mt-6 flex flex-col gap-4">
          {learnings.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xl italic hover:opacity-70"
            >
              <Icon className="h-4 w-4 shrink-0" />
              {label}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
