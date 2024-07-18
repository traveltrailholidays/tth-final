import ClientOnly from '@/components/features/ClientOnly';
import EmptyState from '@/components/packages/all-packages/empty-state';
import SinglePackage from '@/components/packages/single-package';
import getCurrentUser from '@/frontend/actions/getCurrentUser';
import getListingById from '@/frontend/actions/getListingById';
import React from 'react';

interface IParams {
  listingId?: string;
};

const page = async ({ params }: { params: IParams }) => {

  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();

  if(!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    )
  };

  return (
    <ClientOnly>
      <SinglePackage
        listing={listing}
        currentUser={currentUser}
      />
    </ClientOnly>
  )
}

export default page;