import React, { useContext } from 'react';
import DesignWork from './DesignWork';
import DevWork from './DevWork/DevWorkPage';
import Header from './Header';
import { DarkModeContext } from '../DarkModeContext';

interface HomepageProps {}

const Homepage: React.FC<HomepageProps> = () => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }

  const { darkMode } = darkModeContext;

  return (
    <>
      {/* <div className="flex items text-black">
            Compulsive learner with a discerning eye. Thrive on challenges,
          motivated by making things that matter. Educational background in
          Economics and Psychology which helps frame my perspective on what moves
          humanity

        </div> */}
        <div style={{ backgroundColor: darkMode ? '#1f2937' : 'white' }}>

      <Header id="header" />
      <DevWork />
      <DesignWork />
        </div>
    </>
  );
}

export default Homepage;