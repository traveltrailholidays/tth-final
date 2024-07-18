import ClientOnly from '@/components/features/ClientOnly';
import AllPackages from '@/components/packages/all-packages';
import PackagesHeroSection from '@/components/packages/packages-heroSection';
import { IListingsParams } from '@/frontend/actions/getListings';
import React from 'react'

interface AllPackagesProps {
  searchParams: IListingsParams;
}

const page = ({searchParams}: AllPackagesProps) => {
  return (
    <ClientOnly>
      <PackagesHeroSection />
      <AllPackages
        searchParams={searchParams}
      />
    </ClientOnly>
  )
}

export default page;