import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './Section/About';
import Projects from './Section/Projects';
// import { CodeIcon } from "@heroicons/react/solid";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'About', href: '#' },
  { name: 'Work', href: '#' },
  { name: 'Contact', href: '#' },
  { name: 'Resusme', href: '#' },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  return (
    <>
    {/* web nav */}
    <nav className="bg-slate-800 h-14">
      {navigation.map((item) => (
        <a key={item.name} href={item.href} className="text-white">{item.name}</a>
      ))}
    </nav>


    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div className="flex lg:flex-1">
      <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt=""
        />
      </a>
    </div>
    <div className="flex lg:hidden">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        onClick={() => setMobileMenuOpen(true)}
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
    <div className="hidden lg:flex lg:gap-x-12">
      {navigation.map((item) => (
        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
          {item.name}
        </a>
      ))}
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
        Log in <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  </nav>
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <About />
      <Projects />
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg">
        React and Tailwind CSS in action
      </p>
    </div>
    </>
  );
}

export default App;
