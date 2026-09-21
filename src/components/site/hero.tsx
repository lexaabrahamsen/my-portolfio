const TAKE_COMMAND_GREEN = '#188a68';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-screen-xl px-4 pb-20 pt-10 sm:px-6 sm:py-24 lg:px-8">
        <div className="mt-14 max-w-4xl space-y-8 text-left sm:ml-auto">
          <h1 className="font-sans text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
            Front-end developer currently juggling health insurance at{' '}
            <a
              rel="noopener noreferrer"
              href="https://www.takecommandhealth.com/"
              target="_blank"
              style={{ color: TAKE_COMMAND_GREEN }}
            >
              Take Command
            </a>
          </h1>
          <h2 className="font-heading text-lg italic font-normal">
            Former UI/UX Designer for 10 years
          </h2>
        </div>
      </div>
    </section>
  );
}
