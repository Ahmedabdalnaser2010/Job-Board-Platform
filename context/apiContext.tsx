import { TDetailedJobData } from "@/interfaces";
import { getJobsData } from "@/utils/api";
import { ReactNode, useState, createContext, SetStateAction, Dispatch, useEffect } from "react";

type ApiContextType = {
    jobData: TDetailedJobData[],
    setJobData: Dispatch<SetStateAction<TDetailedJobData[]>>

}

const ApiContext = createContext<ApiContextType>({
    jobData: [],
    setJobData: () => { }
})



const ApiProvider = ({ children }: { children: ReactNode }) => {

    const [jobData, setJobData] = useState<TDetailedJobData[]>([])

    useEffect(() => {

        const allJobData = async () => {
            const res = await getJobsData()
            setJobData(res.data)
        }

        allJobData()

    }, [])


    return (

        <ApiContext.Provider value={{ jobData, setJobData }}>

            {children}

        </ApiContext.Provider>

    )

}

export { ApiContext, ApiProvider }