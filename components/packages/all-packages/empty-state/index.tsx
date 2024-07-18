'use client';

import Container from '@/components/features/Container';
import Section from '@/components/features/Section';
import { useRouter } from 'next/navigation';
import React from 'react';

interface EmptyStateProps {
    title?: string;
    subtitle?: string;
    showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({ 
    title = "No exact matches",
    subtitle = "Try changing or removing some of your filters",
    showReset
 }) => {

    const router = useRouter();

    return (
        <Section className='h-[60vh] items-center'>
            <Container className=''>
                <h1 className='text-2xl font-semibold'>
                    {title}
                </h1>
                <h1 className='font-medium'>
                    {subtitle}
                </h1>
                <div
                    className='w-84 mt-4'
                >
                    {showReset && (
                        <button
                            onClick={() => router.push('/packages')}
                            className='bg-custom-clp px-5 py-3 font-semibold text-white rounded hover:bg-custom-clp/80 transition'
                        >
                            Remove all filters
                        </button>
                    )}
                </div>
            </Container>
        </Section>
    )
}

export default EmptyState;