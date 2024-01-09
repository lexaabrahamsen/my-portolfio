import React, { useContext } from 'react';
import { DarkModeContext } from '../DarkModeContext';
import { TAKE_COMMAND_GREEN } from '../constants';

interface HeaderProps {
  id: string;
}

const Header: React.FC<HeaderProps> = ({id}) => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }

  const { darkMode } = darkModeContext;

  return (
    <aside className={`relative overflow-hidden text-black rounded-lg ${darkMode ? 'dark-background' : 'light-background'}`}>
      <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-4xl mt-14 space-y-8 text-left sm:ml-auto">
          <h2
            className={`font-outfit font-bold text-8xl tracking-tight ${
              darkMode ? 'light-font' : 'dark-font'
            }`}
          >
            Front-end developer currently juggling health insurance at{' '}
            <a
              rel="noopener noreferrer"
              href="https://www.takecommandhealth.com/"
              target="_blank"
              style={{ color: TAKE_COMMAND_GREEN }}
            >
              Take Command
            </a>
          </h2>
          <br />
          <div className="col-span-12 sm:col-span-3">
            <h3
              className={`font-gloock text-lg font-regular italic ${
                darkMode ? 'light-font' : 'dark-font'
              }`}
            >
              Former UI/UX Designer for 10 years
            </h3>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Header;
