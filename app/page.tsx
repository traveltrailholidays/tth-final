import ClientOnly from '@/components/features/ClientOnly';
import Footer from '@/components/footer';
import Header from '@/components/header';
import ExplorePackages from '@/components/home/explore-packages';
import ExplorePackagesContainer from '@/components/home/explore-packages/explore-packages-card';
import HomeHeroSection from '@/components/home/hero-section';
import HomeSelectCategory from '@/components/home/select-category';
import SmallDeviceSearch from '@/components/home/small-search';
import getCurrentUser from '@/frontend/actions/getCurrentUser';
import React from 'react';
import { Suspense } from 'react';

const page = async () => {

  const currentUser = await getCurrentUser();

  return (
    <Suspense> {/* I have to use this, because i used the useSearchParams in select category component */}
      <ClientOnly>
        <Header currentUser={currentUser} />
        <HomeHeroSection />
        <SmallDeviceSearch />
        <ExplorePackages />
        <ExplorePackagesContainer /> 
        <HomeSelectCategory />
        <Footer />
      </ClientOnly>
    </Suspense>
  )
}

export default page;

