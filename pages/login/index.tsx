import PageHeadTitle from "@/componenets/common/PageHeadTitle"
import JobsHeader from "@/componenets/jobsPage/JobsHeader"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"

const Login = () => {
    const route = useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const showPasswordIcon = <EyeIcon className="w-[15px]" />
    const HidePasswordIcon = <EyeSlashIcon className="w-[15px]" />

    const displayPasswordHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setShowPassword(!showPassword)
        e.preventDefault()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const validate = () => {
        let valid = true
        const newErrors = {
            email: '',
            password: ''
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
            valid = false
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Email is invalid'
            valid = false
        }

        if (!formData.password) {
            newErrors.password = 'Password is required'
            valid = false
        }

        setErrors(newErrors)
        return valid
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (validate()) {
            toast.success("You Successfully Logged in")
            setTimeout(() => {
                route.push("/")
            }, 2000)
        } else {
            toast.error("Please check errors in the form")
        }
    }

    return (
        <>
            <PageHeadTitle title={`login`} />
            <div className="">
                <Toaster />
                <JobsHeader headTitle={"login"} />
                <section className='mt-4 p-6 2xl:w-[1440px] mx-auto min-h-[600px] flex flex-col items-center gap-4'>
                    <div className="min-w-[320px] md:w-[400px] shadow-lg p-6 mt-4 rounded-2xl">
                        <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white py-2">Let&apos;s get started!</h3>
                        <div className="flex justify-center text-sm font-medium text-gray-500 dark:text-gray-300 py-4">
                            Not registered?&nbsp;
                            <Link href="/register" className="text-primary-green hover:underline">
                                Create account
                            </Link>
                        </div>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mx-auto mt-5 w-full text-gray-900">
                            <div className="flex flex-col">
                                <label htmlFor="email" className="mb-2 text-gray-900 font-semibold text-sm">Your E-Mail</label>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="xxxxxxxx@xxx.xxx"
                                    className={`focus:border-blue-300 text-sm p-2.5 bg-gray-50 border-[1px] rounded-lg w-full ${errors.email ? 'border-red-500' : ''}`}
                                />
                                {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="password" className="mb-2 text-gray-900 font-semibold text-sm">Your password</label>
                                <div className="relative">
                                    <input
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="************"
                                        className={`focus:border-primary-green text-sm p-2.5 bg-gray-50 border-[1px] rounded-lg w-full ${errors.password ? 'border-red-500' : ''}`}
                                        type={showPassword ? "text" : "password"}
                                    />
                                    <button
                                        onClick={displayPasswordHandler}
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                    >
                                        {showPassword ? HidePasswordIcon : showPasswordIcon}
                                    </button>
                                </div>
                                {errors.password && <span className="text-red-500 text-xs">{errors.password}</span>}
                            </div>

                            <button aria-label="login" className="bg-primary-green mt-4 text-white capitalize font-semibold text-sm p-2.5 border-gray-300 border-[1px] rounded-lg w-full" type="submit">
                                Log in
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Login