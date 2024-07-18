'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

interface LogoProps {
  className?: string;
};

const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Link
      href="/"
      className={`${className} flex items-center gap-3 select-none`}
    >
      <Image
        src="/logo.png"
        alt='logo'
        width={36}
        height={36}
      />
      <span className='font-semibold text-2xl text-custom-clp'>
        Travel Trail Holidays
      </span>
    </Link>
  )
}

export default Logo;