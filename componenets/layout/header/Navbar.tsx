import Link from 'next/link';
import { BriefcaseIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

const Navbar = () => {

    const router = useRouter()


    console.log(router.asPath)

    return (
        <div className='h-[80px] text-[0.9em] flex capitalize items-center justify-between text-background-white sticky top-0 z-20'>
            <Link href={"/"} className='flex items-center gap-2'>
                <BriefcaseIcon className='w-[30px]' />
                <span className='font-bold text-xl'>jobs platform</span>
            </Link>
            <nav className='hidden md:flex items-center justify-center gap-5 m-auto capitalize text-md  text-secondary-text-header w-[360px]'>
                <Link href={"/"} className={`${router.asPath === "/" ? `active` : " "}  w-[50px] text-center h-[25px]`}>home</Link>
                <Link href={"/jobs"} className={`${router.asPath === "/jobs" ? `active` : " "} w-[50px] text-center h-[25px]`}>jobs</Link>
                <Link href={"/aboutUs"} className={`${router.asPath === "/aboutUs" ? `active` : " "} w-[60px] text-center h-[25px]`} >about us</Link>
                <Link href={"/contactUs"} className={`${router.asPath === "/contactUs" ? `active` : ""} w-[80px] text-center h-[25px]`}>contact us</Link>

            </nav>
            <div className="register flex items-center gap-4">
                <Link href={"/login"}>login</Link>
                <Link href={"/register"} className='py-2 px-3 bg-primary-green rounded-xl'>register</Link>

            </div>
        </div >

    )
}

export default Navbar
