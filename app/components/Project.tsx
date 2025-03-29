import React from 'react'
import ProjectCard from './ProjectCard';

const Project = () => {


    const projects = [
        {
            videoUrl: "/videos/ecommerce-demo.mp4",
            posterUrl: "/thumbnails/ecommerce-thumb.jpg",
            title: "E-commerce Platform",
            description: "A full-featured online store with payment integration.",
            technologies: ["React", "Node.js", "MongoDB"]
        },
        {
            videoUrl: "/videos/taskapp-demo.mp4",
            posterUrl: "/thumbnails/taskapp-thumb.jpg",
            title: "Task Management App",
            description: "Productivity application with team collaboration.",
            technologies: ["TypeScript", "Next.js", "Firebase"]
        },
        {
            videoUrl: "/videos/weather-demo.mp4",
            posterUrl: "/thumbnails/weather-thumb.jpg",
            title: "Weather Dashboard",
            description: "Real-time weather information with forecasts.",
            technologies: ["React", "API Integration", "Chart.js"]
        },
        {
            videoUrl: "/videos/weather-demo.mp4",
            posterUrl: "/thumbnails/weather-thumb.jpg",
            title: "Weather Dashboard",
            description: "Real-time weather information with forecasts.",
            technologies: ["React", "API Integration", "Chart.js"]
        },
        {
            videoUrl: "/videos/weather-demo.mp4",
            posterUrl: "/thumbnails/weather-thumb.jpg",
            title: "Weather Dashboard",
            description: "Real-time weather information with forecasts.",
            technologies: ["React", "API Integration", "Chart.js"]
        },
        {
            videoUrl: "/videos/weather-demo.mp4",
            posterUrl: "/thumbnails/weather-thumb.jpg",
            title: "Weather Dashboard",
            description: "Real-time weather information with forecasts.",
            technologies: ["React", "API Integration", "Chart.js"]
        },
        // Add more projects as needed
    ];
    return (
        <>
            <div id='project' className='bg-red lg:px-25 md:px-0 sm:px-0 mx-16 mt-15 animate-blur-out-3 '>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white animate-slide-in-up-3">
                    Projects
                </h1>
                <div className="container mx-auto px-4 py-12">
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">My Projects</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                videoUrl={project.videoUrl}
                                posterUrl={project.posterUrl}
                                title={project.title}
                                description={project.description}
                                technologies={project.technologies}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project
