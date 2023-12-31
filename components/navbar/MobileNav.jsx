import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import ProvidersList from './ProvidersList';

const MobileNav = ({ session, providers }) => {
  const [isToggleDropdown, setToggleDropdown] = useState(false);

  return (
    <div className='sm:hidden flex relative'>
      {session?.user ? (
        <div className='flex'>
          <Image
            src={session?.user.image}
            alt='profile'
            width={37}
            height={37}
            className='rounded-full'
            onClick={() => setToggleDropdown((prev) => !prev)}
          />

          {isToggleDropdown && (
            <div className='dropdown'>
              <Link
                href='/profile'
                className='dropdown_link'
                onClick={() => setToggleDropdown(false)}
              >
                My Profile
              </Link>

              <Link
                href='/create-prompt'
                className='dropdown_link'
                onClick={() => setToggleDropdown(false)}
              >
                Create Prompt
              </Link>

              <button
                type='button'
                className='mt-5 w-full black_btn'
                onClick={() => {
                  setToggleDropdown(false);
                  signOut();
                }}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      ) : (
        <ProvidersList providers={providers} />
      )}
    </div>
  );
};

export default MobileNav;
