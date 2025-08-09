import { ClockIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import React from 'react'

const ContactInfo = () => {
    return (

        <div className='min-w-[320px] w-[50%] text-center md:text-start  flex flex-col md:justify-center justify-start items-start mb-5'>
            <h2 className='font-bold py-2 text-3xl  text-background-main'>You Will Grow, You Will Succeed. We Promise That</h2>
            <p className='text-sm leading-5 py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid sed alias placeat. Mollitia ab ullam esse.</p>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 align-items-center md:align-items-start justify-content-between w-full'>
                <div className='w-[200px] flex flex-col items-center md:items-start m-auto'>
                    <PhoneIcon className='w-[25px] py-2 text-primary-green' />
                    <h2 className='py-2 font-semibold'>call for inquiry</h2>
                    <span className='py-2 text-sm'>+20-123-456-789</span>
                </div>
                <div className='w-[200px] flex flex-col items-center md:items-start m-auto'>
                    <EnvelopeIcon className='w-[25px] py-2 text-primary-green' />
                    <h2 className='py-2 font-semibold'>send us email</h2>
                    <span className='py-2 text-sm normal-case'>ahmedabdalnaser2024@gmail.com</span>
                </div>
                <div className='w-[200px] flex flex-col items-center md:items-start m-auto'>
                    <ClockIcon className='w-[25px] py-2 text-primary-green' />
                    <h2 className='py-2 font-semibold'>opening hours</h2>
                    <span className='py-2 text-sm'>Mon - Fri: 10AM - 10PM </span>
                </div>
                <div className='w-[200px] flex flex-col items-center md:items-start m-auto'>
                    <MapPinIcon className='w-[25px] py-2 text-primary-green' />
                    <h2 className='py-2 font-semibold'>Office</h2>
                    <span className='py-2 text-sm'>Giza, Egypt, Africa</span>
                </div>
            </div>
        </div>

    )
}

export default ContactInfo
