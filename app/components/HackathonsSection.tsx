import { Badge } from '@/components/ui/badge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

const HackathonsSection = () => {
    return (
        <>
            <div id='hackathon' className='bg-red lg:px-25 md:px-0 sm:px-0  ml-5 md:ml-16 mt-15 animate-blur-out-3 '>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white animate-slide-in-up-3">
                    Hackathon & Contests
                </h1>
                <div className='pl-2'>

                    <div className="flex items-start gap-6 mt-6 animate-slide-in-up-3">
                        {/* Column 1: Logo */}
                        <div className="shrink-0">
                            <div className="">
                                {/* Replace with your logo */}
                                <img src="profile.jpeg" alt="" className='w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center' />
                            </div>
                        </div>

                        {/* Column 2: Heading with subheading (left aligned) */}
                        <div className="flex-3/4">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Smart India Hackathon 2024 Finalist</h2>
                            <p className="text-gray-600 dark:text-gray-300">Noida</p>
                            <p className="text-gray-600 dark:text-gray-300 sm:hidden block ">Nov 2024 - Feb 2025</p>
                            <p className="text-gray-600 dark:text-gray-300">Java Backend Developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus corrupti blanditiis,</p>
                            <Badge className='text-sm mt-2'>  <FontAwesomeIcon icon={faGithub} />Repo</Badge>
                        </div>

                        {/* Column 3: Second subheading (left aligned) */}
                        <div className="flex-1/4 text-right sm:block hidden ">
                            <p className="text-gray-600 dark:text-gray-300 ">Nov 2024 - Feb 2025</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-6 mt-6 animate-slide-in-up-3">
                        {/* Column 1: Logo */}
                        <div className="shrink-0">
                            <div className="">
                                {/* Replace with your logo */}
                                <img src="profile.jpeg" alt="" className='w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center' />
                            </div>
                        </div>

                        {/* Column 2: Heading with subheading (left aligned) */}
                        <div className="flex-3/4">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Build With Delhi Hackathon Finalist </h2>
                            <p className="text-gray-600 dark:text-gray-300">Noida</p>
                            <p className="text-gray-600 dark:text-gray-300 sm:hidden block ">Nov 2024 - Feb 2025</p>
                            <p className="text-gray-600 dark:text-gray-300">Java Backend Developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus corrupti blanditiis,</p>
                            <Badge className='text-sm mt-2'>  <FontAwesomeIcon icon={faGithub} />Repo</Badge>
                        </div>

                        {/* Column 3: Second subheading (left aligned) */}
                        <div className="flex-1/4 text-right sm:block hidden ">
                            <p className="text-gray-600 dark:text-gray-300 ">Nov 2024 - Feb 2025</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-6 mt-6 animate-slide-in-up-3">
                        {/* Column 1: Logo */}
                        <div className="shrink-0">
                            <div className="">
                                {/* Replace with your logo */}
                                <img src="profile.jpeg" alt="" className='w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center' />
                            </div>
                        </div>

                        {/* Column 2: Heading with subheading (left aligned) */}
                        <div className="flex-3/4">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Google Cloud Study Jam 2024 Finalist </h2>
                            <p className="text-gray-600 dark:text-gray-300">Noida</p>
                            <p className="text-gray-600 dark:text-gray-300 sm:hidden block ">Nov 2024 - Feb 2025</p>
                            <p className="text-gray-600 dark:text-gray-300">Java Backend Developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus corrupti blanditiis,</p>
                            <Badge className='text-sm mt-2'>  <FontAwesomeIcon icon={faGithub} />Repo</Badge>
                        </div>

                        {/* Column 3: Second subheading (left aligned) */}
                        <div className="flex-1/4 text-right sm:block hidden ">
                            <p className="text-gray-600 dark:text-gray-300 ">Nov 2024 - Feb 2025</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-6 mt-6 animate-slide-in-up-3">
                        {/* Column 1: Logo */}
                        <div className="shrink-0">
                            <div className="">
                                {/* Replace with your logo */}
                                <img src="profile.jpeg" alt="" className='w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center' />
                            </div>
                        </div>

                        {/* Column 2: Heading with subheading (left aligned) */}
                        <div className="flex-3/4">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">IBM SkillsBuild Winter Certification Program</h2>
                            <p className="text-gray-600 dark:text-gray-300">Noida</p>
                            <p className="text-gray-600 dark:text-gray-300 sm:hidden block ">Nov 2024 - Feb 2025</p>
                            <p className="text-gray-600 dark:text-gray-300">Java Backend Developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus corrupti blanditiis,</p>
                            <Badge className='text-sm mt-2'>  <FontAwesomeIcon icon={faGithub} />Repo</Badge>
                        </div>

                        {/* Column 3: Second subheading (left aligned) */}
                        <div className="flex-1/4 text-right sm:block hidden ">
                            <p className="text-gray-600 dark:text-gray-300 ">Nov 2024 - Feb 2025</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-6 mt-6 animate-slide-in-up-3">
                        {/* Column 1: Logo */}
                        <div className="shrink-0">
                            <div className="">
                                {/* Replace with your logo */}
                                <img src="profile.jpeg" alt="" className='w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center' />
                            </div>
                        </div>

                        {/* Column 2: Heading with subheading (left aligned) */}
                        <div className="flex-3/4">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Google Cloud Study Jam 2023 Finalist</h2>
                            <p className="text-gray-600 dark:text-gray-300">Noida</p>
                            <p className="text-gray-600 dark:text-gray-300 sm:hidden block ">Nov 2024 - Feb 2025</p>
                            <p className="text-gray-600 dark:text-gray-300">Java Backend Developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus corrupti blanditiis,</p>
                            <Badge className='text-sm mt-2'>  <FontAwesomeIcon icon={faGithub} />Repo</Badge>
                        </div>

                        {/* Column 3: Second subheading (left aligned) */}
                        <div className="flex-1/4 text-right sm:block hidden ">
                            <p className="text-gray-600 dark:text-gray-300 ">Nov 2024 - Feb 2025</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-6 mt-6 animate-slide-in-up-3">
                        {/* Column 1: Logo */}
                        <div className="shrink-0">
                            <div className="">
                                {/* Replace with your logo */}
                                <img src="profile.jpeg" alt="" className='w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center' />
                            </div>
                        </div>

                        {/* Column 2: Heading with subheading (left aligned) */}
                        <div className="flex-3/4">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">GirlScript Summer of Code 2024</h2>
                            <p className="text-gray-600 dark:text-gray-300">Noida</p>
                            <p className="text-gray-600 dark:text-gray-300 sm:hidden block ">Nov 2024 - Feb 2025</p>
                            <p className="text-gray-600 dark:text-gray-300">Java Backend Developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus corrupti blanditiis,</p>
                            <Badge className='text-sm mt-2'>  <FontAwesomeIcon icon={faGithub} />Repo</Badge>
                        </div>

                        {/* Column 3: Second subheading (left aligned) */}
                        <div className="flex-1/4 text-right sm:block hidden ">
                            <p className="text-gray-600 dark:text-gray-300 ">Nov 2024 - Feb 2025</p>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default HackathonsSection
