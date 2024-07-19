
import Container from '@/components/features/Container';
import Section from '@/components/features/Section';
import React from 'react'
import EmptyState from '../../../packages/all-packages/empty-state';
import PackageCard from '../../../packages/package-card';
import getCurrentUser from '@/frontend/actions/getCurrentUser';
import getHomeListings from '@/frontend/actions/getHomeListings';

const ExplorePackagesCard = async () => {

    const listings = await getHomeListings();
    const currentUser = await getCurrentUser();

    if (listings.length === 0) {
        return (
            <EmptyState showReset />
        )
    }

    return (
        <Section className='w-full pt-8 pb-24'>
            <Container className='w-full flex flex-col md:flex-row gap-6 flex-wrap items-center md:justify-start'>
                {listings.map((listings: any) => {
                    return (
                        <PackageCard
                            currentUser={currentUser}
                            key={listings.id}
                            data={listings}
                        />
                    )
                })}
            </Container>
        </Section>
    )
}

export default ExplorePackagesCard;