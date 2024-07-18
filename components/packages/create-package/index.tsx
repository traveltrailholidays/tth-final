'use client';

import Container from '@/components/features/Container';
import Section from '@/components/features/Section';
import React, { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form';
import { categories } from '@/frontend/data/categories';
import CategoryInput from '@/components/features/Inputs/CategoryInput';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import ImageUpload from '@/components/features/Inputs/ImageUpload';

const CreatePackage = () => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            category: "",
            location: "",
            title: "",
            description: "",
            imageSrc: "",
            price: 1,
            days: 1,
            nights: 0,
            rating: 5,
            discount: 0,
            itinary: Array(1).fill("") // Start with one empty string for the itinary
        }
    });

    const imageSrc = watch('imageSrc');

    const onSubmit = (data: any) => {
        console.log(data);
        axios.post('/api/packages', data)
            .then(() => {
                toast.success('Package created');
                router.refresh();
                reset();
            })
            .catch(() => {
                toast.error('Something went wrong');
            })
            .finally(() => {
                setIsLoading(false);
            })
    };

    const handleDaysChange = (e: any) => {
        const numDays = parseInt(e.target.value) || 1; // Ensure we have at least 1 day
        const numNights = numDays - 1; // Calculate nights as one less than days

        const currentitinary = watch("itinary");
        const newitinary = Array(numDays).fill("").map((_, index) => currentitinary[index] || "");

        setValue("days", numDays); // Update days value
        setValue("nights", numNights); // Update nights value
        setValue("itinary", newitinary); // Update itinary array
    };

    const category = watch('category');
    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true
        })
    }

    return (
        <Section className=''>
            <Container className='mt-28 mb-20 shadow-all-side dark:shadow-gray-800 w-full rounded py-5 px-5 flex flex-col gap-10'>
                <h1 className='text-3xl font-semibold'>
                    Create a package
                </h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col gap-8'
                >
                    <div>
                        <h1 className='text-xl ml-1'>
                            Select the category
                        </h1>
                        <div className='flex mt-4 gap-5 flex-wrap'>
                            {categories.map((item) => (
                                <div
                                    key={item.label}
                                    className=''
                                >
                                    <CategoryInput
                                        onClick={(category) => setCustomValue('category', category)}
                                        selected={category === item.label}
                                        label={item.label}
                                        icon={item.icon}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <input
                            {...register("title", { required: true })}
                            placeholder='Title'
                            className='border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded '
                        />
                        {errors.title && <span>Title is required</span>}
                    </div>
                    <div className='flex flex-col gap-3'>
                        <textarea
                            {...register("description", { required: true })}
                            placeholder='Description'
                            className='border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded min-h-20'
                        />
                        {errors.description && <span>Description is required</span>}
                    </div>
                    <div className='flex flex-col gap-3'>
                        <input
                            {...register("location", { required: true })}
                            placeholder='Location'
                            className='border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded '
                        />
                        {errors.location && <span>Location is required</span>}
                    </div>
                    <div className='flex flex-col gap-3'>
                        <ImageUpload 
                            value={imageSrc}
                            onChange={(value) => setCustomValue('imageSrc', value)}
                        />
                    </div>
                    <div className='flex flex-col gap-3 relative'>
                        <input
                            type="number"
                            {...register("price", { valueAsNumber: true })}
                            placeholder='Price'
                            required
                            className='border-neutral-200 dark:border-gray-800 border-2 pl-[70px] pr-2 py-3 rounded '
                        />
                        <div className='absolute top-1/2 -translate-y-1/2 left-3'>
                            Price :
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 relative'>
                        <input
                            type="number"
                            {...register("days", { valueAsNumber: true })} onChange={handleDaysChange}
                            placeholder='Days'
                            className='border-neutral-200 dark:border-gray-800 border-2 pl-[70px] pr-2 py-3 rounded '
                        />
                        <div className='absolute top-1/2 -translate-y-1/2 left-3'>
                            Days :
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 relative'>
                        <input
                            type="number"
                            {...register("nights", { valueAsNumber: true })}
                            value={watch("nights")}
                            readOnly
                            className='border-neutral-200 dark:border-gray-800 border-2 pl-20 pr-2 py-3 rounded '
                        />
                        <div className='absolute top-1/2 -translate-y-1/2 left-3'>
                            Nights :
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 relative'>
                        <input
                            type="number"
                            step="0.1"
                            {...register("rating", { valueAsNumber: true })}
                            placeholder='Rating'
                            className='border-neutral-200 dark:border-gray-800 border-2 pl-20 pr-2 py-3 rounded '
                        />
                        <div className='absolute top-1/2 -translate-y-1/2 left-3'>
                            Rating :
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 relative'>
                        <input
                            type="number"
                            {...register("discount", { valueAsNumber: true })}
                            placeholder='Discount'
                            className='border-neutral-200 dark:border-gray-800 border-2 pl-[100px] pr-2 py-3 rounded '
                        />
                        <div className='absolute top-1/2 -translate-y-1/2 left-3'>
                            Discount :
                        </div>
                    </div>
                    <ul className='flex flex-col gap-8'>
                        {watch("itinary", []).map((item: any, index: any) => (
                            <li key={index}>
                                <textarea
                                    {...register(`itinary.${index}`, { required: true })}
                                    defaultValue={item}
                                    placeholder={`Day ${index + 1}`}
                                    className='border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded w-full'
                                />
                                {errors.itinary && <span>Day {index + 1} is required</span>}
                            </li>
                        ))}
                    </ul>
                    <button
                        type="submit"
                        className='py-2 bg-custom-clp rounded font-medium text-white hover:bg-custom-clp/80'
                    >
                        Submit
                    </button>
                </form>
            </Container>
        </Section>
    )
}

export default CreatePackage;
