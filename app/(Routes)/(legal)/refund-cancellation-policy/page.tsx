import ClientOnly from '@/components/features/ClientOnly';
import Rncp from '@/components/footer/legal/rncp';
import React from 'react';

const page = () => {
  return (
    <ClientOnly>
        <Rncp />                                                                                                        
    </ClientOnly>
  )
}

export default page