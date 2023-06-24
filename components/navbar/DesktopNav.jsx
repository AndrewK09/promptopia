import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut } from 'next-auth/react';

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
        <>
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                type='button'
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className='black_btn'
              >
                Sign In
              </button>
            ))}
        </>
      )}
    </div>
  );
};

export default DesktopNav;
