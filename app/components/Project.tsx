'use client';
import { useRef, useState } from 'react'
import ProjectCard from './ProjectCard';
import { motion, AnimatePresence } from "framer-motion";
import { containerVariants, itemVariants, viewportConfig } from '@/lib/animations';

const projects = [
    {
        videoUrl: "https://res.cloudinary.com/dt8ndepvi/video/upload/v1756214832/GoRentzyy_lelant.mp4",
        title: "Go Rentzyy: Car Rental System",
        description: "A full-featured peer-to-peer car rental platform connecting Hosts and Renters with secure booking, dynamic pricing, and real-time availability. It streamlines car listing, payments, agreements, and admin controls for a seamless rental experience.",
        technologies: ["Next.js","Shadcn UI", "Spring Boot","OAuth 2.0","Razorpay", "PostgreSQL", "Containerization","JUnit","Redis","ElasticSearch","AWS S3","Twilio","Swagger"],
        linksName: ["GitHub","Docker"],
        links: ["https://github.com/jasjeev013/GoRentzyy","https://hub.docker.com/r/jasjeev1902/gorentzyy-backend"]
    },
    {
        videoUrl: "https://res.cloudinary.com/dt8ndepvi/video/upload/v1751886424/hustleHub_ny3w3v.mp4",
        title: "Hustle Hub: The Authentic Scheduler",
        description: "A Task Management System with secure authentication, task tracking, prioritization, categorization, and notifications. It helps users stay organized, prioritize tasks, and receive timely updates, ensuring smooth and efficient productivity.",
        technologies: ["Angular", "NgRx", "Spring Boot", "Spring Data JPA", "JWT", "PostgreSQL", "AWS EC2","Scheduling Algorithms","Cron job","Quartz Scheduler"],
        linksName: ["GitHub"],
        links: ["https://github.com/jasjeev013/hustle-hub"]
    },
    {
        videoUrl: "https://res.cloudinary.com/dt8ndepvi/video/upload/v1751886653/neighbourly_p1u81p.mp4",
        title: "Neighbourly: Let's Connect Communities",
        description: "Neighbourly connects people by allowing them to create, publish, and participate in events like hackathons, contests, and social services. Users can register, volunteer, and clarify doubts, promoting community engagement.",
        technologies: ["React", "Recoil", "Axios", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
        linksName: ["GitHub (Frontend)", "GitHub (Backend)", "Live (frontend)"],
        links: ["https://github.com/jasjeev013/neighbouly-frontend", "https://github.com/jasjeev013/neighbourly-backend", "https://neighbourly-ebon.vercel.app/"]
    },
    {
        videoUrl: "https://res.cloudinary.com/dt8ndepvi/video/upload/v1751886544/bharatRanch_p89ty2.mp4",
        title: "BharatRanch: The Ultimate Ranch",
        description: "It connects farmers and buyers for bulk transactions with minimal margins. It enables direct sales between farmers and dealers, while a chat feature facilitates seamless communication for buying, selling, and negotiating.",
        technologies: ["React", "Recoil", "Axios", "Material UI", "Node.js", "Express.js", "MongoDB", "Bootstrap", "Cloudinary"],
        linksName: ["GitHub"],
        links: ["https://github.com/jasjeev013/bharat-ranch"]
    },
    {
        videoUrl: "https://res.cloudinary.com/dt8ndepvi/video/upload/v1751886404/memoryHub_zjbsy7.mp4",
        title: "Memory Hub",
        description: "It is a web platform that lets users save important links, organize them with tags, and easily search by title, category, or tags. It offers a user-friendly interface for efficient link management.",
        technologies: ["React", "Redux", "Bootstrap", "Nodejs", "Express.js", "MongoDB", "Vercel"],
        linksName: ["GitHub", "Live (frontend)", "Live (backend)"],
        links: ["https://github.com/jasjeev013/memoryhub", "https://memoryhub.vercel.app/", "https://memoryhub-backend.vercel.app/"]
    },
    {
        videoUrl: "https://res.cloudinary.com/dt8ndepvi/video/upload/v1751886430/onelife_lawmuo.mp4",
        title: "OneLife: The God's Own",
        description: "It is a backend API that stores data on hospitals, including bed availability, doctor vacancies, and specializations. It helps users easily find hospitals by area or specialization, especially in emergencies, and collects important data for better healthcare management.",
        technologies: ["Springboot", "Spring", "Java", "MySQL", "Maven", "Swagger ui"],
        linksName: ["GitHub"],
        links: ["https://github.com/jasjeev013/OneLife"]
    }
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
        <motion.div
            id='projects'
            ref={projectSectionRef}
            className='mt-16 scroll-mt-20'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
        >
            <h2 className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                Projects
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
                <AnimatePresence>
                    {visibleProjects.map((project) => (
                        <motion.div
                            key={project.title}
                            exit={{ opacity: 0 }}
                            variants={itemVariants}
                        >
                            <ProjectCard
                                videoUrl={project.videoUrl}
                                title={project.title}
                                description={project.description}
                                technologies={project.technologies}
                                linksName={project.linksName}
                                links={project.links}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {projects.length > 4 && (
                <div className='flex justify-end mt-4'>
                    <button
                        onClick={toggleShowAll}
                        className="font-mono text-xs text-muted-foreground hover:text-accent transition-colors"
                        aria-label={showAll ? 'Show fewer projects' : 'Show more projects'}
                    >
                        {showAll ? '← show less' : 'see more →'}
                    </button>
                </div>
            )}
        </motion.div>
    )
}

export default Project
