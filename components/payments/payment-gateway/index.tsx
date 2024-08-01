'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function PaymentGateway({ amount }: any) {

    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const initiatePayment = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: amount,
                    callbackUrl: `${window.location.origin}/payment-callback`,
                }),
            });

            const data = await response.json();

            if (data.url) {
                router.push(data.url);
            } else {
                console.error('Payment initiation failed:', data.error);
                alert('Payment initiation failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };



    return (
        <Accordion type="single" collapsible className="w-full">
            <div className={`flex flex-col gap-5`}>
                <AccordionItem value="item-1" className={`border-none`}>
                    <AccordionTrigger className={`hover:no-underline bg-custom-shl dark:bg-custom-phd px-5 rounded-md`}>
                        Payment Gateway
                    </AccordionTrigger>
                    <AccordionContent>
                        <button
                            onClick={initiatePayment}
                            disabled={isLoading}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            {isLoading ? 'Processing...' : `Pay ₹${amount} with PhonePe`}
                        </button>
                    </AccordionContent>
                </AccordionItem>
            </div>
        </Accordion>
    )
}
