'use client';

import React, { useCallback } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import Section from '@/components/features/Section';
import Container from '@/components/features/Container';

interface ItineraryFormValues {
    clientName: string;
    packageTitle: string;
    numberOfDays: number;
    numberOfNights: number;
    numberOfHotels: number;
    numberOfInclusions: number;
    numberOfExclusions: number;
    tripAdvisorName: string;
    cabs: string;
    quotePrice: number;
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

const CreateItinerary: React.FC = () => {
    const {
        register,
        control,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<ItineraryFormValues>({
        defaultValues: {
            clientName: '',
            packageTitle: '',
            numberOfDays: 1,
            numberOfNights: 0,
            numberOfHotels: 1,
            numberOfInclusions: 1,
            numberOfExclusions: 1,
            tripAdvisorName: '',
            cabs: '',
            quotePrice: 0,
            days: [{ dayNumber: 1, summary: '', imageSrc: '', description: '' }],
            hotels: [{ placeName: '', placeDescription: '', hotelName: '', roomType: '', hotelDescription: '' }],
            inclusions: [{ value: '' }],
            exclusions: [{ value: '' }],
        },
    });

    const {
        fields: dayFields,
        append,
        remove,
    } = useFieldArray({
        control,
        name: 'days',
    });

    const {
        fields: hotelFields,
        append: appendHotel,
        remove: removeHotel,
    } = useFieldArray({
        control,
        name: 'hotels',
    });

    const {
        fields: inclusionFields,
        append: appendInclusion,
        remove: removeInclusion,
    } = useFieldArray({
        control,
        name: 'inclusions',
    });

    const {
        fields: exclusionFields,
        append: appendExclusion,
        remove: removeExclusion,
    } = useFieldArray({
        control,
        name: 'exclusions',
    });

    const onSubmit = (data: ItineraryFormValues) => {
        console.log(data);
        const queryParams = new URLSearchParams();

        queryParams.append('clientName', data.clientName);
        queryParams.append('packageTitle', data.packageTitle);
        queryParams.append('numberOfDays', data.numberOfDays.toString());
        queryParams.append('numberOfNights', data.numberOfNights.toString());
        queryParams.append('numberOfHotels', data.numberOfHotels.toString());
        queryParams.append('numberOfInclusions', data.numberOfInclusions.toString());
        queryParams.append('numberOfExclusions', data.numberOfExclusions.toString());
        queryParams.append('days', JSON.stringify(data.days));
        queryParams.append('hotels', JSON.stringify(data.hotels));
        queryParams.append('inclusions', JSON.stringify(data.inclusions));
        queryParams.append('exclusions', JSON.stringify(data.exclusions));
        queryParams.append('tripAdvisorName', data.tripAdvisorName);
        queryParams.append('cabs', data.cabs);
        queryParams.append('quotePrice', data.quotePrice.toString());

        window.open(`/itinerary/view-itinerary?${queryParams.toString()}`, '_blank');
    };

    const handleDaysChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const days = Math.max(1, parseInt(e.target.value) || 1);
            setValue('numberOfDays', days);
            setValue('numberOfNights', days - 1);
            const currentDays = watch('days');

            const newDays = Array(days)
                .fill(null)
                .map((_, index) => ({
                    ...(currentDays[index] || { dayNumber: index+1, summary: '', imageSrc: '', description: '' }),
                    
                })
            );
            setValue('days', newDays);
        },
        [setValue, watch]
    );

    const handleHotelsChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const hotels = Math.max(1, parseInt(e.target.value) || 1);
            setValue('numberOfHotels', hotels);

