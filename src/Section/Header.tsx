import React from 'react';

export default function Header() {
  return (
    // TODO: Possibly italizing Take Command text.
    <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
      <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-4xl sm:mt-1 mt-80 space-y-8 text-center sm:text-left sm:ml-auto">
          <h2 className="font-outfit font-bold sm:text-8xl leading-8">
            Front-end developer currently juggling health insurance at{' '}
            <a
              rel="noopener noreferrer"
              href="https://www.takecommandhealth.com/"
              style={{ color: '#188a68'}}
              target="_blank"
            >
              Take Command
            </a>
          </h2>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="col-span-12 sm:col-span-3">
            <h3 className="text-3xl font-semibold">previously</h3>
            <span className="text-sm font-bold tracki uppercase">
              UI/UX Designer for 10 years
            </span>
          </div>
          <div className="col-span-12 sm:col-span-9 sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
            <h3 className="text-xl font-semibold tracki">Previously</h3>
            <time className="text-xs tracki uppercase">
              Words
            </time>
            <p className="mt-3">UX/UI Designer for 10 years</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
