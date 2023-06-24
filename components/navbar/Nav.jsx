'use client';

import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

import Link from 'next/link';
import Image from 'next/image';
import DesktopNav from './DesktopNav';

// 1:07:26

const Nav = () => {
  const isUserLoggedIn = true;

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const updateProviders = async () => {
      const providers = await getProviders();
      setProviders(providers);
    };

    updateProviders();
  }, []);

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

      <DesktopNav isUserLoggedIn={isUserLoggedIn} providers={providers} />
    </nav>
  );
};

export default Nav;
