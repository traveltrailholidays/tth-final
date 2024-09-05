'use client';

import React, { useCallback, useMemo } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import Section from '@/components/features/Section';
import Container from '@/components/features/Container';

interface ItineraryFormValues {
    itineraryTitle: string;
    totalDays: number;
    totalNights: number;
    clientName: string;
}

const CreateItinerary = () => {
    const {
        register,
        control,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<ItineraryFormValues>({
        defaultValues: {
            itineraryTitle: '',
            totalDays: 1,
            totalNights: 0,
            clientName: '',
        },
    });

    const handleDaysChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const numDays = Math.max(1, parseInt(e.target.value) || 1);
        const totalNights = watch('totalNights');
    }, []);

    return (
        <Section>
            <Container className="mt-28 mb-20 shadow-all-side dark:shadow-gray-800 w-full rounded py-5 px-5 flex flex-col gap-10">
                <h1 className="text-3xl font-semibold">Create a itinerary</h1>
                <div className="flex flex-col gap-3">
                    <input
                        {...register('itineraryTitle', {
                            required: 'Itinerary title is required',
                        })}
                        placeholder="Itinerary's title"
                        className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded"
                    />
                    {errors.itineraryTitle && <span className="text-custom-clp">{errors.itineraryTitle.message}</span>}
                </div>
                <div className="flex flex-col gap-3 relative">
                    <input
                        type="number"
                        {...register('totalDays', { valueAsNumber: true, min: 1 })}
                        onChange={handleDaysChange}
                        placeholder="Days"
                        className="border-neutral-200 dark:border-gray-800 border-2 pl-[70px] pr-2 py-3 rounded "
                    />
                    <div className="absolute top-1/2 -translate-y-1/2 left-3">Days :</div>
                </div>
                <div className="flex flex-col gap-3 relative">
                    <input
                        type="number"
                        {...register('totalNights', { valueAsNumber: true })}
                        value={watch('totalNights')}
                        readOnly
                        className="border-neutral-200 dark:border-gray-800 border-2 pl-20 pr-2 py-3 rounded "
                    />
                    <div className="absolute top-1/2 -translate-y-1/2 left-3">Nights :</div>
                </div>
                <div className="flex flex-col gap-3">
                    <input
                        {...register('clientName', {
                            required: 'Client name is required',
                        })}
                        placeholder="Client's name"
                        className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded"
                    />
                    {errors.clientName && <span className="text-custom-clp">{errors.clientName.message}</span>}
                </div>
            </Container>
        </Section>
    );
};

export default CreateItinerary;
