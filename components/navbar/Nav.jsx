'use client';

import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

import Link from 'next/link';
import Image from 'next/image';
import DesktopNav from './DesktopNav';

// 1:07:26

const Nav = () => {
  const isUserLoggedIn = true;

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg'
          alt='Promptopia Logo'
          width={30}
          height={30}
          className='object-contain'
        />

        <p className='logo_text'>Promptopia</p>
      </Link>

      {/* Desktop Nav */}
      <div className='sm:flex hidden'>
        {isUserLoggedIn ? <DesktopNav /> : <></>}
      </div>
    </nav>
  );
};

export default Nav;
