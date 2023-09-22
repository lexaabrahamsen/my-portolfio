import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSketch, faWordpress } from '@fortawesome/free-brands-svg-icons';
// import { Chip } from 'styled-icons/boxicons-regular';
import { Icon } from 'styled-icons/simple-icons';
// import { Chip } from "@material-tailwind/react";

export default function Humanityco() {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-12">
      <p className="mt-2 text-9xl font-gloock font-bold tracking-tight text-gray-900 sm:text-4xl">
        Hu-manity.co
      </p>
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-top">
          <p className="text-base font-outfit font-light leading-7 uppercase">
            Data privacy platform
          </p>
          <h1 className="mt-2 text-3xl font-gloock font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hu-manity.co
          </h1>
          {/* <div className="mt-5 mb-3">
            <button className="uppercase" style={{color: "#FF5C02", fontSize: '12px', fontWeight: "bold", border: "1px solid #FF5C02", paddingLeft: "10px", paddingRight: '10px', paddingTop: "1px", paddingBottom: '1px', borderRadius: '15px'}}>
              <span>
                <FontAwesomeIcon icon={faSketch} className="pr-1" style={{color: "#FF5C02"}} />
              </span>
              Sketch
            </button>
            <button className="ml-2 uppercase" style={{color: "#21759b", fontSize: '12px', fontWeight: "bold", border: "1px solid #21759b", paddingLeft: "10px", paddingRight: '10px', paddingTop: "1px", paddingBottom: '1px', borderRadius: '15px'}}>
              <span>
                <FontAwesomeIcon icon={faWordpress} className="pr-1" style={{color: "#21759b"}} />
              </span>
              Wordpress
            </button>
            {/* <Chip value="account" variant="outlined" icon={<Icon />} /> */}
          {/* </div> */}
          <p className="mt-6 text-xl leading-8 text-gray-700 font-outfit font-light">
            {/* Hu-manity.co is a for-profit company with a corporate mission to help millions of people around the world claim their data as their property, have control around how their data is used and receive fair market compensation for the use of their data.<br /><br />Hu-manity.co is a for-profit company with a corporate mission to help millions of people around the world claim their data as their property, have control around how their data is used and receive fair market compensation for the use of their data. */}
            Lead Experience Designer for Hu-manity.co's mobile App for iPhone
            and Android built on blockchain that enables you to join the global
            movement to claim your 31st Human Right the right to claim your
            personal data as your property and have a seat at the table when
            your personal data is used by corporations, and other 3rd parties.
          </p>
          <div className="mt-5 mb-3">
            <h3>Technologies</h3>
            {/* <button
              className="uppercase"
              style={{
                color: '#FF5C02',
                fontSize: '12px',
                fontWeight: 'bold',
                border: '1px solid #FF5C02',
                paddingLeft: '10px',
                paddingRight: '10px',
                paddingTop: '1px',
                paddingBottom: '1px',
                borderRadius: '15px',
              }}
            >
              <span>
                <FontAwesomeIcon
                  icon={faSketch}
                  className="pr-1"
                  style={{ color: '#FF5C02' }}
                />
              </span>
              Sketch
            </button> */}

            {/* <button
              className="ml-2 uppercase"
              style={{
                color: '#21759b',
                fontSize: '12px',
                fontWeight: 'bold',
                border: '1px solid #21759b',
                paddingLeft: '10px',
                paddingRight: '10px',
                paddingTop: '1px',
                paddingBottom: '1px',
                borderRadius: '15px',
              }}
            >
              <span>
                <FontAwesomeIcon
                  icon={faWordpress}
                  className="pr-1"
                  style={{ color: '#21759b' }}
                />
              </span>
              Wordpress
            </button> */}
            {/* <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </span> */}
            <span className="rounded-full border border-black/100 bg-black/0 p-1" style={{ color: '#FF5C02', border: '1px solid #FF5C02'}}>
              <FontAwesomeIcon icon={faSketch} fa-lg />
            </span>
            <span className="rounded-full border border-black/100 bg-black/0 p-1">
              <FontAwesomeIcon icon={faWordpress} />
            </span>
            {/* <Chip value="account" variant="outlined" icon={<Icon />} /> */}
          </div>
        </div>
        <div className="w-full lg:w-8/12">
          <img src="../HU3.png" className="w-full rounded-lg mb-8" />
          <img src="../HU2.png" className="w-full rounded-lg mb-8" />
          <img src="../HU1.png" className="w-full rounded-lg mb-8" />
        </div>
      </div>
    </div>
  );
}
