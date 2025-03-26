import React from 'react'
import Navbar from '../components/Navbar'
import IntroductionSection from '../components/IntroductionSection'

import AboutSection from '../components/AboutSection'
import WorkExperienceSection from '../components/WorkExperienceSection'
import EducationSection from '../components/EducationSection'
import SkillsSections from '../components/SkillsSections'


const page = () => {
    return (
        <>
            <div className="w-full min-h-screen flex items-center justify-center bg-[#F0E3E3] dark:bg-[#010304] ">
                <div className=" w-[calc(100%-18rem)] min-h-screen border-l-[1px] border-r-[1px] border-white/30 p-4">
                    <Navbar />
                    <IntroductionSection />
                    <AboutSection />
                    <WorkExperienceSection />
                    <EducationSection/>
                    <SkillsSections/>
                </div>
            </div>
        </>

    )
}

export default page
