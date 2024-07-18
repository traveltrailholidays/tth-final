'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { FC, useCallback } from 'react';
import { IconType } from 'react-icons';
import qs from 'query-string';

interface CategoryBoxProps {
    icon: IconType;
    label: string;
    className?: string;
    selected?:boolean;
}

const CategoryBox: FC<CategoryBoxProps> = ({ icon: Icon, label, className, selected }) => {

    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(() => {
        let currentQuery = {};

        if (params) {
            currentQuery = qs.parse(params.toString());
        }

        const updatedQuery: any = {
            ...currentQuery,
            category: label
        }

        if(params?.get('category') === label) {
            delete updatedQuery.category;
        }

        const url = qs.stringifyUrl({
            url: '/packages',
            query: updatedQuery
        }, { skipNull: true });

        router.push(url);
    }, [label, params, router]);

  return ( 
    <div
        onClick={handleClick} 
        className={`${className} flex flex-col items-center gap-3`}
    >
        <Icon size={26} />
        <div className='font-medium'>
            {label}
        </div>
    </div>
  )
}

export default CategoryBox;