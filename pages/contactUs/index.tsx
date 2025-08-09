import JobsHeader from '@/componenets/jobsPage/JobsHeader'
import ContactForm from '@/componenets/contact/ContactForm'
import ContactInfo from '@/componenets/contact/ContactInfo'
import PageHeadTitle from '@/componenets/common/PageHeadTitle'

const index = () => {
    return (
        <>
            <PageHeadTitle title='contact us' />

            <div>
                <JobsHeader headTitle={"Contact Us"} />
                <div className='my-4 p-6 2xl:w-[1440px] m-auto  min-h-[600px] flex flex-col lg:flex-row lg:items-start items-center justify-start md:justify-between  gap-4 capitalize'>

                    <ContactInfo />

                    <ContactForm />

                </div>

            </div>
        </>
    )
}

export default index
