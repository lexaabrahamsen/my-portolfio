import { useContext } from 'react';
import { DarkModeContext } from '../../DarkModeContext';

export default function Willspace() {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }

  const { darkMode } = darkModeContext;
  return (
    <div
      className={`2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-12 ${
        darkMode ? 'dark-background' : 'light-background'
      }`}
    >
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-top">
          <h3
            className={`mt-2 text-4xl font-gloock font-bold tracking-tight text-gray-900 ${
              darkMode ? 'light-font' : 'dark-font'
            }`}
          >
            WillSpace
          </h3>
          <div className="pt-4">
            <p
              className={`text-base font-outfit font-light leading-7 uppercase" ${
                darkMode ? 'light-font' : 'dark-font'
              }`}
            >
              Fitness application
            </p>
          </div>
          <p
            className={`mt-6 text-xl leading-8 text-gray-700 font-outfit font-light ${
              darkMode ? 'light-font' : 'dark-font'
            }`}
          >
            WILLSPACE, a revolutionary fitness atelier hired SMM to build a
            health and wellness application. My role as UI Designer on this
            project was to work with owner Will Torres to design a fitness
            trainer tool aimed at simplifying client progress tracking. The
            application allows for trainers and administrators to create unique
            exercises and upload reference videos, create and track clients
            through a scheduling tool, assign the aforementioned exercises to
            programs and then give these programs to their clients for use.
          </p>
        </div>
        <div className="w-full lg:w-8/12">
          <img src="../WS1.png" className="w-full rounded-lg mb-8" alt="" />
          <img src="../WS2.jpeg" className="w-full rounded-lg mb-8" alt="" />
          <img src="../WS3.jpeg" className="w-full rounded-lg mb-8" alt="" />
          <img src="../WS4.jpeg" className="w-full rounded-lg mb-8" alt="" />
          <img src="../WS5.png" className="w-full rounded-lg mb-8" alt="" />
        </div>
      </div>
    </div>
  );
}
