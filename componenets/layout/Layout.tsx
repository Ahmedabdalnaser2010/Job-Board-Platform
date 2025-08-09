import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import ScrollToTopArrow from '../common/ScrollToTopArrow'
import { Metadata } from 'next'

export const metadata: Metadata = {

    title: "jobs",
    description: "find your suitable job",
    icons: {
        icon: "/assets/icons/case.svg"
    }


}


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <ScrollToTopArrow />
            <Footer />
        </>

    )
}

export default Layout
