import { TJobData } from '@/interfaces'
import { BookmarkSquareIcon, BriefcaseIcon, ChartBarIcon, MapPinIcon, WalletIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const JobCard = ({ jobID, publishingtime, employerLogo, jobTitle, companyName, category, experience, maxSalary, minSalary, country, city, submitTitle }: TJobData) => {

    const router = useRouter()
    console.log(router.asPath)

    const postingDate = new Date(publishingtime || "")
    const currentDate = new Date()
    const postedFrom = Number(currentDate) - Number(postingDate)
    const postedFromSec = (postedFrom / 1000).toFixed(0)
    const postedFromMins = (postedFrom / (1000 * 60)).toFixed(0)
    const postedFromHours = (postedFrom / (1000 * 60 * 60)).toFixed(0)
    const postedFromDays = (postedFrom / (1000 * 60 * 60 * 24)).toFixed(0)
    const postedFromMonths = (postedFrom / (1000 * 60 * 60 * 24 * 30)).toFixed(0)

    const getPuplishingTime = (Number(postedFromSec) < 60) ? `${postedFromSec} Second(s) ago` : Number(postedFromMins) < 60 ? `${postedFromMins} minute(s) ago` : Number(postedFromHours) < 24 ? `${postedFromHours} Hour(s) ago` : Number(postedFromDays) < 30 ? `${postedFromDays} Day(s) ago` : `${postedFromMonths} month(s) ago`


    return (
        <div className={`flex flex-col justify-between capitalize ${submitTitle == "apply job" ? "" : "border-1 border-gray-100 shadow-lg p-5 rounded-2xl "} ${router.asPath == "/jobs" ? "lg:w-[600px] xl:w-[900px] w-full " : "w-full "} md:max-h-[200px]   min-w-[300px] md:min-w-[380px] `}>
            <div className='flex justify-between items-center'>
                <span className='normal-case text-primary-green bg-primary-background-lightgreen px-2 py-1 text-xs rounded-xl'>{getPuplishingTime}</span>
                <BookmarkSquareIcon className='w-[20px] ' />
            </div>
            <div className='mt-6 flex md:flex-row flex-col items-start gap-5 capitalize'>
                {employerLogo ? <Image src={employerLogo} alt={companyName || ""} width={40} height={40} /> : <BriefcaseIcon className='text-primary-green w-[30px]' />}
                <div>
                    <div className="font-bold">{jobTitle}</div>
                    <span className='text-xs'>{companyName}</span>
                </div>
            </div>
            <div className='flex items-start md:items-end justify-between flex-col md:flex-row w-full md:flex-wrap gap-5'>
                <div className="benifits mt-8 flex items-start md:items-center gap-5 flex-col md:flex-row">
                    <div className='flex items-center gap-2'>
                        <BriefcaseIcon className='text-primary-green w-[20px]' />
                        <Link href={`/${category}`} className='text-gray-600 text-xs'>
                            {category}
                        </Link>
                    </div>
                    <div className='flex items-center gap-2'>
                        <ChartBarIcon className='text-primary-green w-[20px]' />
                        <span className='text-gray-600 text-xs'>
                            {experience}
                        </span>
                    </div>

                    <div className='flex items-center gap-2'>
                        <WalletIcon className='text-primary-green w-[20px]' />
                        <span className='text-gray-600 text-xs'>
                            {maxSalary ? `$${minSalary}/year - $${maxSalary}/year` : "Negotiate"}
                        </span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <MapPinIcon className='text-primary-green w-[20px]' />
                        <span className='text-gray-600 text-xs'>
                            {city},{country}
                        </span>
                    </div>

                </div>
                <Link href={submitTitle == "job details" ? `/jobs/${jobID}` : submitTitle == "apply job" ? `/jobs/${jobID}/jobRequest` : ""} className={` ${submitTitle == "apply job" ? "w-full md:w-[200px]" : "  w-full xl:w-[100px]"} text-center text-sm py-3 px-3 bg-primary-green text-background-white rounded-xl mt-4 xl:mt-0`}>{submitTitle}</Link>
            </div>

        </div >
    )
}

export default JobCard
