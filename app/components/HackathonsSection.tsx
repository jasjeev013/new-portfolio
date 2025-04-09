'use client';
import { Badge } from '@/components/ui/badge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import React, { useState } from 'react'
import Image from 'next/image'

const HackathonsSection = () => {
    const [showAll, setShowAll] = useState(false);

    const hackathons = [
        {
            id: 1,
            logo: "/hackathons/smartIndia.png",
            title: "Smart India Hackathon 2024 Finalist",
            location: "Noida",
            date: "Aug 2024 - Dec 2024",
            description: "Worked on the Power Shakti project for Delhi's power demand forecasting with SCADA integration and contributed to the DVB-S2X satellite system for wave recognition and signal amplification.",
            certificateLink: "https://drive.google.com/file/d/1DAeRb6vscpivKjsHztSe1-Mg_IqaSMDS/view"
        },
        {
            id: 2,
            logo: "/hackathons/buildwithDelhi.jpeg",
            title: "Build With Delhi Hackathon Finalist",
            location: "Noida",
            date: "June 2024 - July 2024",
            description: "Developer on Neighboulry: Let's Connect Communities, a team project that reached the top 10 finalists. Worked primarily on the backend, contributing 20% to the frontend development.",
            certificateLink: "https://drive.google.com/file/d/11D-s2H6nfK_Kfd5d9wB3JEM9oFzF2Sam/view"
        },
        {
            id: 3,
            logo: "/hackathons/gssoc.jpeg",
            title: "GirlScript Summer of Code 2024",
            location: "Noida",
            date: "May 2024 - July 2024",
            description: "Contributed to open-source MERN projects, adding functionalities to the navbar, fixing bugs, and enhancing responsiveness.",
            certificateLink: "https://drive.google.com/file/d/12VaGp_-n4hywzNhvsojX5sh-SQTRY0PT/view?usp=sharing"
        },
        {
            id: 4,
            logo: "/hackathons/cloud.png",
            title: "Google Cloud Study Jam 2024 Finalist",
            location: "Noida",
            date: "Apr 2024 - June 2024",
            description: "Completed 4 cloud development courses, including Gen AI, Develop GenAI Apps with Gemini and Streamlit, Prompt Design in Vertex AI, and Level 3 GenAI: Prompt Engineering.",
            certificateLink: "https://drive.google.com/file/d/1BlfVgimE6XELmdjJlkoCbJdKuM6CFgYd/view"
        },
        {
            id: 5,
            logo: "/hackathons/cloud.png",
            title: "Google Cloud Study Jam 2023 Finalist",
            location: "Noida",
            date: "Nov 2023 - Feb 2024",
            description: "Completed various cloud learning series, including Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud.",
            certificateLink: "https://drive.google.com/file/d/1BlfVgimE6XELmdjJlkoCbJdKuM6CFgYd/view"
        },
        {
            id: 6,
            logo: "/hackathons/IBMseal.png",
            title: "IBM SkillsBuild Winter Certification Program",
            location: "Noida",
            date: "Nov 2023 - Dec 2023",
            description: "Gained hands-on experience with Pandas, NumPy, Power BI, Tableau, SQL, and databases, along with data visualization.",
            certificateLink: "https://drive.google.com/file/d/14JeY9f7cWNqUsqdNiOJ_wJ7ZjZdF46zM/view"
        }
    ];

    const visibleHackathons = showAll ? hackathons : hackathons.slice(0, 3);

    return (
        <div id='hackathon' className='bg-red lg:px-25 md:px-0 sm:px-0 ml-5 md:ml-16 mt-15 animate-blur-out-3'>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white animate-slide-in-up-3">
                    Hackathon & Contests
                </h1>

            </div>

            <div className='pl-2'>
                {visibleHackathons.map((hackathon) => (
                    <div key={hackathon.id} className="flex items-start gap-6 mt-6 animate-slide-in-up-3">
                        {/* Column 1: Logo */}
                        <div className="shrink-0">
                            <Image
                                height={100}
                                width={100}
                                src={hackathon.logo}
                                alt=""
                                className='w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center'
                            />
                        </div>

                        {/* Column 2: Details */}
                        <div className="flex-3/4">
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                                {hackathon.title}
                            </h2>
                            <p className="text-md sm:text-lg text-gray-600 dark:text-gray-300">
                                {hackathon.location}
                            </p>
                            <p className="text-md sm:text-lg text-gray-600 dark:text-gray-300 sm:hidden block">
                                {hackathon.date}
                            </p>
                            <p className="text-md sm:text-lg text-gray-600 dark:text-gray-300">
                                {hackathon.description}
                            </p>
                            <a
                                href={hackathon.certificateLink}
                                target='_blank'
                                rel="noopener noreferrer"
                                className='flex items-center gap-2'
                            >
                                <Badge className='text-sm mt-2'>
                                    <FontAwesomeIcon icon={faGithub} /> Certificate
                                </Badge>
                            </a>
                        </div>

                        {/* Column 3: Date (hidden on mobile) */}
                        <div className="flex-1/4 text-right sm:block hidden">
                            <p className="text-gray-600 dark:text-gray-300">
                                {hackathon.date}
                            </p>
                        </div>
                    </div>
                ))}
                <div className='flex mr-5 justify-end align-end'>
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline mt-5"
                    > <Badge className='text-sm mt-2 bg-blue-600 text-white'>
                        
                                {showAll ? 'Show Less' : 'See More'}
                      
                        </Badge>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default HackathonsSection
