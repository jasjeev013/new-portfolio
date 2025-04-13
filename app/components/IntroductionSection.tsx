'use client';
import { GlareCard } from '@/components/ui/glare-card'
import { faGithub, faGoogle, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLink, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Image from 'next/image'


const IntroductionSection = () => {

    return (
        <>
            <div className='flex flex-col items-start justify-start w-full h-full sm:mt-6 mt-3 '>

                <div className="flex flex-row md:flow-col sm:flex-row animate-blur-out item-start sm:items-center  justify-between gap-4 lg:px-25 ml-5 md:ml-16 mt-25 md:px-0 sm:px-0 ">

                    <div className="flex-3/4 sm:flex-2 space-y-4 animate-slide-in-up ">
                        <h1 className=" text-2xl sm:text-4xl flex flex-row  font-bold text-gray-900 dark:text-white">
                            {`Hi, I'm Jasjeev Singh K. 👋🏻`}

                        </h1>
                        <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-300">
                            {`Spring Boot and Full Stack Web Developer with a passion for building dynamic, scalable applications. Currently, I'm also exploring the exciting field of AI/ML to expand my skill set.`}
                        </p>
                        <div className="align-center justify-start ">
                            <p className='text-sm sm:text-lg'>
                                <FontAwesomeIcon icon={faLocationDot} size='lg' />
                                &nbsp;&nbsp; New Delhi, India</p>
                        </div>
                        <div className='hidden sm:flex align-center text-sm sm:text-lg justify-start px-1 mt-7 flex flex-row gap-2  sm:gap-10'>
                            <a href="https://github.com/jasjeev013" target="_blank"
                                rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} size='lg' /></a>
                            <a href="https://www.linkedin.com/in/jasjeev-singh-k-773238247/" target="_blank"
                                rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size='lg' /></a>
                            <a href="https://x.com/jskkk_013" target="_blank"
                                rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} size='lg' /></a>
                            <a href="mailto:jasjeev99@gmail.com" target="_blank"
                                rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} size='lg' /></a>
                            <a href="https://linktr.ee/jskkk_013" target="_blank"
                                rel="noopener noreferrer"><FontAwesomeIcon icon={faLink} size='lg' /></a>
                            <a href="https://www.cloudskillsboost.google/public_profiles/4b35e1aa-f724-4a09-be18-e15325912653" target="_blank"
                                rel="noopener noreferrer"><FontAwesomeIcon icon={faGoogle} size='lg' /></a>
                        </div>

                    </div>

                    {/* Second Div: Photo with Red Shadow */}
                    <div className=" hidden sm:flex   animate-slide-in-up flex items-start  sm:items-center justify-center">
                        <GlareCard className="flex sm:flex flex-col w-30 h-30 sm:w-50  sm:h-50">
                            <div className="relative  w-30 h-30 sm:w-50  sm:h-50  rounded-md sm:rounded-2xl overflow-hidden group">
                                {/* Photo */}
                                <Image
                                    src="/profile.jpeg"
                                    alt="Jasjeev"
                                    className="w-full h-full object-cover"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </GlareCard>
                    </div>
                    {/* Second Div: Photo with Red Shadow */}
                    <div className=" flex-1/4 sm:hidden   animate-slide-in-up flex items-start  sm:items-center justify-center">
                        <GlareCard className="flex flex-col ">
                            <div className="relative w-30 h-30 sm:w-50  sm:h-50  rounded-sm sm:rounded-2xl overflow-hidden group">
                                {/* Photo */}
                                <Image
                                    src="/profile.jpeg"
                                    alt="Jasjeev"
                                    className="w-full h-full object-cover"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </GlareCard>
                    </div>
                </div>
                <div className='flex sm:hidden align-center animate-blur-out animate-slide-in-up-2 text-sm sm:text-lg justify-start px-1 mt-7 flex flex-row gap-7 ml-4 sm:gap-10'>
                    <a href="https://github.com/jasjeev013" target="_blank"
                        rel="noopener noreferrer" className='animate-blur-out-2  '> <FontAwesomeIcon icon={faGithub} size='lg' /></a>
                    <a href="https://www.linkedin.com/in/jasjeev-singh-k-773238247/" target="_blank"
                        rel="noopener noreferrer" className='animate-blur-out-2 '><FontAwesomeIcon icon={faLinkedin} size='lg' /></a>
                    <a href="https://x.com/jskkk_013" target="_blank"
                        rel="noopener noreferrer" className='animate-blur-out-2 '><FontAwesomeIcon icon={faXTwitter} size='lg' /></a>
                    <a href="mailto:jasjeev99@gmail.com" target="_blank"
                        rel="noopener noreferrer" className='animate-blur-out-2 '><FontAwesomeIcon icon={faEnvelope} size='lg' /></a>
                    <a href="https://linktr.ee/jskkk_013" target="_blank"
                        rel="noopener noreferrer" className='animate-blur-out-2 '><FontAwesomeIcon icon={faLink} size='lg' /></a>
                    <a href="https://www.cloudskillsboost.google/public_profiles/4b35e1aa-f724-4a09-be18-e15325912653" target="_blank"
                        rel="noopener noreferrer" className='animate-blur-out-2 '><FontAwesomeIcon icon={faGoogle} size='lg' /></a>
                </div>
            </div>
        </>
    )
}
export default IntroductionSection
