"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Section from "@/components/features/Section";
import Container from "@/components/features/Container";

interface VoucherFormValues {
  clientName: string;
  bookingId: string;
  hotelNo: number;
  adultNo: number;
  childrenNo: number;
  totalNights: number;
  itinary: Array<{
    hotelName: string;
    nights: number;
    fromDate: string;
    toDate: string;
    description: string;
  }>;
  cabDetails: string;
}

const CreateVoucher = () => {
  const router = useRouter();

  function generateBookingId(length: number = 12): string {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<VoucherFormValues>({
    defaultValues: {
      clientName: "",
      totalNights: 1,
      bookingId: "",
      hotelNo: 1,
      adultNo: 1,
      childrenNo: 0,
      itinary: [
        { hotelName: "", nights: 1, fromDate: "", toDate: "", description: "" },
      ],
      cabDetails: "",
    },
  });

  const onSubmit = (data: VoucherFormValues) => {
    // Use the input booking ID if provided, otherwise generate a new one
    const bookingId = data.bookingId || generateBookingId();

    // Serialize form data to a query string format
    const queryParams = new URLSearchParams({
      clientName: data.clientName,
      bookingId: bookingId,
      hotelNo: data.hotelNo.toString(),
      adultNo: data.adultNo.toString(),
      childrenNo: data.childrenNo.toString(),
      itinary: JSON.stringify(data.itinary),
      cabDetails: data.cabDetails,
    }).toString();

    // Construct the URL for the view voucher page
    const url = `/voucher/view-voucher?${queryParams}`;

    // Open the URL in a new tab
    window.open(url, '_blank');
  };

  const handleHotelNoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numHotels = parseInt(e.target.value) || 1;
    const currentItinary = watch("itinary");
    const newItinary = Array(numHotels)
      .fill(null)
      .map(
        (_, index) =>
          currentItinary[index] || {
            hotelName: "",
            nights: 1,
            fromDate: "",
            toDate: "",
            description: "",
          }
      );

    setValue("hotelNo", numHotels);
    setValue("itinary", newItinary);
  };

  return (
    <Section className="">
      <Container className="mt-28 mb-20 shadow-all-side dark:shadow-gray-800 w-full rounded py-5 px-5 flex flex-col gap-10">
        <h1 className="text-3xl font-semibold">Create a voucher</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <input
              {...register("clientName", {
                required: "Client name is required",
              })}
              placeholder="Client's name"
              className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded"
            />
            {errors.clientName && (
              <span className="text-custom-clp">
                {errors.clientName.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <input
              {...register("bookingId")}
              placeholder="Booking ID (leave blank for auto-generation)"
              className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded"
            />
          </div>
          <div className="flex flex-col gap-3 relative">
            <input
              type="number"
              {...register("totalNights", { valueAsNumber: true, min: 1 })}
              placeholder="Total Nights"
              className="border-neutral-200 dark:border-gray-800 border-2 pl-[125px] pr-2 py-3 rounded"
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-3">
              Total Nights :
            </div>
          </div>
          <div className="flex flex-col gap-3 relative">
            <input
              type="number"
              {...register("hotelNo", { valueAsNumber: true, min: 1 })}
              onChange={handleHotelNoChange}
              placeholder="Hotel's No"
              className="border-neutral-200 dark:border-gray-800 border-2 pl-[110px] pr-2 py-3 rounded"
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-3">
              Hotel&apos;s No :
            </div>
          </div>
          <div className="flex flex-col gap-3 relative">
            <input
              type="number"
              {...register("adultNo", { valueAsNumber: true, min: 1 })}
              placeholder="Adults"
              className="border-neutral-200 dark:border-gray-800 border-2 pl-20 pr-2 py-3 rounded"
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-3">
              Adults :
            </div>
          </div>
          <div className="flex flex-col gap-3 relative">
            <input
              type="number"
              {...register("childrenNo", { valueAsNumber: true, min: 0 })}
              placeholder="Children"
              className="border-neutral-200 dark:border-gray-800 border-2 pl-[100px] pr-2 py-3 rounded"
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-3">
              Children :
            </div>
          </div>
          <ul className="flex flex-col gap-8">
            {watch("itinary", []).map((item, index) => (
              <li key={index} className="flex flex-col gap-2">
                <div className="flex flex-col gap-3">
                  <input
                    {...register(`itinary.${index}.hotelName` as const, {
                      required: "Hotel name is required",
                    })}
                    placeholder="Hotel's name"
                    className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded"
                  />
                  {errors.itinary?.[index]?.hotelName && (
                    <span className="text-custom-clp">
                      {errors.itinary[index]?.hotelName?.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-3 relative">
                  <input
                    type="number"
                    {...register(`itinary.${index}.nights` as const, {
                      valueAsNumber: true,
                      min: 1,
                    })}
                    placeholder="Nights"
                    className="border-neutral-200 dark:border-gray-800 border-2 pl-20 pr-2 py-3 rounded"
                  />
                  <div className="absolute top-1/2 -translate-y-1/2 left-3">
                    Nights :
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <input
                    type="date"
                    {...register(`itinary.${index}.fromDate` as const, {
                      required: "From Date is required",
                    })}
                    placeholder="From Date"
                    className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded"
                  />
                  {errors.itinary?.[index]?.fromDate && (
                    <span className="text-custom-clp">
                      {errors.itinary[index]?.fromDate?.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-3">
                  <input
                    type="date"
                    {...register(`itinary.${index}.toDate` as const, {
                      required: "To Date is required",
                    })}
                    placeholder="To Date"
                    className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded"
                  />
                  {errors.itinary?.[index]?.toDate && (
                    <span className="text-custom-clp">
                      {errors.itinary[index]?.toDate?.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-3">
                  <textarea
                    {...register(`itinary.${index}.description` as const, {
                      required: "Description is required",
                    })}
                    placeholder="Description"
                    className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded"
                  />
                  {errors.itinary?.[index]?.description && (
                    <span className="text-custom-clp">
                      {errors.itinary[index]?.description?.message}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3">
            <textarea
              {...register("cabDetails", {
                required: "Cab details are required",
              })}
              placeholder="Cab Details"
              className="border-neutral-200 dark:border-gray-800 border-2 px-2 py-3 rounded"
            />
            {errors.cabDetails && (
              <span className="text-custom-clp">
                {errors.cabDetails.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="py-2 bg-custom-clp rounded font-medium text-white hover:bg-custom-clp/80"
          >
            Generate PDF
          </button>
        </form>
      </Container>
    </Section>
  );
};

export default CreateVoucher;