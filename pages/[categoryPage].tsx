import JobCard from "@/componenets/articleBody/JobCard"
import PageHeadTitle from "@/componenets/common/PageHeadTitle"
import JobsHeader from "@/componenets/jobsPage/JobsHeader"
import { ApiContext } from "@/context/apiContext"
import { TDetailedJobData } from "@/interfaces"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"

const CategoryPage = () => {

    const route = useRouter()
    const { jobData } = useContext(ApiContext)
    const [jobCategory, setJobCategory] = useState<TDetailedJobData[]>([])


    const currentCategory = route.query.categoryPage


    useEffect(() => {

        const JobsInSameCategory = jobData.filter((jobs) => {

            return jobs.job_category == currentCategory
        })

        if (JobsInSameCategory) {

            setJobCategory(JobsInSameCategory)
        }

    }, [jobData, currentCategory])




    return (


        <>
            <PageHeadTitle title={`${currentCategory}`} />

            <div>

                {jobCategory.length > 0 && <JobsHeader headTitle={`${currentCategory}`} />}
                <section className='mt-4 p-6 2xl:w-[1440px] mx-auto  min-h-[600px] grid grid-cols-1 xl:grid-cols-2   gap-4'>

                    {
                        jobCategory?.map((el) => (

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

                        ))
                    }

                </section >

            </div >
        </>
    )
}

export default CategoryPage
