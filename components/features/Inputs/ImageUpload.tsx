'use client';

import React, { FC, useCallback } from 'react'
import { CldUploadWidget } from 'next-cloudinary';
import Image from "next/image";
import { TbPhotoPlus } from 'react-icons/tb';

declare global {
    var cloudinary: any;
};

interface ImageUploadProps {
    onChange: (value: string) => void;
    value: string;
};

const ImageUpload: FC<ImageUploadProps> = ({ onChange, value }) => {

    const handleUpload = useCallback((result: any) => {
        onChange(result.info.secure_url);
    }, [onChange]);

    console.log(value);
    

  return (
    <CldUploadWidget 
        onSuccess={handleUpload}
        uploadPreset="ovq3t427"
        options={{
            maxFiles: 1
        }}
    >
        {({ open }) => {
            return (
                <div
                    onClick={() => open?.()}
                    className='relative cursor-pointer hover:opacity-70 transition border-dashed border-[3px] p-20 border-neutral-200 dark:border-gray-800 flex flex-col justify-center items-center gap-4 text-neutral-600'
                >
                    <TbPhotoPlus size={50} className='text-neutral-400 dark:text-gray-600'/>
                    {value && (
                        <div className='absolute inset-0 w-full h-full '>
                            <Image
                                alt='Upload'
                                fill
                                style={{ objectFit: 'cover' }}
                                src={value}
                            />
                        </div>
                    )}
                </div>
            )
        }}
    </CldUploadWidget>   
  )
}

export default ImageUpload;