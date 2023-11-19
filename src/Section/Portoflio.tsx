import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';

export default function Portfolio() {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-12">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-top">
          <p className="mt-2 text-9xl font-gloock font-bold tracking-tight text-gray-900 sm:text-4xl">
            Portfolio Website
          </p>
          <div style={{ paddingTop: '15px' }}>
            <p className="text-base font-outfit font-light leading-7 uppercase">
              Current Website
            </p>
          </div>
          <p className="mt-6 text-xl leading-8 text-gray-700 font-outfit font-light">
            This website was built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
        <div className="w-full lg:w-8/12">
          <img src="../WS1.png" className="w-full rounded-lg mb-8" />
          <img src="../WS2.jpeg" className="w-full rounded-lg mb-8" />
          <img src="../WS3.jpeg" className="w-full rounded-lg mb-8" />
          <img src="../WS4.jpeg" className="w-full rounded-lg mb-8" />
          <img src="../WS5.png" className="w-full rounded-lg mb-8" />
        </div>
      </div>
    </div>
  );
}
