'use client';

import { SafeListing, safeUser } from '@/frontend/types';
import { Reservation } from '@prisma/client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useCallback, useMemo } from 'react'
import HeartButton from '../liked-packages/like-button';
import { MdWatchLater } from "react-icons/md";
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { FaBuilding, FaMapLocationDot } from 'react-icons/fa6';
import { FaCarAlt, FaStar } from 'react-icons/fa';
import Link from 'next/link';

interface PackageCardProps {
  data: SafeListing;
  reservation?: Reservation;
  currentUser?: safeUser | null;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
}

const PackageCard: React.FC<PackageCardProps> = ({ data, reservation, currentUser, onAction, disabled, actionId = "", actionLabel }) => {

  const handleCancle = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (disabled) {
        return;
      }
      onAction?.(actionId);
    }, [onAction, actionId, disabled]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }
    return data.price;
  }, [reservation, data.price]);

  const discountedPrice = (data.price) - ((data.price) * ((data.discount) / 100));

  return (
    <Link
      href={`/packages/${data.id}`}
      className='cursor-pointer group min-w-[200px] w-full max-w-[314.5px] shadow dark:shadow-white/25 rounded'
    >
      <div className='relative overflow-hidden h-[200px]'>
        <Image
          fill
          src={data.imageSrc}
          alt='package'
          className='rounded-t h-[200px] object-cover group-hover:scale-110 transition'
        />
        <div className='absolute top-3 right-3'>
          <HeartButton
            listingId={data.id}
            currentUser={currentUser}
          />
        </div>
        {data.discount !== 0 ? (
          <div className='absolute top-2 left-2 bg-orange-200 px-2 py-[2px] rounded text-sm font-semibold text-gray-800'>
            {data.discount} &#37; OFF
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className='px-2 pt-3 flex flex-col gap-3 justify-between h-[235px]'>
        <h1 className='text-lg font-semibold'>
          {data.title}
        </h1>
        <div className=''>
          <span className='text-sm font-medium text-custom-clp'>
            {data.location}
          </span>
          <div className='flex justify-between mt-2'>
            <div className='flex items-center gap-2'>
              <MdWatchLater />
              <span className='text-sm font-medium'>
                {data.nights} Nights / {data.days} Days
              </span>
            </div>
            <div className='flex gap-2'>
              <FaBuilding />
              <FaCarAlt />
              <FaMapLocationDot />
              <GiForkKnifeSpoon />
            </div>
          </div>
        </div>
        <div className='border-t flex justify-between py-3'>
          <div className='flex gap-[6px] text-sm'>
            <FaStar className='mt-[1.7px]' />
            <span className='font-semibold'>
              {data.rating}
            </span>
          </div>
          <div>
            {data.discount !== 0 ? (
              <div className='flex items-center gap-3'>
                <span className='text-custom-clp font-semibold flex gap-1'>
                  &#8377;
                  <s>
                    {data.price}
                  </s>
                </span>
                <span className='font-semibold text-green-600'>
                  &#8377; {discountedPrice}
                </span>
              </div>
            ) : (
              <div className='font-semibold text-custom-clp'>
                &#8377; {data.price}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PackageCard;