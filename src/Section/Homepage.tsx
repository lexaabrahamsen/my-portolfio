import React from 'react';
import DesignWork from './DesignWork';
import DevWork from './DevWork/DevWorkPage';
import Header from './Header';

export default function Homepage() {
  return (
    <>
      {/* <div className="flex items text-black">
            Compulsive learner with a discerning eye. Thrive on challenges,
          motivated by making things that matter. Educational background in
          Economics and Psychology which helps frame my perspective on what moves
          humanity

        </div> */}
      <Header />
      <DevWork />
      <DesignWork />
    </>
  );
}
