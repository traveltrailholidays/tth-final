'use client';

import useFavourite from '@/frontend/hooks/useFavourite';
import { safeUser } from '@/frontend/types';
import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface HeartButtonProps {
    listingId: string;
    currentUser?: safeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({ listingId, currentUser }) => {

    console.log(listingId);

    const { hasFavourited, toggleFavourite } = useFavourite({ listingId, currentUser});

  return (
    <div
        onClick={toggleFavourite}
        className='relative hover:opacity-80 transition cursor-pointer'
    >
        <AiOutlineHeart 
            size={28}
            className='fill-white absolute -top-[2px] -right-[2px]'
        />
        <AiFillHeart 
            size={24}
            className={ hasFavourited ? 'fill-custom-clp' : 'fill-neutral-500/70'}
        />
    </div>
  )
}

export default HeartButton;