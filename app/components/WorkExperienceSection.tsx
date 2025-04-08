import Image from 'next/image'
import React from 'react'

const WorkExperienceSection = () => {
    return (
        <>
            <div id='workExperience' className='bg-red lg:px-25 ml-5 md:ml-16 mt-15 md:px-0 sm:px-0 animate-blur-out-3 '>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white animate-slide-in-up-3">
                    Work Experience
                </h1>
                <div className='pl-2'>

                    <div className="flex items-start gap-6 mt-6 animate-slide-in-up-3">
          
                        <div className="shrink-0">
                            <div className="w-16 h-16 rounded-full bg-white dark:bg-whiteflex items-center justify-center">
      
                                <Image height={100} width={100} src="/workExperience/sopra_steria.png" alt="Logo" className='  rounded-full' />
                            </div>
                        </div>

       
                        <div className="flex-1">
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Sopra Steria</h2>
                            <p className="text-md sm:text-lg text-gray-600 dark:text-gray-300">Java Backend Developer</p>
                            <p className=" text-md sm:text-lg text-gray-600 dark:text-gray-300 sm:hidden block  ">Aug 2024 - Dec 2024</p>
                        </div>

         
                        <div className="flex-1 text-right sm:block hidden">
                            <p className=" text-md sm:text-lg text-gray-600 dark:text-gray-300 ">Aug 2024 - Dec 2024</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-6 mt-6 animate-slide-in-up-3">

                        <div className="shrink-0">
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                
                                <Image height={100} width={100} src="/workExperience/ibm.jpg" alt="Logo" className='  rounded-full' />
                            </div>
                        </div>

       
                        <div className="flex-1">
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">IBM Skills build</h2>
                            <p className="text-md sm:text-lg text-gray-600 dark:text-gray-300">Data Analytics Intern</p>
                            <p className="text-md sm:text-lg text-gray-600 dark:text-gray-300 sm:hidden block  ">Nov 2023 - Dec 2023</p>
                        </div>

                 
                        <div className="flex-1 text-right sm:block hidden">
                            <p className=" text-md sm:text-lg text-gray-600 dark:text-gray-300 ">Nov 2023 - Dec 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkExperienceSection
