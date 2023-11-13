import React from 'react';
import { Link } from 'react-router-dom';
// Components
import TitleHeader from '../components/TitleHeader';
// Data
import { projects } from './projectData';

export default function DesignWork() {
  return (
    <div
      className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border"
      style={{ paddingLeft: '2%', paddingRight: '2%', paddingBottom: '2%' }}
    >
      <TitleHeader title="Design Work" />
      <div className="carousel carousel-end rounded-box">
        {projects.map((project) => {
          return (
            <div className="carousel-item gap-4">
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
    </div>
  );
}
