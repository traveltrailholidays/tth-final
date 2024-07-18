import ClientOnly from '@/components/features/ClientOnly';
import PaymentsSection from '@/components/payments';
import React from 'react';

const page = () => {
  return (
    <ClientOnly>
        <PaymentsSection />
    </ClientOnly>
  )
}

export default page