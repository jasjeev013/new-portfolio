'use client';
import { Badge } from '@/components/ui/badge'
import React, { useRef, useState } from 'react'
import ProjectCard from './ProjectCard';
const projects = [


        {
            videoUrl: "https://res.cloudinary.com/dt8ndepvi/video/upload/v1751886424/hustleHub_ny3w3v.mp4",
            posterUrl: "/projectVideos/hustleHub.mp4",
            title: "Hustle Hub: The Authentic Scheduler",
            description: "A Task Management System with secure authentication, task tracking, prioritization, categorization, and notifications. It helps users stay organized, prioritize tasks, and receive timely updates, ensuring smooth and efficient productivity.",
            technologies: ["Angular", "NgRx", "Spring Boot", "Spring Data JPA", "JWT", "PostgreSQL", "AWS EC2"],
            linksName: ["GitHub"],
            links: ["https://github.com/jasjeev013/hustle-hub"]
        },
        {
            videoUrl: "https://res.cloudinary.com/dt8ndepvi/video/upload/v1751886653/neighbourly_p1u81p.mp4",
            posterUrl: "/projectVideos/neighbourly.mp4",
            title: "Neighbourly: Let's Connect Communities",
            description: "Neighbourly connects people by allowing them to create, publish, and participate in events like hackathons, contests, and social services. Users can register, volunteer, and clarify doubts, promoting community engagement.",
            technologies: ["React", "Recoil", "Axios", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
            linksName: ["GitHub (Frontend)", "GitHub (Backend)", "Live (frontend)"],
            links: ["https://github.com/jasjeev013/neighbouly-frontend", "https://github.com/jasjeev013/neighbourly-backend", "https://neighbourly-ebon.vercel.app/"]
        },
        {
            videoUrl: "https://res.cloudinary.com/dt8ndepvi/video/upload/v1751886544/bharatRanch_p89ty2.mp4",
            posterUrl: "/projectVideos/bharatRanch.mp4",
            title: "BharatRanch: The Ultimate Ranch",
            description: "It connects farmers and buyers for bulk transactions with minimal margins. It enables direct sales between farmers and dealers, while a chat feature facilitates seamless communication for buying, selling, and negotiating.",
            technologies: ["React", "Recoil", "Axios", "Material UI", "Node.js", "Express.js", "MongoDB", "Bootstrap", "Cloudinary"],
            linksName: ["GitHub"],
            links: ["https://github.com/jasjeev013/bharat-ranch"]
        },
        {
            videoUrl: "https://res.cloudinary.com/dt8ndepvi/video/upload/v1751886404/memoryHub_zjbsy7.mp4",
            posterUrl: "/projectVideos/memoryHub.mp4",
            title: "Memory Hub",
            description: "It is a web platform that lets users save important links, organize them with tags, and easily search by title, category, or tags. It offers a user-friendly interface for efficient link management.",
            technologies: ["React", "Redux", "Bootstrap", "Nodejs", "Express.js", "MongoDB", "Vercel"],
            linksName: ["GitHub", "Live (frontend)", "Live (backend)"],
            links: ["https://github.com/jasjeev013/memoryhub", "https://memoryhub.vercel.app/", "https://memoryhub-backend.vercel.app/"]
        },
        {
            videoUrl: "https://res.cloudinary.com/dt8ndepvi/video/upload/v1751886430/onelife_lawmuo.mp4",
            posterUrl: "/projectVideos/onelife.mp4",
            title: "OneLife: The God's Own",
            description: "It is a backend API that stores data on hospitals, including bed availability, doctor vacancies, and specializations. It helps users easily find hospitals by area or specialization, especially in emergencies, and collects important data for better healthcare management.",
            technologies: ["Springboot", "Spring", "Java", "MySQL", "Maven", "Swagger ui"],
            linksName: ["GitHub"],
            links: ["https://github.com/jasjeev013/OneLife"]
        }
        // Add more projects as needed
    ];

const Project = () => {

    const [showAll, setShowAll] = useState(false);
    const projectSectionRef = useRef<HTMLDivElement>(null);
    const visibleProjects = showAll ? projects : projects.slice(0, 4);

    const toggleShowAll = () => {
        const willShowAll = !showAll;
        setShowAll(willShowAll);

        if (!willShowAll && projectSectionRef.current) {
            projectSectionRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'end'
            });
        }
    };


    return (
        <>
            <div id='projects' ref={projectSectionRef} className='bg-red lg:px-25 md:px-0 sm:px-0 ml-5 md:ml-16 mt-15 animate-blur-out-3'>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white animate-slide-in-up-3">
                    Projects
                </h1>
                <div className="container mx-auto px-5 sm:px-14 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 p-2 lg:grid-cols-2 gap-7">
                        {visibleProjects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                videoUrl={project.videoUrl}
                                posterUrl={project.posterUrl}
                                title={project.title}
                                description={project.description}
                                technologies={project.technologies}
                                linksName={project.linksName}
                                links={project.links}
                            />
                        ))}
                    </div>

                    {projects.length > 4 && (
                    <div className='flex mr-5 justify-end align-end'>
                        <button
                            onClick={toggleShowAll}
                            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline mt-5"
                            aria-label={showAll ? 'Show fewer projects' : 'Show more projects'}
                        >
                            <Badge className='text-sm mt-2 bg-blue-600 text-white'>
                                {showAll ? 'Show Less' : 'See More'}
                            </Badge>
                        </button>
                    </div>
                )}
                </div>
            </div>
        </>
    )
}

export default Project
