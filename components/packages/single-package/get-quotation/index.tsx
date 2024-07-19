'use client';

import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { FieldValues, useForm } from 'react-hook-form';
import { IoIosLink } from 'react-icons/io';
import { MdAlternateEmail, MdLocalPhone } from 'react-icons/md';
import { RiUserLine } from 'react-icons/ri';

const PackageQuotaion = () => {

    const router = useRouter();
    const pathname = usePathname();


    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            emailId: "",
            PhoneNumber: "",
            packageId: {pathname},
        }
    });

    return (
        <form className='py-5 px-5 flex flex-col gap-6'>
            <h1 className='text-xl font-semibold ml-[2px]'>
                Get Quote
            </h1>
            <div className='relative'>
                <input
                    type="text"
                    placeholder='Your name'
                    className='border-2 rounded py-2 px-10 w-full'
                />
                <RiUserLine size={20} className='absolute top-1/2 -translate-y-1/2 left-3 text-gray-400 ' />
            </div>
            <div className='relative'>
                <input
                    type="text"
                    placeholder='Your email address'
                    className='border-2 rounded py-2 px-10 w-full'
                />
                <MdAlternateEmail size={20} className='absolute top-1/2 -translate-y-1/2 left-3 text-gray-400 ' />
            </div>
            <div className='relative'>
                <input
                    type="text"
                    placeholder='Your Phone number'
                    className='border-2 rounded py-2 px-10 w-full'
                />
                <MdLocalPhone size={20} className='absolute top-1/2 -translate-y-1/2 left-3 text-gray-400 ' />
            </div>
            <div className='relative hidden'>
                <input
                    type="text"
                    placeholder='Package url'
                    className='border-2 rounded py-2 px-10 w-full'
                />
                <IoIosLink size={20} className='absolute top-1/2 -translate-y-1/2 left-3 text-gray-400 ' />
            </div>
            <button className='bg-custom-clp rounded py-2 font-medium text-white'>
                Submit
            </button>
        </form>
    )
}

export default PackageQuotaion;