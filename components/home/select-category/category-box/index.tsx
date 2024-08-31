'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';
import { IconType } from 'react-icons';
import qs from 'query-string';
import Link from 'next/link';

interface CategoryBoxProps {
    icon: IconType;
    label: string;
    className?: string;
    selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ icon: Icon, label, className, selected }) => {
    const params = useSearchParams();

    const handleClick = React.useCallback(() => {
        const currentQuery = params ? qs.parse(params.toString()) : {};
        
        const updatedQuery: Record<string, string | undefined> = {
            ...currentQuery,
            category: params?.get('category') === label ? undefined : label
        };

        // Remove undefined values
        Object.keys(updatedQuery).forEach(key => 
            updatedQuery[key] === undefined && delete updatedQuery[key]
        );

        return qs.stringifyUrl({
            url: '/packages',
            query: updatedQuery
        }, { skipNull: true });
    }, [label, params]);

    return (
        <Link
            href={handleClick()}
            className={`flex flex-col items-center gap-3 ${className ?? ''} ${selected ? 'font-bold' : ''}`}
        >
            <Icon size={26} />
            <div className="font-medium">
                {label}
            </div>
        </Link>
    );
};

export default CategoryBox;