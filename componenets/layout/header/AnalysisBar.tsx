import { BriefcaseIcon, BuildingLibraryIcon, UsersIcon } from '@heroicons/react/24/outline'
import React from 'react'

const AnalysisBar = () => {
    return (
        <div className='py-4 flex items-center justify-between w-[300px] md:w-[450px] m-auto gap-2'>
            <div className='text-background-white flex items-start gap-2 '>
                <div className=' bg-primary-green flex items-center justify-center p-1 rounded-full'>
                    <BriefcaseIcon className='text-background-white w-[20px]' />
                </div>
                <div>
                    <p className='font-bold text-md'>25500</p>
                    <span className='capitalize text-sm text-placeholder-gray'>jobs</span>
                </div>
            </div>
            <div className='text-background-white flex items-start gap-2 '>
                <div className=' bg-primary-green flex items-center justify-center p-1 rounded-full'>
                    <UsersIcon className='text-background-white w-[20px]' />
                </div>
                <div>
                    <p className='font-bold text-md'>25500</p>
                    <span className='capitalize text-sm text-placeholder-gray'>candidants</span>
                </div>
            </div>
            <div className='text-background-white flex items-start gap-2 '>
                <div className=' bg-primary-green flex items-center justify-center p-1 rounded-full'>
                    <BuildingLibraryIcon className='text-background-white w-[20px]' />
                </div>
                <div>
                    <p className='font-bold text-md'>25500</p>
                    <span className='capitalize text-sm text-placeholder-gray'>companys</span>
                </div>
            </div>
        </div>
    )
}

export default AnalysisBar
