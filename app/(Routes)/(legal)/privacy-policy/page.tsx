import ClientOnly from '@/components/features/ClientOnly'
import Privacy from '@/components/footer/legal/privacy-policy'
import React from 'react'

const page = () => {
  return (
    <ClientOnly>
        <Privacy />
    </ClientOnly>
  )
}

export default page