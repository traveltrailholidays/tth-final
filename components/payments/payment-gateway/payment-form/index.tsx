import React from 'react';

const PaymentForm = () => {
    return (
        <div className="mt-2 border-[0.125rem] rounded-md border-border">
            <div className={`p-12`}>
                <div className={`text-custom-clp font-semibold text-[18px]`}>
                    <span>Fill the below details and proceed for the payment:</span>
                </div>
                <div className={`text-[17px] mt-5 flex flex-col gap-2`}>
                    <input type="text" className='border rounded p-3 focus:outline-none' placeholder='Amount' />
                    <input type="text" className='border rounded p-3 focus:outline-none' placeholder='Name' />
                    <input type="text" className='border rounded p-3 focus:outline-none' placeholder='Email' />
                    <input type="text" className='border rounded p-3 focus:outline-none' placeholder='Phone No' />
                    <textarea className='border rounded p-3 focus:outline-none min-h-[140px] resize-none' placeholder='Payment Details' />
                    <button className='py-3 px-5 w-fit bg-custom-clp rounded font-semibold'>
                        Pay Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PaymentForm;