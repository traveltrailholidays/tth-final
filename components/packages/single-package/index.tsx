import Container from '@/components/features/Container';
import Section from '@/components/features/Section';
import { SafeListing, safeUser } from '@/frontend/types';
import { Reservation } from '@prisma/client';
import Image from 'next/image';
import React from 'react';
import HeartButton from '../liked-packages/like-button';
import { MdAlternateEmail, MdLocalPhone, MdWatchLater } from 'react-icons/md';
import FaqPackageAccordion from './faq-accordion';
import { RiUserLine } from 'react-icons/ri';
import { IoIosLink } from 'react-icons/io';
import GetHelp from '@/components/get-help';
import PackageQuotaion from './get-quotation';

interface SinglePackageProps {
    reservations?: Reservation[];
    listing: SafeListing & {
        user: safeUser
    };
    currentUser?: safeUser | null;
}

const SinglePackage: React.FC<SinglePackageProps> = ({ reservations, listing, currentUser }) => {
    return (
        <Section>
            <Container className='w-full my-20 flex flex-col gap-8'>
                <div className='w-full h-[300px] md:h-[60vh] overflow-hidden rounded-xl relative'>
                    <Image
                        fill
                        src={listing.imageSrc}
                        alt='Package Image'
                        className='object-cover w-full'
                    />
                    <div className='absolute top-5 right-5'>
                        <HeartButton
                            listingId={listing.id}
                            currentUser={currentUser}
                        /> 
                    </div>
                </div>
                <div className='w-full flex flex-col lg:flex-row gap-8'>
                    <div className='w-full flex flex-col gap-16'>
                        <h1 className='text-2xl font-semibold'>
                            {listing.title}
                        </h1>
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center gap-2'>
                                <MdWatchLater size={20} className='text-custom-clp' />
                                <span className='font-medium'>
                                    {listing.nights} Nights / {listing.days} Days
                                </span>
                            </div>
                            <span className='font-semibold text-custom-clp'>
                                {listing.location}
                            </span>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-3xl font-semibold'>
                                Package description
                            </h1>
                            <p>
                                {listing.description}
                            </p>
                        </div>
                        <div className='flex flex-col gap-5 my-3'>
                            <h1 className='text-3xl font-semibold'>
                                Itinirary
                            </h1>
                            {listing.itinary.map((item, index) => (
                                <div key={index} >
                                    <span className='font-semibold text-lg'>
                                        Day {index + 1} :{" "}
                                    </span>
                                    <span className='font-medium text-lg'>
                                        {item}
                                    </span>
                                    {index < listing.itinary.length - 1 && <hr className='mt-5' />}
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h1 className='text-3xl font-semibold'>
                                Frequently Asked Questions
                            </h1>
                            <FaqPackageAccordion />
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h1 className='text-3xl font-semibold'>
                                Trending Packages
                            </h1>

                        </div>
                    </div>
                    <div className='lg:max-w-[350px] w-full flex flex-col gap-8'>
                        <div className='rounded-xl shadow dark:shadow-white/25'>
                            <div className='bg-custom-clp rounded-t-xl text-white py-3 px-5 flex items-end'>
                                <span className='text-3xl font-bold'>
                                    &#8377; {listing.price} {" "}
                                </span>
                                <span className='font-medium text-lg'>
                                    / per person
                                </span>
                            </div>
                            <PackageQuotaion />
                        </div>
                        <GetHelp />
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default SinglePackage;