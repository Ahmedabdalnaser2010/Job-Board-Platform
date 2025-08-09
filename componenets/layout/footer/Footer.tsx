import { FilterContext } from '@/context/filteredJobsContext'
import { BriefcaseIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React, { useContext } from 'react'

const Footer = () => {

    const { filteredUniqueCategories } = useContext(FilterContext)

    return (
        <footer className='relative bottom-0  px-6 py-20 bg-background-main text-background-white capitalize '>
            <div className='2xl:w-[1440px] m-auto flex flex-col items-center gap-10 lg:items-start lg:justify-between lg:flex-row flex-wrap'>
                <div className='w-[300px] flex flex-col items-center lg:items-start gap-6 '>
                    <div className='flex flex-row items-end gap-2'>
                        <BriefcaseIcon className='w-[30px]' />
                        <span className='capitalize text-xl'>job</span>
                    </div>
                    <p className='text-center lg:text-start'>Quis enim pellentesque viverra tellus eget malesuada facilisis. Congue nibh vivamus aliquet nunc mauris dui nullam et.</p>
                </div>

                <div className='flex flex-col items-start gap-4'>
                    <h1 className='font-semibold text-xl'>company</h1>
                    <div className='flex flex-col items-center lg:items-start gap-2'>
                        <Link href={"/aboutUs"}>about us</Link>
                        <Link href={"/"}>our terms</Link>
                        <Link href={"/"}>partners</Link>
                        <Link href={"/"}>for candidates</Link>
                        <Link href={"/"}>for employers</Link>
                    </div>

                </div>
                <div className='flex flex-col items-start gap-4'>
                    <h1 className='font-semibold text-xl'>job categories</h1>
                    <div className='flex flex-col items-center lg:items-start gap-2'>
                        {
                            filteredUniqueCategories.map((e, index) => (
                                <Link className='hover:text-primary-green' href={`/${e}`} key={index}>{e}</Link>
                            ))
                        }

                        {/* <span>our terms</span>
                        <span>partners</span>
                        <span>for candidates</span>
                        <span>for employers</span> */}
                    </div>

                </div>
                <div className='flex flex-col items-center lg:items-start gap-4 w-[300px]'>
                    <h1 className='font-semibold text-xl'>newsletter</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <form className='flex flex-col items-center lg:items-start gap-4 w-full '>
                        <input type="text" placeholder='Email Address' className='w-full rounded-xl outline-none text-placeholder-gray border-2 border-placeholder-gray p-2' />
                        <button type='submit' className='w-full py-2 px-3 bg-primary-green rounded-xl'>subscribe now</button>

                    </form>

                </div>
            </div>

        </footer>
    )
}

export default Footer
