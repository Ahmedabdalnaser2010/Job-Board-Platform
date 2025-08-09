import { useForm, ValidationError } from '@formspree/react';
import Lottie from 'lottie-react';
import done from "../../public/assets/animation/done.json"

export default function ContactForm() {

    const [state, handleSubmit] = useForm("mqalyrja");

    if (state.succeeded) {

        return <p className='flex  items-center justify-center gap-7 -z-1 mt-20 normal-case text-bold'>Your Email has been sent successfully!<Lottie loop={false} animationData={done} className='scale-[1.2] fill-primary-green'></Lottie> </p>;
    }
    return (
        <form className='p-5 bg-primary-background-lightgreen min-w-[320px] flex flex-col items-center shadow-lg rounded-2xl' onSubmit={handleSubmit}>
            <h2 className='font-bold p-2 text-2xl'>contact info</h2>
            <span className='text-xs mb-4'>Lorem ipsum dolor sit amet .</span>
            <div className='flex flex-col md:flex-row w-full  gap-4'>
                <div className='flex flex-col md:flex-wrap items-start gap-2 mt-3'>
                    <label htmlFor="fName" className='text-sm font-semibold'>first name</label>
                    <input type="text" name='fName' id='fName' placeholder='your name' className='p-2 w-full bg-background-white rounded-md' />
                    <ValidationError
                        prefix="fName"
                        field="fName"
                        errors={state.errors}
                    />
                </div>
                <div className='flex flex-col  gap-2 mt-3'>
                    <label htmlFor="lName" className='text-sm font-semibold '>last name</label>
                    <input type="text" name='lName' id='lName' placeholder='your name' className='p-2 w-full bg-background-white rounded-md' />
                    <ValidationError
                        prefix="lName"
                        field="lName"
                        errors={state.errors}
                    />
                </div>
            </div>
            <div className='flex flex-col md:flex-row w-full  gap-4'>
                <div className='flex flex-col items-start gap-2 mt-3 w-full'>
                    <label htmlFor="email" className='text-sm font-semibold '>e-mail</label>
                    <input type="text" name='email' id='email' placeholder='your E-Mail address' className='p-2 w-full bg-background-white rounded-md' />
                    <ValidationError
                        prefix="Email"
                        field="Email"
                        errors={state.errors}
                    />
                </div>
            </div>
            <div className='flex flex-col md:flex-row w-full  gap-4'>
                <div className='flex flex-col items-start gap-2 mt-3 w-full'>
                    <label htmlFor="message" className='text-sm font-semibold '>your message</label>
                    <textarea name='message' id='message' placeholder='your message' className='p-2 w-full bg-background-white rounded-md h-[120px]' />
                </div>
            </div>
            <button type='submit' className='w-full lg:w-[200px] text-center text-sm py-2 px-3 bg-primary-green text-background-white rounded-xl mt-4 capitalize lg:self-start' disabled={state.submitting}>send message</button>
        </form>

    )
}
