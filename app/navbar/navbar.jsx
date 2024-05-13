'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from './graphics/logo.png';
import menu from './graphics/menu-outline.svg';
import NavLink from 'next/link';

export default function NavBar() {
  const [vertical, setVertical] = useState(false);

  function onToggleMenu(e) {
    console.log('toggle happened');
    console.log(vertical);
    setVertical((state) => {
      return !state;
    });
  }

  return (
    <header className="bg-white">
      <nav className="flex justify-between items-center w-[92%]  mx-auto">
        <div>
          <Image className="w-20 cursor-pointer" src={logo} alt="..." />
        </div>
        <div
          className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${vertical ? 'top-[9%]' : 'top-[-100%]'} md:w-auto  w-full flex items-center px-5`}>
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className="hover:text-gray-500" href="#">
                Products
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Solution
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Resource
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Developers
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
            Sign in
          </button>
          <Image
            src={menu}
            onClick={onToggleMenu}
            name="menu"
            className="w-6 cursor-pointer md:hidden"
          />
        </div>
      </nav>
    </header>
  );
}
