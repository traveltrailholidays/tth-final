'use client';

import React, { useCallback } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import Section from '@/components/features/Section';
import Container from '@/components/features/Container';

interface VoucherFormValues {
    clientName: string;
    packageTitle: string;
    numberOfDays: number;
    numberOfNights: number;
    numberOfHotels: number;
    numberOfInclusions: number;
    numberOfExclusions: number;
    tripAdvisorName: string;
    days: Array<{
        dayNumber: number;
        summary: string;
        imageSrc: string;
        description: string;
    }>;
    hotels: Array<{
        placeName: string;
        placeDescription: string;
        hotelName: string;
        roomType: string;
        hotelDescription: string;
    }>;
    inclusions: Array<{ value: string }>;
    exclusions: Array<{ value: string }>;
}

const CreateVoucher: React.FC = () => {
    const {
        register,
        control,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<VoucherFormValues>({
        defaultValues: {
            clientName: '',
            packageTitle: '',
            numberOfDays: 1,
            numberOfNights: 0,
            numberOfHotels: 1,
            numberOfInclusions: 1,
            numberOfExclusions: 1,
            tripAdvisorName: '',
            days: [{ dayNumber: 1, summary: '', imageSrc: '', description: '' }],
            hotels: [{ placeName: '', placeDescription: '', hotelName: '', roomType: '', hotelDescription: '' }],
            inclusions: [{ value: '' }],
            exclusions: [{ value: '' }],
        },
    });

    const { fields: dayFields, append: appendDay, remove: removeDay } = useFieldArray({
        control,
        name: 'days',
    });

    const { fields: hotelFields, append: appendHotel, remove: removeHotel } = useFieldArray({
        control,
        name: 'hotels',
    });

    const { fields: inclusionFields, append: appendInclusion, remove: removeInclusion } = useFieldArray({
        control,
        name: 'inclusions',
    });

    const { fields: exclusionFields, append: appendExclusion, remove: removeExclusion } = useFieldArray({
        control,
        name: 'exclusions',
    });

    const onSubmit = (data: VoucherFormValues) => {
        console.log(data);
        // Handle form submission
    };

    const handleDaysChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const days = Math.max(1, parseInt(e.target.value) || 1);
        setValue('numberOfDays', days);
        setValue('numberOfNights', days - 1);

        // Adjust days array
        const currentDays = watch('days');
        if (days > currentDays.length) {
            for (let i = currentDays.length + 1; i <= days; i++) {
                appendDay({ dayNumber: i, summary: '', imageSrc: '', description: '' });
            }
        } else if (days < currentDays.length) {
            for (let i = currentDays.length; i > days; i--) {
                removeDay(i - 1);
            }
        }
    }, [setValue, watch, appendDay, removeDay]);

    const handleHotelsChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const hotels = Math.max(1, parseInt(e.target.value) || 1);
        setValue('numberOfHotels', hotels);

        // Adjust hotels array
        const currentHotels = watch('hotels');
        if (hotels > currentHotels.length) {
            for (let i = currentHotels.length + 1; i <= hotels; i++) {
                appendHotel({ placeName: '', placeDescription: '', hotelName: '', roomType: '', hotelDescription: '' });
            }
        } else if (hotels < currentHotels.length) {
            for (let i = currentHotels.length; i > hotels; i--) {
                removeHotel(i - 1);
            }
        }
    }, [setValue, watch, appendHotel, removeHotel]);

    const handleInclusionsChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const inclusions = Math.max(1, parseInt(e.target.value) || 1);
        setValue('numberOfInclusions', inclusions);

        // Adjust inclusions array
        const currentInclusions = watch('inclusions');
        if (inclusions > currentInclusions.length) {
            for (let i = currentInclusions.length + 1; i <= inclusions; i++) {
                appendInclusion({ value: '' });
            }
        } else if (inclusions < currentInclusions.length) {
            for (let i = currentInclusions.length; i > inclusions; i--) {
                removeInclusion(i - 1);
            }
        }
    }, [setValue, watch, appendInclusion, removeInclusion]);

    const handleExclusionsChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const exclusions = Math.max(1, parseInt(e.target.value) || 1);
        setValue('numberOfExclusions', exclusions);

        // Adjust exclusions array
        const currentExclusions = watch('exclusions');
        if (exclusions > currentExclusions.length) {
            for (let i = currentExclusions.length + 1; i <= exclusions; i++) {
                appendExclusion({ value: '' });
            }
        } else if (exclusions < currentExclusions.length) {
            for (let i = currentExclusions.length; i > exclusions; i--) {
                removeExclusion(i - 1);
            }
        }
    }, [setValue, watch, appendExclusion, removeExclusion]);

    return (
        <Section className="">
            <Container className="mt-28 mb-20 shadow-all-side dark:shadow-gray-800 w-full rounded py-5 px-5 flex flex-col gap-10">
                <h1 className="text-3xl font-semibold">Create a voucher</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
                    <input
                        {...register('clientName', { required: 'Client name is required' })}
                        placeholder="Client's name"
                        className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded"
                    />
                    {errors.clientName && <span className="text-red-500">{errors.clientName.message}</span>}

                    <input
                        {...register('packageTitle', { required: 'Package title is required' })}
                        placeholder="Package title"
                        className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded"
                    />
                    {errors.packageTitle && <span className="text-red-500">{errors.packageTitle.message}</span>}

                    <div className="flex gap-4">
                        <input
                            type="number"
                            {...register('numberOfDays', { valueAsNumber: true, min: 1 })}
                            onChange={handleDaysChange}
                            placeholder="Number of days"
                            className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded flex-1"
                        />
                        <input
                            type="number"
                            {...register('numberOfNights', { valueAsNumber: true, min: 0 })}
                            placeholder="Number of nights"
                            className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded flex-1"
                            readOnly
                        />
                    </div>

                    <input
                        type="number"
                        {...register('numberOfHotels', { valueAsNumber: true, min: 1 })}
                        onChange={handleHotelsChange}
                        placeholder="Number of hotels"
                        className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded"
                    />

                    <input
                        type="number"
                        {...register('numberOfInclusions', { valueAsNumber: true, min: 1 })}
                        onChange={handleInclusionsChange}
                        placeholder="Number of inclusions"
                        className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded"
                    />

                    <input
                        type="number"
                        {...register('numberOfExclusions', { valueAsNumber: true, min: 1 })}
                        onChange={handleExclusionsChange}
                        placeholder="Number of exclusions"
                        className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded"
                    />

                    <input
                        {...register('tripAdvisorName', { required: 'Trip advisor name is required' })}
                        placeholder="Trip advisor's name"
                        className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded"
                    />
                    {errors.tripAdvisorName && <span className="text-red-500">{errors.tripAdvisorName.message}</span>}

                    <h2 className="text-2xl font-semibold mt-4">Day Details</h2>
                    {dayFields.map((field, index) => (
                        <div key={field.id} className="flex flex-col gap-4 border-2 p-4 rounded">
                            <input
                                {...register(`days.${index}.dayNumber` as const, { valueAsNumber: true })}
                                placeholder="Day number"
                                className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded"
                                readOnly
                            />
                            <input
                                {...register(`days.${index}.summary` as const)}
                                placeholder="Day summary"
                                className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded"
                            />
                            <input
                                {...register(`days.${index}.imageSrc` as const)}
                                placeholder="Image source link"
                                className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded"
                            />
                            <textarea
                                {...register(`days.${index}.description` as const)}
                                placeholder="Day description"
                                className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded"
                            />
                        </div>
                    ))}

                    <h2 className="text-2xl font-semibold mt-4">Hotel Details</h2>
                    {hotelFields.map((field, index) => (
                        <div key={field.id} className="flex flex-col gap-4 border-2 p-4 rounded">
                            <input
                                {...register(`hotels.${index}.placeName` as const)}
                                placeholder="Place name"
                                className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded"
                            />
                            <textarea
                                {...register(`hotels.${index}.placeDescription` as const)}
                                placeholder="Place description"
                                className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded"
                            />
                            <input
                                {...register(`hotels.${index}.hotelName` as const)}
                                placeholder="Hotel name"
                                className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded"
                            />
                            <input
                                {...register(`hotels.${index}.roomType` as const)}
                                placeholder="Room type"
                                className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded"
                            />
                            <textarea
                                {...register(`hotels.${index}.hotelDescription` as const)}
                                placeholder="Hotel description"
                                className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded"
                            />
                        </div>
                    ))}

                    <h2 className="text-2xl font-semibold mt-4">Inclusions</h2>
                    {inclusionFields.map((field, index) => (
                        <input
                            key={field.id}
                            {...register(`inclusions.${index}.value` as const)}
                            placeholder={`Inclusion ${index + 1}`}
                            className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded"
                        />
                    ))}

                    <h2 className="text-2xl font-semibold mt-4">Exclusions</h2>
                    {exclusionFields.map((field, index) => (
                        <input
                            key={field.id}
                            {...register(`exclusions.${index}.value` as const)}
                            placeholder={`Exclusion ${index + 1}`}
                            className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded"
                        />
                    ))}

                    <button
                        type="submit"
                        className="py-2 bg-custom-clp rounded font-medium text-white hover:bg-custom-clp/80"
                    >
                        Generate Voucher
                    </button>
                </form>
            </Container>
        </Section>
    );
};

export default React.memo(CreateVoucher);