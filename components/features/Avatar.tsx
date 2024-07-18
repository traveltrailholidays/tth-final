'use client';

import Image from 'next/image';
import React, { FC } from 'react'

interface AvatarProps {
    src: string | null | undefined;
    className?: string;
}

const Avatar: FC<AvatarProps> = ({ src, className }) => {
    return (
        <Image
            src={src || `/avatar.png`}
            alt='profile'
            width={28}
            height={28}
            className={`${className} rounded-full`}
        />
    )
}

export default Avatar;