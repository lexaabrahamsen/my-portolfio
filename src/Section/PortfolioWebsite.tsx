import { Link } from 'react-router-dom';

export default function PortfolioWebsite() {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-12">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-top">
          <p className="font-outfit text-base font-semibold leading-7 text-indigo-600 uppercase">
            React / TypeScript
          </p>
          <h1 className="font-gloock mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Portfolio Website
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-700 font-outfit font-light">
            This is the website you're currently on! I built it using React and TypeScript, and it's hosted on Netlify.
          </p>
        </div>
        <div className="w-full lg:w-8/12">
          <img src="../PortfolioWebsite.jpg" className="w-full rounded-lg mb-8" />
        </div>
      </div>
    </div>
  );
}
