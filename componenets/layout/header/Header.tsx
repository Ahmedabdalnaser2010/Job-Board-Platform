import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className='bg-background-main sticky top-0 z-10'>
            <header className='m-auto px-6 py-3 2xl:w-[1440px]'>
                <Navbar />
            </header>
        </div>
    )


}

export default Header
