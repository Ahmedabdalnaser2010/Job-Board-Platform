import React, { ReactNode } from 'react'

const JobsHeader = ({ headTitle }: { headTitle: ReactNode }) => {
    return (
        <div className='min-h-[60px] flex flex-col justify-evenly items-center gap-1 bg-background-main sticky top-[104px] z-40'>
            <span className='text-3xl font-bold text-background-white capitalize'>{headTitle}</span>

        </div>
    )
}

export default JobsHeader
