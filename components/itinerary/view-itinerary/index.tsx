'use client';

import React, { useCallback, useState } from 'react';
import { Noto_Sans } from 'next/font/google';
import Logo from '@/components/features/Logo';
import { FaPhoneAlt, FaRegArrowAltCircleRight } from 'react-icons/fa';
import { FaCheck, FaHotel } from 'react-icons/fa6';
import { RxCrossCircled } from 'react-icons/rx';
import Image from 'next/image';
import BulletPoints from './bullet-points';

const notoSans = Noto_Sans({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const ViewItinerary = () => {
    const [showPrintButton, setShowPrintButton] = useState(true);

    const handlePrint = useCallback(() => {
        setShowPrintButton(false);
        setTimeout(() => window.print(), 0);
        setTimeout(() => setShowPrintButton(true), 2000);
    }, []); 

    return (
        <div className={`w-full flex justify-center items-center ${notoSans.className}`}>
            <div className={`max-w-[894px] w-full`}>
                <header className="bg-slate-900 text-white w-full flex p-3 justify-between">
                    <Logo />
                    <div className={`flex items-center gap-2`}>
                        <div
                            className={`bg-custom-clp rounded-full w-10 h-10 flex justify-center items-center text-custom-txd`}
                        >
                            <FaPhoneAlt size={16} />
                        </div>
                        <div className="">
                            <div>
                                <span className={`font-semibold text-xs`}>Call Us</span>
                            </div>
                            <div>
                                <span className={`font-semibold text-sm`}>+91 9625992025</span>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="w-full flex flex-col gap-10">
                    <div className="bg-sky-50">
                        <div className="px-5 py-5 flex flex-col gap-1 w-full">
                            <span>Dear Client&apos;s Name,</span>
                            <span>Greeting from Travel Trail Holidays!🌍</span>
                            <span>
                                We&lsquo;re thrilled to present you with a selection of incredible holiday packages tailored
                                just for you by Travel Trail Holidays, one of the most trusted names in travel!✨
                            </span>
                            <div className="mt-10 flex flex-col gap-1">
                                <span className="font-semibold text-xl">Package Title</span>
                                <span className="font-semibold">6N/7D</span>
                            </div>
                        </div>
                    </div>
                    <div className="px-5">
                        <span className="text-3xl font-bold">Itinerary</span>
                        <div className="h-[2px] w-full bg-border mt-2"></div>
                        <div className="mt-7 flex flex-col gap-7">
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-semibold">Day 1:</span>
                                    <span className="text-xl">Day 1 detail</span>
                                </div>
                                <Image
                                    src={'/packageHeroBg.jpg'}
                                    alt=""
                                    width={1000}
                                    height={1000}
                                    className="w-full h-80 mt-2 object-fill"
                                />
                                <p className="mt-2">
                                    Wakeup in the morning post fresh breakfast check out from the hotel than move
                                    towards Guptkashi after reaching there complete your checking formalities take some
                                    rest spend your leisure time have Dinner and stay overnight .
                                </p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-semibold">Day 2:</span>
                                    <span className="text-xl">Day 2 detail</span>
                                </div>
                                <Image
                                    src={'/packageHeroBg.jpg'}
                                    alt=""
                                    width={1000}
                                    height={1000}
                                    className="w-full h-80 mt-2 object-fill"
                                />
                                <p className="mt-2">
                                    Wakeup in the morning post fresh breakfast check out from the hotel than move
                                    towards Guptkashi after reaching there complete your checking formalities take some
                                    rest spend your leisure time have Dinner and stay overnight .
                                </p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-semibold">Day 3:</span>
                                    <span className="text-xl">Day 3 detail</span>
                                </div>
                                <Image
                                    src={'/packageHeroBg.jpg'}
                                    alt=""
                                    width={1000}
                                    height={1000}
                                    className="w-full h-80 mt-2 object-fill"
                                />
                                <p className="mt-2">
                                    Wakeup in the morning post fresh breakfast check out from the hotel than move
                                    towards Guptkashi after reaching there complete your checking formalities take some
                                    rest spend your leisure time have Dinner and stay overnight .
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 py-5">
                        <span className="text-3xl font-bold">Hotel Summary</span>
                        <div className="h-[2px] w-full bg-border mt-2"></div>
                        <div className="mt-7 flex flex-col gap-7">
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-semibold">Place Name:</span>
                                    <span className="text-xl">1st night</span>
                                </div>
                                <div className="flex gap-10 items-center p-5">
                                    <FaHotel size={100} color="#FACC15" className="" />
                                    <div className="flex flex-col gap-1">
                                        <span className="text-custom-clp font-semibold text-lg">Hotel&apos;s Name</span>
                                        <span className="text-lg">Room Type: Delux</span>
                                        <span className="text-lg">Hotel&apos;s description</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-semibold">Place Name:</span>
                                    <span className="text-xl">2nd, 4th night</span>
                                </div>
                                <div className="flex gap-10 items-center p-5">
                                    <FaHotel size={100} color="#FACC15" className="" />
                                    <div className="flex flex-col gap-1">
                                        <span className="text-custom-clp font-semibold text-lg">Hotel&apos;s Name</span>
                                        <span className="text-lg">Room Type: Delux</span>
                                        <span className="text-lg">Hotel&apos;s description</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-semibold">Place Name:</span>
                                    <span className="text-xl">3rd night</span>
                                </div>
                                <div className="flex gap-10 items-center p-5">
                                    <FaHotel size={100} color="#FACC15" className="" />
                                    <div className="flex flex-col gap-1">
                                        <span className="text-custom-clp font-semibold text-lg">Hotel&apos;s Name</span>
                                        <span className="text-lg">Room Type: Delux</span>
                                        <span className="text-lg">Hotel&apos;s description</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-5">
                        <span className="text-3xl font-bold">Cabs</span>
                        <div className="h-[2px] w-full bg-border mt-2"></div>
                        <div className="mt-3">
                            <span className="text-lg">Dzire/Sudan</span>
                        </div>
                    </div>
                    <div className="px-5 flex gap-10">
                        <div className="w-1/2">
                            <span className="text-3xl font-bold">Inclusions</span>
                            <div className="h-[2px] w-full bg-border mt-2"></div>
                            <div className="mt-3 flex flex-col gap-2">
                                <div className="flex gap-2 items-center">
                                    <FaCheck color="#22C55E" size={20} />
                                    <span>Dzire/Sudan</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <FaCheck color="#22C55E" size={20} />
                                    <span>Dzire/Sudan</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <FaCheck color="#22C55E" size={20} />
                                    <span>Dzire/Sudan</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <span className="text-3xl font-bold">Exclusions</span>
                            <div className="h-[2px] w-full bg-border mt-2"></div>
                            <div className="mt-3 flex flex-col gap-2">
                                <div className="flex gap-2 items-center">
                                    <RxCrossCircled color="#EF4444" size={20} />
                                    <span>Dzire/Sudan</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <RxCrossCircled color="#EF4444" size={20} />
                                    <span>Dzire/Sudan</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 py-12 flex flex-col gap-5 font-medium text-lg">
                        <span>
                            In case you&lsquo;d want to customize this quote/ itinerary or if its price doesn&lsquo;t fit your
                            budget, then kindly let the agent know about it directly at 9953276022.
                        </span>
                        <span>
                            If you need further support, please reply to this email or call us on 1800 123 55555. Your
                            Trip Advisor is <span className="font-bold">Ashutosh Rai</span>.
                        </span>
                    </div>
                </div>
                <div className="px-5 py-7 bg-gray-100">
                    <div>
                        <div>
                            <span className="text-2xl font-bold">Payment Policy:</span>
                            <div className="h-[2px] w-full bg-gray-400 mt-2"></div>
                        </div>
                        <BulletPoints
                            icon={FaRegArrowAltCircleRight}
                            size={16}
                            color="#22C55E"
                            text="50% payment at the time of booking"
                        />
                        <BulletPoints
                            icon={FaRegArrowAltCircleRight}
                            size={16}
                            color="#22C55E"
                            text="Remaining payment Before 7 Days check in."
                        />
                    </div>
                    <div className="mt-10">
                        <div>
                            <span className="text-2xl font-bold">Cancellation Policy:</span>
                            <div className="h-[2px] w-full bg-gray-400 mt-2"></div>
                        </div>
                        <BulletPoints
                            icon={FaRegArrowAltCircleRight}
                            size={16}
                            color="#22C55E"
                            text="Before 30 Days from the date of commencement = 35% Cancellation Charges of Total Amount (Total trip cost)."
                        />
                        <BulletPoints
                            icon={FaRegArrowAltCircleRight}
                            size={16}
                            color="#22C55E"
                            text="Before 30-15 Days from the date of Commencement = 50% Cancellation Charges of Total Amount (Total trip cost)."
                        />
                        <BulletPoints
                            icon={FaRegArrowAltCircleRight}
                            size={16}
                            color="#22C55E"
                            text="Before 15 Days from the date of Commencement = 75% Cancellation Charges of Total Amount (Total trip cost )."
                        />
                        <BulletPoints
                            icon={FaRegArrowAltCircleRight}
                            size={16}
                            color="#22C55E"
                            text="Before 14 days or less from the date of Commencement = 100% Cancellation Charges will be applicable (Total trip cost)."
                        />
                        <BulletPoints
                            icon={FaRegArrowAltCircleRight}
                            size={16}
                            color="#22C55E"
                            text="In Case passenger is no show at the time of departure, 100% of tour cost shall be detected."
                        />
                        <BulletPoints
                            icon={FaRegArrowAltCircleRight}
                            size={16}
                            color="#22C55E"
                            text="Even If Trip is cancelled on the same day of date booking then (10% + GST) of the total trip cost will be deducted /applicable as cancellation Charges."
                        />
                    </div>
                    <div className="mt-10">
                        <div>
                            <span className="text-2xl font-bold">Terms & Condition:</span>
                            <div className="h-[2px] w-full bg-gray-400 mt-2"></div>
                        </div>
                        <BulletPoints
                            icon={FaRegArrowAltCircleRight}
                            size={16}
                            color="#22C55E"
                            text="In case of unavailability in the listed hotels, arrangement for an alternate accommodation will be made in a hotel of similar standard."
                        />
                        <BulletPoints
                            icon={FaRegArrowAltCircleRight}
                            size={16}
                            color="#22C55E"
                            text="The itinerary is fixed and cannot be modified. (Itinerary will be executed as per the route not as per the day plan) Transportation shall be provided as per the itinerary and will not be at disposal."
                        />
                        <BulletPoints
                            icon={FaRegArrowAltCircleRight}
                            size={16}
                            color="#22C55E"
                            text="In case your package needs to be cancelled due to any natural calamity, weather conditions etc. Travel Trail Holidays shall strive to give you the maximum possible refund subject to the agreement made with our trade partners/vendors."
                        />
                        <BulletPoints
                            icon={FaRegArrowAltCircleRight}
                            size={16}
                            color="#22C55E"
                            text="In case your package needs to be cancelled due to any natural calamity, weather conditions etc. Travel Trail Holidays shall strive to give you the maximum possible refund subject to the agreement made with our trade partners/vendors."
                        />
                    </div>
                </div>
                {showPrintButton && (
                    <div
                        onClick={handlePrint}
                        className="py-2 bg-custom-clp rounded font-medium text-white hover:bg-custom-clp/80 text-center my-20 cursor-pointer"
                    >
                        Print
                    </div>
                )}
            </div>
        </div>
    );
};

export default ViewItinerary;
