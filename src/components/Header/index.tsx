/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const navLinks = [
    {
      name: 'About',
      path: '/',
    },
    {
      name: 'Help',
      path: '/',
    },
    {
      name: 'Contact Us',
      path: '/',
    },
  ];

  return (
    <header className="main-layout flex justify-between items-center w-full border-b border-b-customGrey-100">
      <div className="flex items-center gap-2">
        <Image
          src="votecamLogo.svg"
          alt="Votecam Logo"
          width={36}
          height={40}
        />
        <p className="logoText text-customBlack-500">VoteCam</p>
      </div>
      <nav>
        <ul className='flex items-center gap-6'>
          {navLinks.map((navLink, index) => (
            <li className="paragraph-medium-medium text-customBlack-500" key={index}>
              <Link href={navLink.path}>{navLink.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
