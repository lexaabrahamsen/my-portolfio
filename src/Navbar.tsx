import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Github } from '@styled-icons/bootstrap/Github';
import { Linkedin } from '@styled-icons/bootstrap/Linkedin';
import { Mastodon } from '@styled-icons/bootstrap/Mastodon';
import { Instagram } from '@styled-icons/bootstrap/Instagram';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '#' },
  { name: 'Contact', href: '#' },
  { name: 'Extra', href: '/extra' },
  { name: 'Design Work', href: '/design-work' },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8 bg-white sticky top-0"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Lexa Wong</span>
              <div className="text-black uppercase font-sans text-xl font-extrabold tracking-normal decoration-solid">
                Lexa Wong
              </div>
            </a>
          </div>
          <button></button>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 text black" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-black uppercase"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-3 px-3 text-7xl font-light font-display leading-11 tracking-normal text-white hover:line-through"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="group mt-10 inline-flex flex-wrap items-center gap-3">
                  <a href="https://github.com/lexaabrahamsen" target="_blank">
                    <span className="cursor-pointer rounded-full text-white p-3 hover:bg-neutral-900">
                      <Github className="h-5 w-5" />
                    </span>
                  </a>
                    <span className="cursor-pointer rounded-full text-white p-3 hover:bg-neutral-900">
                    <a
                      href="https://www.linkedin.com/in/lexa-abrahamsen/"
                      target="_blank"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </span>
                  <span className="cursor-pointer rounded-full text-white p-3 hover:bg-neutral-900">
                    <a
                      href="https://www.instagram.com/lexaraea/?hl=en"
                      target="_blank"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </span>
                  <span className="cursor-pointer rounded-full bg-white border border-white-200/5 bg-white-500/5 p-3 text-white-500 transition-colors hover:border-white-500/10 hover:bg-white-500/10 hover:!opacity-100">
                    <a href="" target="_blank">
                      <Mastodon className="h-5 w-5" />
                    </a>
                  </span>
                </div>
                <div>
                  <a href="" className="mt-7 text-white">Resume</a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}

export default Navbar;
