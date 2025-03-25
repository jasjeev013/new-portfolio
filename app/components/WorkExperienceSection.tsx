import React from 'react'

const WorkExperienceSection = () => {
    return (
        <>
            <div id='workExperience' className='bg-red px-25 ml-16 mr-16 mt-20 animate-blur-out-3 '>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white animate-slide-in-up-3">
                    Work Experience
                </h1>

                <div className="flex items-center gap-6 mt-6 animate-slide-in-up-3">
                    {/* Column 1: Logo */}
                    <div className="shrink-0">
                        <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                            {/* Replace with your logo */}
                            <span className="text-lg">LOGO</span>
                        </div>
                    </div>

                    {/* Column 2: Heading with subheading (left aligned) */}
                    <div className="flex-1">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Sopra Steria</h2>
                        <p className="text-gray-600 dark:text-gray-300">Java Backend Developer</p>
                    </div>

                    {/* Column 3: Second subheading (left aligned) */}
                    <div className="flex-1 text-right ">
                        <p className="text-gray-600 dark:text-gray-300">Nov 2024 - Feb 2025</p>
                    </div>
                </div>
                <div className="flex items-center gap-6 mt-6 animate-slide-in-up-3">
                    {/* Column 1: Logo */}
                    <div className="shrink-0">
                        <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                            {/* Replace with your logo */}
                            <span className="text-lg">LOGO</span>
                        </div>
                    </div>

                    {/* Column 2: Heading with subheading (left aligned) */}
                    <div className="flex-1">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Sopra Steria</h2>
                        <p className="text-gray-600 dark:text-gray-300">Java Backend Developer</p>
                    </div>

                    {/* Column 3: Second subheading (left aligned) */}
                    <div className="flex-1 text-right ">
                        <p className="text-gray-600 dark:text-gray-300">Nov 2024 - Feb 2025</p>
                    </div>
                </div>
                <div className="flex items-center gap-6 mt-6 animate-slide-in-up-3">
                    {/* Column 1: Logo */}
                    <div className="shrink-0">
                        <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                            {/* Replace with your logo */}
                            <span className="text-lg">LOGO</span>
                        </div>
                    </div>

                    {/* Column 2: Heading with subheading (left aligned) */}
                    <div className="flex-1">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Sopra Steria</h2>
                        <p className="text-gray-600 dark:text-gray-300">Java Backend Developer</p>
                    </div>

                    {/* Column 3: Second subheading (left aligned) */}
                    <div className="flex-1 text-right ">
                        <p className="text-gray-600 dark:text-gray-300">Nov 2024 - Feb 2025</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkExperienceSection
