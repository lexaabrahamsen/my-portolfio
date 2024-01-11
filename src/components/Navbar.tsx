import { useContext, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { navigationLinks } from './navigation';

import { DarkModeContext } from '../DarkModeContext';

import Switch from './Switch';
import SocialLinksLight from './SocialLinksLight';

const Navbar: React.FC = () => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }

  const { darkMode } = darkModeContext;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className={`flex items-center justify-between p-6 lg:px-8 sticky top-0 ${
          darkMode ? 'dark-background' : 'light-background'
        }`}
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Lexa Wong</span>
            <div
              className={`uppercase font-gloock text-xl font-medium tracking-wide" ${
                darkMode ? 'light-font' : 'dark-font'
              }`}
            >
              Lexa Wong
            </div>
          </a>
        </div>
        <button></button>
        <div className="flex lg:hidden">
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
              darkMode ? 'light-font' : 'dark-font'
            }`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text black" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-12 font-outfit">
          {navigationLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 text-black uppercase" ${
                darkMode ? 'light-font' : 'dark-font'
              }`}
            >
              {item.name}
            </a>
          ))}
          <Switch />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel
          style={{ backgroundColor: '#121820' }}
          className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm"
        >
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Switch />

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigationLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-3 px-3 text-6xl font-gloock font-light leading-11 tracking-normal text-white hover:line-through"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="mb-9 mt-8">
                <SocialLinksLight />
              </div>
              <div>
                <a href="/" className="mt-7 text-white font-gloock">
                  Resume
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
