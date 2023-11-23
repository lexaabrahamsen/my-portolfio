import React, { useContext } from 'react';
import { DarkModeContext } from '../DarkModeContext';
import Switch from '../components/Switch';

interface HeaderProps {
  id: string;
}

const Header: React.FC<HeaderProps> = ({  }) => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }

  const { darkMode } = darkModeContext;

  return (
    <aside
      className="relative overflow-hidden text-black rounded-lg"
      style={{ backgroundColor: darkMode ? '#1f2937' : 'white' }}
    >
      <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-4xl sm:mt-1 mt-80 space-y-8 text-center sm:text-left sm:ml-auto">
          <h2
            className="font-outfit font-bold sm:text-8xl leading-8"
            style={{ color: darkMode ? 'white' : '#1f2937' }}
          >
            Front-end developer currently juggling health insurance at{' '}
            <a
              rel="noopener noreferrer"
              href="https://www.takecommandhealth.com/"
              style={{ color: '#188a68' }}
              target="_blank"
            >
              Take Command
            </a>
          </h2>
          <Switch />
          <br />
          <div className="col-span-12 sm:col-span-3">
            <h3
              className="font-outfit text-lg font-regular"
              style={{
                color: darkMode ? 'white' : '#1f2937',
                fontStyle: 'italic',
              }}
            >
              Former UI/UX Designer for 10 years
            </h3>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Header;
