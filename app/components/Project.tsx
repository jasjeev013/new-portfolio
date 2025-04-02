import React from 'react'
import ProjectCard from './ProjectCard';

const Project = () => {


    const projects = [
        {
            videoUrl: "/projectVideos/hustleHub.mp4",
            posterUrl: "/thumbnails/ecommerce-thumb.jpg",
            title: "Hustle Hub: The Authentic Scheduler",
            description: "A Task Management System with secure authentication, task tracking, prioritization, categorization, and notifications. It helps users stay organized, prioritize tasks, and receive timely updates, ensuring smooth and efficient productivity.",
            technologies: ["Angular","NgRx","Spring Boot","Spring Data JPA","JWT","PostgreSQL","Git","Github","AWS EC2"],
            linksName: ["GitHub"],
            links: ["https://github.com/jasjeev013/hustle-hub"]
        },
        {
            videoUrl: "/videos/taskapp-demo.mp4",
            posterUrl: "/thumbnails/taskapp-thumb.jpg",
            title: "Neighbourly: Let's Connect Communities",
            description: "Neighbourly connects people by allowing them to create, publish, and participate in events like hackathons, contests, and social services. Users can register, volunteer, and clarify doubts, promoting community engagement.",
            technologies: ["React","Recoil","Tailwind CSS","Node.js","Express.js","MongoDB","Git","Github"],
            linksName: ["GitHub (Frontend)","GitHub (Backend)", "Live Demo"],
            links: ["https://github.com/jasjeev013/neighbouly-frontend","https://github.com/jasjeev013/neighbourly-backend","https://neighbourly-ebon.vercel.app/"]
        },
        {
            videoUrl: "/videos/weather-demo.mp4",
            posterUrl: "/thumbnails/weather-thumb.jpg",
            title: "Phishing Detection System",
            description: "Real-time weather information with forecasts.",
            technologies: ["React", "API Integration", "Chart.js"],
            linksName: ["GitHub", "Live Demo"],
            links: ["https://github.com/jasjeev013/neighbouly-frontend","https://neighbourly-ebon.vercel.app/"]
        },
        {
            videoUrl: "/videos/weather-demo.mp4",
            posterUrl: "/thumbnails/weather-thumb.jpg",
            title: "Bharat Ranch",
            description: "Real-time weather information with forecasts.",
            technologies: ["React", "API Integration", "Chart.js"],
            linksName: ["GitHub", "Live Demo"],
            links: ["https://github.com/jasjeev013/hustle-hub","https://neighbourly-ebon.vercel.app/"]
        },
        {
            videoUrl: "/videos/weather-demo.mp4",
            posterUrl: "/thumbnails/weather-thumb.jpg",
            title: "Memory Hub",
            description: "Real-time weather information with forecasts.",
            technologies: ["React", "API Integration", "Chart.js"],
            linksName: ["GitHub", "Live Demo"],
            links: ["https://github.com/jasjeev013/hustle-hub","https://neighbourly-ebon.vercel.app/"]
        },
        {
            videoUrl: "/videos/weather-demo.mp4",
            posterUrl: "/thumbnails/weather-thumb.jpg",
            title: "OneLife: THe God's Own",
            description: "Real-time weather information with forecasts.",
            technologies: ["React", "API Integration", "Chart.js"],
            linksName: ["GitHub", "Live Demo"],
            links: ["https://github.com/jasjeev013/hustle-hub","https://neighbourly-ebon.vercel.app/"]
        },
        // Add more projects as needed
    ];
    return (
        <>
            <div id='project' className='bg-red lg:px-25 md:px-0 sm:px-0 ml-5 md:ml-16 mt-15 animate-blur-out-3 '>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white animate-slide-in-up-3">
                    Projects
                </h1>
                <div className="container mx-auto px-14 py-12">

                    <div className="grid grid-cols-1 md:grid-cols-2 p-2 lg:grid-cols-2 gap-7">
                        {projects.map((project, index) => (
                          
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
                </div>
            </div>
        </>
    )
}

export default Project
