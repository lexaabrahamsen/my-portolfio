import React, { useContext } from 'react';
import { DarkModeContext } from '../../DarkModeContext';

export default function Humanityco() {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }

  const { darkMode } = darkModeContext;

  return (
    <div
      className={`2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-12 ${
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
            Hu-manity.co
          </h3>
          <div className="pt-4">
            <p
              className={`text-base font-outfit font-light leading-7 uppercase" ${
                darkMode ? 'light-font' : 'dark-font'
              }`}
            >
              Data privacy platform
            </p>
          </div>
          <p
            className={`mt-6 text-xl leading-8 text-gray-700 font-outfit font-light ${
              darkMode ? 'light-font' : 'dark-font'
            }`}
          >
            {/* Hu-manity.co is a for-profit company with a corporate mission to help millions of people around the world claim their data as their property, have control around how their data is used and receive fair market compensation for the use of their data.<br /><br />Hu-manity.co is a for-profit company with a corporate mission to help millions of people around the world claim their data as their property, have control around how their data is used and receive fair market compensation for the use of their data. */}
            Lead Experience Designer for Hu-manity.co's mobile App for iPhone
            and Android built on blockchain that enables you to join the global
            movement to claim your 31st Human Right the right to claim your
            personal data as your property and have a seat at the table when
            your personal data is used by corporations, and other 3rd parties.
          </p>
        </div>
        <div className="w-full lg:w-8/12">
          <img src="../HU3.png" className="w-full rounded-lg mb-8" alt="" />
          <img src="../HU2.png" className="w-full rounded-lg mb-8" alt="" />
          <img src="../HU1.png" className="w-full rounded-lg mb-8" alt="" />
        </div>
      </div>
    </div>
  );
}
