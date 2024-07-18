'use client';

import Container from '@/components/features/Container';
import Logo from '@/components/features/Logo';
import Section from '@/components/features/Section';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState, useCallback } from 'react';
import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';
import Input from '@/components/features/Inputs/Input';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SignUpAuth = () => {

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('api/auth/signup', data)
            .then(() => {
                // Todo: reidrect to homepage
                router.push('/signin');
            })
            .catch((error) => {
                toast.error('Something went wrong');
            })
            .finally(() => {
                setIsLoading(false);
            })
    };

    const handleGoogleSignIn = () => {
        signIn('google');
        toast.success('Logged in');
    };

    return (
        <Section>
            <Container className='w-full relative flex flex-col text-center items-center gap-3'>
                <Link
                    href="/"
                    className='absolute left-0 top-2 cursor-pointer hover:scale-125 transition text-custom-clp'
                >
                    <FaArrowLeftLong size={20} />
                </Link>
                <Logo className='mt-20 md:mt-0' />
                <h1 className='heading mt-2 font-medium text-gray-800 dark:text-gray-50'>
                    Sign in or create an account
                </h1>
                <div className='max-w-[400px] flex flex-col gap-5'>
                    <h1 className='text-gray-800 dark:text-gray-50'>
                        Unlock a world of travel with one account across Travel Trail Holidays
                    </h1>
                    <Input
                        id="name"
                        label="Name"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                    />
                    <Input
                        id="email"
                        label="Email"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                    />
                    <Input
                        id="password"
                        type="password"
                        label="Password"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                    />
                    <button
                        onClick={handleSubmit(onSubmit)}
                        className='bg-custom-clp text-white'
                    >
                        Create an account
                    </button>
                    <div className='flex flex-col gap-4 mt-3'>
                        {/* <hr /> */}
                        <button
                            onClick={handleGoogleSignIn} 
                            className='flex items-center justify-center gap-3 border-2 py-3 rounded'
                        >
                            <FcGoogle />
                            Continue with Google
                        </button>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default SignUpAuth;