"use client";
import Image from 'next/image'
import { motion } from 'framer-motion';
import { containerVariants, itemVariants, viewportConfig } from '@/lib/animations';

const experiences = [
    {
        id: 1,
        company: "ION Group",
        role: "Software Developer - Full Time",
        period: "Jan 2026 - Present",
        logo: "/workExperience/ion.png"
    }, {
        id: 2,
        company: "Infosys",
        role: "Java Backend Developer - Intern",
        period: "Oct 2025 - Dec 2025",
        logo: "/workExperience/infosys.png"
    }, {
        id: 3,
        company: "PearlThoughts",
        role: "Backend Developer -  Intern",
        period: "Jun 2025 - Aug 2025",
        logo: "/workExperience/PearlThoughts.png"
    }, {
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

const WorkExperienceSection = () => {
    return (
        <motion.div
            id='workExperience'
            className='mt-16 scroll-mt-20'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
        >
            <h2 className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                Work Experience
            </h2>
            <div className='mt-4 divide-y divide-border border-t border-border'>
                {experiences.map((exp) => (
                    <motion.div
                        key={exp.id}
                        variants={itemVariants}
                        className="flex items-center gap-4 py-4"
                    >
                        <div className="shrink-0 w-9 h-9 rounded-full bg-white flex items-center justify-center overflow-hidden border border-border">
                            <Image
                                height={36}
                                width={36}
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <div className="flex-1 min-w-0">
                            <h3 className="text-sm sm:text-base font-medium text-foreground">{exp.company}</h3>
                            <p className="text-sm text-muted-foreground">{exp.role}</p>
                        </div>

                        <p className="font-mono text-xs text-muted-foreground text-right shrink-0">{exp.period}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default WorkExperienceSection;
