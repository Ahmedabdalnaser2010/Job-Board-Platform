import JobsHeader from '@/componenets/jobsPage/JobsHeader'
import { BriefcaseIcon, CheckCircleIcon, ClipboardDocumentCheckIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const index = () => {
    return (
        <div>
            <JobsHeader headTitle={"About Us"} />
            <div className='relative -z-1 my-4 p-6 2xl:w-[1440px] m-auto  min-h-[600px] flex flex-col items-center justify-start md:justify-between  gap-4 capitalize'>

                <section className=' flex flex-col items-center justify-center p-2  mt-5'>
                    <div className='min-w-[320px] max-w-[600px] text-center flex flex-col justify-center items-center mb-5'>
                        <h2 className='font-bold py-4 text-3xl text-primary-green'>Brief</h2>
                        <p className='text-sm leading-5 py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid sed alias placeat. Mollitia ab ullam esse, doloribus animi, quas necessitatibus nobis debitis modi vel quia repudiandae porro laboriosam? Inventore, nihil.</p>
                    </div>
                    <Image src={"/assets/icons/medium.jpg"} alt={"work"} width={800} height={400} className='rounded-2xl object-fill bottom-0 w-full' />

                </section>
                <section className='relative flex flex-col items-center justify-center p-2 -z-10 mt-5'>
                    <div className='min-w-[320px] max-w-[600px] text-center flex flex-col justify-center items-center mb-5'>
                        <h2 className='font-bold py-4 text-3xl text-primary-green'>how it works</h2>
                        <p className='text-sm leading-5 py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid sed alias placeat. Mollitia ab ullam esse, doloribus animi, quas necessitatibus nobis debitis modi vel quia repudiandae porro laboriosam? Inventore, nihil.</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-between capitalize gap-6 mt-5'>
                        <div className='w-[250px] shadow-lg rounded-xl p-4 flex flex-col items-center'>
                            <UserCircleIcon className='w-[40px] text-primary-green py-2' />
                            <span className='font-bold text-md py-2'>create account</span>
                            <span className='text-gray-500 text-sm py-2 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis distinctio cumque id eveniet commodi .</span>
                        </div>
                        <div className='w-[250px] shadow-lg rounded-xl p-4 flex flex-col items-center'>
                            <ClipboardDocumentCheckIcon className='w-[40px] text-primary-green py-2' />
                            <span className='font-bold text-md py-2'>upload CV</span>
                            <span className='text-gray-500 text-sm py-2 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis distinctio cumque id eveniet commodi .</span>
                        </div>
                        <div className='w-[250px] shadow-lg rounded-xl p-4 flex flex-col items-center'>
                            <BriefcaseIcon className='w-[40px] text-primary-green py-2' />
                            <span className='font-bold text-md py-2'>find jobs</span>
                            <span className='text-gray-500 text-sm py-2 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis distinctio cumque id eveniet commodi .</span>
                        </div>
                        <div className='w-[250px] shadow-lg rounded-xl p-4 flex flex-col items-center'>
                            <CheckCircleIcon className='w-[40px] text-primary-green py-2' />
                            <span className='font-bold text-md py-2'>apply job</span>
                            <span className='text-gray-500 text-sm py-2 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis distinctio cumque id eveniet commodi .</span>
                        </div>

                    </div>

                </section>

            </div>

        </div>
    )
}

export default index
