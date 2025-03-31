import Link from 'next/link'
import React from 'react'

const AboutSection = () => {
    return (
        <>
            <div className='bg-red lg:px-25 ml-5 md:ml-16  mt-20 md:px-0 sm:px-0 animate-blur-out-2'>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white animate-slide-in-up-2">
                    About Me
                </h1>
                <p className='text-md mt-2 test-black dark:text-gray-300  animate-slide-in-up-2'>I'm Jasjeev Singh, an undergrad at <Link href='https://mait.ac.in/' target='_blank' className='text-black dark:text-white'>Maharaja Agrasen Institute of Technology</Link> , pursuing a B.Tech. I specialize in Java and Spring Boot, building scalable websites. As a Smart India Hackathon finalist and a two-year Google Cloud Study Jam participant, I’m currently exploring AI/ML. Outside of tech, I’m a graphic designer, video editor, and a chess enthusiast with a 900 rating.</p>
            </div>
        </>
    )
}

export default AboutSection
