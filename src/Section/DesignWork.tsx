import React from 'react';
import { Link } from 'react-router-dom';
// Components
import TitleHeader from '../components/TitleHeader';
// Data
import { projects } from './projectData';

export default function DesignWork() {
  return (
    <div
      id="/design-work"
      className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border"
      style={{ paddingLeft: '2%', paddingRight: '2%', paddingBottom: '2%' }}
    >
      <TitleHeader title="Design Work" />
      {/* option 1 */}
      <div className="carousel carousel-end rounded-box">
        {projects.map((project) => {
          return (
            <div className="carousel-item">
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
      {/* option 2 */}
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
        <div className="flex items-center justify-start w-full h-full gap-3 py-4 mx-auto overflow-auto lg:gap-3">
          {projects.map((project) => {
            return (
              <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                <a
                  rel="noopener noreferrer"
                  href={project.link}
                  className="font-medium font-gloock text-md hover:underline dark:text-gray-100"
                >
                  <img
                    className="object-cover object-center h-96 aspect-video dark:bg-gray-500 rounded-1xl bg-clip-border"
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
      </div>
    </div>
  );
}
