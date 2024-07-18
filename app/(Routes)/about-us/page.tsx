import AboutSection from '@/components/about-us';
import ClientOnly from '@/components/features/ClientOnly';
import React from 'react';

const page = () => {
  return (
    <ClientOnly>
        <AboutSection />
    </ClientOnly>
  )
}

export default page;