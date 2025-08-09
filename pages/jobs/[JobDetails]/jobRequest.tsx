import JobsHeader from '@/componenets/jobsPage/JobsHeader'
import { ApiContext } from '@/context/apiContext'
import { TDetailedJobData } from '@/interfaces'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'

const JobRequest = () => {

    const { jobData } = useContext(ApiContext)
    const route = useRouter()
    const jobId = route.asPath.split("/").slice(-2, -1)

    const getAppliedJob = jobData.find((el: TDetailedJobData) => el.id == Number(jobId))

    console.log(getAppliedJob)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast.success('Your Application is Successfully Applied!')

        setTimeout(() => {
            route.push("/")
        }, 2000)

    }

    return (
        <div>
            <Toaster position="top-center" />
            <JobsHeader headTitle={"Application Form"} />
            <section className='mt-4 p-6 2xl:w-[1440px] mx-auto  min-h-[600px] flex flex-col items-center justify-between  gap-4'>
                <div className='flex items-start justify-between  w-full md:w-[70%]'>
                    <div className=''>
                        <h1 className='font-bold text-xl'>{getAppliedJob?.job_title}</h1>
                        <p className='py-2 w-[50%]'>The hiring team at {getAppliedJob?.company_name} requires you to answer the below questions.</p>
                    </div>
                    <Image src={getAppliedJob?.company_logo} alt={getAppliedJob?.job_title} width={50} height={50} />
                </div>
                <form action="" method='post' onSubmit={handleSubmit} className='flex flex-col gap-20 w-full md:w-[70%] mt-5'>
                    <div className='flex flex-col items-start gap-5'>
                        <label htmlFor="q1" className='font-semibold'>
                            What about your Previous Experiences?
                        </label>
                        <textarea name="q1" id="q1" required minLength={40} className='w-full min-h-[80px] p-2 bg-gray-50 border-1 border-placeholder-gray outline-none' />
                    </div>
                    <div className='flex flex-col items-start gap-5'>
                        <label htmlFor="q2" className='font-semibold'>
                            What about your notice period?
                        </label>
                        <textarea name="q2" id="q2" required className='w-full min-h-[80px] p-2 bg-gray-50 border-1 border-placeholder-gray outline-none'></textarea>

                    </div>
                    <div className='flex flex-col items-start gap-5'>
                        <label htmlFor="q3" className='font-semibold'>
                            What about your current net salary?

                        </label>
                        <textarea name="q3" id="q3" required className='w-full min-h-[80px] p-2 bg-gray-50 border-1 border-placeholder-gray outline-none'></textarea>

                    </div>
                    <div className='flex flex-col items-start gap-5'>
                        <label htmlFor="q4" className='font-semibold'>
                            What makes you the ideal candidate for this position?

                        </label>
                        <textarea name="q4" required minLength={20} id="q4" className='w-full min-h-[80px] p-2 bg-gray-50 border-1 border-placeholder-gray outline-none'></textarea>

                    </div>
                    <div className='flex flex-col items-center gap-4 md:flex-row md:items-end'>

                        <button type='submit' className={`w-full xl:w-[250px] text-center text-lg font-semibold py-4 px-3 bg-primary-green text-background-white rounded-xl mt-4 xl:mt-0`} >Submit Application</button>



                        <div className={`w-full xl:w-[250px] text-center text-lg font-semibold py-4 px-3 bg-placeholder-gray text-background-main rounded-xl mt-4 xl:mt-0`} onClick={() => {
                            toast.error('Cancelling Application!');
                            setTimeout(() => {
                                route.push("/");
                            }, 2000);
                        }}>Cancel</div>


                    </div>

                </form>

            </section>
        </div>
    )
}

export default JobRequest
