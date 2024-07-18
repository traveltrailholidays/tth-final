import ClientOnly from '@/components/features/ClientOnly';
import TermsCondition from '@/components/footer/legal/tnc';
import React from 'react'

const page = () => {
  return (
    <ClientOnly>
      <TermsCondition />
    </ClientOnly>
  )
}

export default page