'use client';

import React from 'react';
import Section from '@/components/features/Section';
import Container from '@/components/features/Container';
import Logo from '@/components/features/Logo';
import Link from 'next/link';
import SocialBtns from './social-btns';
import QuickLinksFooter from './quick-links';
import TrendingPackagesFooter from './trending-packages';
import LegalFooter from './legal';
import GetInTouchFooter from './get-in-touch';

const Footer = () => {
    return (
        <Section className='border-t dark:border-t-2 dark:border-gray-800'>
            <Container className='w-full pt-6 mb-10 md:mb-0'>
                <div className='w-full flex flex-col md:flex-row items-center md:justify-between'>
                    <Logo className='mb-6' />
                    <SocialBtns className='mb-6' />
                </div>
                <div className='py-6 border-t-2 border-b-2 border-gray-200 dark:border-gray-800 flex flex-col gap-10 sm:px-10'>
                    <div className='flex gap-10 flex-wrap justify-between'>
                        <QuickLinksFooter />
                        <TrendingPackagesFooter />
                        <LegalFooter />
                    </div>
                    <GetInTouchFooter />
                </div>
                <div className='py-6 w-full flex justify-between flex-col text-center md:flex-row items-center gap-2 font-medium'>
                    <span className={``}>Copyright © 2024 <Link href={`/`} className={`hover:underline`}>Travel Trail Holidays</Link>. All Rights Reserved.</span>
                    <span className={``}>
                        <span>Designed with <span className={`text-custom-clp text-lg select-none`}>&#x2665;</span> by <Link href={`https://diwakarjha.vercel.app/`} target="_blank" className={`text-custom-clp hover:underline font-semibold`}>Diwakar Jha</Link>.</span>
                    </span>
                </div>
            </Container>
        </Section>
    )
}

export default Footer;          