import JobsHeader from '@/componenets/jobsPage/JobsHeader'
import { ApiContext } from '@/context/apiContext'
import { TDetailedJobData } from '@/interfaces'
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'
import PageHeadTitle from '@/componenets/common/PageHeadTitle'

const JobRequest = () => {
    const { jobData } = useContext(ApiContext)
    const route = useRouter()
    const jobId = route.asPath.split("/").slice(-2, -1)
    const [errors, setErrors] = useState({
        q1: '',
        q2: '',
        q3: '',
        q4: ''
    })
    const [formData, setFormData] = useState({
        q1: '',
        q2: '',
        q3: '',
        q4: ''
    })

    const getAppliedJob = jobData.find((el: TDetailedJobData) => el.id == Number(jobId))

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const validate = () => {
        let valid = true
        const newErrors = {
            q1: '',
            q2: '',
            q3: '',
            q4: ''
        }

        if (!formData.q1.trim()) {
            newErrors.q1 = 'This field is required'
            valid = false
        } else if (formData.q1.length < 40) {
            newErrors.q1 = 'Answer must be at least 40 characters'
            valid = false
        }

        if (!formData.q2.trim()) {
            newErrors.q2 = 'This field is required'
            valid = false
        }

        if (!formData.q3.trim()) {
            newErrors.q3 = 'This field is required'
            valid = false
        }

        if (!formData.q4.trim()) {
            newErrors.q4 = 'This field is required'
            valid = false
        } else if (formData.q4.length < 20) {
            newErrors.q4 = 'Answer must be at least 20 characters'
            valid = false
        }

        setErrors(newErrors)
        return valid
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (validate()) {
            toast.success('Your Application is Successfully Applied!')
            setTimeout(() => {
                route.push("/")
            }, 2000)
        } else {
            toast.error('Please complete all required fields')
        }
    }

    return (
        <>
            <PageHeadTitle title={`${getAppliedJob?.job_title} | Application`} />
            <div>
                <Toaster position="top-center" />
                <JobsHeader headTitle={"Application Form"} />
                <section className='mt-4 p-6 2xl:w-[1440px] mx-auto min-h-[600px] flex flex-col items-center justify-between gap-4'>
                    <div className='flex items-start justify-between w-full md:w-[70%]'>
                        <div className=''>
                            <h1 className='font-bold text-xl'>{getAppliedJob?.job_title}</h1>
                            <p className='py-2 w-[50%]'>The hiring team at {getAppliedJob?.company_name} requires you to answer the below questions.</p>
                        </div>
                        <Image src={getAppliedJob?.company_logo || "/public/assets/icons/Icon+bg.svg"} alt={getAppliedJob?.job_title || "application"} width={50} height={50} />
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-20 w-full md:w-[70%] mt-5'>
                        <div className='flex flex-col items-start gap-5'>
                            <label htmlFor="q1" className='font-semibold'>
                                What about your Previous Experiences?
                            </label>
                            <textarea
                                name="q1"
                                value={formData.q1}
                                onChange={handleChange}
                                className={`w-full min-h-[80px] p-2 bg-gray-50 border-1 border-placeholder-gray outline-none ${errors.q1 ? 'border-red-500' : ''}`}
                            />
                            {errors.q1 && <span className="text-red-500 text-sm">{errors.q1}</span>}
                        </div>

                        <div className='flex flex-col items-start gap-5'>
                            <label htmlFor="q2" className='font-semibold'>
                                What about your notice period?
                            </label>
                            <textarea
                                name="q2"
                                value={formData.q2}
                                onChange={handleChange}
                                className={`w-full min-h-[80px] p-2 bg-gray-50 border-1 border-placeholder-gray outline-none ${errors.q2 ? 'border-red-500' : ''}`}
                            />
                            {errors.q2 && <span className="text-red-500 text-sm">{errors.q2}</span>}
                        </div>

                        <div className='flex flex-col items-start gap-5'>
                            <label htmlFor="q3" className='font-semibold'>
                                What about your current net salary?
                            </label>
                            <textarea
                                name="q3"
                                value={formData.q3}
                                onChange={handleChange}
                                className={`w-full min-h-[80px] p-2 bg-gray-50 border-1 border-placeholder-gray outline-none ${errors.q3 ? 'border-red-500' : ''}`}
                            />
                            {errors.q3 && <span className="text-red-500 text-sm">{errors.q3}</span>}
                        </div>

                        <div className='flex flex-col items-start gap-5'>
                            <label htmlFor="q4" className='font-semibold'>
                                What makes you the ideal candidate for this position?
                            </label>
                            <textarea
                                name="q4"
                                value={formData.q4}
                                onChange={handleChange}
                                className={`w-full min-h-[80px] p-2 bg-gray-50 border-1 border-placeholder-gray outline-none ${errors.q4 ? 'border-red-500' : ''}`}
                            />
                            {errors.q4 && <span className="text-red-500 text-sm">{errors.q4}</span>}
                        </div>

                        <div className='flex flex-col items-center gap-4 md:flex-row md:items-end'>
                            <button type='submit' className='w-full xl:w-[250px] text-center text-lg font-semibold py-4 px-3 bg-primary-green text-background-white rounded-xl mt-4 xl:mt-0'>
                                Submit Application
                            </button>

                            <div
                                className='w-full xl:w-[250px] text-center text-lg font-semibold py-4 px-3 bg-placeholder-gray text-background-main rounded-xl mt-4 xl:mt-0 cursor-pointer'
                                onClick={() => {
                                    toast.error('Cancelling Application!')
                                    setTimeout(() => {
                                        route.push("/")
                                    }, 2000)
                                }}
                            >
                                Cancel
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}

export default JobRequest