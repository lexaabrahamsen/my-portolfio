import React, { useContext } from 'react';
import DesignWork from './Design/DesignWorkPage';
import DevWork from './Development/DevelopmentWorkPage';
import Header from '../components/Header';
import { DarkModeContext } from '../DarkModeContext';

interface HomepageProps {}

const Homepage: React.FC<HomepageProps> = () => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }

  const { darkMode } = darkModeContext;

  return (
    <div className={`${darkMode ? 'dark-background' : 'light-background'}`}>
      <Header id="header" />
      <DevWork id="development-work" />
      <DesignWork id="design-work" />
    </div>
  );
};

export default Homepage;
