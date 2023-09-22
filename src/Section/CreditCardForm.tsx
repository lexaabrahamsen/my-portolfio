import { Link } from 'react-router-dom';

export default function CreditCardForm() {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-12">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-top">
          <p className="font-outfit text-base font-semibold leading-7 text-indigo-600 uppercase">
            React / Javascript
          </p>
          <h1 className="font-gloock mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Credit Card Form
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-700 font-outfit font-light">
            An interactive credit card form built with React and Material UI. This project showcases form validation and minor animations
          </p>
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
        <div className="w-full lg:w-8/12">
          <img src="../CreditCardForm.jpg" className="w-full rounded-lg mb-8" />
        </div>
      </div>
    </div>
  );
}
