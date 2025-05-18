import Image from 'next/image'

// This component can be fully server-rendered
const WorkExperienceSection = () => {
    const experiences = [
        {
            id: 1,
            company: "Sopra Steria",
            role: "Java Backend Developer",
            period: "Aug 2024 - Dec 2024",
            logo: "/workExperience/sopra_steria.png"
        },
        {
            id: 2,
            company: "IBM Skills build",
            role: "Data Analytics Intern",
            period: "Nov 2023 - Dec 2023",
            logo: "/workExperience/ibm.jpg"
        }
    ];

    return (
        <div id='workExperience' className='bg-red lg:px-25 ml-5 md:ml-16 mt-15 md:px-0 sm:px-0 animate-blur-out-3'>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white animate-slide-in-up-3">
                Work Experience
            </h1>
            <div className='pl-2'>
                {experiences.map((exp) => (
                    <div key={exp.id} className="flex items-start gap-6 mt-6 animate-slide-in-up-3">
                        <div className="shrink-0">
                            <div className="w-16 h-16 rounded-full bg-white dark:bg-white flex items-center justify-center">
                                <Image 
                                    height={100} 
                                    width={100} 
                                    src={exp.logo} 
                                    alt={`${exp.company} logo`} 
                                    className="rounded-full"
                                />
                            </div>
                        </div>

                        <div className="flex-1">
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">{exp.company}</h2>
                            <p className="text-md sm:text-lg text-gray-600 dark:text-gray-300">{exp.role}</p>
                            <p className="text-md sm:text-lg text-gray-600 dark:text-gray-300 sm:hidden block">{exp.period}</p>
                        </div>

                        <div className="flex-1 text-right sm:block hidden">
                            <p className="text-md sm:text-lg text-gray-600 dark:text-gray-300">{exp.period}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WorkExperienceSection;