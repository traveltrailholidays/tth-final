import React from 'react';
import { Noto_Sans } from 'next/font/google';
import Logo from '@/components/features/Logo';
import { FaPhoneAlt } from 'react-icons/fa';

const notoSans = Noto_Sans({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const ViewItinerary = () => {
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
                        <div className=''>
                            <div>
                                <span className={`font-semibold text-xs`}>Call Us</span>
                            </div>
                            <div>
                                <span className={`font-semibold text-sm`}>+91 9625992025</span>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default ViewItinerary;
