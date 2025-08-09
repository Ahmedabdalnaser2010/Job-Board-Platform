import { FilterContext } from '@/context/filteredJobsContext'
import React, { useContext } from 'react'

const SortButton = () => {



    const { sortingValue, setSortingValue } = useContext(FilterContext)



    return (
        <div className="flex flex-row items-center gap-5 mb-5 z-0 mr-8">
            <label htmlFor='sorting' className="font-bold "><span className=' text-primary-green'>Sort by:</span> Salary</label>
            <select id='sorting' name='sorting' className=" bg-white  z-1 w-52 p-2 shadow-md outline-none" value={sortingValue} onChange={(e) => setSortingValue(e.target.value)}>

                <option>Min to Max  </option>
                <option>Max to Min   </option>

            </select>
        </div>
    )
}

export default SortButton
