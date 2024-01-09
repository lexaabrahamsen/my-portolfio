import { useContext } from 'react';
import { DarkModeContext } from '../../DarkModeContext';

interface InteractiveCreditCardPageProps {}

const InteractiveCreditCardPage: React.FC<
  InteractiveCreditCardPageProps
> = () => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }

  const { darkMode } = darkModeContext;

  return (
    <div
      className={` 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-12 ${
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
            Interactive Credit Card
          </h3>
          <div style={{ paddingTop: '15px' }}>
            <p
              className={`text-base font-outfit font-light leading-7 uppercase ${
                darkMode ? 'light-font' : 'dark-font'
              }`}
            >
              REACT / MATERIAL UI / ANIMATIONS
            </p>
          </div>
          <p
            className={`mt-6 text-xl leading-8 text-gray-700 font-outfit font-light ${
              darkMode ? 'light-font' : 'dark-font'
            }`}
          >
            React Frontend: The project leverages the power of React to create a
            dynamic and responsive user interface. React's component-based
            architecture ensures a modular and maintainable codebase,
            facilitating easy integration and scalability. Material UI Design:
            Immerse users in a visually stunning experience with the use of
            Material UI components. The project adheres to Material Design
            principles, offering a clean, intuitive, and consistent design that
            enhances usability. Interactive Credit Card Form: The centerpiece of
            the project is an interactive credit card input form. Users can
            seamlessly enter their credit card details through a visually
            appealing and user-friendly interface. Real-time validation ensures
            data accuracy and a smooth user journey. Animations for Engagement:
            Elevate the user experience with fluid animations that respond to
            user interactions. From subtle hover effects to animated transitions
            between form steps, the project showcases how animations can make
            the credit card input process engaging and delightful. Responsive
            Design: The application is designed to provide a seamless experience
            across various devices and screen sizes. Whether accessed on a
            desktop, tablet, or smartphone, users can interact with the credit
            card form effortlessly.
          </p>
          <div className="flex items-center pb-2 mt-6">
            <div
              className={`hover:underline pr-4 font-outfit ${
                darkMode ? 'light-font' : 'dark-font'
              }`}
            >
              <a
                href="https://elegant-trifle-0a151d.netlify.app/"
                className={`font-gloock ${
                  darkMode ? 'light-font' : 'dark-font'
                }`}
                style={{ textDecoration: 'underline', fontSize: '1.2rem' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                View demo
              </a>
            </div>
            <div
              className={`hover:underline pr-4 font-outfit ${
                darkMode ? 'light-font' : 'dark-font'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center pb-2 mt-14">
            <div
              className={`hover:underline pr-4 font-outfit ${
                darkMode ? 'light-font' : 'dark-font'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </div>
            <a
              href="https://github.com/lexaabrahamsen/credit-card-form"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-outfit ${darkMode ? 'light-font' : 'dark-font'}`}
              style={{ textDecoration: 'underline', fontSize: '1.2rem' }}
            >
              GITHUB
            </a>
          </div>
        </div>
        <div className="w-full lg:w-8/12">
          <img
            src="../CreditCardFeatureDark.jpg"
            className="w-full rounded-lg mb-8"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default InteractiveCreditCardPage;
