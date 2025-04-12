import React from 'react'
import Navbar from '../components/Navbar'
import IntroductionSection from '../components/IntroductionSection'

import AboutSection from '../components/AboutSection'
import WorkExperienceSection from '../components/WorkExperienceSection'
import EducationSection from '../components/EducationSection'
import SkillsSections from '../components/SkillsSections'
import Project from '../components/Project'
import HackathonsSection from '../components/HackathonsSection'
import ContactMe from '../components/ContactMe'
import FooterSection from '../components/FooterSection'



const page = () => {
    return (
        <>
            <div className=" w-full min-h-screen flex items-center justify-center bg-[#F0E3E3] dark:bg-[#010304] ">
                <div className=" w-full xl:w-[calc(75rem)] lg:w-[calc(100%-2rem)] md:w-full sm:w-full  min-h-screen   sm:p-4 "> {/* lg:border-l-[1px] lg:border-r-[1px] lg:border-white/30 */}
                    <Navbar />
                    <IntroductionSection />
                    <AboutSection />
                    <WorkExperienceSection />
                    <EducationSection />
                    <SkillsSections />
                    <Project />
                    <HackathonsSection />
                    <ContactMe />
                    <FooterSection />
                </div>
            </div>



        </>

    )
}

export default page
