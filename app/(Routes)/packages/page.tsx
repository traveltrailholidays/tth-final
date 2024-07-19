import ClientOnly from '@/components/features/ClientOnly';
import AllPackages from '@/components/packages/all-packages';
import PackagesHeroSection from '@/components/packages/packages-heroSection';
import { IListingsParams } from '@/frontend/actions/getListings';
import { SafeListing } from '@/frontend/types';
import React, { Suspense } from 'react'

interface AllPackagesProps {
  searchParams: IListingsParams;
}

const page = ({ searchParams }: AllPackagesProps) => {
  return (
    <Suspense>
      <ClientOnly>
        <PackagesHeroSection />
        <AllPackages
          searchParams={searchParams}
        />
      </ClientOnly>
    </Suspense>
  )
}

export default page;