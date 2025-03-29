'use client';
import { GlareCard } from '@/components/ui/glare-card'
import { faGithub, faGoogle, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLink, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'


const IntroductionSection = () => {

    return (
        <div className="flex flex-row md:flow-col sm:flex-row animate-blur-out items-center justify-between gap-4 lg:px-25  ml-16 mt-25 md:px-0 sm:px-0 ">
            {/* First Div: Heading and Paragraph */}
            <div className="flex-2  space-y-4 animate-slide-in-up ">
                <h1 className="text-5xl  font-bold text-gray-900 dark:text-white">
                    Hi, I'm Jasjeev Singh K. <span className="waving-hand">👋🏻</span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Spring Boot and Full Stack Web Developer with a passion for building dynamic, scalable applications. Currently, I'm also exploring the exciting field of AI/ML to expand my skill set.
                </p>
                <div className="align-center justify-start ">
                    <p className='text-lg'>
                        <FontAwesomeIcon icon={faLocationDot} size='lg' />
                        &nbsp;&nbsp; New Delhi, India</p>
                </div>
                <div className='align-center justify-start px-1 mt-7 flex flex-row gap-10'>
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
            <div className="flex-1 w-50 h-50 justify-center  animate-slide-in-up align-center">
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
