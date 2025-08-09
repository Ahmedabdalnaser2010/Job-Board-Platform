import { TDetailedJobData } from '@/interfaces'
import JobCard from '../articleBody/JobCard'
import SortButton from './SortButton'

const AllJobs = ({ selectedJobs }: { selectedJobs: TDetailedJobData[] }) => {


    return (
        <div className='flex flex-col items-end justify-between'>
            <SortButton />
            <section className=' self-center w-full grid grid-cols-1 gap-14 m-auto md:m-0 h-[600px] overflow-y-scroll px-3 '>

                {selectedJobs.map((job: TDetailedJobData) => (

                    <JobCard
                        key={job.id}
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

                ))}
            </section>
        </div>
    )
}

export default AllJobs
