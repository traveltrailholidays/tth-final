"use client";

import Container from "@/components/features/Container";
import Section from "@/components/features/Section";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { categories } from "@/frontend/data/categories";
import CategoryInput from "@/components/features/Inputs/CategoryInput";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import ImageUpload from "@/components/features/Inputs/ImageUpload";

const CreateVoucher = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
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
      rating: 1,
      discount: 0,
      itinary: Array(1).fill(""), // Start with one empty string for the itinary
    },
  });

  const imageSrc = watch("imageSrc");

  const onSubmit = (data: any) => {
    console.log(data);
    axios
      .post("/api/packages", data)
      .then(() => {
        toast.success("Package created");
        router.refresh();
        reset();
      })
      .catch(() => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleDaysChange = (e: any) => {
    const numDays = parseInt(e.target.value) || 1; // Ensure we have at least 1 day
    const numNights = numDays - 1; // Calculate nights as one less than days

    const currentitinary = watch("itinary");
    const newitinary = Array(numDays)
      .fill("")
      .map((_, index) => currentitinary[index] || "");

    setValue("days", numDays); // Update days value
    setValue("nights", numNights); // Update nights value
    setValue("itinary", newitinary); // Update itinary array
  };

  const category = watch("category");
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  return (
    <Section className="">
      <Container className="mt-28 mb-20 shadow-all-side dark:shadow-gray-800 w-full rounded py-5 px-5 flex flex-col gap-10">
        <h1 className="text-3xl font-semibold">Create a voucher</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <input
              {...register("title", { required: true })}
              placeholder="Client's name"
              className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded "
            />
            {errors.title && <span>Title is required</span>}
          </div>
          <div className="flex flex-col gap-3">
            <input
              {...register("title", { required: true })}
              placeholder="Booking ID"
              className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded "
            />
            {errors.title && <span>Title is required</span>}
          </div>

          <div className="flex flex-col gap-3 relative">
            <input
              type="number"
              {...register("days", { valueAsNumber: true })}
              onChange={handleDaysChange}
              placeholder="Hotel's No"
              className="border-neutral-200 dark:border-gray-800 border-2 pl-[110px] pr-2 py-3 rounded "
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-3">
              Hotel&apos;s No :
            </div>
          </div>

          <div className="flex flex-col gap-3 relative">
            <input
              type="number"
              {...register("rating", { valueAsNumber: true })}
              placeholder="Adults"
              className="border-neutral-200 dark:border-gray-800 border-2 pl-20 pr-2 py-3 rounded "
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-3">
              Adults :
            </div>
          </div>
          <div className="flex flex-col gap-3 relative">
            <input
              type="number"
              {...register("discount", { valueAsNumber: true })}
              placeholder="Discount"
              className="border-neutral-200 dark:border-gray-800 border-2 pl-[100px] pr-2 py-3 rounded "
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-3">
              Children :
            </div>
          </div>
          <ul className="flex flex-col gap-8">
            {watch("itinary", []).map((item: any, index: any) => (
              <li key={index} className="flex flex-col gap-2">
                <div className="flex flex-col gap-3">
                  <input
                    {...register("title", { required: true })}
                    placeholder="Hotel's name"
                    className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded "
                  />
                  {errors.title && <span>Title is required</span>}
                </div>
                <div className="flex flex-col gap-3 relative">
                  <input
                    type="number"
                    {...register("rating", { valueAsNumber: true })}
                    placeholder="Adults"
                    className="border-neutral-200 dark:border-gray-800 border-2 pl-20 pr-2 py-3 rounded "
                  />
                  <div className="absolute top-1/2 -translate-y-1/2 left-3">
                    Nights :
                  </div>
                </div>
                <textarea
                  {...register(`itinary.${index}`, { required: true })}
                  defaultValue={item}
                  placeholder={`Description`}
                  className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded w-full"
                />
                {errors.itinary && <span>Day {index + 1} is required</span>}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3">
            <input
              {...register("title", { required: true })}
              placeholder="Cab's Deatils"
              className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded "
            />
            {errors.title && <span>Title is required</span>}
          </div>
          <button
            type="submit"
            className="py-2 bg-custom-clp rounded font-medium text-white hover:bg-custom-clp/80"
          >
            Generate Pdf
          </button>
        </form>
      </Container>
    </Section>
  );
};

export default CreateVoucher;