            const currentHotels = watch('hotels');
            const newHotels = Array(hotels)
                .fill(null)
                .map((_, index) => ({
                    ...(currentHotels[index] || {placeName: '', placeDescription: '', hotelName: '', roomType: '', hotelDescription: '', }),
                    
                })
            );
            setValue('hotels', newHotels);
        },
        [setValue, watch]
    );

    const handleInclusionsChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const inclusions = Math.max(1, parseInt(e.target.value) || 1);
            setValue('numberOfInclusions', inclusions);

            // Adjust inclusions array
            const currentInclusions = watch('inclusions');
            const newInclusion = Array(inclusions)
                .fill(null)
                .map((_, index) => ({
                    ...(currentInclusions[index] || { value: '' }),
                    
                })
            );
            setValue('inclusions', newInclusion);
        },
        [setValue, watch]
    );

    const handleExclusionsChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const exclusions = Math.max(1, parseInt(e.target.value) || 1);
            setValue('numberOfExclusions', exclusions);

            // Adjust exclusions array
            const currentExclusions = watch('exclusions');
            const newExclusion = Array(exclusions)
                .fill(null)
                .map((_, index) => ({
                    ...(currentExclusions[index] || { value: '' }),
                    
                })
            );
            setValue('exclusions', newExclusion);
        },
        [setValue, watch]
    );

    return (
        <Section className="">
            <Container className="mt-28 mb-20 shadow-all-side dark:shadow-gray-800 w-full rounded py-5 px-5 flex flex-col gap-10">
                <h1 className="text-3xl font-semibold">Create a Itinerary</h1>
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

                    <div className="flex gap-4 flex-wrap md:flex-nowrap">
                        <div className="flex flex-col gap-3 relative w-full">
                            <input
                                type="number"
                                {...register('numberOfDays', { valueAsNumber: true, min: 1 })}
                                onChange={handleDaysChange}
                                placeholder="Number of days"
                                className="border-neutral-200 dark:border-gray-800 border-2 pl-[110px] pr-2 py-3 rounded"
                            />
                            <div className="absolute top-1/2 -translate-y-1/2 left-3">Total Days :</div>
                        </div>
                        <div className="flex flex-col gap-3 relative w-full">
                            <input
                                type="number"
                                {...register('numberOfNights', { valueAsNumber: true, min: 0 })}
                                placeholder="Number of nights"
                                className="border-neutral-200 dark:border-gray-800 border-2 pl-[125px] pr-2 py-3 rounded"
                                readOnly
                            />
                            <div className="absolute top-1/2 -translate-y-1/2 left-3">Total Nights :</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 relative w-full">
                        <input
                            type="number"
                            {...register('numberOfHotels', { valueAsNumber: true, min: 1 })}
                            onChange={handleHotelsChange}
                            placeholder="Number of hotels"
                            className="border-neutral-200 dark:border-gray-800 border-2 pl-[125px] pr-2 py-3 rounded"
                        />
                        <div className="absolute top-1/2 -translate-y-1/2 left-3">Total Hotels :</div>
                    </div>

                    <div className="flex flex-col gap-3 relative w-full">
                        <input
                            type="number"
                            {...register('numberOfInclusions', { valueAsNumber: true, min: 1 })}
                            onChange={handleInclusionsChange}
                            placeholder="Number of inclusions"
                            className="border-neutral-200 dark:border-gray-800 border-2 pl-[155px] pr-2 py-3 rounded"
                        />
                        <div className="absolute top-1/2 -translate-y-1/2 left-3">No. of Inclusion :</div>
                    </div>

                    <div className="flex flex-col gap-3 relative w-full">
                        <input
                            type="number"
                            {...register('numberOfExclusions', { valueAsNumber: true, min: 1 })}
                            onChange={handleExclusionsChange}
                            placeholder="Number of exclusions"
                            className="border-neutral-200 dark:border-gray-800 border-2 pl-[155px] pr-2 py-3 rounded"
                        />
                        <div className="absolute top-1/2 -translate-y-1/2 left-3">No. of Exclusion :</div>
                    </div>

                    <input
                        {...register('tripAdvisorName', { required: 'Trip advisor name is required' })}
                        placeholder="Trip advisor's name"
                        className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded"
                    />
                    {errors.tripAdvisorName && <span className="text-red-500">{errors.tripAdvisorName.message}</span>}

                    <input
                        {...register('cabs', { required: 'Trip advisor name is required' })}
                        placeholder="Cab details"
                        className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded"
                    />
                    {errors.cabs && <span className="text-red-500">{errors.cabs.message}</span>}

                    <div className="flex flex-col gap-3 relative w-full">
                        <input
                            type="number"
                            {...register('quotePrice', { valueAsNumber: true, min: 0 })}
                            placeholder="Quote price"
                            className="border-neutral-200 dark:border-gray-800 border-2 pl-[125px] pr-2 py-3 rounded"
                        />
                        {errors.quotePrice && <span className="text-red-500">{errors.quotePrice.message}</span>}
                        <div className="absolute top-1/2 -translate-y-1/2 left-3">Quote Price :</div>
                    </div>

                    <h2 className="text-2xl font-semibold mt-4">Day Details</h2>
                    {dayFields.map((field, index) => (
                        <div key={field.id} className="flex flex-col gap-4 border-2 p-4 rounded">
                            <div className="flex flex-col gap-3 relative w-full">
                                <input
                                    {...register(`days.${index}.dayNumber` as const, { valueAsNumber: true })}
                                    placeholder="Day number"
                                    className="border-neutral-200 dark:border-gray-800 border-2 pl-[45px] pr-2 py-3 rounded"
                                    readOnly
                                />
                                <div className="absolute top-1/2 -translate-y-1/2 left-3">Day</div>
                            </div>
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
                        Generate Itinerary
                    </button>
                </form>
            </Container>
        </Section>
    );
};

export default React.memo(CreateItinerary);
