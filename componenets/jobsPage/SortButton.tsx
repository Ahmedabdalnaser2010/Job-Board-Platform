import { FilterContext } from '@/context/filteredJobsContext'
import React, { useContext } from 'react'

const SortButton = () => {



    const { sortingValue, setSortingValue, sortingBYPosting, setSortingByPosting } = useContext(FilterContext)




    return (
        <div className='flex items-center gap-5 md:flex-row flex-col'>
            <div className="flex flex-row items-center gap-5 mb-5 z-0 mr-8">
                <label htmlFor='sorting' className="font-bold w-[100px] "><span className=' text-primary-green'>Sort by:</span> Salary</label>
                <select id='sorting' name='sorting' className=" bg-white  z-1 w-52 p-2 shadow-md outline-none" value={sortingValue} onChange={(e) => setSortingValue(e.target.value)} onClick={() => setSortingByPosting("")}>

                    <option>Min to Max </option>
                    <option>Max to Min  </option>

                </select>
            </div>

            <div className="flex flex-row items-center gap-5 mb-5 z-0 mr-8">
                <label htmlFor='sorting' className="font-bold  w-[100px]  "><span className=' text-primary-green'>Sort by:</span> Posting Date</label>
                <select id='sorting' name='sorting' className=" bg-white  z-1 w-52 p-2 shadow-md outline-none" value={sortingBYPosting} onChange={(e) => setSortingByPosting(e.target.value)} onClick={() => setSortingValue("")}>

                    <option>Newest </option>
                    <option>Oldest </option>

                </select>
            </div>

        </div>

    )
}

export default SortButton
