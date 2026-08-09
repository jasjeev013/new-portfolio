"use client";
import Image from 'next/image'
import { motion } from 'framer-motion';
import { containerVariants, itemVariants, viewportConfig } from '@/lib/animations';

const education = [
    {
        id: 1,
        institution: "Maharaja Agrasen Institute of Technology",
        degree: "Bachelors of Technology in Information Technology(IT)",
        period: "Nov 2022 - Jun 2026",
        logo: "/education/mait.jpeg"
    },
    {
        id: 2,
        institution: "New Era Public School",
        degree: "High School Secondary Education - CBSE",
        period: "Mar 2021 - Mar 2022",
        logo: "/education/newEra.png"
    }
];

const EducationSection = () => {
    return (
        <motion.div
            id='education'
            className='mt-16 scroll-mt-20'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
        >
            <h2 className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                Education
            </h2>
            <div className='mt-4 divide-y divide-border border-t border-border'>
                {education.map((edu) => (
                    <motion.div
                        key={edu.id}
                        variants={itemVariants}
                        className="flex items-center gap-4 py-4"
                    >
                        <div className="shrink-0 w-9 h-9 rounded-full bg-white flex items-center justify-center overflow-hidden border border-border">
                            <Image
                                height={36}
                                width={36}
                                src={edu.logo}
                                alt={`${edu.institution} logo`}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <div className="flex-1 min-w-0">
                            <h3 className="text-sm sm:text-base font-medium text-foreground">{edu.institution}</h3>
                            <p className="text-sm text-muted-foreground">{edu.degree}</p>
                        </div>

                        <p className="font-mono text-xs text-muted-foreground text-right shrink-0">{edu.period}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default EducationSection;
