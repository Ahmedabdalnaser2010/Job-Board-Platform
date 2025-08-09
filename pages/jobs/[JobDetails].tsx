import JobCard from "@/componenets/articleBody/JobCard"
import JobsHeader from "@/componenets/jobsPage/JobsHeader"
import { ApiContext } from "@/context/apiContext"
import { TDetailedJobData } from "@/interfaces"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"




const JobDetailes = () => {


    const route = useRouter()
    const { jobData } = useContext(ApiContext)
    const [selectedJob, setSelectedJob] = useState<TDetailedJobData | null>(null)
    const [similarJobs, setSimilarJobs] = useState<TDetailedJobData[]>([])







    useEffect(() => {

        const paramId = route.asPath.split("/").slice(-1)
        const selected = jobData.find((el: TDetailedJobData) => {
            return el.id == Number(paramId)
        })

        if (selected) {
            setSelectedJob(selected)
            const getSimilarJobs = jobData.filter((el: TDetailedJobData) =>
                el?.job_category == selected?.job_category && el.id !== selected?.id
            )
            setSimilarJobs(getSimilarJobs)
        }





    }, [jobData, route.asPath])



    console.log(selectedJob)
    console.log(similarJobs)





    // const getSelectedJob: TDetailedJobData[] = jobData.filter((el: TDetailedJobData) => {
    //     return el.id == Number(SelectedId?.param && Object.values(SelectedId?.param))
    // })



    console.log(selectedJob)
    console.log(similarJobs)

    return (
        <div >

            <JobsHeader headTitle={"job details"} />
            <section className='mt-4 p-6 2xl:w-[1440px] m-auto  min-h-[600px] flex flex-col items-center justify-center md:justify-between md:items-start gap-6 '>

                <JobCard
                    publishingtime={selectedJob?.posting_date}
                    employerLogo={selectedJob?.company_logo}
                    jobTitle={selectedJob?.job_title}
                    companyName={selectedJob?.company_name}
                    employmentType={selectedJob?.job_type}
                    country={selectedJob?.company_location.country}
                    city={selectedJob?.company_location.city}
                    maxSalary={selectedJob?.salary_range.max}
                    minSalary={selectedJob?.salary_range.min}
                    currency={selectedJob?.salary_range.currency}
                    category={selectedJob?.job_category}
                    experience={selectedJob?.experience_level}
                    jobID={selectedJob?.id}
                    submitTitle="apply job"
                />
                <div className=' mt-2 max-w-[600px] flex flex-col items-start gap-5'>

                    <div className='company capitalize ' >
                        <h1 className='font-bold py-2 text-xl'>about the company</h1>
                        <p className='text-xs leading-5'>{selectedJob?.company_description},Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae molestias sapiente perspiciatis rem consequatur veritatis quisquam adipisci, sed quae culpa enim nihil nulla tenetur beatae temporibus quidem ratione praesentium aliquid!</p>
                    </div>

                    <div className='description capitalize ' >
                        <h1 className='font-bold py-2 text-xl'>job Description</h1>
                        <p className='text-xs leading-5'>{selectedJob?.job_description},Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere itaque magnam reprehenderit odit incidunt est quasi debitis suscipit. Tempore velit fugit reprehenderit culpa quidem molestiae sint illum pariatur esse ratione?</p>
                    </div>

                    <div className='benifits capitalize ' >
                        <h1 className='font-bold py-2 text-xl'>benefits</h1>
                        <ul className=''>
                            {(selectedJob?.benefits ?? []).map((el, ind) => (
                                <li key={ind} className={`text-sm font-normal  list-inside`}>
                                    {el}
                                </li>
                            ))}
                        </ul>

                    </div>

                    <div className='responsibilties capitalize ' >
                        <h1 className='font-bold py-2 text-xl'>key responsibilties</h1>
                        <ul className=''>
                            {(selectedJob?.key_responsibilities ?? []).map((el, ind) => (
                                <li key={ind} className='text-sm font-normal list-inside'>
                                    {el}
                                </li>
                            ))}
                        </ul>

                    </div>
                    <div className='skills capitalize ' >
                        <h1 className='font-bold py-2 text-xl'>Required Skills</h1>
                        <div className='flex flex-wrap items-center gap-2'>
                            {(selectedJob?.required_skills ?? []).map((el, ind) => (
                                <span key={ind} className='text-sm font-normal bg-gray-100 p-3 rounded-xl'>
                                    {el}
                                </span>
                            ))}
                        </div>

                    </div>
                </div>


                <section>
                    <h1 className='font-bold py-2 text-xl'> Related Jobs</h1>

                    <div className='mt-4 grid grid-cols-1 lg:grid-cols-2 gap-5 content-center'>

                        {similarJobs.slice(0, 4).map((el: TDetailedJobData) => (

                            <JobCard
                                key={el.id}
                                publishingtime={el.posting_date}
                                employerLogo={el.company_logo}
                                jobTitle={el.job_title}
                                companyName={el.company_name}
                                employmentType={el.job_type}
                                country={el.company_location.country}
                                city={el.company_location.city}
                                maxSalary={el.salary_range.max}
                                minSalary={el.salary_range.min}
                                currency={el.salary_range.currency}
                                category={el.job_category}
                                experience={el.experience_level}
                                jobID={el.id}
                                submitTitle="job details"
                            />

                        ))}
                    </div>

                </section>


            </section>


        </div>
    )

}


export default JobDetailes