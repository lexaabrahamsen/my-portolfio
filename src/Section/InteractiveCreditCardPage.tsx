import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSketch, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
// import { Chip } from 'styled-icons/boxicons-regular';
import { Icon } from 'styled-icons/simple-icons';
// import { Chip } from "@material-tailwind/react";

export default function InteractiveCreditCardPage() {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-12">
      <p className="mt-2 text-9xl font-gloock font-bold tracking-tight text-gray-900 sm:text-4xl">
        Interactive Credit Card
      </p>
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-top">
          <p className="text-base font-outfit font-light leading-7 uppercase">
            SUBTITLE
          </p>
          <h1 className="mt-2 text-3xl font-gloock font-bold tracking-tight text-gray-900 sm:text-4xl">
            Interactive Credit Card
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-700 font-outfit font-light">
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
          <div className="mt-5 mb-3">
            <h3>Technologies</h3>
            <span
              className="rounded-full border border-black/100 bg-black/0 p-1"
              style={{ color: '#FF5C02', border: '1px solid #FF5C02' }}
            >
              <FontAwesomeIcon icon={faSketch} fa-lg />
            </span>
            <span className="rounded-full border border-black/100 bg-black/0 p-1">
              <FontAwesomeIcon icon={faWordpress} />
            </span>
            {/* <Chip value="account" variant="outlined" icon={<Icon />} /> */}
          </div>
        </div>
        <div className="w-full lg:w-8/12">
          <img src="../CreditCardFeature.jpg" className="w-full rounded-lg mb-8" />
        </div>
        <Link
            to="https://glittering-sunburst-0eab04.netlify.app/"
            className="inline-flex items-center px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-black text-black hover:border-black hover:bg-transparent hover:text-black hover:opacity-50 hover:shadow-none active:bg-black active:text-white active:hover:bg-transparent active:hover:text-black"
          >
            View demo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
      </div>
    </div>
  );
}
