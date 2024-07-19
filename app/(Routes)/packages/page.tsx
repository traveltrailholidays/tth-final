import ClientOnly from '@/components/features/ClientOnly';
import AllPackages from '@/components/packages/all-packages';
import PackagesHeroSection from '@/components/packages/packages-heroSection';
import { IListingsParams } from '@/frontend/actions/getListings';
import { SafeListing } from '@/frontend/types';
import React, { Suspense } from 'react'

interface AllPackagesProps {
  searchParams: IListingsParams;
  listings: SafeListing;
}

const page = ({ searchParams, listings }: AllPackagesProps) => {
  return (
    <Suspense>
      <ClientOnly>
        <PackagesHeroSection 
          listings={listings}
        />
        <AllPackages
          searchParams={searchParams}
        />
      </ClientOnly>
    </Suspense>
  )
}

export default page;