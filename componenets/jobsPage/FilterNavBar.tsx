import { FilterContext } from '@/context/filteredJobsContext'
import { ChartBarIcon, MagnifyingGlassIcon, MapPinIcon, TagIcon } from '@heroicons/react/24/outline'
import React, { useContext } from 'react'




const FilterNavBar = () => {



    const { searchValues, setSearchValues, filteredUniqueCategories, filteredUniquejobTitle, filteredUniqueLocation, filteredUniqueExperience } = useContext(FilterContext)

    const handlingResetButton = () => {
        setSearchValues({ category: "", jobTitle: "", location: "", experience: "" })
    }



    // filter by posting Date 

    // const getPostingDate = jobData.map((loc: TDetailedJobData) => {

    //     const postingDate = new Date(`${loc.posting_date}`)
    //     const currentDate = new Date()
    //     const postedFrom = Number(currentDate) - Number(postingDate)
    //     const postedFromSec = (postedFrom / 1000).toFixed(0)
    //     const postedFromMins = (postedFrom / (1000 * 60)).toFixed(0)
    //     const postedFromHours = (postedFrom / (1000 * 60 * 60)).toFixed(0)
    //     const postedFromDays = (postedFrom / (1000 * 60 * 60 * 24)).toFixed(0)
    //     const postedFromMonths = (postedFrom / (1000 * 60 * 60 * 24 * 30)).toFixed(0)

    //     const getPuplishingTime = (Number(postedFromSec) < 60) ? `${postedFromSec} Second(s) ago` : Number(postedFromMins) < 60 ? `${postedFromMins} minute(s) ago` : Number(postedFromHours) < 24 ? `${postedFromHours} Hour(s) ago` : Number(postedFromDays) < 30 ? `${postedFromDays} Day(s) ago` : `${postedFromMonths} month(s) ago`

    //     return getPuplishingTime.trim()

    // })

    // const filteredUniquePostingDate = [... new Set(getPostingDate)]

    // // filter by experience 

    // const getMinSalary = jobData.map((loc: TDetailedJobData) => {

    //     const MinSalary = `${loc.salary_range.min}`

    //     return MinSalary.trim()

    // })

    // const filteredUniqueMinSalary = [... new Set(getMinSalary)].sort().reverse()


    return (
        <div className='lg:max-w-[320px] md:max-w-[300px]  md:min-w-[230px] md:w-[230px] lg:w-[320px] w-full mx-auto md:mx-0 md:ml-5 h-full bg-primary-background-lightgreen shadow-lg p-5 rounded-2xl '>
            <form action="" className='flex md:flex-col w-full flex-row flex-wrap justify-between items-start gap-y-5'>
                {/* <div className='w-full'>
                    <label htmlFor="title" className='font-semibold'>Search by Job Title</label>
                    <div className='flex items-center justify-between w-full bg-background-white p-2 rounded-xl mt-2 gap-x-2'>
                        <MagnifyingGlassIcon className='w-[15px] h-[15px] font-bold' />
                        <input type="text" name='title' placeholder='job title or company' id='title' className='placeholder-placeholder-gray text-background-main outline-none' />
                    </div>
                </div> */}


                <div className='w-full sm:w-2/5 md:w-full'>
                    <label htmlFor="category" className='font-semibold'>Category</label>
                    <div className='flex items-center justify-between bg-background-white p-2 rounded-xl mt-2 gap-x-2 '>
                        <TagIcon className='w-[15px] h-[15px] font-bold ' />
                        <select name="category" id="category" className='w-4/5 text-background-main outline-none' value={searchValues.category} onChange={(e) => setSearchValues(prev => ({ ...prev, category: e.target.value }))}>
                            <div className=''>
                                <option value={""} className='text-placeholder-gray'>Category</option>
                                {filteredUniqueCategories.map((cat, index) => (
                                    <option key={index} value={cat}>{cat}</option>
                                ))}
                            </div>

                        </select>
                    </div>
                </div>

                <div className='w-full sm:w-2/5 md:w-full'>
                    <label htmlFor="job" className='font-semibold'> Job Title</label>
                    <div className='flex items-center justify-between bg-background-white p-2 rounded-xl mt-2 gap-x-2 '>
                        <MagnifyingGlassIcon className='w-[15px] h-[15px] font-bold ' />
                        <select name="job" id="job" className='w-4/5 text-background-main outline-none' value={searchValues.jobTitle} onChange={(e) => setSearchValues(prev => ({ ...prev, jobTitle: e.target.value }))}>
                            <div className=''>
                                <option value={""} className='text-placeholder-gray'>Job Title</option>
                                {filteredUniquejobTitle.map((job, index) => (
                                    <option key={index} value={job}>{job}</option>
                                ))}
                            </div>

                        </select>
                    </div>
                </div>

                <div className='w-full sm:w-2/5 md:w-full'>
                    <label htmlFor="city" className='font-semibold'>Location</label>
                    <div className='flex items-center justify-between bg-background-white p-2 rounded-xl mt-2 gap-x-2 '>
                        <MapPinIcon className='w-[15px] h-[15px] font-bold ' />
                        <select name="city" id="city" className='w-4/5 text-background-main outline-none' value={searchValues.location} onChange={(e) => setSearchValues(prev => ({ ...prev, location: e.target.value }))}>
                            <div className=''>
                                <option value={""} className='text-placeholder-gray'>City</option>
                                {filteredUniqueLocation.map((loc, index) => (
                                    <option key={index} value={loc}>{loc}</option>
                                ))}
                            </div>

                        </select>
                    </div>
                </div>


                <div className='w-full sm:w-2/5 md:w-full'>
                    <label htmlFor="Experience" className='font-semibold'>Experience Level</label>
                    <div className='flex items-center justify-between bg-background-white p-2 rounded-xl mt-2 gap-x-2 '>
                        <ChartBarIcon className='w-[15px] h-[15px] font-bold ' />
                        <select name="Experience" id="Experience" className='w-4/5 text-background-main outline-none' value={searchValues.experience} onChange={(e) => setSearchValues(prev => ({ ...prev, experience: e.target.value }))}>
                            <div className=''>
                                <option value={""} className='text-placeholder-gray'>Experience Level</option>
                                {filteredUniqueExperience.map((exp, index) => (
                                    <option key={index} value={exp}>{exp}</option>
                                ))}
                            </div>

                        </select>
                    </div>
                </div>
                {/* <div className='w-full sm:w-2/5 md:w-full'>
                    <label htmlFor="Date" className='font-semibold'>Posting Date</label>
                    <div className='flex items-center justify-between bg-background-white p-2 rounded-xl mt-2 gap-x-2 '>
                        <CalendarDateRangeIcon className='w-[15px] h-[15px] font-bold ' />
                        <select name="Date" id="Date" className='w-4/5 text-background-main outline-none'>
                            <div className=''>
                                <option value={""} className='text-placeholder-gray'>Posting Date</option>
                                {filteredUniquePostingDate.map((date, index) => (
                                    <option key={index} value={date}>{date}</option>
                                ))}
                            </div>

                        </select>
                    </div>
                </div> */}

                {/* Salary Range  */}

                {/* <div className='w-full sm:w-2/5 md:w-full'>
                    <label htmlFor="salary" className='font-semibold'>Min-Salary</label>
                    <div className='flex items-center justify-between bg-background-white p-2 rounded-xl mt-2 gap-x-2 '>
                        <CurrencyDollarIcon className='w-[15px] h-[15px] font-bold ' />

                        <select name="salary" id="salary" className='w-4/5 text-background-main outline-none'>

                            <option value={""} className='text-placeholder-gray'>Min-Salary</option>
                            {filteredUniqueMinSalary.map((min, index) => (
                                <option key={index} value={min}>{min}USD/Year</option>
                            ))}


                        </select>
                    </div>
                </div> */}
                <button aria-label='reset all' className=" p-2 mt-2 rounded-xl bg-background-white text-primary-green w-full font-bold text-lg self-center hover:bg-gray-50" onClick={handlingResetButton} >Reset All</button>

            </form >
        </div >
    )
}

export default FilterNavBar
