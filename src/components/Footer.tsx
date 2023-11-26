import React, { useContext } from 'react';

import { navigationLinks } from '../Section/navigation';
import SocialLinks from './SocialLinks';

import { DarkModeContext } from '../DarkModeContext';

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }

  const { darkMode } = darkModeContext;

  return (
    <footer style={{ backgroundColor: darkMode ? '#1f2937' : 'white', padding: '20px' }}>
      <div className="w-full mx-auto max-w-screen-xl p-3 md:flex md:items-center md:justify-between" style={{ backgroundColor: darkMode ? '#1f2937' : 'white' }}>
        <span className="font-outfit text-sm sm:text-center" style={{ color: darkMode ? 'white' : '#1f2937' }}>
          © 2023. All Rights Reserved.
        </span>
        <SocialLinks />
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
          {navigationLinks.map((item) => (
            <li style={{ paddingLeft: '20px' }}>
              <a
                key={item.name}
                href={item.href}
                className="font-outfit"
                style={{ color: darkMode ? 'white' : '#1f2937' }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;