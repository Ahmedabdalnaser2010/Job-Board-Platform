import JobsHeader from "@/componenets/jobsPage/JobsHeader"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"

const Register = () => {

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
        toast.success("Your Account Created Successfully, please Login...")
        setTimeout(() => {
            route.push("/login")
        }, 2000)




    }



    return (


        <div className="">
            <Toaster />
            <JobsHeader headTitle={"Registeration"} />
            <section className='mt-4 p-6 2xl:w-[1440px] mx-auto  min-h-[600px] flex flex-col items-center  gap-4 '>

                <div className="min-w-[320px] shadow-lg p-6
                mt-4 rounded-2xl">

                    <form onSubmit={handleSubmit} className="flex  flex-col gap-3 mx-auto mt-5 w-full text-gray-900" method="get">

                        <div className="flex flex-col md:flex-row items-center justify-between gap-1">

                            <div className=" flex flex-col w-full md:w-[210px] ">
                                <label htmlFor="fName" className="mb-2 text-gray-900 font-medium text-sm">First Name</label>
                                <input placeholder="xxxxxx" className={` focus:border-blue-300 text-sm  p-2.5 bg-gray-50  border-[1px] rounded-lg w-full`}

                                />
                            </div>


                            <div className=" flex flex-col w-full md:w-[210px] ">
                                <label htmlFor="lName" className="mb-2 text-gray-900 font-medium text-sm">Last Name</label>
                                <input placeholder="xxxxxx" className={` focus:border-blue-300 text-sm  p-2.5 bg-gray-50  border-[1px] rounded-lg w-full`}

                                />
                            </div>
                        </div>
                        <div>
                            <div className=" flex flex-col">
                                <label htmlFor="email2" className="mb-2 text-gray-900 font-medium text-sm" >E-Mail</label>

                                <input placeholder="xxxxxxxx@xxx.xxx" className={`focus:border-blue-300 text-sm  p-2.5 bg-gray-50 border-[1px] rounded-lg w-full `} id="email2" type="text" />


                            </div>

                        </div>
                        <div>
                            <div className=" flex flex-col">
                                <label htmlFor="password2" className="mb-2 text-gray-900 font-medium text-sm">password</label>
                                <div className="relative" >
                                    <input placeholder="************" className={` focus:border-blue-300 text-sm  p-2.5 bg-gray-50 border-[1px] rounded-lg w-full`} id="password" type={showPassword ? "text" : "password"} />
                                    {showPassword ? (<button aria-label="show password" onClick={displayPasswordHandler} className="absolute right-6 -translate-y-[-0.75em]">{HidePasswordIcon}</button>) : (<button aria-label="hide password" onClick={displayPasswordHandler} className="absolute right-6 -translate-y-[-0.75em]">{showPasswordIcon}</button>)}


                                </div>
                            </div>

                        </div>
                        <div>
                            <div className=" flex flex-col">
                                <label htmlFor="confirm-password" className="mb-2 text-gray-900 font-medium text-sm">Confirm password</label>

                                <div className="relative" >
                                    <input placeholder="************" className={` focus:border-blue-300 text-sm  p-2.5 bg-gray-50 border-[1px] rounded-lg w-full `} id="confirm-password" type={showPassword ? "text" : "password"} />
                                    {showPassword ? (<button aria-label="show password" onClick={displayPasswordHandler} className="absolute right-6 -translate-y-[-0.75em]">{HidePasswordIcon}</button>) : (<button aria-label="hide password" onClick={displayPasswordHandler} className="absolute right-6 -translate-y-[-0.75em]">{showPasswordIcon}</button>)}

                                </div>
                            </div>

                        </div>



                        <button aria-label="login" className="bg-primary-green mt-4 text-white capitalize font-semibold text-sm  p-2.5  border-gray-300 border-[1px] rounded-lg w-full" type="submit">
                            Registeration
                            {/* {loading === "pending" ?
                            (<>Please Wait for Checking <span className="loading loading-spinner loading-sm"></span></>) :
                            ("Log in")} */}
                        </button>

                        <span className="self-center"><span>Already have an account? </span><Link href={"/login"} className="text-blue-400 hover:underline dark:text-cyan-500 font-medium">Log In</Link></span>

                    </form >

                </div>
            </section>
        </div>

    )
}

export default Register