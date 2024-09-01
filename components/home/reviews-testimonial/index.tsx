import Container from '@/components/features/Container';
import Section from '@/components/features/Section';
import React from 'react';
import ReviewsCarousel from './reviews-carousel';

const ReviewsAndTestimonial = () => {
  return (
    <Section>
        <Container className='w-full flex flex-col gap-10 my-10'>
            <div className=''>
                <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-bold flex flex-row gap-2 text-gray-900 dark:text-gray-50'>
                    Reviews & Testimonials
                </h1>
                <h2 className='ml-[2px] mt-2 text-gray-800 dark:text-gray-50'>
                    From Happy, Delighted Trips, Check out what they have to say
                </h2>
            </div>
            <ReviewsCarousel />
        </Container>
    </Section>
  )
}

export default ReviewsAndTestimonial;