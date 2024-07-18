'use client';

import Container from '@/components/features/Container';
import Section from '@/components/features/Section';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useState } from 'react';
import { IoSearch } from "react-icons/io5";
import qs from 'query-string';
import SelectMonthSearch from '../hero-section/serach-bar/select-month';

const SmallDeviceSearch = () => {
    const [selectedLocation, setSelectedLocation] = useState<string>('');
    const [selectedDuration, setSelectedDuration] = useState<string>('');
    const [selectedMonth, setSelectedMonth] = useState<string>('');

    const router = useRouter();
    const params = useSearchParams();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedLocation(e.target.value);
    };

    const handleDurationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDuration(e.target.value);
    };

    const handleMonthSelect = (selectedMonth: string) => {
        setSelectedMonth(selectedMonth);
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
                ...(selectedDuration && { duration: selectedDuration }),
                ...(selectedMonth && { month: selectedMonth }),
            };

            const url = qs.stringifyUrl({
                url: "/packages",
                query: updatedQuery
            }, { skipNull: true });

            router.push(url);
        }
    }, [selectedLocation, selectedDuration, selectedMonth, params, router]);

    return (
        <Section className='mt-24 mb-12 md:hidden'>
            <Container className='w-full flex flex-col gap-5'>
                <h1 className='text-center text-3xl font-bold'>
                    Live, Love, Travel!
                </h1>
                <div className='mt-5 flex flex-col gap-2'>
                    <span className='text-lg'>Destination</span>
                    <input
                        value={selectedLocation}
                        onChange={handleInputChange}
                        type="text"
                        placeholder='Select Destination'
                        className='bg-custom-sbl dark:bg-custom-sbd border dark:border-2 dark:border-gray-800 w-full px-7 py-3 border-r rounded hover:rounded hover:bg-custom-ibl dark:hover:bg-custom-ibd cursor-pointer focus:outline-none text-xl'
                        required
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='text-lg'>Duration</span>
                    <select
                        name=""
                        id=""
                        value={selectedDuration}
                        onChange={handleDurationChange}
                        className='bg-custom-sbl dark:bg-custom-sbd border dark:border-2 dark:border-gray-800 w-full px-7 py-3 border-r rounded hover:rounded hover:bg-custom-ibl dark:hover:bg-custom-ibd cursor-pointer focus:outline-none text-xl'
                    >
                        <option value="">Select duration</option>
                        <option value="1 to 3 days">1 to 3 days</option>
                        <option value="4 to 6 days">4 to 6 days</option>
                        <option value="7 to 9 days">7 to 9 days</option>
                        <option value="10 to 12 days">10 to 12 days</option>
                        <option value="13 days or more">13 days or more</option>
                    </select>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='text-lg'>Month</span>
                    <SelectMonthSearch
                        onSelect={handleMonthSelect}
                        className='bg-custom-sbl dark:bg-custom-sbd border dark:border-2 dark:border-gray-800 w-full px-7 py-3 border-r rounded hover:rounded hover:bg-custom-ibl dark:hover:bg-custom-ibd cursor-pointer focus:outline-none text-xl'
                    />
                </div>
                <button
                    onClick={onSubmit}
                    disabled={!isFormValid}
                    className={`mt-3 bg-custom-clp h-full w-full px-7 py-3 flex justify-center items-center rounded text-white font-medium gap-3 text-xl ${isFormValid ? '' : 'opacity-70 cursor-not-allowed'}`}
                >
                    Search
                </button>
            </Container>
        </Section>
    )
}

export default SmallDeviceSearch;