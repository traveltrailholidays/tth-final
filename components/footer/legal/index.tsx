'use client';

import ActiveLink from '@/components/features/ActiveLink';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const LegalFooter = () => {
    return (
        <div className=''>
            <h1 className='text-xl font-semibold'>
                Legal
            </h1>
            <div className='mt-4 ml-5 flex flex-col gap-2 font-medium'>
                <div className='flex gap-1'>
                    <div className='mt-[2px]'>
                        <MdKeyboardArrowRight size={20} />
                    </div>
                    <ActiveLink
                        href='/privacy-policy'
                        exact
                        text='Privacy Policy'
                    />
                </div>
                <div className='flex gap-1'>
                    <div className='mt-[2px]'>
                        <MdKeyboardArrowRight size={20} />
                    </div>
                    <ActiveLink
                        href='/term-condition'
                        exact
                        text='Terms & Condition'
                    />
                </div>
                <div className='flex gap-1'>
                    <div className='mt-[2px]'>
                        <MdKeyboardArrowRight size={20} />
                    </div>
                    <ActiveLink
                        href='/refund-cancellation-policy'
                        exact
                        text='Refund & Cancellation Policy'
                    />
                </div>
            </div>
        </div>
    )
}

export default LegalFooter;