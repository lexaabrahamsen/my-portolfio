import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';
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
      className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-12"
      style={{ backgroundColor: darkMode ? '#1f2937' : 'white' }}
    >
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-top">
          <p className="mt-2 text-9xl font-gloock font-bold tracking-tight text-gray-900 sm:text-4xl" style={{ color: darkMode ? 'white' : '#1f2937' }}>
            Portfolio Website
          </p>
          <div style={{ paddingTop: '15px' }}>
            <p className="text-base font-outfit font-light leading-7 uppercase" style={{ color: darkMode ? 'white' : '#1f2937' }}>
              Current Website
            </p>
          </div>
          <p className="mt-6 text-xl leading-8 text-gray-700 font-outfit font-light" style={{ color: darkMode ? 'white' : '#1f2937' }}>
            This dynamic and visually appealing portfolio website showcases my
            skills, projects, and personality. Crafted with precision, it is a
            reflection of my journey as a developer and a creative professional.
            <br />
            TECHNOLOGIES USED: React: Utilized the React library for building a
            single-page application (SPA) that provides a seamless and
            responsive user experience. TypeScript: Incorporated TypeScript to
            enhance code quality, catch potential errors during development, and
            provide improved documentation for the entire codebase. Tailwind
            CSS: Styled the website with Tailwind CSS, a utility-first CSS
            framework, allowing for rapid and consistent design development.
            This streamlined approach ensures a clean and maintainable code
            structure. Netlify Hosting: Deployed on Netlify for reliable
            hosting, continuous integration, and effortless scalability. This
            ensures optimal performance and availability for visitors. <br />
            FEATURE HIGHLIGHTS: Responsive Design: Implemented a responsive
            design to ensure an optimal viewing experience across various
            devices and screen sizes. The website adapts seamlessly to both
            desktop and mobile environments. Dynamic Content: Leveraged React's
            component-based architecture to create dynamic and reusable UI
            components. This enables easy content updates and additions without
            compromising code integrity. Dark Mode: Integrated a Dark Mode
            feature using the DarkModeProvider and useContext from React. Users
            can toggle between light and dark themes, enhancing accessibility
            and user preference. Navigation: Employed React Router to manage
            client-side navigation, enabling a smooth transition between
            different sections of the portfolio. Each project has its own
            dedicated page, offering in-depth insights. <br />
            ACHIEVEMENTS: Optimized Performance: Employed best practices for
            performance optimization, resulting in quick load times and a snappy
            user interface. Cross-Browser Compatibility: Ensured compatibility
            with various browsers to guarantee a consistent and polished
            experience for all users. SEO-friendly: Implemented SEO best
            practices to enhance the website's visibility on search engines and
            improve its discoverability. <br />
            LESSONS LEARNED: TypeScript Benefits: Discovered the advantages of
            TypeScript, such as enhanced code maintainability, early error
            detection, and improved collaboration among team members. Tailwind
            CSS Efficiency: Appreciated the efficiency of Tailwind CSS for rapid
            prototyping and styling, allowing for quick adjustments and a
            cohesive design language. React Flexibility: Explored the
            flexibility of React, which facilitated the creation of a dynamic
            and scalable portfolio that can easily evolve with future projects.{' '}
            <br />
            FUTURE IMPROVEMENTS: Additional Projects: Plan to continuously
            update the portfolio with new projects and achievements to reflect
            ongoing growth and skills development. Interactive Elements:
            Consider adding more interactive elements and animations to enhance
            the user experience and engage visitors.
          </p>
        </div>
        <div className="w-full lg:w-8/12">
          <img src="../WS1.png" className="w-full rounded-lg mb-8" />
          <img src="../WS2.jpeg" className="w-full rounded-lg mb-8" />
          <img src="../WS3.jpeg" className="w-full rounded-lg mb-8" />
          <img src="../WS4.jpeg" className="w-full rounded-lg mb-8" />
          <img src="../WS5.png" className="w-full rounded-lg mb-8" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
