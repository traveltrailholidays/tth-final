'use client';

import React, { FC, ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
};

const Section: FC<SectionProps> = ({ children, className }) => {
  return (
    <section
      className={`${className} flex justify-center py-3 px-3 md:px-4`}
    >
      {children}
    </section>
  )
}

export default Section;