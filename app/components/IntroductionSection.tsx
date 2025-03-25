'use client';
import { GlareCard } from '@/components/ui/glare-card'
import React from 'react'

const IntroductionSection = () => {
    return (
        <div className="flex flex-col md:flex-row   animate-blur-out items-center justify-between gap-4 px-25 ml-16 mt-25">
            {/* First Div: Heading and Paragraph */}
            <div className="flex-2 space-y-4 animate-slide-in-up ">
                <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
                    Hi, I'm Jasjeev Singh K. 👋🏻
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Spring Boot & Full Stack Web Developer with a passion for technology and startups. Like everyone else, currently exploring AIML & DL.
                </p>
                <div className="align-center justify-start ">
                    <p className='text-lg'>
                        <i className="fa-solid fa-location-dot fa-lg px-1"></i>
                        &nbsp;&nbsp; New Delhi, India</p>
                </div>
                <div className='align-center justify-start px-1 mt-7 flex flex-row gap-10'>
                    <a href="https://github.com/jasjeev013"><i className="fa-brands fa-github  fa-lg"></i></a>
                    <a href="https://www.linkedin.com/in/jasjeev-singh-k-773238247/"><i className="fa-brands fa-linkedin fa-lg"></i></a>
                    <a href="https://x.com/jskkk_013"><i className="fa-brands fa-x-twitter fa-lg"></i></a>
                    <a href="mailto:jasjeev99@gmail.com"><i className="fa-solid fa-envelope fa-lg"></i></a>
                    <a href="https://linktr.ee/jskkk_013"><i className="fa-solid fa-link fa-lg"></i></a>
                    <a href="https://www.cloudskillsboost.google/public_profiles/4b35e1aa-f724-4a09-be18-e15325912653"><i className="fa-brands fa-google fa-lg"></i></a>
                </div>
            </div>

            {/* Second Div: Photo with Red Shadow */}
            <div className="flex-1 w-50 h-50 flex justify-center md:justify-center animate-slide-in-up align-center">
                <GlareCard className="flex flex-col items-center justify-center">
                    <div className="relative w-50 h-50 rounded-2xl overflow-hidden group">
                        {/* Photo */}
                        <img
                            src="/profile.jpeg"
                            alt="Jasjeev"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </GlareCard>
            </div>
        </div>
    )
}
export default IntroductionSection
