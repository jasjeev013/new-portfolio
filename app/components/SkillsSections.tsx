"use client";
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion';
import { containerVariants, itemVariants, viewportConfig } from '@/lib/animations';

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
            className='mt-16'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
        >
            <h2 className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                Skills
            </h2>
            <div className="space-y-4 mt-4">
                {skills.map(({ label, items }) => (
                    <motion.div
                        key={label}
                        variants={itemVariants}
                        className="flex items-start flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
                    >
                        <span className="text-sm font-medium text-foreground min-w-[110px]">
                            {label}
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {items.map(skill => (
                                <Badge key={skill} variant="tag">{skill}</Badge>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default SkillsSections;
