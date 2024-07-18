'use client';

import ActiveLink from '@/components/features/ActiveLink';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const TrendingPackagesFooter = () => {
    return (
        <div className=''>
            <h1 className='text-xl font-semibold'>
                Trending Packages
            </h1>
            <div className='mt-4 ml-5 flex flex-col gap-2 font-medium'>
                <div className='flex gap-1'>
                    <div className='mt-[2px]'>
                        <MdKeyboardArrowRight size={20} />
                    </div>
                    <ActiveLink
                        href='/'
                        exact
                        text='Home'
                    />
                </div>
                <div className='flex gap-1'>
                    <div className='mt-[2px]'>
                        <MdKeyboardArrowRight size={20} />
                    </div>
                    <ActiveLink
                        href='/about-us'
                        exact
                        text='About Us'
                    />
                </div>
                <div className='flex gap-1'>
                    <div className='mt-[2px]'>
                        <MdKeyboardArrowRight size={20} />
                    </div>
                    <ActiveLink
                        href='/contact-us'
                        exact
                        text='Contact Us'
                    />
                </div>
                <div className='flex gap-1'>
                    <div className='mt-[2px]'>
                        <MdKeyboardArrowRight size={20} />
                    </div>
                    <ActiveLink
                        href='/payments'
                        exact
                        text='Payments'
                    />
                </div>
            </div>
        </div>
    )
}

export default TrendingPackagesFooter;