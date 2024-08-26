"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaHotel } from "react-icons/fa6";
import { PiCarProfileBold } from "react-icons/pi";
import { format, parseISO } from 'date-fns';

const ViewVoucher = () => {
  const [voucherData, setVoucherData] = useState<any>(null);
  const [showPrintButton, setShowPrintButton] = useState(true);

  const formattedDate = (dateString:any) => format(parseISO(dateString), 'dd-MM-yyyy');

  useEffect(() => {
    // Fetch query parameters from URL
    const queryParams = new URLSearchParams(window.location.search);
    const itinary = JSON.parse(queryParams.get("itinary") || "[]");
    
    setVoucherData({
      clientName: queryParams.get("clientName"),
      bookingId: queryParams.get("bookingId"),
      hotelNo: parseInt(queryParams.get("hotelNo") || "1"),
      adultNo: parseInt(queryParams.get("adultNo") || "1"),
      childrenNo: parseInt(queryParams.get("childrenNo") || "0"),
      itinary,
      cabDetails: queryParams.get("cabDetails"),
    });
  }, []);

  const handlePrint = () => {
    setShowPrintButton(false);
    setTimeout(() => window.print(), 0);
    setTimeout(() => setShowPrintButton(true), 2000);
  };

  if (!voucherData) return <div>Loading...</div>;

  return (
    <div className="w-full flex justify-center items-center">
      <div className={`w-[894px]`}>
        <div className="bg-teal-300 px-5 py-7">
          <header className="flex justify-center items-center gap-2">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={42}
              height={42}
              quality={100}
            />
            <span className="text-2xl font-semibold">Travel Trail Holidays</span>
          </header>
          <div className="text-[18px] mt-4">
            <div className="flex gap-2 font-medium">
              Dear
              <span className="font-semibold">{voucherData.clientName},</span>
            </div>
            <div className="mt-1 font-medium">
            Thank you for choosing Travel Trail Holidays as your travel partner, we will make sure that your upcoming trip will be perfect and unforgettable, the details of your upcoming trip are as follows.
            </div>
            <div className="mt-1 font-bold text-blue-700">
              Your booking is confirmed
            </div>
            <div className="mt-1 font-semibold flex items-center gap-2">
              <span>Booking ID:</span>
              <span>{voucherData.bookingId}</span>
            </div>
            <div className="mt-1 font-medium flex items-center gap-2">
              <span>{voucherData.adultNo} Adult,</span>
              <span>{voucherData.childrenNo} children</span>
            </div>
          </div>
        </div>
        <div className="px-5 py-7">
          <h1 className="font-bold text-3xl">Hotel Summary</h1>
          {voucherData.itinary.map((item: any, index: number) => (
            <div key={index} className="mt-7">
              <div className="flex gap-10 items-center p-5">
                <FaHotel size={100} color="#FACC15" className=""/>
                <div className="flex flex-col gap-1">
                  <h1 className="text-2xl font-bold">{item.hotelName}</h1>
                  <div className="flex gap-12 items-center text-xl">
                    <span>{item.nights}N</span>
                    <span>{formattedDate(item.fromDate)}</span>
                    <span>{formattedDate(item.toDate)}</span>
                  </div>
                  <p className="text-xl w-[600px]">{item.description}</p>
                </div>
              </div>
              <div className="h-[1px] bg-gray-400 w-full mt-3"></div>
            </div>
          ))}
          <div className="mt-7">
            <div className="flex gap-10 items-center p-5">
              <PiCarProfileBold size={100} color="#FACC15" />
              <h1 className="text-2xl font-bold">{voucherData.cabDetails}</h1>
            </div>
            <div className="h-[1px] bg-gray-400 w-full mt-3"></div>
          </div>
        </div>
        <div className="px-5 py-7">
          <h1 className="font-bold text-3xl">Important Information</h1>
          <ul className="list-disc px-10 text-[18px] font-medium">
            <li className="mt-3">
              Each guest must carry a valid ID proof (Aadhaar Card, Driving
              License or Passport) PAN card will not be accepted.
            </li>
            <li>
              Checkin will be done at 1 pm and checkout will be done at 11am.
              This may change as per hotel policy.
            </li>
            <li>
              Early checkin and late checkout is subject to availability and as
              per hotel policy.
            </li>
            <li>Travel Trail Holidays Support: +91 9953276022, +91 7838088761</li>
          </ul>
        </div>
        {showPrintButton && (
          <div onClick={handlePrint} className="py-2 bg-custom-clp rounded font-medium text-white hover:bg-custom-clp/80 text-center my-20 cursor-pointer">
            Print
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewVoucher;
