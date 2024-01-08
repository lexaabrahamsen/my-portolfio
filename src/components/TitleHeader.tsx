import React, { FC, useContext } from 'react';
import { DarkModeContext } from '../DarkModeContext';

interface TitleHeaderProps {
  title: string;
}

const TitleHeader: FC<TitleHeaderProps> = (props) => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }

  const { darkMode } = darkModeContext;

  return (
    <div className="relative z-10 max-w-screen-xl px-4 pb-12 pt-10 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-4xl sm:mt-1 mt-30 space-y-8 text-left sm:text-left sm:ml-auto">
        <h6
          className={`text-5xl text-center font-gloock mb-1 font-extrabold ${
            darkMode ? 'light-font' : 'dark-font'
          }`}
        >
          {props.title}
        </h6>
      </div>
    </div>
  );
};

export default TitleHeader;
