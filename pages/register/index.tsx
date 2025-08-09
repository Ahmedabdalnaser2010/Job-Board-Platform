import PageHeadTitle from "@/componenets/common/PageHeadTitle"
import JobsHeader from "@/componenets/jobsPage/JobsHeader"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"

const Register = () => {
    const route = useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
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
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required'
            valid = false
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required'
            valid = false
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
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters'
            valid = false
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match'
            valid = false
        }

        setErrors(newErrors)
        return valid
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (validate()) {
            toast.success("Your Account Created Successfully, please Login...")
            setTimeout(() => {
                route.push("/login")
            }, 2000)
        } else {
            toast.error("Please fix the errors in the form")
        }
    }

    return (
        <>
            <PageHeadTitle title={`Registeration`} />
            <div className="">
                <Toaster />
                <JobsHeader headTitle={"Registeration"} />
                <section className='mt-4 p-6 2xl:w-[1440px] mx-auto min-h-[600px] flex flex-col items-center gap-4'>
                    <div className="min-w-[320px] shadow-lg p-6 mt-4 rounded-2xl">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mx-auto mt-5 w-full text-gray-900">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-1">
                                <div className="flex flex-col w-full md:w-[210px]">
                                    <label htmlFor="firstName" className="mb-2 text-gray-900 font-medium text-sm">First Name</label>
                                    <input
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="xxxxxx"
                                        className={`focus:border-blue-300 text-sm p-2.5 bg-gray-50 border-[1px] rounded-lg w-full ${errors.firstName ? 'border-red-500' : ''}`}
                                    />
                                    {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName}</span>}
                                </div>

                                <div className="flex flex-col w-full md:w-[210px]">
                                    <label htmlFor="lastName" className="mb-2 text-gray-900 font-medium text-sm">Last Name</label>
                                    <input
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="xxxxxx"
                                        className={`focus:border-blue-300 text-sm p-2.5 bg-gray-50 border-[1px] rounded-lg w-full ${errors.lastName ? 'border-red-500' : ''}`}
                                    />
                                    {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName}</span>}
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="email" className="mb-2 text-gray-900 font-medium text-sm">E-Mail</label>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="xxxxxxxx@xxx.xxx"
                                    className={`focus:border-blue-300 text-sm p-2.5 bg-gray-50 border-[1px] rounded-lg w-full ${errors.email ? 'border-red-500' : ''}`}
                                    type="text"
                                />
                                {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="password" className="mb-2 text-gray-900 font-medium text-sm">Password</label>
                                <div className="relative">
                                    <input
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="************"
                                        className={`focus:border-blue-300 text-sm p-2.5 bg-gray-50 border-[1px] rounded-lg w-full ${errors.password ? 'border-red-500' : ''}`}
                                        type={showPassword ? "text" : "password"}
                                    />
                                    {showPassword ? (
                                        <button aria-label="show password" onClick={displayPasswordHandler} className="absolute right-6 -translate-y-[-0.75em]">{HidePasswordIcon}</button>
                                    ) : (
                                        <button aria-label="hide password" onClick={displayPasswordHandler} className="absolute right-6 -translate-y-[-0.75em]">{showPasswordIcon}</button>
                                    )}
                                </div>
                                {errors.password && <span className="text-red-500 text-xs">{errors.password}</span>}
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="confirmPassword" className="mb-2 text-gray-900 font-medium text-sm">Confirm Password</label>
                                <div className="relative">
                                    <input
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="************"
                                        className={`focus:border-blue-300 text-sm p-2.5 bg-gray-50 border-[1px] rounded-lg w-full ${errors.confirmPassword ? 'border-red-500' : ''}`}
                                        type={showPassword ? "text" : "password"}
                                    />
                                    {showPassword ? (<button aria-label="show password" onClick={displayPasswordHandler} className="absolute right-6 -translate-y-[-0.75em]">{HidePasswordIcon}</button>) : (<button aria-label="hide password" onClick={displayPasswordHandler} className="absolute right-6 -translate-y-[-0.75em]">{showPasswordIcon}</button>)}
                                </div>
                                {errors.confirmPassword && <span className="text-red-500 text-xs">{errors.confirmPassword}</span>}
                            </div>

                            <button aria-label="login" className="bg-primary-green mt-4 text-white capitalize font-semibold text-sm p-2.5 border-gray-300 border-[1px] rounded-lg w-full" type="submit">
                                Registeration
                            </button>

                            <span className="self-center">
                                <span>Already have an account? </span>
                                <Link href={"/login"} className="text-primary-green hover:underline dark:text-cyan-500 font-medium">Log In</Link>
                            </span>
                        </form>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Register