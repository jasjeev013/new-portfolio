'use client';
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef } from "react";

interface ProjectCardProps {
  videoUrl: string;
  title: string;
  description: string;
  technologies: string[];
  links: string[];
  linksName: string[];
}

const ProjectCard = ({ videoUrl, title, description, technologies, links, linksName }: ProjectCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => { console.warn('Autoplay blocked:', err); });
    }
  }, []);

  return (
    <div className="flex flex-col rounded-md overflow-hidden border border-border hover:border-accent/50 transition-colors">
      <div className="h-44 overflow-hidden border-b border-border">
        <video
          ref={videoRef}
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          controls={false}
        />
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-sm sm:text-base font-medium text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="tag">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-3 font-mono text-xs">
          {linksName.map((name, index) => (
            <a
              key={index}
              href={links[index]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors underline underline-offset-2 decoration-border"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
