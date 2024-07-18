'use client';

import Container from '@/components/features/Container';
import Logo from '@/components/features/Logo';
import Section from '@/components/features/Section';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";;
import { FcGoogle } from 'react-icons/fc';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { safeUser } from '@/frontend/types';

interface GoogleSignInProps {
    currentUser?: safeUser | null;
  };

const GoogleSignIn: React.FC<GoogleSignInProps> = ({currentUser}) => {
    const router = useRouter();

    useEffect(() => {
        if(!currentUser) {
            // router.push('/');
        }
    }, [currentUser, router]);

    const handleSignIn = async () => {
        try {
            const result = await signIn('google', { redirect: false, callbackUrl: '/' });

            if (result && !result.error) {
                router.push('/');
            } else {
                console.error('Sign in error:', result?.error ?? 'Unknown error');
            }

            toast.success('Logged in');
        } catch (error) {
            console.error('Sign in error:', error);
        }
    };

    return (
        <Section>
            <Container className='w-full relative flex h-[60vh] items-center'>
                <Link
                    href="/"
                    className='absolute left-0 top-2 cursor-pointer hover:scale-125 transition text-custom-clp'
                >
                    <FaArrowLeftLong size={20} />
                </Link>
                <div className='w-full flex flex-col text-center items-center gap-3'>
                    <Logo className='mt-20 md:mt-0' />
                    <h1 className='heading mt-2 font-medium text-gray-800 dark:text-gray-50'>
                        Login to Travel Trail Holidays account
                    </h1>
                    <div className='max-w-[400px] flex flex-col gap-5'>
                        <h1 className='text-gray-800 dark:text-gray-50'>
                            Unlock a world of travel with one account across Travel Trail Holidays
                        </h1>
                        <div className='flex flex-col gap-4 mt-3'>
                            <button
                                onClick={handleSignIn} 
                                className='flex items-center justify-center gap-3 border-2 py-3 rounded'
                            >
                                <FcGoogle />
                                Continue with Google
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default GoogleSignIn;
