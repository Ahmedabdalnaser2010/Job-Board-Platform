
import AllJobs from '@/componenets/jobsPage/AllJobs'
import FilterNavBar from '@/componenets/jobsPage/FilterNavBar'
import JobsHeader from '@/componenets/jobsPage/JobsHeader'
import { FilterContext } from '@/context/filteredJobsContext'
import React, { useContext } from 'react'

const Index = () => {

    const { finalFetchedData } = useContext(FilterContext)

    return (



        <div>
            <JobsHeader headTitle={"jobs"} />

            <section className='mt-6 p-6 2xl:w-[1440px] m-auto  min-h-[600px] flex md:flex-row flex-col items-center justify-center md:justify-between md:items-start  gap-2  '>


                <FilterNavBar />
                <AllJobs selectedJobs={finalFetchedData} />


            </section>
        </div>



    )
}

export default Index
