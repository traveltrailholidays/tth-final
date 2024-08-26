'use client';

import Container from '@/components/features/Container';
import Section from '@/components/features/Section';
import React, { useEffect, useRef, useState } from 'react';

import CategoryBox from './category-box';
import { usePathname, useSearchParams } from 'next/navigation';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { categories } from '@/frontend/data/categories';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const HomeSelectCategory = () => {

    const swiperRef = useRef<SwiperType | null>(null);

    const [cardsToShow, setCardsToShow] = useState<number>(5);
    const updateCardsToShow = () => {
        if (window.innerWidth < 300) {
            setCardsToShow(1);
        } else if (window.innerWidth < 600) {
            setCardsToShow(2);
        } else if (window.innerWidth < 900) {
            setCardsToShow(3);
        } else if (window.innerWidth < 1200) {
            setCardsToShow(4);
        } else {
            setCardsToShow(5);
        }
    };

    useEffect(() => {
        updateCardsToShow();
        window.addEventListener('resize', updateCardsToShow);
        return () => {
            window.removeEventListener('resize', updateCardsToShow);
        };
    }, []);

    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';

    if(!isMainPage) {
        return null;
    }

  return (
    <Section className='bg-custom-sbl dark:bg-custom-sbd'>
        <Container className='w-full flex flex-col gap-10 my-10'>
            <div>
                <h1 className='text-custom-clp text-sm font-semibold'>
                    Still undecided?
                </h1>
                <h1 className='font-semibold'>
                    Browse packages through holiday THEMES
                </h1>
            </div>
            <div className='flex items-center sm:flex-row justify-center  flex-wrap gap-5'>
                <Swiper
                    slidesPerView={cardsToShow}
                    spaceBetween={30}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    modules={[Navigation]}
                    className="custom-swiper"
                >
                    {categories.map((item, index) => (
                        <SwiperSlide key={index} className="flex-shrink-0 overflow-hidden rounded-lg">
                            <CategoryBox 
                                key={item.label}
                                label={item.label}
                                icon={item.icon}
                                selected={category === item.label}
                                className='border-2 hover:bg-border py-4 px-10 rounded-lg cursor-pointer w-[200px] transition duration-150'
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="flex justify-center gap-4">
                <button
                    className="p-3 transition-colors bg-gray-500 bg-opacity-70 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl duration-300 hover:bg-opacity-90"
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    <FiChevronLeft size={24} />
                </button>
                <button
                    className="p-3 transition-colors bg-gray-500 bg-opacity-70 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl duration-300 hover:bg-opacity-90"
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    <FiChevronRight size={24} />
                </button>
            </div>
        </Container>
    </Section>
  )
}

export default HomeSelectCategory;