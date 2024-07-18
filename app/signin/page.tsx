import GoogleSignIn from '@/components/auth/google-signin';
import SignIn from '@/components/auth/signin';
import ClientOnly from '@/components/features/ClientOnly';
import getCurrentUser from '@/frontend/actions/getCurrentUser';
import React from 'react';

const page = async () => {

  const currentUser = await getCurrentUser();

  return (
    <ClientOnly>
        {/* <SignIn /> */}
        <GoogleSignIn 
          currentUser={currentUser}
        />
    </ClientOnly>
  )
}

export default page;