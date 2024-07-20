import Avatar from '@/components/features/Avatar';
import Container from '@/components/features/Container';
import Section from '@/components/features/Section';
import { safeUser } from '@/frontend/types';
import Link from 'next/link';
import React from 'react'
import { FaHeart } from 'react-icons/fa6';
import { GoHome } from "react-icons/go";

interface FooterBarProps {
  currentUser: safeUser | null;
}

const FooterBar: React.FC<FooterBarProps> = ({ currentUser }) => {

  return (
    <Section className='md:hidden shadow-all-side dark:shadow-gray-800 fixed w-full bottom-0 bg-background'>
      <Container className='flex w-full justify-around items-center'>
        <Link
          href='/'
        >
          <GoHome size={26} />
        </Link>
        {currentUser ? (
          <>
            <Link
              href="/liked-packages"
            >
              <FaHeart size={24} />
            </Link>
          </>
        ) : (
          <>
            <Link
              href="/signin"
            >
              <FaHeart size={24} />
            </Link>
          </>
        )}
        <Link
          href="/signin"
        >
          <Avatar src={currentUser?.image} className='w-7 h-7' />
        </Link>
      </Container>
    </Section>
  )
}

export default FooterBar;