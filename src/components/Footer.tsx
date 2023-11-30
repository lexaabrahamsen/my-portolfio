import React, { useContext } from 'react';

import { navigationLinks } from './navigation';
import SocialLinks from './SocialLinks';

import { DarkModeContext } from '../DarkModeContext';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }

  const { darkMode } = darkModeContext;

  return (
    <footer
      className={`p-5 ${darkMode ? 'dark-background' : 'light-background'}`}
    >
      <div className="w-full mx-auto max-w-screen-xl p-3 md:flex sm:items-center md:justify-between">
        <span
          className={`font-outfit text-sm sm:text-center ${
            darkMode ? 'light-font' : 'dark-font'
          }`}
        >
          © 2023. All Rights Reserved.
        </span>
        <SocialLinks />
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
          {navigationLinks.map((item) => (
            <li className="px-5">
              <a
                key={item.name}
                href={item.href}
                className={`font-outfit ${
                  darkMode ? 'light-font' : 'dark-font'
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
