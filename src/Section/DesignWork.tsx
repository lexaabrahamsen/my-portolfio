import { Link } from 'react-router-dom';
import TitleHeader from '../components/TitleHeader';
import { useState } from 'react';

export default function DesignWork() {
  const projects = [
    {
      id: 1,
      title: 'Hu-manity.co',
      description: 'Data Privacy application',
      image: '../HumanitycoCover.jpg',
      link: '/humanityco',
    },
    {
      id: 2,
      title: 'Willspace',
      description: 'Fitness mobile application',
      image: '../WillspaceCoverOption2.jpg',
      link: '/willspace',
    },
    {
      id: 3,
      title: 'Website work',
      description: 'Build websites that encapsulate their brand and business.',
      image: '../WebsiteWorkCover.jpg',
      link: '/website-work',
    },
    {
      id: 4,
      title: 'Blueprint',
      description: 'Meetings and events application',
      image: '../BlueprintCover.jpg',
      link: '/blueprint',
    },
    {
      id: 5,
      title: 'Willspace',
      description: 'Fitness and lifestyle',
      image: '../WillspaceMarketingCover.jpg',
      link: '/willspace-marketing',
    },
  ];

  const [show, setShow] = useState(false);

  const showOverlay = () => {
    setShow(true);
  };

  const hideOverlay = () => {
    setShow(false);
  };
  return (
    <>
      <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
        <TitleHeader title="Design Work" />
        {/* testing daisy */}
        <div className="carousel carousel-end rounded-box">
          {projects.map((project) => {
            return (
              <div
                className="carousel-item gap-4"
                onMouseOver={showOverlay}
                onMouseLeave={hideOverlay}
              >
                <a
                  rel="noopener noreferrer"
                  href={project.link}
                  className="font-medium font-gloock text-md hover:underline dark:text-gray-100"
                >
                  <img
                    className="h-80 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
                    src={project.image}
                    alt={project.title}
                  />
                </a>
              </div>
            );
          })}
        </div>

        <div
          className="relative w-full flex gap-4 py-6 overflow-x-auto"
          style={{ backgroundColor: 'orange' }}
        >
          {projects.map((project) => {
            return (
              // <div className="relative w-full flex gap-4 py-6 overflow-x-auto" style={{ backgroundColor: 'red'}}>
              <div
                className="image-container rounded-lg"
                onMouseOver={showOverlay}
                onMouseLeave={hideOverlay}
                style={{ backgroundColor: 'blue' }}
              >
                <a
                  rel="noopener noreferrer"
                  href="/credit-card-form"
                  className="font-medium font-gloock text-md hover:underline dark:text-gray-100"
                >
                  <img
                    className="h-80 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
                    src={project.image}
                    alt={project.title}
                  />
                </a>
                {show && (
                  <div className="overlay">
                    {' '}
                    <h2>{project.title}</h2>
                    <p className="font-outfit">{project.description}</p>
                  </div>
                )}
              </div>
              // </div>
            );
          })}
        </div>
        <div
          className="relative w-full flex gap-4 py-6 overflow-x-auto"
          style={{ backgroundColor: 'yellow' }}
        >
          <a href="/credit-card-form" rel="noopener noreferrer">
            <div>
              <img
                className="h-80 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
                src="https://source.unsplash.com/random/241x361/?1"
                alt="Image 1"
              />
              <button>where</button>
            </div>
          </a>
          <img
            className="h-80 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
            src="https://source.unsplash.com/random/241x361/?2"
            alt="Image 2"
          />
          <img
            className="h-80 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
            src="https://source.unsplash.com/random/241x361/?3"
            alt="Image 3"
          />
          <img
            className="h-80 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
            src="https://source.unsplash.com/random/241x361/?4"
            alt="Image 4"
          />
          <img
            className="h-80 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
            src="https://source.unsplash.com/random/241x361/?5"
            alt="Image 5"
          />
        </div>
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
                  <p className="mb-3 text-sm font-outfit font-light">
                    Data Privacy application
                  </p>

                  <div className="mt-4"></div>
                  {/* TODO: Fix button */}
                  <div className="flex items-center justify-between">
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
                    <Link
                      to="/humanityco"
                      className="inline-flex items-center border border-solid px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-black text-black hover:border-black hover:bg-transparent hover:text-black hover:opacity-50 hover:shadow-none active:bg-black active:text-white active:hover:bg-transparent active:hover:text-black"
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
                  <a href="block shadow-xl rounded-2xl">
                    <img
                      src="../WillspaceCoverOption2.jpg"
                      alt="img-blur-shadow"
                      className="max-w-full shadow-soft-2xl rounded-2xl"
                    />
                  </a>
                </div>
                <div className="flex-auto px-1 pt-6">
                  <p className="uppercase relative mb-2 tracking-wide text-sm font-outfit font-light mb-2 uppercase bg-clip-text">
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
                      className="inline-flex items-center border border-solid px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-black text-black hover:border-black hover:bg-transparent hover:text-black hover:opacity-50 hover:shadow-none active:bg-black active:text-white active:hover:bg-transparent active:hover:text-black"
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
                    UX Designer / Website Designer
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
                      className="inline-flex items-center border border-solid px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-black text-black hover:border-black hover:bg-transparent hover:text-black hover:opacity-50 hover:shadow-none active:bg-black active:text-white active:hover:bg-transparent active:hover:text-black"
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
                      className="inline-flex items-center border border-solid px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-black text-black hover:border-black hover:bg-transparent hover:text-black hover:opacity-50 hover:shadow-none active:bg-black active:text-white active:hover:bg-transparent active:hover:text-black"
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
                      className="inline-flex items-center border border-solid px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-black text-black hover:border-black hover:bg-transparent hover:text-black hover:opacity-50 hover:shadow-none active:bg-black active:text-white active:hover:bg-transparent active:hover:text-black"
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
                      className="inline-flex items-center border border-solid px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-black text-black hover:border-black hover:bg-transparent hover:text-black hover:opacity-50 hover:shadow-none active:bg-black active:text-white active:hover:bg-transparent active:hover:text-black"
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
