import React from 'react';

// add interface for props
interface HeaderProps {
  id: string;
}

export default function Header({ id }: HeaderProps) {
  return (
    <aside className="relative overflow-hidden text-black rounded-lg" id="header">
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
          {/* <br /> */}
          {/* <br /> */}
          {/* <br /> */}
          {/* <br /> */}
          <div className="col-span-12 sm:col-span-3">
            <h3 className="font-gloock text-lg font-regular" style={{ color: '#1f2937', fontStyle: 'italic' }}>Former UI/UX Designer for 10 years</h3>
          </div>
        </div>
      </div>
    </aside>
  );
}
