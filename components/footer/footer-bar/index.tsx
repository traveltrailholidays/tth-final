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
    <Section className='md:hidden border-t dark:border-gray-800 fixed w-full bottom-0 bg-background'>
      <Container className='flex w-full justify-around items-center'>
        <Link
          href='/'
          className='flex flex-col items-center gap-[2px]'
        >
          <GoHome size={26} />
          <span className='text-xs'>
            Home
          </span>
        </Link>
        {currentUser ? (
          <>
            <Link
              href="/liked-packages"
              className='flex flex-col items-center gap-[2px]'
            >
              <FaHeart size={24} />
              <span className='text-xs'>
                Home
              </span>
            </Link>
          </>
        ) : (
          <>
            <Link
              href="/signin"
              className='flex flex-col items-center gap-[2px]'
            >
              <FaHeart size={24} />
              <span className='text-xs'>
                Liked
              </span>
            </Link>
          </>
        )}
        <Link
          href="/signin"
          className='flex flex-col items-center gap-[2px]'
        >
          <Avatar src={currentUser?.image} className='w-7 h-7' />
          <span className='text-xs'>
            Account
          </span>
        </Link>
      </Container>
    </Section>
  )
}

export default FooterBar;