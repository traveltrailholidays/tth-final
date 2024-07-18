'use client';

import Container from '@/components/features/Container';
import Section from '@/components/features/Section';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useState } from 'react';
import qs from 'query-string';
import SelectMonthSearch from './select-month';
import { IoLocationSharp } from "react-icons/io5";
import { MdCalendarMonth, MdTimer } from 'react-icons/md';

const SearchBar = () => {

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
    <Section className='absolute bottom-0 translate-y-1/2 w-full left-0'>
      <Container className='bg-background rounded-3xl w-[95%] shadow-all-side dark:shadow-gray-500/5 flex items-center'>
        <div className='w-full relative'>
          <input
            value={selectedLocation}
            onChange={handleInputChange}
            type="text"
            placeholder='Select destination'
            className='bg-background w-full pr-5 pl-10 py-5 border-r rounded-l-3xl placeholder:text-black dark:placeholder:text-white hover:bg-custom-sbl dark:hover:bg-custom-sbd hover:rounded-3xl cursor-pointer '
          />
          <IoLocationSharp size={20} className='absolute top-1/2 -translate-y-1/2 left-3'/>
        </div>
        <div className='w-full relative'>
          <select
            name=""
            id=""
            value={selectedDuration}
            onChange={handleDurationChange}
            className='bg-background w-full pr-5 pl-10 py-5 hover:bg-custom-sbl dark:hover:bg-custom-sbd cursor-pointer appearance-none'
          >
            <option value="" hidden disabled>Select duration</option>
            <option value="1 to 3 days">1 to 3 days</option>
            <option value="4 to 6 days">4 to 6 days</option>
            <option value="7 to 9 days">7 to 9 days</option>
            <option value="10 to 12 days">10 to 12 days</option>
            <option value="13 days or more">13 days or more</option>
          </select>
          <MdTimer size={20} className='absolute top-1/2 -translate-y-1/2 left-3'/>
        </div>
        <div className='w-full relative'>
          <SelectMonthSearch
            onSelect={handleMonthSelect}
            className='bg-background w-full pr-5 pl-10 py-5 border-l hover:bg-custom-sbl dark:hover:bg-custom-sbd hover:rounded-l-3xl cursor-pointer appearance-none'
          />
          <MdCalendarMonth size={20} className='absolute top-1/2 -translate-y-1/2 left-3'/>
        </div>
        <button
          onClick={onSubmit}
          className={`bg-custom-clp h-full w-fit px-10 flex justify-center items-center rounded-r-3xl text-white font-semibold gap-3 text-lg ${isFormValid ? '' : 'opacity-70 cursor-not-allowed'}`}
        >
          Search
        </button>
      </Container>
    </Section>
  )
}

export default SearchBar;