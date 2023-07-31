import React from 'react';
import { Link } from 'react-router-dom';

export default function DevWork() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
        <div className="p-4 pb-0 mb-0 rounded-t-2xl text-center">
          <h6 className="text-5xl mb-2 font-gloock mb-10 font-extrabold">
            Developmentttttttt
          </h6>
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
          <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap mx-3">
                <div className="relative flex flex-col min-w-0 break-words shadow-none dark:shadow-soft-dark-xl rounded-2xl bg-clip-border">
                  <p className="pt-2 mb-1 font-semibold">Built by developers</p>
                  <h5 className="font-bold">Soft UI Dashboard</h5>
                  <p className="mb-12">
                    From colors, cards, typography to complex elements, you will
                    find the full documentation.
                  </p>
                  <a
                    className="mt-auto mb-0 font-semibold leading-normal text-sm group text-slate-500"
                    href="javascript:;"
                  >
                    Read More
                    <i className="fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"></i>
                  </a>
                </div>
                
                <div className="relative">

                <a className="block shadow-xl rounded-2xl">
                    <img
                      src="../BlueprintCover.jpg"
                      alt="img-blur-shadow"
                      className="max-w-full shadow-soft-2xl rounded-2xl"
                    />
                  </a>
                </div>
                {/* <div className="max-w-full px-3 mt-12 ml-auto text-center lg:mt-0 lg:w-5/12 lg:flex-none">
                  <div className="h-full bg-gradient-to-tl from-purple-700 to-pink-500 rounded-xl">
                    <img
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/shapes/waves-white.svg"
                      className="absolute top-0 hidden w-1/2 h-full lg:block"
                      alt="waves"
                    />
                    <div className="relative flex items-center justify-center h-full">
                      <img
                        className="relative z-20 w-full pt-6"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/illustrations/rocket-white.png"
                        alt="rocket"
                      />
                    </div>
                  </div>
                </div> */}

              </div>
            </div>
          </div>
          <div className="relative flex flex-col h-full min-w-0 p-4 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
            <div
              className="relative h-full overflow-hidden bg-cover rounded-xl"
              // style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/ivancik.jpg')"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-80"></span>
              <div className="relative z-10 flex flex-col flex-auto h-full p-4">
                <h5 className="pt-2 mb-6 font-bold text-white">
                  Work with the rockets
                </h5>
                <p className="text-white">
                  Wealth creation is an evolutionarily recent positive-sum game.
                  It is all about who take the opportunity first.
                </p>
                <a
                  className="mt-auto mb-0 font-semibold leading-normal text-white group text-sm"
                  href="javascript:;"
                >
                  Read More
                  <i className="fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden mt-4 shadow-lg transition duration-300 ease-in-out"
            // style="background-image: url('https://www.tokkoro.com/picsup/5081898-forest-nature-road.jpg');"
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 transition duration-300 ease-in-out"></div>
            <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center">
              <div>
                <div className="text-white text-lg flex space-x-2 items-center">
                  <div className="bg-white rounded-md p-2 flex items-center">
                    <i className="fas fa-toggle-off fa-sm text-yellow-300"></i>
                  </div>
                  <p>Finished Appt</p>
                </div>
                <h3 className="text-white text-3xl mt-2 font-bold">120</h3>
                <h3 className="text-white text-lg mt-2 text-yellow-100 ">
                  4 not confirmed
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
