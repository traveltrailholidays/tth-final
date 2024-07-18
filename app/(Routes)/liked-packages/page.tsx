import React from 'react';
import EmptyState from '@/components/packages/all-packages/empty-state';
import ClientOnly from '@/components/features/ClientOnly';
import getCurrentUser from '@/frontend/actions/getCurrentUser';
import getFavouritePackages from '@/frontend/actions/getFavouriteListings';
import FavouritePackages from '@/components/packages/liked-packages';

const page = async () => {

    const listings = await getFavouritePackages();
    const currentUser = await getCurrentUser();

    if(listings.length === 0) {
        return (
          <ClientOnly>
              <EmptyState 
                  title='No likes found'
                  subtitle='Looks like you have no liked packages. Like the packages to show here.'
              />
          </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <FavouritePackages 
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
    )

}

export default page