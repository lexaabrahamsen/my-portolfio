import { websiteProjects } from '../../projectData';
import { useContext } from 'react';
import { DarkModeContext } from '../../DarkModeContext';

export default function WebsiteWork() {
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
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="w-full lg:w-5/12 flex flex-col justify-top">
          <h3
            className={`mt-2 text-4xl font-gloock font-bold tracking-tight text-gray-900 ${
              darkMode ? 'light-font' : 'dark-font'
            }`}
          >
            Website Work
          </h3>
          <div style={{ paddingTop: '15px' }}>
            <p
              className={`text-base font-outfit font-light leading-7 uppercase" ${
                darkMode ? 'light-font' : 'dark-font'
              }`}
            >
              Website work
            </p>
          </div>
          <p
            className={`mt-6 text-xl leading-8 text-gray-700 font-outfit font-light ${
              darkMode ? 'light-font' : 'dark-font'
            }`}
          >
            Website work is a collection of websites I have designed and
          </p>
        </div>
        <div className="w-full lg:w-8/12">
          {websiteProjects.map((project) => {
            return (
              <>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-lg"
                />

                <h5
                  className={`mt-4 text-3xl font-outfit font-medium tracking-tight text-gray-900 ${
                    darkMode ? 'light-font' : 'dark-font'
                  }`}
                >
                  {project.title}
                </h5>
                <p
                  className={`text-base font-outfit font-light leading-7 uppercase" ${
                    darkMode ? 'light-font' : 'dark-font'
                  }`}
                >
                  {project.description}
                </p>

                <div>
                  <div className="flex items-center pb-2 mt-6 mb-10">
                    <div
                      className={`hover:underline pr-4 font-outfit ${
                        darkMode ? 'light-font' : 'dark-font'
                      }`}
                    >
                      <a
                        href={project.link}
                        className={`font-gloock ${
                          darkMode ? 'light-font' : 'dark-font'
                        }`}
                        style={{
                          textDecoration: 'underline',
                          fontSize: '1.2rem',
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View demo
                      </a>
                    </div>
                    <div
                      className={`hover:underline pr-4 font-outfit ${
                        darkMode ? 'light-font' : 'dark-font'
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
