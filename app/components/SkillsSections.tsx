import { Badge } from '@/components/ui/badge'

const skills = {
  frontend: ["JavaScript", "React", "Angular", "Tailwind CSS", "TypeScript", "Next.js"],
  backend: ["Node.js", "Express", "Bun.js", "EJS", "Spring Boot"],
  database: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Firebase", "AWS RDS"],
  devops: ["Kafka", "Nginx", "Docker", "Kubernetes", "AWS", "Azure", "GCP"],
  aiMl: ["Python", "Flask", "Streamlit", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "NLP"]
};

const SkillsSections = () => {
    return (
        <div id='skills' className='bg-red lg:px-25 md:px-0 sm:px-0 ml-5 md:ml-16 mt-15 animate-blur-out-3'>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white animate-slide-in-up-3">
                Skills
            </h1>
            <div className="space-y-3 px-5 animate-slide-in-up-3 mt-5">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="flex items-start animate-blur-out-3 sm:items-center flex-col sm:flex-row gap-4">
                        <span className="font-bold text-xl min-w-[80px] capitalize">
                            {category.replace(/([A-Z])/g, ' $1').trim()}:
                        </span>
                        <div className="flex flex-wrap gap-2 sm:ml-3">
                            {items.map(skill => (
                                <Badge key={skill}>{skill}</Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillsSections;