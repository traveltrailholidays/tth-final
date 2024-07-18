"use client";

import { FaPhoneAlt } from "react-icons/fa";

const GetHelp = () => {
    return (

        <div
            className={`rounded-md bg-custom-shl dark:bg-custom-phd py-5 px-6 max-w-[450px] w-full`}
        >
            <div>
                <div className={`text-custom-clp font-semibold text-xl`}>
                    <span>Get Help</span>
                </div>
                <div className={`font-semibold text-3xl mt-3`}>
                    <span>Have Any Query ?</span>
                </div>
                <div className={`text-[15px] mt-5`}>
                    <div>
                        Need help with any payment related issue? Please feel free to
                        contact us!
                    </div>
                </div>
                <div className={`text-[15px] mt-5`}>
                    <div className={`flex items-center gap-5`}>
                        <div
                            className={`bg-custom-clp rounded-full w-16 h-16 flex justify-center items-center text-custom-txd`}
                        >
                            <FaPhoneAlt size={24} />
                        </div>
                        <div>
                            <div>
                                <span className={`font-semibold text-base`}>Call Us</span>
                            </div>
                            <div>
                                <span className={`font-semibold text-lg`}>
                                    +91 9625992025
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetHelp;