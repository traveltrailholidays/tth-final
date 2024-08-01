'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PaymentForm from "./payment-form";


export default function PaymentGateway({ amount }: any) {

    
    return (
        <Accordion type="single" collapsible className="w-full">
            <div className={`flex flex-col gap-5`}>
                <AccordionItem value="item-1" className={`border-none`}>
                    <AccordionTrigger className={`hover:no-underline bg-custom-shl dark:bg-custom-phd px-5 rounded-md`}>
                        Payment Gateway
                    </AccordionTrigger>
                    <AccordionContent>
                        <PaymentForm />
                    </AccordionContent>
                </AccordionItem>
            </div>
        </Accordion>
    )
}
