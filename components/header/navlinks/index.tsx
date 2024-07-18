'use client';

import ActiveLink from '@/components/features/ActiveLink';
import React from 'react';

const Navlinks = () => {
  return (
    <div
      className={`gap-5 items-center hidden md:flex font-medium`}
    >
      <ActiveLink exact href='/' text='Home' />
      <ActiveLink exact href='/packages' text='Packages' />
      <ActiveLink exact href='/about-us' text='About' />
      <ActiveLink exact href='/payments' text='Payments' />
    </div>
  )
}

export default Navlinks;