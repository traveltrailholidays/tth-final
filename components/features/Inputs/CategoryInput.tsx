'use client';

import React, { FC } from 'react';
import { IconType } from 'react-icons';

interface CategoryInputProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
};

const CategoryInput: FC<CategoryInputProps> = ({ icon: Icon, label, selected, onClick }) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`w-[170px] rounded-xl border-2 p-4 flex flex-col gap-3 hover:border-custom-clp dark:hover:border-custom-clp transition cursor-pointer ${selected ? 'border-custom-clp' : 'border-neutral-200 dark:border-gray-800'}`}
    >
      <Icon size={30}/>
      <div className='font-semibold'>
        {label}
      </div>
    </div>
  )
}

export default CategoryInput;