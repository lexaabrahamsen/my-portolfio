import React from 'react';

export default function Header() {
  return (
    <>
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-4xl sm:mt-1 mt-80 space-y-8 text-center sm:text-left sm:ml-auto">
            <h2 className="font-outfit font-bold sm:text-8xl leading-8">
              Front-end developer currently juggling health insurance at Take
              Command
            </h2>
          </div>
        </div>
      </aside>
      <div
        className="grid grid-cols-3 content-center"
        style={{ width: '100%', margin: '20px', padding: '10px' }}
      >
        <div className="visible md:invisible"></div>
        <div
          className="divide-y-4"
          style={{ borderTop: '1px solid black' }}
        ></div>
        <div>
          <h3 style={{ paddingBottom: '10px' }} className="font-gloock">
            Previous UX/UI Designer for 10 years
          </h3>
        </div>
      </div>
    </>
  );
}
