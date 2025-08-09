import React from 'react'
import AvailableJobsSection from './AvailableJobsSection'
import JobCategories from '../jobCategories/JobCategories'
import HeroSection from '../layout/header/HeroSection'




const HomeBody = () => {



    return (
        <div >
            <HeroSection />
            <div className='2xl:w-[1440px] mx-auto mt-4 p-6'>
                <AvailableJobsSection />
                <JobCategories />
            </div>
        </div>
    )
}

export default HomeBody
