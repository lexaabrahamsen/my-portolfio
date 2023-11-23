import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cred } from 'styled-icons/crypto';
import CreditCardForm from '../InteractiveCreditCardPage';
import TitleHeader from '../../components/TitleHeader';
import { DarkModeContext } from '../../DarkModeContext';

interface DevWorkPageProps {}

const DevWorkPage: React.FC<DevWorkPageProps> = ({ }) => {
  const [show, setShow] = useState(false);
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }

  const { darkMode } = darkModeContext;
  

  const showOverlay = () => {
    setShow(true);
  };

  const hideOverlay = () => {
    setShow(false);
  };

  return (
    <>
      <div
        id="development-work"
        className="relative flex flex-col min-w-0 mb-6 break-words border-0"
        style={{ backgroundColor: darkMode ? '#1f2937' : 'white' }}
      >
        <TitleHeader title="Development Work" />

        <div
          className="columns-2 gap-5 space-y-5"
          style={{ paddingLeft: '15%', paddingRight: '15%' }}
        >
          {/* DEV PROJECT 1 */}
          <div
            className="image-container rounded-lg"
            onMouseOver={showOverlay}
            onMouseLeave={hideOverlay}
          >
            <a
              rel="noopener noreferrer"
              href="/credit-card-form"
              className="font-medium font-gloock text-md hover:underline dark:text-gray-100"
            >
              <img
                className="w-full rounded-lg"
                // src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                src="../CreditCardHomepageDark.jpg"
                alt=""
              />
              {show && (
                <div className="overlay">
                  <h2>Interactive Credit Card</h2>
                  <p className="font-outfit">
                    React frontend, Material UI framework, and captivating
                    animations to elevate the user experience in credit card
                    input forms.
                  </p>
                </div>
              )}
            </a>
          </div>
          {/* DEV PROJECT 2 */}
          <div
            onMouseOver={showOverlay}
            onMouseLeave={hideOverlay}
            className="image-container rounded-lg"
          >
            <a
              rel="noopener noreferrer"
              href="/project-2"
              className="font-medium font-gloock text-md hover:underline dark:text-gray-100"
            >
              <img
                className="w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                alt=""
              />
              {show && (
                <div className="overlay">
                  {' '}
                  <h2>Second Project</h2>
                  <p className="font-outfit">
                    Another project. Maybe rust, maybe not. Who knows?!
                  </p>
                </div>
              )}
            </a>
          </div>
          {/* DEV PROJECT 3 */}
          <div
            onMouseOver={showOverlay}
            onMouseLeave={hideOverlay}
            className="image-container rounded-lg"
          >
            <a
              rel="noopener noreferrer"
              href="/project-3"
              className="font-medium font-gloock text-md hover:underline dark:text-gray-100"
            >
              <img
                className="w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                alt=""
              />
              {show && (
                <div className="overlay">
                  {' '}
                  <h2>Third Project</h2>
                  <p className="font-outfit">
                    Another project. Maybe rust, maybe not. Who knows?!
                  </p>
                </div>
              )}
            </a>
          </div>
          {/* DEV PROJECT 4 */}
          <div
            onMouseOver={showOverlay}
            onMouseLeave={hideOverlay}
            className="image-container rounded-lg"
          >
            <a
              rel="noopener noreferrer"
              href="/portfolio"
              className="font-medium font-gloock text-md hover:underline dark:text-gray-100"
            >
              <img
                className="w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt=""
              />
              {show && (
                <div className="overlay">
                  {' '}
                  <h2>Portfolio Website</h2>
                  <p className="font-outfit">
                    This website was built with React, TypeScript, and Tailwind
                    CSS.
                  </p>
                </div>
              )}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DevWorkPage;
