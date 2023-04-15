import React from 'react';
import { Link } from 'react-router-dom';

export default function DesignWork() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
        <div className="p-4 pb-0 mb-0 rounded-t-2xl text-center">
          <h6 className="text-5xl mb-10 font-archivo text-black">
            Design work
          </h6>
          <p className="uppercase mb-5">
            Before the transition to development, I spent the first 10 years of
            my career as a UX/UI designer
          </p>
        </div>

        <div className="xl:py-3 lg:py-5 md:py-5 sm:py-5 px-15 flex flex-wrap xl:ml-20 xl:mr-20">
          <div className="w-4/12 xl:w-1/6 lg:w-1/6 md:w-1/6 flex justify-center xl:pb-2 pb-2 pt-4 items-center px-5">
            <img src="../WillSpace Logo@2x.png" className="h-16 opacity-100" />
          </div>
          <div className="w-4/12 xl:w-1/6 lg:w-1/6 md:w-1/6 flex justify-center xl:pb-2 pb-2 pt-4 items-center px-5">
            <img
              src="../Indivisible Logo@2x.png"
              className="w-44 opacity-100"
            />
          </div>
          <div className="w-4/12 xl:w-1/6 lg:w-1/6 md:w-1/6 flex justify-center xl:pb-2 pb-2 pt-4 items-center px-5">
            <img src="../Acabonac Logo@2x.png" className="h-16 opacity-100" />
          </div>
          <div className="w-4/12 xl:w-1/6 lg:w-1/6 md:w-1/6 flex justify-center xl:pb-2 pb-2 pt-4 items-center px-5">
            <img src="../Hu Logo@2x.png" className="w-44 opacity-100" />
          </div>
          <div className="w-4/12 xl:w-1/6 lg:w-1/6 md:w-1/6 flex justify-center xl:pb-2 pb-2 pt-4 items-center px-5">
            <img src="../DolaMedia Logo@2x.png" className="w-44 opacity-100" />
          </div>
          <div className="w-4/12 xl:w-1/6 lg:w-1/6 md:w-1/6 flex justify-center xl:pb-2 pb-2 pt-4 items-center px-5">
            <img src="../Fox Logo@2x.png" className="h-10 opacity-100" />
          </div>
        </div>

        <div className="flex-auto p-4">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-4/12">
              <div className="my-4">
                <div className="relative flex flex-col min-w-0 break-words shadow-none dark:shadow-soft-dark-xl rounded-2xl bg-clip-border">
                  <div className="relative">
                    <a className="block shadow-xl rounded-2xl">
                      <img
                        src="../HumanitycoCover.jpg"
                        alt="img-blur-shadow"
                        className="max-w-full shadow-soft-2xl rounded-2xl"
                      />
                    </a>
                  </div>
                  <div className="flex-auto px-1 pt-6">
                    <p className="uppercase relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text dark:text-white dark:opacity-80">
                      UI Designer
                    </p>
                    <a href="javascript:;">
                      <h5 className="dark:text-white">Hu-manity.co</h5>
                    </a>
                    <p className="mb-6 leading-normal text-sm dark:text-white dark:opacity-60">
                      Data Privacy
                    </p>
                    <div className="flex items-center justify-between">
                      <Link
                        to="/humanityco"
                        className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-black text-black hover:border-black hover:bg-transparent hover:text-black hover:opacity-50 hover:shadow-none active:bg-black active:text-white active:hover:bg-transparent active:hover:text-black"
                      >
                        View project
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
                        src="../WillspaceCoverOption2.jpg"
                        alt="img-blur-shadow"
                        className="max-w-full shadow-soft-2xl rounded-2xl"
                      />
                    </a>
                  </div>
                  <div className="flex-auto px-1 pt-6">
                    <p className="uppercase relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text dark:text-white dark:opacity-80">
                      UI Designer
                    </p>
                    <a href="javascript:;">
                      <h5 className="dark:text-white">Willspace</h5>
                    </a>
                    <p className="mb-6 leading-normal text-sm dark:text-white dark:opacity-60">
                      Fitness mobile application
                    </p>
                    <div className="flex items-center justify-between">
                      <Link
                        to="/willspace"
                        className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-black text-black hover:border-black hover:bg-transparent hover:text-black hover:opacity-50 hover:shadow-none active:bg-black active:text-white active:hover:bg-transparent active:hover:text-black"
                      >
                        View project
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-4/12">
              <div className="my-4">
                <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none dark:shadow-soft-dark-xl rounded-2xl bg-clip-border">
                  <div className="relative">
                    <a className="block shadow-xl rounded-2xl">
                      <img
                        src="../BlueprintCover.jpg"
                        alt="img-blur-shadow"
                        className="max-w-full shadow-soft-2xl rounded-2xl"
                      />
                    </a>
                  </div>
                  <div className="flex-auto px-1 pt-6">
                    <p className="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text dark:text-white dark:opacity-80">
                      UI Designer
                    </p>
                    <a href="javascript:;">
                      <h5 className="dark:text-white">Blueprint</h5>
                    </a>
                    <p className="mb-6 leading-normal text-sm dark:text-white dark:opacity-60">
                      Meetings & events application
                    </p>
                    <div className="flex items-center justify-between">
                      <Link
                        to="/blueprint"
                        className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-black text-black hover:border-black hover:bg-transparent hover:text-black hover:opacity-50 hover:shadow-none active:bg-black active:text-white active:hover:bg-transparent active:hover:text-black"
                      >
                        View project
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-4/12">
              <div className="my-4">
                <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none dark:shadow-soft-dark-xl rounded-2xl bg-clip-border">
                  <div className="relative">
                    <a className="block shadow-xl rounded-2xl">
                      <img
                        src="../WillspaceMarketingCover.jpg"
                        alt="img-blur-shadow"
                        className="max-w-full shadow-soft-2xl rounded-2xl"
                      />
                    </a>
                  </div>
                  <div className="flex-auto px-1 pt-6">
                    <p className="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text dark:text-white dark:opacity-80">
                      Graphic Designer
                    </p>
                    <a href="javascript:;">
                      <h5 className="dark:text-white">Willspace</h5>
                    </a>
                    <p className="mb-6 leading-normal text-sm dark:text-white dark:opacity-60">
                      Fitness and lifestyle
                    </p>
                    <div className="flex items-center justify-between">
                      <Link
                        to="/willspace-marketing"
                        className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-black text-black hover:border-black hover:bg-transparent hover:text-black hover:opacity-50 hover:shadow-none active:bg-black active:text-white active:hover:bg-transparent active:hover:text-black"
                      >
                        View project
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-4/12">
              <div className="my-4">
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
                      <Link
                        to="/project-1"
                        className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-black text-black hover:border-black hover:bg-transparent hover:text-black hover:opacity-50 hover:shadow-none active:bg-black active:text-white active:hover:bg-transparent active:hover:text-black"
                      >
                        View project
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-4/12">
              <div className="my-4">
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
                      <Link
                        to="/project-1"
                        className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-black text-black hover:border-black hover:bg-transparent hover:text-black hover:opacity-50 hover:shadow-none active:bg-black active:text-white active:hover:bg-transparent active:hover:text-black"
                      >
                        View project
                      </Link>
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
