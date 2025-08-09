import Link from 'next/link';
import { BriefcaseIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { FiUser } from 'react-icons/fi';

const Navbar = () => {

    const router = useRouter()



    return (
        <div className='h-[90px] text-[0.9em] flex capitalize items-center justify-between text-background-white sticky top-0 z-20'>
            <Link href={"/"} className='flex items-center gap-2'>
                <BriefcaseIcon className='w-[30px]' />
                <span className='font-bold text-xl'>jobs platform</span>
            </Link>
            <nav className='absolute top-[75px] left-[50%] translate-x-[-50%] z-20 md:static md:top-0  md:left-[0] md:translate-x-[0%] flex items-center justify-center gap-5 m-auto capitalize text-md  text-secondary-text-header w-[360px] '>
                <Link href={"/"} className={`${router.asPath === "/" ? `active` : " "}  w-[50px] text-center h-[25px] hover:text-primary-green`}>home</Link>
                <Link href={"/jobs"} className={`${router.asPath === "/jobs" ? `active` : " "} w-[50px] text-center h-[25px] hover:text-primary-green`}>jobs</Link>
                <Link href={"/aboutUs"} className={`${router.asPath === "/aboutUs" ? `active` : " "} w-[60px] text-center h-[25px] hover:text-primary-green`} >about us</Link>
                <Link href={"/contactUs"} className={`${router.asPath === "/contactUs" ? `active` : ""} w-[80px] text-center h-[25px] hover:text-primary-green`}>contact us</Link>

            </nav>
            <div className="register flex items-center gap-4">
                <Link href={"/login"}>
                    <button className='flex items-center ' aria-label='Login'>

                        <FiUser className='text-2xl text-background-white  hover:text-primary-green' />
                        <div className='flex flex-col justify-between items-start ml-2 '>
                            <span className='text-sm'>Hello,</span>
                            <span className='font-bold hover:text-primary-green '>Login</span>
                        </div>

                    </button>
                </Link>
                {/* <Link href={"/register"} className='py-2 px-3 bg-primary-green rounded-xl'>register</Link> */}

            </div>
        </div >

    )
}

export default Navbar
