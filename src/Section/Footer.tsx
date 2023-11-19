import React from 'react';
import { navigation } from './navigation';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-white m-4">
      <div className="w-full mx-auto max-w-screen-xl p-3 md:flex md:items-center md:justify-between">
        <span className="font-outfit text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023. All Rights Reserved.
        </span>
        <SocialLinks />
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {navigation.map((item) => (
            <li style={{ paddingLeft: '20px' }}>
              <a
                key={item.name}
                href={item.href}
                className="font-outfit"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
