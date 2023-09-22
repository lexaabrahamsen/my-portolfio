import React from 'react';
import { Link } from 'react-router-dom';

export default function DevWork() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
        <div className="p-4 pb-0 mb-0 rounded-t-2xl text-center">
          <h6 className="text-5xl mb-2 font-gloock mb-10 font-extrabold">
            Development
          </h6>
        </div>
        <div className="flex flex-wrap mx-3">
          <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-4/12">
            <div className="my-4">
              <div className="relative flex flex-col min-w-0 break-words shadow-none dark:shadow-soft-dark-xl rounded-2xl bg-clip-border">
                <div className="relative">
                  <a className="block shadow-xl rounded-2xl">
                    <img
                      src="../PortfolioWebsite.jpg"
                      alt="img-blur-shadow"
                      className="max-w-full shadow-soft-2xl rounded-2xl"
                    />
                  </a>
                </div>
                <div className="flex-auto px-1 pt-6">
                  <p className="text-xl mb-1 font-gloock font-light tracking-normal">
                    Portfolio Website
                  </p>
                  <p className="mb-3 text-sm font-outfit font-light">
                    This website. I need to see some more text here. So that it's more fleshed out and hopefully a few more lines longer. Is it three lines yet.
                  </p>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    REACT
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400">
                    TYPESCRIPT
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400">
                    TAILWIND CSS
                  </span>
                  <div className="flex items-center justify-between mt-5">
                    <Link
                      to="/portfolio-website"
                      className="inline-flex items-center px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-black text-black hover:border-black hover:bg-transparent hover:text-black hover:opacity-50 hover:shadow-none active:bg-black active:text-white active:hover:bg-transparent active:hover:text-black"
                    >
                      View project
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
              </div>
            </div>
          </div>

          <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-4/12">
            <div className="my-4">
              <div className="relative flex flex-col min-w-0 break-words shadow-none dark:shadow-soft-dark-xl rounded-2xl bg-clip-border">
                <div className="relative">
                  <a className="block shadow-xl rounded-2xl">
                    <img
                      src="../CreditCardForm.jpg"
                      alt="img-blur-shadow"
                      className="max-w-full shadow-soft-2xl rounded-2xl"
                    />
                  </a>
                </div>
                <div className="flex-auto px-1 pt-6">
                  <p className="text-xl mb-1 font-gloock font-light tracking-normal">
                    Credit Card Form
                  </p>
                  <p className="mb-3 text-sm font-outfit font-light">
                    Description text about the next project
                  </p>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    REACT
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400">
                    JAVASCRIPT
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400">
                    MATERIAL UI
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400">
                    VALIDATIONS
                  </span>
                  <div className="flex items-center justify-between mt-5">
                    <Link
                      to="/credit-card-form"
                      className="inline-flex items-center px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-black text-black hover:border-black hover:bg-transparent hover:text-black hover:opacity-50 hover:shadow-none active:bg-black active:text-white active:hover:bg-transparent active:hover:text-black"
                    >
                      View details
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
              </div>
            </div>
          </div>

          <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-4/12">
            <div className="my-4">
              <div className="relative flex flex-col min-w-0 break-words shadow-none dark:shadow-soft-dark-xl rounded-2xl bg-clip-border">
                <div className="relative">
                  <a className="block shadow-xl rounded-2xl">
                    <img
                      src="../DevProject1Cover.jpg"
                      alt="img-blur-shadow"
                      className="max-w-full shadow-soft-2xl rounded-2xl"
                    />
                  </a>
                </div>
                <div className="flex-auto px-1 pt-6">
                  <p className="text-xl mb-1 font-gloock font-light tracking-normal">
                    Next project
                  </p>
                  <p className="mb-3 text-sm font-outfit font-light">
                    Description text about the next project
                  </p>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    REACT
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400">
                    TYPESCRIPT
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400">
                    TAILWIND CSS
                  </span>
                  <div className="flex items-center justify-between mt-5">
                    <Link
                      to="/willspace"
                      className="inline-flex items-center px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-black text-black hover:border-black hover:bg-transparent hover:text-black hover:opacity-50 hover:shadow-none active:bg-black active:text-white active:hover:bg-transparent active:hover:text-black"
                    >
                      View project
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
              </div>
            </div>
          </div>

          <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-4/12">
            <div className="my-4">
              <div className="relative flex flex-col min-w-0 break-words shadow-none dark:shadow-soft-dark-xl rounded-2xl bg-clip-border">
                <div className="relative">
                  <a className="block shadow-xl rounded-2xl">
                    <img
                      src="../DevProject1Cover.jpg"
                      alt="img-blur-shadow"
                      className="max-w-full shadow-soft-2xl rounded-2xl"
                    />
                  </a>
                </div>
                <div className="flex-auto px-1 pt-6">
                  <p className="text-xl mb-1 font-gloock font-light tracking-normal">
                    Next project
                  </p>
                  <p className="mb-3 text-sm font-outfit font-light">
                    Description text about the next project
                  </p>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    REACT
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400">
                    TYPESCRIPT
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400">
                    TAILWIND CSS
                  </span>
                  <div className="flex items-center justify-between mt-5">
                    <Link
                      to="/humanityco"
                      className="inline-flex items-center px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-black text-black hover:border-black hover:bg-transparent hover:text-black hover:opacity-50 hover:shadow-none active:bg-black active:text-white active:hover:bg-transparent active:hover:text-black"
                    >
                      View project
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
