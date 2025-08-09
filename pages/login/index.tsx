import JobsHeader from "@/componenets/jobsPage/JobsHeader"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"

const Login = () => {

    const route = useRouter()

    const [showPassword, setShowPassword] = useState(false)

    const showPasswordIcon = <EyeIcon />

    const HidePasswordIcon = <EyeSlashIcon />



    const displayPasswordHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setShowPassword(!showPassword)
        e.preventDefault()
    }

    const handleSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
        e.preventDefault()
        toast.success("You Successfully Logged in")
        setTimeout(() => {
            route.push("/")
        }, 2000)




    }



    return (


        <div className="">
            <Toaster />
            <JobsHeader headTitle={"login"} />
            <section className='mt-4 p-6 2xl:w-[1440px] mx-auto  min-h-[600px] flex flex-col items-center  gap-4 '>

                <div className="min-w-[320px] md:w-[400px] shadow-lg p-6
                mt-4 rounded-2xl">
                    <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white py-2">Let's get started!</h3>
                    <div className="flex justify-center text-sm font-medium text-gray-500 dark:text-gray-300 py-4">
                        Not registered?&nbsp;
                        <Link href="/register" className="text-primary-green hover:underline ">
                            Create account
                        </Link>
                    </div>
                    <form onSubmit={handleSubmit} className="flex  flex-col gap-3 mx-auto mt-5 w-full text-gray-900" method="get">


                        <div className=" flex flex-col">
                            <label htmlFor="email2" className="mb-2 text-gray-900 font-semibold text-sm">Your E-Mail</label>

                            <input placeholder="xxxxxxxx@xxx.xxx" className={`focus:border-blue-300 text-sm  p-2.5 bg-gray-50 border-[1px] rounded-lg w-full`} id="email2" type="text" />
                            {<span className="text-sm font-semibold self-start  text-red-600"> </span>}


                        </div>



                        <div className=" flex flex-col">
                            <label htmlFor="password2" className="mb-2 text-gray-900 font-semibold text-sm">Your password</label>
                            <div >
                                <input placeholder="************" className={` focus:border-primary-green text-sm  p-2.5 bg-gray-50 border-[1px] rounded-lg w-full `} id="password" type={showPassword ? "password" : "text"} />
                                {showPassword ? (<button onClick={displayPasswordHandler} className="absolute -translate-x-8 -translate-y-[-0.75em] w-[20px]">{HidePasswordIcon}</button>) : (<button onClick={displayPasswordHandler} className="absolute -translate-x-8 -translate-y-[-0.75em] w-[20px]">{showPasswordIcon}</button>)}


                            </div>
                        </div>




                        <button aria-label="login" className="bg-primary-green mt-4 text-white capitalize font-semibold text-sm  p-2.5  border-gray-300 border-[1px] rounded-lg w-full" type="submit">
                            Log in
                            {/* {loading === "pending" ?
                            (<>Please Wait for Checking <span className="loading loading-spinner loading-sm"></span></>) :
                            ("Log in")} */}
                        </button>

                    </form>
                </div>
            </section>
        </div>

    )
}

export default Login