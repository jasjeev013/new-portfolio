"use client";
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion';
import { containerVariants, itemVariants, titleVariants, viewportConfig } from '@/lib/animations';

const skills = [
  { label: "Frontend", items: ["JavaScript", "React", "Angular", "Tailwind CSS", "TypeScript", "Next.js"] },
  { label: "Backend", items: ["Node.js", "Express", "Bun.js", "EJS", "Spring Boot"] },
  { label: "Database", items: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Firebase", "AWS RDS"] },
  { label: "DevOps", items: ["Kafka", "Nginx", "Docker", "Kubernetes", "AWS", "Azure", "GCP"] },
  { label: "AI/ML", items: ["Python", "Flask", "Streamlit", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "NLP"] },
  { label: "Business Tools", items: ["Jira", "Confluence", "GitHub", "GitLab", "Power BI"] }
];

const SkillsSections = () => {
    return (
        <motion.div
            id='skills'
            className='bg-red lg:px-25 md:px-0 sm:px-0 ml-5 md:ml-16 mt-15'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
        >
            <motion.h1
                variants={titleVariants}
                className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white"
            >
                Skills
            </motion.h1>
            <div className="space-y-3 px-5 mt-5">
                {skills.map(({ label, items }) => (
                    <motion.div
                        key={label}
                        variants={itemVariants}
                        className="flex items-start sm:items-center flex-col sm:flex-row gap-4"
                    >
                        <span className="font-bold text-xl min-w-[80px]">
                            {label}:
                        </span>
                        <div className="flex flex-wrap gap-2 sm:ml-3">
                            {items.map(skill => (
                                <Badge key={skill}>{skill}</Badge>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default SkillsSections;