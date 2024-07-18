'use client';

import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';

interface LargeMenuItemsProps {
    icon: IconType;
    href: string;
    title: string;
    className?: string;
}

const LargeMenuItems: React.FC<LargeMenuItemsProps> = ({ icon: Icon, href, title, className }) => {
  return (
    <Link
        href={href}
        className={`${className} flex items-center gap-3 px-3 h-16`}
    >
        <div className='bg-custom-sbl dark:bg-custom-shd p-2 rounded-full'>
            <Icon size={20}/>
        </div>
        <h1 className='font-medium'>
            {title}
        </h1>
    </Link>
  )
}

export default LargeMenuItems;