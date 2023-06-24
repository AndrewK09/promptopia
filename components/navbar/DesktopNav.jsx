import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut } from 'next-auth/react';
import ProvidersList from './ProvidersList';

const DesktopNav = ({ isUserLoggedIn, providers }) => {
  return (
    <div className='sm:flex hidden'>
      {isUserLoggedIn ? (
        <div className='flex gap-3 md:gap-5'>
          <Link href='/create-prompt' className='black_btn'>
            Create Post
          </Link>

          <button type='button' onClick={signOut} className='outline_btn'>
            Sign Out
          </button>

          <Link href='/profile'>
            <Image
              src='/assets/images/logo.svg'
              alt='profile'
              width={37}
              height={37}
              className='rounded-full'
            />
          </Link>
        </div>
      ) : (
        <ProvidersList providers={providers} />
      )}
    </div>
  );
};

export default DesktopNav;
