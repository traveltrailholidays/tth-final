'use client';

import React from 'react';
import { MdDarkMode } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import { LuPlus } from "react-icons/lu";
import ThemeSwitcher from '@/components/theme/themeSwitcher';
import { safeUser } from '@/frontend/types';
import { signOut } from 'next-auth/react';
import Avatar from '@/components/features/Avatar';
import { FaHeart } from 'react-icons/fa6';

interface SmallDeviceMenuProps {
    currentUser: safeUser | null;
}

const SmallDeviceMenu: React.FC<SmallDeviceMenuProps> = ({ currentUser }) => {
  return (
    <div className='modal md:hidden absolute bg-red-500 top-12 -right-3 -left-20'>
        hiii
    </div>
  )
}

export default SmallDeviceMenu;