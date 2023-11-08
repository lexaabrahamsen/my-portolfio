import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cred } from 'styled-icons/crypto';
import CreditCardForm from '../InteractiveCreditCardPage';

const DevWorkPage = () => {
  const [show, setShow] = useState(false);

  const showOverlay = () => {
    setShow(true);
  };

  const hideOverlay = () => {
    setShow(false);
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 mb-6 break-words border-0">
        <div
          className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8"
          style={{ backgroundColor: 'blue' }}
        >
          <div
            className="max-w-4xl sm:mt-1 mt-80 space-y-8 text-left sm:text-left sm:ml-auto"
            style={{ backgroundColor: 'orange' }}
          >
            <h6 className="text-5xl mb-2 font-gloock mb-10 font-extrabold">
              Development Work
            </h6>
          </div>
        </div>

        {/* overlay 1 */}
        {/* <div className="container">
          <div
            className="image-container"
            onMouseOver={showOverlay}
            onMouseLeave={hideOverlay}
          >
            <img
              src="https://www.sarkarinaukriexams.com/images/editor/1684236637tree-g37135fa70_640.jpg"
              alt="Image"
            />
            {show && (
              <div className="overlay">
                <h2>Reacttttttt Js Display text on hover over Image</h2>
                <p>Description</p>
              </div>
            )}
          </div>
        </div> */}

        {/* testing own masonry */}
        <div
          className="columns-2 gap-5 space-y-5"
          style={{ paddingLeft: '15%', paddingRight: '15%' }}
        >
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
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt=""
              />
              {show && (
                <div className="overlay">
                  {' '}
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
          <div>
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              alt=""
            />
          </div>
        </div>

        {/* overlay 2 */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div
              className="image-container"
              onMouseOver={showOverlay}
              onMouseLeave={hideOverlay}
            >
              <a
                rel="noopener noreferrer"
                href="/credit-card-form"
                className="font-medium font-gloock text-md hover:underline dark:text-gray-100"
              >
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                  alt=""
                />
                {show && (
                  <div className="overlay">
                    {' '}
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
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div
              className="image-container"
              onMouseOver={showOverlay}
              onMouseLeave={hideOverlay}
            >
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                alt=""
              />
              {show && (
                <div className="overlay">
                  <h2>Reacttttttt Js Display text on hover over Image</h2>
                  <p>Description</p>
                </div>
              )}
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div
              className="image-container"
              onMouseOver={showOverlay}
              onMouseLeave={hideOverlay}
            >
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                alt=""
              />
              {show && (
                <div className="overlay">
                  <h2>Reacttttttt Js Display text on hover over Image</h2>
                  <p>Description</p>
                </div>
              )}
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div
              className="image-container"
              onMouseOver={showOverlay}
              onMouseLeave={hideOverlay}
            >
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                alt=""
              />
              {show && (
                <div className="overlay">
                  <h2>Reacttttttt Js Display text on hover over Image</h2>
                  <p>Description</p>
                </div>
              )}
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                alt=""
              />
            </div>
          </div>
        </div> */}

        <section className="dark:bg-grey-800 dark:text-gray-100">
          <div className="max-w-screen-xl p-5 mx-auto dark:text-gray-100">
            {/* dark:bg-gray-800 dark:text-gray-100 */}
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 sm:grid-cols-2">
              {/* <InteractiveCreditCardForm /> */}
              {/* DEV PROJECT 1 */}
              <div
                style={{ height: '550px', borderRadius: '20px' }}
                className="bg-[url('../public/CreditCardFeature.jpg')] relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500"
              >
                <div
                  style={{ borderRadius: '10px' }}
                  className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"
                ></div>
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="font-outfit px-3 py-2 text-xs font-bold tracki uppercase dark:text-gray-100 bgundefined"
                    style={{ letterSpacing: '1.5px' }}
                  >
                    REACT/MATERIAL
                  </a>
                  <div className="flex flex-col justify-start text-center dark:text-gray-100">
                    <span className="text-3xl font-semibold leadi tracki">
                      04
                    </span>
                    <span className="leadi uppercase">Aug</span>
                  </div>
                </div>
                <h2 className="z-10 p-5">
                  <a
                    rel="noopener noreferrer"
                    href="/credit-card-form"
                    className="font-medium font-gloock text-md hover:underline dark:text-gray-100"
                  >
                    {' '}
                    Interactive Credit Card
                  </a>
                  <p className="font-outfit" style={{ paddingTop: '10px' }}>
                    React frontend, Material UI framework, and captivating
                    animations to elevate the user experience in credit card
                    input forms.
                  </p>
                </h2>
              </div>
              {/*  */}
              {/* DEV PROJECT 2 */}
              <div
                style={{ height: '550px', borderRadius: '20px' }}
                className="bg-[url('../public/cc-human.png')] relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500"
              >
                <div
                  style={{ borderRadius: '10px' }}
                  className="absolute top-0 bottom-0 left-0 right-0 bg-gray-900 bg-opacity-80"
                ></div>
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="font-outfit px-3 py-2 text-xs font-bold tracki uppercase dark:text-gray-100 bgundefined"
                    style={{ letterSpacing: '1.5px' }}
                  >
                    REACT/MATERIAL
                  </a>
                  <div className="flex flex-col justify-start text-center dark:text-gray-100">
                    <span className="text-3xl font-semibold leadi tracki">
                      04
                    </span>
                    <span className="leadi uppercase">Aug</span>
                  </div>
                </div>
                <h2 className="z-10 p-5">
                  <a
                    rel="noopener noreferrer"
                    href="/credit-card-form"
                    className="font-medium font-gloock text-md hover:underline dark:text-gray-100"
                  >
                    {' '}
                    Interactive Credit Card
                  </a>
                  <p className="font-outfit" style={{ paddingTop: '10px' }}>
                    React frontend, Material UI framework, and captivating
                    animations to elevate the user experience in credit card
                    input forms.
                  </p>
                </h2>
              </div>
              {/*  */}
              {/* DEV PROJECT 3 */}
              <div
                style={{ height: '550px', borderRadius: '20px' }}
                className="bg-[url('../public/CreditCardFeature.jpg')] relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500"
              >
                <div
                  style={{ borderRadius: '10px' }}
                  className="absolute top-0 bottom-0 left-0 right-0 bg-gray-900 bg-opacity-80"
                ></div>
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="font-outfit px-3 py-2 text-xs font-bold tracki uppercase dark:text-gray-100 bgundefined"
                    style={{ letterSpacing: '1.5px' }}
                  >
                    REACT/MATERIAL
                  </a>
                  <div className="flex flex-col justify-start text-center dark:text-gray-100">
                    <span className="text-3xl font-semibold leadi tracki">
                      04
                    </span>
                    <span className="leadi uppercase">Aug</span>
                  </div>
                </div>
                <h2 className="z-10 p-5">
                  <a
                    rel="noopener noreferrer"
                    href="/credit-card-form"
                    className="font-medium font-gloock text-md hover:underline dark:text-gray-100"
                  >
                    {' '}
                    Interactive Credit Card
                  </a>
                  <p className="font-outfit" style={{ paddingTop: '10px' }}>
                    React frontend, Material UI framework, and captivating
                    animations to elevate the user experience in credit card
                    input forms.
                  </p>
                </h2>
              </div>
              {/*  */}
              {/* DEV PROJECT 4 */}
              <div
                style={{ height: '550px', borderRadius: '20px' }}
                className="bg-[url('../public/CreditCardFeature.jpg')] relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500"
              >
                <div
                  style={{ borderRadius: '10px' }}
                  className="absolute top-0 bottom-0 left-0 right-0 bg-slate-50 bg-opacity-60"
                ></div>
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="font-outfit px-3 py-2 text-xs font-bold tracki uppercase text-black"
                    style={{ letterSpacing: '1.5px' }}
                  >
                    REACT/MATERIAL
                  </a>
                  <div className="flex flex-col justify-start text-center text-black">
                    <span className="text-3xl font-semibold leadi tracki">
                      04
                    </span>
                    <span className="leadi uppercase">Aug</span>
                  </div>
                </div>
                <h2 className="z-10 p-5">
                  <a
                    rel="noopener noreferrer"
                    href="/credit-card-form"
                    className="font-medium font-gloock text-md hover:underline text-black"
                  >
                    {' '}
                    Interactive Credit Card
                  </a>
                  <p
                    className="font-outfit text-black"
                    style={{ paddingTop: '10px' }}
                  >
                    React frontend, Material UI framework, and captivating
                    animations to elevate the user experience in credit card
                    input forms.
                  </p>
                </h2>
              </div>
              {/* DEV PROJECT 5 */}
              <div
                style={{ height: '550px', borderRadius: '20px' }}
                className="bg-[url('../public/cc-human.png')] relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500"
              >
                <div
                  style={{ borderRadius: '10px' }}
                  className="absolute top-0 bottom-0 left-0 right-0 bg-slate-50 bg-opacity-60"
                ></div>
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="font-outfit px-3 py-2 text-xs font-bold tracki uppercase text-black"
                    style={{ letterSpacing: '1.5px' }}
                  >
                    REACT/MATERIAL
                  </a>
                  <div className="flex flex-col justify-start text-center text-black">
                    <span className="text-3xl font-semibold leadi tracki">
                      04
                    </span>
                    <span className="leadi uppercase">Aug</span>
                  </div>
                </div>
                <h2 className="z-10 p-5">
                  <a
                    rel="noopener noreferrer"
                    href="/credit-card-form"
                    className="font-medium font-gloock text-md hover:underline text-black"
                  >
                    {' '}
                    Interactive Credit Card
                  </a>
                  <p
                    className="font-outfit text-black"
                    style={{ paddingTop: '10px' }}
                  >
                    React frontend, Material UI framework, and captivating
                    animations to elevate the user experience in credit card
                    input forms.
                  </p>
                </h2>
              </div>
              {/* DEV PROJECT 6 */}
              <div
                style={{ height: '550px', borderRadius: '20px' }}
                className="bg-[url('../public/cc-human.png')] relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500"
              >
                <div
                  style={{ borderRadius: '10px' }}
                  className="absolute top-0 bottom-0 left-0 right-0 bg-gray-900 bg-opacity-80"
                ></div>
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="font-outfit px-3 py-2 text-xs font-bold tracki uppercase dark:text-gray-100 bgundefined"
                    style={{ letterSpacing: '1.5px' }}
                  >
                    REACT/MATERIAL
                  </a>
                  <div className="flex flex-col justify-start text-center dark:text-gray-100">
                    <span className="text-3xl font-semibold leadi tracki">
                      04
                    </span>
                    <span className="leadi uppercase">Aug</span>
                  </div>
                </div>
                <h2 className="z-10 p-5">
                  <a
                    rel="noopener noreferrer"
                    href="/credit-card-form"
                    className="font-medium font-gloock text-md hover:underline dark:text-gray-100"
                  >
                    {' '}
                    Interactive Credit Card
                  </a>
                  <p className="font-outfit" style={{ paddingTop: '10px' }}>
                    React frontend, Material UI framework, and captivating
                    animations to elevate the user experience in credit card
                    input forms.
                  </p>
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DevWorkPage;
