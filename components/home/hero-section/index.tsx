'use client';

import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';
import SearchBar from './serach-bar';

const HomeHeroSection = () => {
  return (
    <div className='hidden md:flex flex-row-reverse relative bg-custom-sbl dark:bg-custom-sbd'>
      <img
        src="/homeHeroBg.jpg"
        alt=""
        className='w-[65%] 2xl:w-1/2 h-[450px] lg:h-[600px] object-cover select-none'
      />
      <div className='w-[65%] 2xl:w-1/2 h-[600px] object-cover select-none bg-black absolute opacity-50 dark:block hidden'></div>
      <div className='w-[65%] 2xl:w-1/2 h-[600px] object-cover select-none bg-white/50 absolute opacity-10 dark:hidden'></div>
      <div className='absolute top-1/2 -translate-y-[40%] right-1/2 translate-x-7 xl:-translate-x-5 2xl:-translate-x-10 flex flex-col gap-5 lg:gap-10'>
        <h1 className='heroTitle max-w-[580px] font-bold leading-tight text-gray-900 dark:text-gray-50'>
          Discover the most engaging places
        </h1>
        <span className='bg-custom-clp w-fit px-3 py-2 rounded text-white font-semibold flex gap-5 items-center'>
          Explore Now <FaArrowRightLong />
        </span>
      </div>
      <SearchBar />
    </div>
  )
}

export default HomeHeroSection;