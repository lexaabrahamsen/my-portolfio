import React from 'react';
import { Link } from 'react-router-dom';

export default function DevWork() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
        <div className="p-4 pb-0 mb-0 rounded-t-2xl text-center">
          <h6 className="text-5xl mb-14 font-semibold text-black">Dev work</h6>
        </div>

        <div className="flex-auto p-4">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-4/12">
              <div className="my-4">
                <div className="relative flex flex-col min-w-0 break-words border-0 shadow-none dark:shadow-soft-dark-xl rounded-2xl bg-clip-border">
                  <div className="relative">
                    <a className="block shadow-xl rounded-2xl">
                      <img
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/home-decor-1.jpg"
                        alt="img-blur-shadow"
                        className="max-w-full shadow-soft-2xl rounded-2xl"
                      />
                    </a>
                  </div>
                  <div className="flex-auto px-1 pt-6">
                    <p className="uppercase relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text dark:text-white dark:opacity-80">
                      Ui designer
                    </p>
                    <a href="javascript:;">
                      <h5 className="dark:text-white">Hu-manity.co</h5>
                    </a>
                    <p className="mb-6 leading-normal text-sm dark:text-white dark:opacity-60">
                      As Uber works through a huge amount of internal management
                      turmoil.
                    </p>
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500"
                      >
                        View Project
                      </button>
                      <Link
                        to="/project-1"
                        className="bg-blue-500 py-2 px-8 uppercase"
                      >
                        View project
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-4/12">
              <div className="my-4 bg-white border-0 drop-shadow-xl shadow-soft-xl rounded-2xl bg-clip-border p-4">
                <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none dark:shadow-soft-dark-xl rounded-2xl bg-clip-border">
                  <div className="relative">
                    <a className="block shadow-xl rounded-2xl">
                      <img
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/home-decor-1.jpg"
                        alt="img-blur-shadow"
                        className="max-w-full shadow-soft-2xl rounded-2xl"
                      />
                    </a>
                  </div>
                  <div className="flex-auto px-1 pt-6">
                    <p className="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text dark:text-white dark:opacity-80">
                      Project #1
                    </p>
                    <a href="javascript:;">
                      <h5 className="dark:text-white">Scandinavian</h5>
                    </a>
                    <p className="mb-6 leading-normal text-sm dark:text-white dark:opacity-60">
                      As Uber works through a huge amount of internal management
                      turmoil.
                    </p>
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500"
                      >
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-4/12">
              <div className="my-4 bg-white border-0 drop-shadow-xl shadow-soft-xl rounded-2xl bg-clip-border p-4">
                <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none dark:shadow-soft-dark-xl rounded-2xl bg-clip-border">
                  <div className="relative">
                    <a className="block shadow-xl rounded-2xl">
                      <img
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/home-decor-1.jpg"
                        alt="img-blur-shadow"
                        className="max-w-full shadow-soft-2xl rounded-2xl"
                      />
                    </a>
                  </div>
                  <div className="flex-auto px-1 pt-6">
                    <p className="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text dark:text-white dark:opacity-80">
                      Project #3
                    </p>
                    <a href="javascript:;">
                      <h5 className="dark:text-white">Minimalist</h5>
                    </a>
                    <p className="mb-6 leading-normal text-sm dark:text-white dark:opacity-60">
                      Different people have different taste, and various types
                      of music.
                    </p>
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500"
                      >
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-4/12">
              <div className="my-4 bg-white border-0 drop-shadow-xl shadow-soft-xl rounded-2xl bg-clip-border p-4">
                <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none dark:shadow-soft-dark-xl rounded-2xl bg-clip-border">
                  <div className="relative">
                    <a className="block shadow-xl rounded-2xl">
                      <img
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/home-decor-1.jpg"
                        alt="img-blur-shadow"
                        className="max-w-full shadow-soft-2xl rounded-2xl"
                      />
                    </a>
                  </div>
                  <div className="flex-auto px-1 pt-6">
                    <p className="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text dark:text-white dark:opacity-80">
                      Project #3
                    </p>
                    <a href="javascript:;">
                      <h5 className="dark:text-white">Minimalist</h5>
                    </a>
                    <p className="mb-6 leading-normal text-sm dark:text-white dark:opacity-60">
                      Different people have different taste, and various types
                      of music.
                    </p>
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500"
                      >
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-4/12">
              <div className="my-4 bg-white border-0 drop-shadow-xl shadow-soft-xl rounded-2xl bg-clip-border p-4">
                <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none dark:shadow-soft-dark-xl rounded-2xl bg-clip-border">
                  <div className="relative">
                    <a className="block shadow-xl rounded-2xl">
                      <img
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/home-decor-1.jpg"
                        alt="img-blur-shadow"
                        className="max-w-full shadow-soft-2xl rounded-2xl"
                      />
                    </a>
                  </div>
                  <div className="flex-auto px-1 pt-6">
                    <p className="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text dark:text-white dark:opacity-80">
                      Project #3
                    </p>
                    <a href="javascript:;">
                      <h5 className="dark:text-white">Minimalist</h5>
                    </a>
                    <p className="mb-6 leading-normal text-sm dark:text-white dark:opacity-60">
                      Different people have different taste, and various types
                      of music.
                    </p>
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500"
                      >
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-4/12">
              <div className="my-4 bg-white border-0 drop-shadow-xl shadow-soft-xl rounded-2xl bg-clip-border p-4">
                <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none dark:shadow-soft-dark-xl rounded-2xl bg-clip-border">
                  <div className="relative">
                    <a className="block shadow-xl rounded-2xl">
                      <img
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/home-decor-1.jpg"
                        alt="img-blur-shadow"
                        className="max-w-full shadow-soft-2xl rounded-2xl"
                      />
                    </a>
                  </div>
                  <div className="flex-auto px-1 pt-6">
                    <p className="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text dark:text-white dark:opacity-80">
                      Project #3
                    </p>
                    <a href="javascript:;">
                      <h5 className="dark:text-white">Minimalist</h5>
                    </a>
                    <p className="mb-6 leading-normal text-sm dark:text-white dark:opacity-60">
                      Different people have different taste, and various types
                      of music.
                    </p>
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500"
                      >
                        View Project
                      </button>
                    </div>
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
