import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
// Components
import TitleHeader from '../../components/TitleHeader';
// Data
import { designProjects } from '../projectData';
import { DarkModeContext } from '../../DarkModeContext';

interface DesignWorkProps {}

const DesignWork: FC<DesignWorkProps> = () => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }

  const { darkMode } = darkModeContext;

  return (
    <div
      id="design-work"
      className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl bg-clip-border"
      style={{ paddingLeft: '2%', paddingRight: '2%', paddingBottom: '2%',
       backgroundColor: darkMode ? '#1f2937' : 'white'
       }}
    >
      <TitleHeader title="Design Work" />
      <div className="relative flex items-center justify-center w-full dark:text-gray-50">
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
              <div className="carousel-item" style={{ margin: '2px' }}>
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
}

export default DesignWork;
