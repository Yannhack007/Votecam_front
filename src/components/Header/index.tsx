/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ComboboxDemo } from '../ui/combobox';
import SelectLanguage from './selectLanguage';
import Logo from '../logo';

const Header = () => {
  const navLinks = [
    {
      name: 'À propos',
      path: '/',
    },
    {
      name: 'Aide',
      path: '/',
    },
    {
      name: 'Contactez-nous',
      path: '/',
    },
  ];

  return (
    <header className="main-layout flex justify-between items-center w-full border-b border-b-customGrey-100">
      <Logo fill='black'/>
      <nav>
        <ul className="flex items-center gap-6">
          {navLinks.map((navLink, index) => (
            <li
              className="paragraph-medium-medium text-customBlack-500 hover:text-customBlack-300 transition"
              key={index}
            >
              <Link href={navLink.path}>{navLink.name}</Link>
            </li>
          ))}
          <SelectLanguage />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
