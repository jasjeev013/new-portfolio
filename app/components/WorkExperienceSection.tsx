"use client";
import Image from 'next/image'
import { motion } from 'framer-motion';
import { containerVariants, itemVariants, titleVariants, viewportConfig } from '@/lib/animations';

const WorkExperienceSection = () => {
    const experiences = [
        {
            id: 1,
            company: "ION Group",
            role: "Software Developer - Full Time",
            period: "Jan 2026 - Present",
            logo: "/workExperience/ion.png"
        },{
            id: 2,
            company: "Infosys",
            role: "Java Backend Developer - Intern",
            period: "Oct 2025 - Dec 2025",
            logo: "/workExperience/infosys.png"
        },{
            id: 3,
            company: "PearlThoughts",
            role: "Backend Developer -  Intern",
            period: "Jun 2025 - Aug 2025",
            logo: "/workExperience/PearlThoughts.png"
        },{
            id: 4,
            company: "Sopra Steria",
            role: "Java Backend Developer - Intern",
            period: "Aug 2024 - Oct 2024",
            logo: "/workExperience/sopra_steria.png"
        },
        {
            id: 5,
            company: "IBM Skills build",
            role: "Data Analytics - Intern",
            period: "Nov 2023 - Dec 2023",
            logo: "/workExperience/ibm.jpg"
        }
    ];

    return (
        <motion.div
            id='workExperience'
            className='bg-red lg:px-25 ml-5 md:ml-16 mt-15 md:px-0 sm:px-0'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
        >
            <motion.h1
                variants={titleVariants}
                className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white"
            >
                Work Experience
            </motion.h1>
            <div className='pl-2'>
                {experiences.map((exp) => (
                    <motion.div
                        key={exp.id}
                        variants={itemVariants}
                        className="flex items-start gap-6 mt-6"
                    >
                        <div className="shrink-0">
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                                <Image
                                    height={100}
                                    width={100}
                                    src={exp.logo}
                                    alt={`${exp.company} logo`}
                                    className="w-full h-full rounded-full"
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
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default WorkExperienceSection;