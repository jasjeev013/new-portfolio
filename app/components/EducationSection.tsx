import Image from 'next/image'
import React from 'react'

const EducationSection = () => {
    return (
        <>
            <div id='education' className='bg-red lg:px-25 ml-5 md:ml-16 mt-15 md:px-0  sm:px-0 animate-blur-out-3 '>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white animate-slide-in-up-3">
                    Education
                </h1>
                <div className='pl-2'>
                    <div className="flex items-start gap-6 mt-6 animate-slide-in-up-3">

                        <div className="shrink-0">
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">

                                <Image height={100} width={100} src="/education/mait.jpeg" alt="Mait" className='w-full h-full rounded-full' />
                            </div>
                        </div>


                        <div className="flex-2">
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Maharaja Agrasen Institute of Technology</h2>
                            <p className=" text-md sm:text-lg text-gray-600 dark:text-gray-300">Bachelors of Technology in Information Technology(IT)</p>
                            <p className=" text-md sm:text-lg text-gray-600 dark:text-gray-300 sm:hidden block">Nov 2022 - Jun 2026</p>
                        </div>

                        <div className="flex-1 text-right sm:block hidden">
                            <p className="text-md sm:text-lg text-gray-600 dark:text-gray-300">Nov 2022 - Jun 2026</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-6 mt-6 animate-slide-in-up-3">

                        <div className="shrink-0 ">
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">

                                <Image height={100} width={100} src="/education/newEra.jfif" alt="Mait" className='w-full h-full rounded-full' />
                            </div>
                        </div>


                        <div className="flex-2">
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">New Era Public School</h2>
                            <p className="text-md sm:text-lg text-gray-600 dark:text-gray-300">High School Secondary Education - CBSE</p>
                       
                            <p className="text-md sm:text-lg text-gray-600 dark:text-gray-300 sm:hidden block">Mar 2021 - Mar 2022</p>
                        </div>

                        <div className="flex-1 text-right sm:block hidden ">
                            <p className="text-md sm:text-lg text-gray-600 dark:text-gray-300">Mar 2021 - Mar 2022</p>
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}

export default EducationSection
