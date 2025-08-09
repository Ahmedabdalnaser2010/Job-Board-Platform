import { TCategoryData } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'

const JobCategoryCard = ({ name, logo }: TCategoryData) => {


    return (
        <Link href={`/${name}`} className='min-w-[230px] min-h-[230px] bg-background-white p-4 rounded-xl flex flex-col items-center justify-around'>
            <Image src={logo} alt={name} width={60} height={60} />

            <div className='text-xl'>{name}</div>
            <span className='text-primary-green bg-primary-background-lightgreen px-2 py-1 text-xs rounded-xl  text-center'> more than 100 Jobs</span>

        </Link>
    )
}

export default JobCategoryCard
