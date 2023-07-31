import React from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-particles';
import { useCallback } from 'react';

import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

export default function DesignWork() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <>
      <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
        <div className="p-4 pb-0 mb-0 rounded-t-2xl text-center">
          {/* <h6 className="text-5xl mb-2 font-archivo mb-10 font-extrabold">
            Design work
          </h6> */}
          <h6 className="text-5xl mb-2 font-gloock mb-10 font-extrabold">
            Design
          </h6>
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

        {/* <div className="w-4/12">
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: '#0d47a1',
                },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: 'push',
                  },
                  onHover: {
                    enable: true,
                    mode: 'repulse',
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: '#ffffff',
                },
                links: {
                  color: '#ffffff',
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                move: {
                  direction: 'none',
                  enable: true,
                  outModes: {
                    default: 'bounce',
                  },
                  random: false,
                  speed: 6,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: 'circle',
                },
                size: {
                  value: { min: 1, max: 5 },
                },
                width: {
                  value: 1,
                },
              },
              detectRetina: true,
            }}
          />
        </div> */}
        <div className="flex flex-wrap mx-3">
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
                  <p className="uppercase relative mb-2 tracking-wide font-outfit font-light mb-2 uppercase text-sm bg-clip-text">
                    UI Designer
                  </p>
                  <p className="text-xl mb-1 font-gloock font-light tracking-normal">
                    Hu-manity.co
                  </p>
                  <p className="mb-6 text-sm font-outfit font-light">
                    Data Privacy application
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
                  <p className="uppercase relative mb-2 tracking-wide font-outfit font-light mb-2 uppercase text-sm bg-clip-text font-outfit">
                    UI Designer
                  </p>
                  <p className="text-xl mb-1 font-gloock font-light tracking-normal">
                    Willspace
                  </p>
                  <p className="mb-6 text-sm font-outfit font-light">
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
                      src="../WebsiteWorkCover.jpg"
                      alt="img-blur-shadow"
                      className="max-w-full shadow-soft-2xl rounded-2xl"
                    />
                  </a>
                </div>
                <div className="flex-auto px-1 pt-6">
                  <p className="uppercase relative mb-2 tracking-wide font-outfit font-light mb-2 uppercase text-sm bg-clip-text">
                    UX Designer / Squarespace Designer
                  </p>
                  <p className="text-xl mb-1 font-gloock font-light tracking-normal">
                    Website work
                  </p>
                  <p className="mb-6 text-sm font-outfit font-light">
                    Build websites that encapsulate their brand and business.
                  </p>
                  <div className="flex items-center justify-between">
                    <Link
                      to="/website-work"
                      className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-black text-black hover:border-black hover:bg-transparent hover:text-black hover:opacity-50 hover:shadow-none active:bg-black active:text-white active:hover:bg-transparent active:hover:text-black"
                    >
                      View websites
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
                  <p className="uppercase relative mb-2 tracking-wide font-outfit font-light mb-2 uppercase text-sm bg-clip-text">
                    UI Designer
                  </p>
                  <h5 className="text-xl mb-1 font-gloock font-light tracking-normal">
                    Blueprint
                  </h5>
                  <p className="mb-6 text-sm font-outfit font-light">
                    Meetings and events application
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
                  <p className="uppercase relative mb-2 tracking-wide font-outfit font-light mb-2 uppercase text-sm bg-clip-text">
                    Graphic Designer
                  </p>
                  <h5 className="text-xl mb-1 font-gloock font-light tracking-normal">
                    Willspace
                  </h5>
                  <p className="mb-6 text-sm font-outfit font-light">
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
                      src="../LMSCover.jpg"
                      alt="img-blur-shadow"
                      className="max-w-full shadow-soft-2xl rounded-2xl"
                    />
                  </a>
                </div>
                <div className="flex-auto px-1 pt-6">
                  <p className="uppercase relative mb-2 tracking-wide font-outfit font-light mb-2 uppercase text-sm bg-clip-text">
                    UI Designer
                  </p>
                  <h5 className="text-xl mb-1 font-gloock font-light tracking-normal">
                    Learning Management System
                  </h5>
                  <p className="mb-6 text-sm font-outfit font-light opacity-75">
                    Different people have different taste, and various types of
                    music.
                  </p>
                  <div className="flex items-center justify-between">
                    <Link
                      to="/learning-management-system"
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
    </>
  );
}
