'use client';
import { Badge } from "@/components/ui/badge";
import { useRef } from "react";

interface ProjectCardProps {
    videoUrl: string;
    title: string;
    description: string;
    technologies: string[];
    posterUrl?: string; // Optional thumbnail image
  }
  
  const ProjectCard = ({ videoUrl, title, description, technologies, posterUrl }: ProjectCardProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
  
    const handleMouseEnter = () => {
      videoRef.current?.play();
    };
  
    const handleMouseLeave = () => {
      videoRef.current?.pause();
      if (videoRef.current) videoRef.current.currentTime = 0;
    };
  
    return (
      <div 
        className="flex flex-col rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Project Video */}
        <div className="h-48 overflow-hidden relative">
          <video
            ref={videoRef}
            src={videoUrl}
            poster={posterUrl}
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            controls={false} // We'll handle controls via hover
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-30">
            <span className="text-white text-sm font-medium">Hover to play</span>
          </div>
        </div>
        
        {/* Project Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{description}</p>
          
          {/* Technology Badges */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge 
                key={tech}
                variant="outline"
                className="text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

export default ProjectCard;