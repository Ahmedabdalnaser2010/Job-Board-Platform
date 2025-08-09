import Link from 'next/link'
import React, { useContext } from 'react'
import JobCard from './JobCard'
import { TDetailedJobData } from '@/interfaces'
import { ApiContext } from '@/context/apiContext'
import Loading from '../layout/Loading'

const AvailableJobsSection = () => {


    const { jobData } = useContext(ApiContext)



    const displayedJobs = jobData.slice(0, 8)

    return (
        <div className='flex flex-col '>
            <section className=' flex items-end justify-between flex-wrap'>
                <div className='capitalize'>
                    <h2 className='text-2xl font-bold p-2 '>recent available jobs</h2>
                    <p className='text-xs p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <Link href={"/jobs"} className='px-2 md:mx-0 mx-auto text-primary-green border-b-2 cursor-pointer'>view all</Link>

            </section>
            <section className='py-12 self-center w-full grid grid-cols-1 gap-14'>


                {displayedJobs.length > 0 ? displayedJobs.map((job: TDetailedJobData) => (

                    <div key={job.id}>
                        <JobCard
                            publishingtime={job.posting_date}
                            employerLogo={job.company_logo}
                            jobTitle={job.job_title}
                            companyName={job.company_name}
                            employmentType={job.job_type}
                            country={job.company_location.country}
                            city={job.company_location.city}
                            maxSalary={job.salary_range.max}
                            minSalary={job.salary_range.min}
                            currency={job.salary_range.currency}
                            category={job.job_category}
                            experience={job.experience_level}
                            jobID={job.id}
                            submitTitle="job details"
                        />
                    </div>

                )) : <Loading />}

            </section>
        </div>
    )
}

export default AvailableJobsSection
