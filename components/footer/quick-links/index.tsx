'use client';

import ActiveLink from '@/components/features/ActiveLink';
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';

const QuickLinksFooter = () => {
    return (
        <div className=''>
            <h1 className='text-xl font-semibold'>
                Quick Links
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

export default QuickLinksFooter;