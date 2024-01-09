import { useContext } from 'react';
import { DarkModeContext } from '../../DarkModeContext';

export default function Blueprint() {
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
            Blueprint
          </h3>
          <div style={{ paddingTop: '15px' }}>
            <p
              className={`text-base font-outfit font-light leading-7 uppercase" ${
                darkMode ? 'light-font' : 'dark-font'
              }`}
            >
              Meeting and Event Application
            </p>
          </div>
          <p
            className={`mt-6 text-xl leading-8 text-gray-700 font-outfit font-light ${
              darkMode ? 'light-font' : 'dark-font'
            }`}
          >
            Apogy Events, one app for all events. Meeting and event application
            that enhances attendee engagement. As the UI/UX Designer I focused
            on the experience for the user in attendance. My role was to create
            an experience where the attendees were organized stimulated, and
            motivated. I created a design that would enhance events and meetings
            of any size across a wide range of industries such as corporate,
            small business, academic, and non-profit. Apogy Events needed to
            have the ability to customize content, measure engagement, inspire
            collaboration and tailor the experience for each participant.
          </p>
        </div>
        <div className="w-full lg:w-8/12">
          <img src="../BP1.jpeg" className="w-full rounded-lg mb-8" alt="" />
          <img src="../BP2.png" className="w-full rounded-lg mb-8" alt="" />
          <img src="../BP3.png" className="w-full rounded-lg mb-8" alt="" />
        </div>
      </div>
    </div>
  );
}
