'use client';

import React from 'react';
import { safeUser } from '@/frontend/types';
import Link from 'next/link';
import Image from 'next/image';
import { IoClose, IoLogOutOutline } from 'react-icons/io5';
import MenuItems from '../menu-items';
import { AiOutlineUser } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa6';
import { LuPlus } from 'react-icons/lu';
import Avatar from '@/components/features/Avatar';
import { MdDarkMode } from 'react-icons/md';
import ThemeSwitcher from '@/components/theme/themeSwitcher';
import { signOut } from 'next-auth/react';

interface SmallDeviceMenuProps {
  currentUser: safeUser | null;
}

const SmallDeviceMenu: React.FC<SmallDeviceMenuProps> = ({ currentUser }) => {
  return (
    <div className='modal flex absolute w-screen h-screen left-0 top-0 bg-black/40 md:hidden'>
      <div className='w-3/4 sm:w-[450px] bg-background border-r-[0.25rem] border-custom-clp'>
        <div className='flex items-center justify-between p-[0.65rem] shadow dark:shadow-gray-800'>
          <Link
            href="/"
            className={`flex items-center gap-3 select-none`}
          >
            <Image
              src="/logo.png"
              alt='logo'
              width={36}
              height={36}
            />
            <span className='font-semibold text-2xl text-custom-clp hidden sm:block'>
              Travel Trail Holidays
            </span>
          </Link>
          <div className='border p-2 rounded-full shadow-all-side dark:shadow-gray-800 '>
            <IoClose size={20} />
          </div>
        </div>
        {currentUser ? (
          <>
            <div
              className='border-b flex items-center gap-3 px-3 h-16 hover:bg-custom-phl dark:hover:bg-custom-phd cursor-pointer'
            >
              <Avatar src={currentUser.image} className='w-9 h-9' />
              <h1 className='font-medium'>
                {currentUser.name}
              </h1>
            </div>
            {currentUser.isAdmin && (
              <MenuItems
                href='/create-package'
                title='Create Package'
                icon={LuPlus}
                className='border-b hover:bg-custom-phl dark:hover:bg-custom-phd'
              />
            )}
            <MenuItems
              href='/liked-packages'
              title='Liked Packages'
              icon={FaHeart}
              className='border-b hover:bg-custom-phl dark:hover:bg-custom-phd'
            />
          </>
        ) : (
          <>
            <MenuItems
              href='/signin'
              title='Account'
              icon={AiOutlineUser}
              className='border-b hover:bg-custom-phl dark:hover:bg-custom-phd'
            />
          </>
        )}
        <div className='flex justify-between px-3 h-16'>
          <div className=' flex items-center gap-3'>
            <div className='bg-custom-sbl dark:bg-custom-shd p-2 rounded-full'>
              <MdDarkMode size={20} />
            </div>
            <h1 className='font-medium'>
              Dark Mode
            </h1>
          </div>
          <ThemeSwitcher />
        </div>
        {currentUser && (
          <>
            <div
              onClick={() => signOut()}
              className='border-t flex items-center gap-3 px-3 h-16 hover:bg-custom-phl dark:hover:bg-custom-phd cursor-pointer'
            >
              <div className='bg-custom-sbl dark:bg-custom-shd p-2 rounded-full'>
                <IoLogOutOutline size={20} />
              </div>
              <h1 className='font-medium'>
                Logout
              </h1>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default SmallDeviceMenu;