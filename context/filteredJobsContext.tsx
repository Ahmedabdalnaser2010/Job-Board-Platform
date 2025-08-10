import { TDetailedJobData } from '@/interfaces'
import React, { ReactNode, useContext, useState } from 'react'
import { createContext } from 'react'
import { ApiContext } from './apiContext'


interface TsearchInputs {
    category: string;
    jobTitle: string;
    location: string;
    experience: string;

}


type FilterContextType = {
    jobData: TDetailedJobData[];
    searchValues: TsearchInputs;
    setSearchValues: React.Dispatch<React.SetStateAction<TsearchInputs>>;
    filteredData: TDetailedJobData[];
    setFilteredData: React.Dispatch<React.SetStateAction<TDetailedJobData[]>>;
    sortingValue: string;
    setSortingValue: React.Dispatch<React.SetStateAction<string>>;
    sortingBYPosting: string;
    setSortingByPosting: React.Dispatch<React.SetStateAction<string>>;
    getFilteredItemsByCategory: TDetailedJobData[];
    getFilteredItemsByJobTitle: TDetailedJobData[];
    getFilteredItemsByLocation: TDetailedJobData[];
    getFilteredItemsByExperience: TDetailedJobData[];
    filteredUniqueCategories: string[];
    filteredUniquejobTitle: string[];
    filteredUniqueLocation: string[];
    filteredUniqueExperience: string[];
    finalFetchedData: TDetailedJobData[];
    finalFetchedDataWitoutSorting: TDetailedJobData[]

}


const FilterContext = createContext<FilterContextType>({
    jobData: [],
    searchValues: { category: "", jobTitle: "", location: "", experience: "" },
    setSearchValues: () => { },
    filteredData: [],
    setFilteredData: () => { },
    sortingValue: "",
    setSortingValue: () => { },
    sortingBYPosting: "",
    setSortingByPosting: () => { },
    getFilteredItemsByCategory: [],
    getFilteredItemsByJobTitle: [],
    getFilteredItemsByLocation: [],
    getFilteredItemsByExperience: [],
    filteredUniqueCategories: [],
    filteredUniquejobTitle: [],
    filteredUniqueLocation: [],
    filteredUniqueExperience: [],
    finalFetchedData: [],
    finalFetchedDataWitoutSorting: [],

})

const FilterProvider = ({ children }: { children: ReactNode }) => {

    const [searchValues, setSearchValues] = useState<TsearchInputs>({ category: "", jobTitle: "", location: "", experience: "" })
    const [filteredData, setFilteredData] = useState<TDetailedJobData[]>([])
    const [sortingValue, setSortingValue] = useState("")
    const [sortingBYPosting, setSortingByPosting] = useState("")
    const { jobData } = useContext(ApiContext)


    // filter by Categories

    const getCategories = jobData.map((loc: TDetailedJobData) => {

        const category = `${loc.job_category}`

        return category.trim()

    })

    const filteredUniqueCategories = [... new Set(getCategories)]


    const getFilteredItemsByCategory = jobData.filter((el: TDetailedJobData) => el.job_category.toString().toLocaleLowerCase().trim() == searchValues.category.toString().toLocaleLowerCase().trim())

    // filter by job title

    const getJobTitle = getFilteredItemsByCategory.map((loc: TDetailedJobData) => {

        const jobTitle = `${loc.job_title}`

        return jobTitle.trim()

    })

    const filteredUniquejobTitle = [... new Set(getJobTitle)]

    const getFilteredItemsByJobTitle = getFilteredItemsByCategory.filter((el: TDetailedJobData) => el.job_title.toString().toLocaleLowerCase().trim() == searchValues.jobTitle.toString().toLocaleLowerCase().trim())




    // filter by location



    const getLocation = getFilteredItemsByJobTitle.map((loc: TDetailedJobData) => {

        const location = `${loc.company_location.city}`

        return location.trim()

    })

    const filteredUniqueLocation = [... new Set(getLocation)]

    const getFilteredItemsByLocation = getFilteredItemsByJobTitle.filter((el: TDetailedJobData) => el.company_location.city.toString().toLocaleLowerCase().trim() == searchValues.location.toString().toLocaleLowerCase().trim())



    // filter by experience 

    const getExperienceLevel = getFilteredItemsByJobTitle.map((loc: TDetailedJobData) => {

        const experience = `${loc.experience_level}`

        return experience.trim()

    })

    const filteredUniqueExperience = [... new Set(getExperienceLevel)]

    const getFilteredItemsByExperience = getFilteredItemsByJobTitle.filter((el: TDetailedJobData) => el.experience_level.toString().toLocaleLowerCase().trim() == searchValues.experience.toString().toLocaleLowerCase().trim())




    const finalFetchedDataWitoutSorting =
        ([...getFilteredItemsByLocation].length > 0) ? getFilteredItemsByLocation : ([...getFilteredItemsByExperience]?.length > 0) ? getFilteredItemsByExperience : ([...getFilteredItemsByLocation].length == 0 && [...getFilteredItemsByExperience].length == 0 && [...getFilteredItemsByJobTitle].length > 0) ? getFilteredItemsByJobTitle : ([...getFilteredItemsByLocation].length == 0 && [...getFilteredItemsByExperience].length == 0 && [...getFilteredItemsByJobTitle].length == 0 && [...getFilteredItemsByCategory].length > 0) ? getFilteredItemsByCategory : jobData


    const finalFetchedDataDuetoPublishing: TDetailedJobData[] =
        sortingBYPosting === "Newest"
            ? [...finalFetchedDataWitoutSorting].sort((a, b) => {
                const dateA = new Date(a.posting_date || 0).getTime();
                const dateB = new Date(b.posting_date || 0).getTime();
                return Number(dateB) - Number(dateA);
            })
            : sortingBYPosting === "Oldest"
                ? [...finalFetchedDataWitoutSorting].sort((a, b) => {
                    const dateA = new Date(a.posting_date || 0).getTime();
                    const dateB = new Date(b.posting_date || 0).getTime();
                    return Number(dateA) - Number(dateB);
                })
                : [...finalFetchedDataWitoutSorting];

    // final filtering results

    const finalFetchedData: TDetailedJobData[] = sortingValue === "Min to Max" ?
        finalFetchedDataDuetoPublishing.sort((a, b) => a.salary_range.min - b.salary_range.min) :
        sortingValue === "Max to Min" ?
            finalFetchedDataDuetoPublishing.sort((a, b) => b.salary_range.min - a.salary_range.min) :
            finalFetchedDataDuetoPublishing



    return (
        <FilterContext.Provider value={{ jobData, searchValues, setSearchValues, getFilteredItemsByCategory, getFilteredItemsByJobTitle, getFilteredItemsByLocation, filteredUniqueCategories, filteredUniquejobTitle, getFilteredItemsByExperience, filteredUniqueLocation, filteredUniqueExperience, finalFetchedData, filteredData, setFilteredData, finalFetchedDataWitoutSorting, setSortingValue, sortingValue, sortingBYPosting, setSortingByPosting }}>

            {children}

        </FilterContext.Provider>
    )
}


export { FilterContext, FilterProvider }