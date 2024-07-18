import ClientOnly from '@/components/features/ClientOnly';
import CreatePackage from '@/components/packages/create-package';
import React from 'react';

const page = () => {
  return (
    <ClientOnly>
        <CreatePackage />
    </ClientOnly>
  )
}

export default page