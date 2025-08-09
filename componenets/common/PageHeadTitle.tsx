import Head from 'next/head'
import React from 'react'

const PageHeadTitle = ({ title = "Job Platform - ALX" }: { title: string }) => {
    return (
        <Head>
            <title>Job Platform - ALX | {title}</title>
            <meta name='description' content="Job Platform - ALX" />
            <link rel="icon" href="/assets/icons/Icon+bg.svg" />
        </Head>
    )
}

export default PageHeadTitle
