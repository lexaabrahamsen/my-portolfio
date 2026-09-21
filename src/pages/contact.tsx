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
    <div className="mx-auto grid min-h-[93vh] max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="font-sans text-4xl font-bold leading-8 sm:text-5xl">Get in touch.</h1>

          <div className="mt-6">
            <h2 className="pb-2 font-sans font-medium uppercase text-neutral-400">About Me</h2>
            <p className="font-sans">
              Compulsive learner with a discerning eye. Thrive on challenges, motivated by making
              things that matter. Educational background in Economics and Psychology which helps
              frame my perspective on what moves humanity.
            </p>
            <br />
            <p className="font-sans">
              Frontend Developer and former UI designer. With a background in Economics and
              Psychology, I bring a unique perspective to crafting digital experiences. For the
              past decade, I've been weaving together aesthetics and functionality, creating
              interfaces that not only look good but resonate deeply with users. I thrive on
              challenges and stay ahead of the curve, constantly evolving in the ever-changing
              tech landscape.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="pb-2 font-sans font-medium uppercase text-neutral-400">
              Latest learnings
            </h2>
            <div className="flex flex-col gap-2">
              {learnings.map(({ Icon, href, label }) => (
                <div key={label} className="flex items-center gap-3 pb-2">
                  <Icon className="h-4 w-4 shrink-0" />
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans italic hover:opacity-70"
                  >
                    {label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <a
              href="mailto:lexaraea@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
              className="font-heading underline hover:opacity-70"
            >
              lexaraea@gmail.com
            </a>
          </div>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className="py-2">
        <img className="w-full rounded-lg" src="/profile.jpg" alt="profile" />
      </div>
    </div>
  );
}
