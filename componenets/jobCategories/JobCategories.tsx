import React, { useEffect, useState } from 'react'
import JobCategoryCard from './JobCategoryCard'
import { TCategoryData } from '@/interfaces'
import { getCategoriesData } from '@/utils/api'

const JobCategories = () => {

    const [categoryData, SetCategoryData] = useState<TCategoryData[]>([])

    useEffect(() => {

        const getAllCategoryData = async () => {

            const response = await getCategoriesData()
            SetCategoryData(response.data)
        }
        getAllCategoryData()

    }, [])



    return (

        <div className='px-6 py-8 flex flex-col bg-primary-background-lightgreen shadow-lg '>
            <div className='capitalize mt-5'>
                <h2 className='text-2xl font-bold p-2 '>Browse by Category</h2>
                <p className='text-xs p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className=' mt-8 grid grid-col-1 md:grid-cols-2 lg:grid-cols-4  gap-6 justify-items-between '>
                {categoryData.map((cat: TCategoryData) => (
                    <div key={cat.name}>
                        <JobCategoryCard name={cat.name} logo={cat.logo} />
                    </div>

                ))

                }
            </div>
        </div>

    )
}

export default JobCategories
