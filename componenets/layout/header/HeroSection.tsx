import React from 'react'
import AnalysisBar from './AnalysisBar'
import SearchBar from './SearchBar'

const HeroSection = () => {
    return (
        <div className='p-6  min-h-[240px] flex flex-col justify-evenly items-center gap-1 bg-background-main'>
            <h2 className='text-2xl font-bold text-background-white'>Find Your Dream Job Today!</h2>
            <p className='text-center py-3 text-background-white'>Connecting Talent with Opportunity: Your Gateway to Career Success</p>
            <SearchBar />
            <AnalysisBar />
        </div>
    )
}

export default HeroSection
