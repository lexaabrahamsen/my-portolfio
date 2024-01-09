import { useContext } from 'react';
import { DarkModeContext } from '../../DarkModeContext';

interface PortfolioPageProps {}

const PortfolioPage: React.FC<PortfolioPageProps> = () => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }

  const { darkMode } = darkModeContext;

  return (
    <div
      className={` 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-12 ${
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
            Portfolio Website
          </h3>
          <div style={{ paddingTop: '15px' }}>
            <p
              className={`text-base font-outfit font-light leading-7 uppercase ${
                darkMode ? 'light-font' : 'dark-font'
              }`}
            >
              <strong>TAILWIND CSS / REACT / TYPESCRIPT</strong>
            </p>
          </div>
          <p
            className={`mt-6 text-xl leading-8 text-gray-700 font-outfit font-light ${
              darkMode ? 'light-font' : 'dark-font'
            }`}
          >
            This portfolio website showcases my skills, projects, and is a
            reflection of my journey as a developer and a creative professional.
            <br />
            <br />
            I wrote this project in React with TypeScript to enhance code
            quality and provide a statically-typed development experience.
            Utilized TypeScript's type-checking features to catch potential
            errors during development.
            <br />
            <br />
            Tailwind CSS was my choice for the CSS framework for styling.
            Adopting a utility-first approach for efficient and responsive
            design.
            <br />
            <br />
            This site is currently hosted on Netlify for seamless deployment and
            continuous integration. Leveraging Netlify's automated build and
            deployment features for an efficient development workflow.
            <br />
            <br />
            Integrated a Dark Mode feature using the DarkModeProvider and
            useContext from React. Enables users to toggle between light and
            dark themes, enhancing accessibility and accommodating user
            preferences.
          </p>
          <div className="flex items-center pb-2 mt-6">
            <div
              className={`hover:underline pr-4 font-outfit ${
                darkMode ? 'light-font' : 'dark-font'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </div>
            <a
              href="https://github.com/lexaabrahamsen/my-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-outfit ${darkMode ? 'light-font' : 'dark-font'}`}
              style={{ textDecoration: 'underline', fontSize: '1.2rem' }}
            >
              GITHUB
            </a>
          </div>
        </div>
        <div className="w-full lg:w-8/12">
          <img
            src="../Portfolio1.jpg"
            className="w-full rounded-lg mb-8"
            alt=""
          />
          <img
            src="../Portfolio2.jpg"
            className="w-full rounded-lg mb-8"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
