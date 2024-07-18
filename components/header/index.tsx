'use client';

import React from 'react';
import Section from '@/components/features/Section';
import Container from '@/components/features/Container';
import Logo from '@/components/features/Logo';
import Navlinks from '@/components/header/navlinks/index';
import Menu from '@/components/header/menu/index';
import { safeUser } from '@/frontend/types';

interface HeaderProps {
  currentUser: safeUser | null;
};

const Header: React.FC<HeaderProps> = ({ currentUser }) => {
  return (
    <Section className='shadow dark:shadow-gray-800 fixed w-full top-0 z-10 bg-background'>
        <Container className='w-full flex justify-between items-center'>
            <Logo />
            <div className='flex items-center gap-5'>
                <Navlinks />
                <Menu currentUser={currentUser}/>
            </div>
        </Container>
    </Section>
  )
}

export default Header;