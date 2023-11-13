import React from 'react';
import { navigation } from './navigation';

export default function Footer() {
  return (
    <footer className="bg-white m-4">
      <div className="w-full mx-auto max-w-screen-xl p-3 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023. All Rights Reserved.
        </span>
        {/* option 1 */}
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {navigation.map((item) => (
            <li>
              <a
                key={item.name}
                href={item.href}
                className=""
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        {/* option 2 */}
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
