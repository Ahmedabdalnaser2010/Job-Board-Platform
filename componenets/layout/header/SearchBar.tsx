import { FilterContext } from '@/context/filteredJobsContext';
import { MagnifyingGlassIcon, MapPinIcon, TagIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'


const SearchBar = () => {

    const route = useRouter()

    const { pathname } = route

    const { searchValues, setSearchValues, filteredUniqueCategories, filteredUniqueLocation, filteredUniquejobTitle } = useContext(FilterContext)

    const [disableSearching, setDisableSearch] = useState({ jobTitle: true, location: true })

    const [isdisableSearchingButton, setIsDisableSearchButton] = useState(true)




    useEffect(() => {
        if (pathname !== '/jobs') {
            setSearchValues({
                category: "",
                jobTitle: "",
                location: "",
                experience: ""
            })
        }
    }, [pathname, setSearchValues])

    useEffect(() => {


        if (searchValues.category && searchValues.category != "category") {
            setIsDisableSearchButton(false)
        }

        if (searchValues.category && searchValues.category != "category" && !searchValues.jobTitle) {
            return setDisableSearch({ location: true, jobTitle: false })
        } else if (searchValues.category && searchValues.category != "category" && searchValues.jobTitle && searchValues.jobTitle != "job title") {
            return setDisableSearch({ jobTitle: false, location: false })
        }
        else {
            return setDisableSearch({ jobTitle: true, location: true })
        }


    }, [searchValues.category, searchValues.jobTitle])







    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault()

        route.push("/jobs")


    }


    console.log(pathname)
    return (
        <div className='flex w-[300px] md:w-[700px] items-center flex-col md:flex-row  p-3 md:px-0 bg-background-white rounded-2xl md:h-[60px] justify-between'>
            <form action="" onSubmit={handleSubmit} className='bg-background-white  w-full flex flex-col items-center md:flex-row md:rounded-2xl pl-2'>

                {/* <input type="text" name='jobTitle' value={searchValues.jobTitle} placeholder='Job Title' className='w-full outline-none md:h-[40px] p-3 placeholder-placeholder-gray' onChange={(e) => setSearchValues(prev => ({ ...prev, jobTitle: e.target.value }))} />
                <input type="text" name='location' value={searchValues.location} placeholder='Select Location' className='w-full outline-none md:h-[40px] p-3 placeholder-placeholder-gray border-t-2 border-t-placeholder-gray border-b-2 border-b-placeholder-gray md:border-t-0 md:border-b-0  md:border-l-2 md:border-l-placeholder-gray md:border-r-2 md:border-r-placeholder-gray ' onChange={(e) => setSearchValues(prev => ({ ...prev, location: e.target.value }))} /> */}
                {/* <input type="text" name='category' value={searchValues.category} placeholder='Select Category' className='w-full outline-none md:h-[40px] p-3 placeholder-placeholder-gray' onChange={(e) => setSearchValues(prev => ({ ...prev, category: e.target.value }))} /> */}

                <div className='flex items-center justify-between bg-background-white p-2 w-[200px] mt-2 gap-x-2 '>
                    <TagIcon className='w-[15px] h-[15px] font-bold ' />
                    <select name="category" id="category" className='w-full text-background-main outline-none' value={searchValues.category} onChange={(e) => setSearchValues(prev => ({ ...prev, category: e.target.value }))}>

                        <option value={""} className='text-placeholder-gray'>Category</option>
                        {filteredUniqueCategories.map((cat, index) => (
                            <option key={index} value={cat}>{cat}</option>
                        ))}


                    </select>
                </div>

                <div className='flex items-center justify-between bg-background-white p-2 w-[200px] mt-2 gap-x-2'>
                    <MagnifyingGlassIcon className='w-[15px] h-[15px] font-bold ' />
                    <select name="job" id="job" disabled={disableSearching.jobTitle === true ? true : false} className='w-full text-background-main outline-none' value={searchValues.jobTitle} onChange={(e) => setSearchValues(prev => ({ ...prev, jobTitle: e.target.value }))}>

                        <option value={""} className=' text-placeholder-gray'>Job Title</option>
                        {filteredUniquejobTitle.map((job, index) => (
                            <option key={index} value={job}>{job}</option>
                        ))}


                    </select>
                </div>
                <div className='flex items-center justify-between bg-background-white p-2 w-[200px] mt-2 gap-x-2 '>
                    <MapPinIcon className='w-[15px] h-[15px] font-bold ' />
                    <select name="city" id="city" disabled={disableSearching.location === true ? true : false} className='w-full text-background-main outline-none' value={searchValues.location} onChange={(e) => setSearchValues(prev => ({ ...prev, location: e.target.value }))}>

                        <option value={""} className='text-placeholder-gray'>City</option>
                        {filteredUniqueLocation.map((loc, index) => (
                            <option key={index} value={loc}>{loc}</option>
                        ))}


                    </select>
                </div>


                <button onSubmit={handleSubmit} type='submit' disabled={isdisableSearchingButton ? true : false} className='text-background-white bg-primary-green text-center  w-full md:w-[190px] flex items-center justify-center gap-4 h-[50px] md:h-[60px] rounder-xl rounded-2xl md:rounded-tr-2xl md:rounded-br-2xl md:rounded-tl-none md:rounded-bl-none  capitalize'>
                    <MagnifyingGlassIcon className=' w-[15px] font-bold' />
                    <span>search job</span>
                </button>
            </form>


        </div>
    )
}

export default SearchBar
