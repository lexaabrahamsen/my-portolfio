import React, { FC, useContext, useEffect, useRef } from 'react';

import TitleHeader from '../../components/TitleHeader';
import { designProjects } from '../../projectData';
import { DarkModeContext } from '../../DarkModeContext';

interface DesignWorkProps {
  id?: string;
}

const DesignWork: FC<DesignWorkProps> = () => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }

  const { darkMode } = darkModeContext;

  const devWorkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if there is a hash in the URL
    const hash = window.location.hash;
    if (hash === '#design-work' && devWorkRef.current) {
      // Scroll to the "Development Work" section
      devWorkRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div
      className={`relative flex flex-col min-w-0 break-words border-0 shadow-soft-xl bg-clip-border px-3 pb-3 ${
        darkMode ? 'dark-background' : 'light-background'
      }`}
    >
      <TitleHeader title="Design Work" />
      <div
        className="relative flex items-center justify-center w-full dark:text-gray-50"
        ref={devWorkRef}
        id="design-work"
      >
        <button
          aria-label="Slide back"
          type="button"
          className="absolute left-0 z-30 p-2 ml-10 focus:outline-none focus:dark:bg-gray-400 focus:ri focus:ri focus:ri"
        >
          <svg
            width="8"
            height="14"
            fill="none"
            viewBox="0 0 8 14"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
          >
            <path
              d="M7 1L1 7L7 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <div className="carousel carousel-end rounded-box">
          {designProjects.map((project) => {
            return (
              <div className="carousel-item m-0.5">
                <a
                  rel="noopener noreferrer"
                  href={project.link}
                  className="font-medium font-gloock text-md hover:underline dark:text-gray-100"
                >
                  <img
                    className="h-96 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
                    src={project.image}
                    alt={project.title}
                  />
                </a>
              </div>
            );
          })}
        </div>
        <button
          aria-label="Slide forward"
          id="next"
          className="absolute right-0 z-30 p-2 mr-10 focus:outline-none focus:dark:bg-gray-400 focus:ri focus:ri focus:ri"
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
          >
            <path
              d="M1 1L7 7L1 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        {/* TODO: Add indicator dots */}
      </div>
    </div>
  );
};

export default DesignWork;
