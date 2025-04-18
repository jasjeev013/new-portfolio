'use client';
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef } from "react";

interface ProjectCardProps {
  videoUrl: string;
  title: string;
  description: string;
  technologies: string[];
  links: string[]; // Array of links
  posterUrl?: string; // Optional thumbnail image
  linksName: string[]; // Array of link names
}

const ProjectCard = ({ videoUrl, title, description, technologies, links, linksName, posterUrl }: ProjectCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Auto-play prevented:", error);
      });
    }
  }, []);

  return (
    <div
      className="flex flex-col rounded-lg overflow-hidden border border-zinc dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300"

    >
      {/* Project Video */}
      <div className="h-48 overflow-hidden relative">
        <video
          ref={videoRef}
          src={videoUrl}
          poster={posterUrl}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          controls={false}
        />

      </div>

      {/* Project Content */}
      <div className="p-2 flex-1 flex flex-col">
        <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-1">{description}</p>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs font-small text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {linksName.map((tech, index) => (

            <a
              key={index}
              href={links[index]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Badge key={index}> {tech} </Badge>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};


export default ProjectCard;