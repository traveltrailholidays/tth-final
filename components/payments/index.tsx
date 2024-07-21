import Image from 'next/image';
import React from 'react'
import Section from '../features/Section';
import Container from '../features/Container';
import PaymentsAccordion from './payment-accordion';
import { FaPhoneAlt } from 'react-icons/fa';

const PaymentsSection = () => {
    return (
        <Section className="mt-16 !p-0 flex flex-col items-center">
            <div
                className={`w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] relative`}
            >
                <Image
                    src="/payments.jpg"
                    width={4240}
                    height={2832}
                    alt="hero_bg"
                    priority
                    quality={100}
                    className="w-[100vw] h-full object-cover select-none"
                />
                <div className="absolute w-full h-full bg-black top-0 opacity-60 flex justify-center items-center"></div>
                <div className="absolute w-full h-full top-0 flex flex-col gap-10 justify-center items-center">
                    <span
                        className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white transition font-semibold`}
                    >
                        Payments
                    </span>
                </div>
            </div>
            <Container className={`px-3 md:px-5 w-[99%] mt-24`}>
                <div className={`flex justify-between flex-col md:flex-row gap-10`}>
                    <div className={`w-full`}>
                        <div>
                            <span className={`font-semibold text-lg`}>
                                Select the desired payment option
                            </span>
                        </div>
                        <div className="mt-5">
                            <PaymentsAccordion />
                        </div>
                    </div>

                    <div
                        className={`rounded-md bg-custom-shl dark:bg-custom-phd p-10 max-w-[450px] w-full max-h-[400px]`}
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
                </div>

                <div
                    className={`text-custom-clp w-full flex justify-center py-20 px-2 text-center`}
                >
                    <div>
                        Please kindly provide a screenshot confirming your successful
                        payment. Your cooperation is greatly appreciated.
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default PaymentsSection;