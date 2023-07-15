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
