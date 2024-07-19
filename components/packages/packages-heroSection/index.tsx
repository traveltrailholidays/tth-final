'use client';

import ClientOnly from '@/components/features/ClientOnly';
import Container from '@/components/features/Container';
import Section from '@/components/features/Section';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useState } from 'react';
import qs from 'query-string';
import { IoLocationSharp } from 'react-icons/io5';
import { SafeListing } from '@/frontend/types';

interface PackagesHeroSectionProps {
    listings: SafeListing;
};

const PackagesHeroSection: React.FC<PackagesHeroSectionProps> = ({ listings }) => {

    const [selectedLocation, setSelectedLocation] = useState<string>('');

    const router = useRouter();
    const params = useSearchParams();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedLocation(e.target.value);
    };

    const isFormValid = selectedLocation !== '';

    const onSubmit = useCallback(async () => {

        if (!isFormValid) {
            return;
        }

        let currentQuery = {};
        if (params) {
            currentQuery = qs.parse(params.toString());

            const updatedQuery = {
                ...currentQuery,
                ...(selectedLocation && { dest: selectedLocation }),
            };

            const url = qs.stringifyUrl({
                url: "/packages",
                query: updatedQuery
            }, { skipNull: true });

            router.push(url);
        }
    }, [selectedLocation, params, router]);

    return (
        <ClientOnly>
            <Section className="mt-16 !p-0 flex flex-col items-center">
                <div
                    className={`w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] relative`}
                >
                    <Image
                        src="/packageHeroBg.jpg"
                        width={4240}
                        height={2832}
                        alt="hero_bg"
                        priority
                        quality={100}
                        className="w-[100vw] h-full object-cover select-none"
                    />
                    <div className="absolute w-full h-full bg-black top-0 opacity-60 flex justify-center items-center"></div>
                    {/* <div className="absolute w-full h-full top-0 flex flex-col gap-10 justify-center items-center">
                        <span
                            className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white transition font-semibold`}
                        >
                            All Packages
                        </span>
                    </div> */}
                </div>
            </Section>
            <Section>
                <Container className='w-full relative'>
                    <div className='absolute -top-[67px] bg-custom-sbl dark:bg-custom-sbd shadow dark:shadow-white/25 py-4 px-6 rounded-t-xl'>
                        <span className='font-semibold'>
                            Search for your desired tour package
                        </span>
                    </div>
                    <div className='absolute -top-3 bg-background shadow dark:shadow-white/25 py-4 px-6 rounded-b-xl w-full flex flex-col gap-3 sm:flex-row'>
                        <div className='w-full relative'>
                            <input
                                value={selectedLocation}
                                onChange={handleInputChange}
                                type="text"
                                placeholder='Select destination'
                                className='bg-background pr-5 pl-10 w-full max-w-[500px] focus:outline-none border rounded py-2'
                            />
                            <IoLocationSharp size={20} className='absolute top-1/2 -translate-y-1/2 left-3' />
                        </div>
                        <button
                            onClick={onSubmit}
                            className={`bg-custom-clp  w-fit px-10 flex justify-center items-center rounded text-white font-semibold gap-3 text-lg ${isFormValid ? '' : 'opacity-70 cursor-not-allowed'}`}
                        >
                            Search
                        </button>
                    </div>
                    <h1 className='heading mt-36 sm:mt-32 w-full font-semibold text-gray-900 dark:text-gray-50 ml-[2px]'>
                        All packages
                    </h1>
                    <h2 className='mt-[2px] text-gray-800 dark:text-gray-50'>
                        Explore all well-known travel spots and their package options
                    </h2>
                </Container>
            </Section>
        </ClientOnly>
    )
}

export default PackagesHeroSection;