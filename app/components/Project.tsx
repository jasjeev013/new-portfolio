import React from 'react'
import ProjectCard from './ProjectCard';

const Project = () => {


    const projects = [
        {
            videoUrl: "https://res.cloudinary.com/dfhj4i9hd/video/upload/v1722333922/portfolio/csi_sn5jxx.mov",
            posterUrl: "/thumbnails/ecommerce-thumb.jpg",
            title: "Hustle Hub: The Authentic Scheduler",
            description: "A full-featured online store with payment integration.",
            technologies: ["React", "Node.js", "MongoDB"],
            links: ["GitHub", "Live Demo"]
        },
        {
            videoUrl: "/videos/taskapp-demo.mp4",
            posterUrl: "/thumbnails/taskapp-thumb.jpg",
            title: "Neighbourly: Let's Connect Communities",
            description: "Productivity application with team collaboration.",
            technologies: ["TypeScript", "Next.js", "Firebase"],
            links: ["GitHub", "Live Demo"]
        },
        {
            videoUrl: "/videos/weather-demo.mp4",
            posterUrl: "/thumbnails/weather-thumb.jpg",
            title: "Phishing Detection System",
            description: "Real-time weather information with forecasts.",
            technologies: ["React", "API Integration", "Chart.js"],
            links: ["GitHub", "Live Demo"]
        },
        {
            videoUrl: "/videos/weather-demo.mp4",
            posterUrl: "/thumbnails/weather-thumb.jpg",
            title: "Bharat Ranch",
            description: "Real-time weather information with forecasts.",
            technologies: ["React", "API Integration", "Chart.js"],
            links: ["GitHub", "Live Demo"]
        },
        {
            videoUrl: "/videos/weather-demo.mp4",
            posterUrl: "/thumbnails/weather-thumb.jpg",
            title: "Memory Hub",
            description: "Real-time weather information with forecasts.",
            technologies: ["React", "API Integration", "Chart.js"],
            links: ["GitHub", "Live Demo"]
        },
        {
            videoUrl: "/videos/weather-demo.mp4",
            posterUrl: "/thumbnails/weather-thumb.jpg",
            title: "OneLife: THe God's Own",
            description: "Real-time weather information with forecasts.",
            technologies: ["React", "API Integration", "Chart.js"],
            links: ["GitHub", "Live Demo"]
        },
        // Add more projects as needed
    ];
    return (
        <>
            <div id='project' className='bg-red lg:px-25 md:px-0 sm:px-0 ml-5 md:ml-16 mt-15 animate-blur-out-3 '>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white animate-slide-in-up-3">
                    Projects
                </h1>
                <div className="container mx-auto px-6 py-12">

                    <div className="grid grid-cols-1 md:grid-cols-2 p-2 lg:grid-cols-2 gap-5">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                videoUrl={project.videoUrl}
                                posterUrl={project.posterUrl}
                                title={project.title}
                                description={project.description}
                                technologies={project.technologies}
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
