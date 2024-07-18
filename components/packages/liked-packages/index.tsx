import Container from '@/components/features/Container';
import Section from '@/components/features/Section';
import { SafeListing, safeUser } from '@/frontend/types';
import React from 'react';
import PackageCard from '../package-card';

interface FavouritePackagesProps {
    listings: SafeListing[];
    currentUser: safeUser | null;
};

const FavouritePackages: React.FC<FavouritePackagesProps> = ({ listings, currentUser }) => {
    return (
        <Section>
            <Container className='mt-28 w-full'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-3xl font-semibold'>
                        Liked Packages
                    </h1>
                    <h1 className='text-sm font-medium ml-[2px] text-gray-800 dark:text-gray-50'>
                        List of packages you have liked !
                    </h1>
                </div>
                <div className='py-20 flex flex-col md:flex-row gap-6 flex-wrap justify-center'>
                    {listings.map((listing) => (
                        <PackageCard 
                            currentUser={currentUser}
                            key={listing.id}
                            data={listing}
                        />
                    ))}
                </div>
            </Container>
        </Section>
    )
}

export default FavouritePackages;