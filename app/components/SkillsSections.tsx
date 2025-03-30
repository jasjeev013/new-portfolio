import { Badge } from '@/components/ui/badge'
import React from 'react'

const SkillsSections = () => {
    return (
        <>
            <div id='skills' className='bg-red lg:px-25 md:px-0 sm:px-0 ml-5 md:ml-16 mt-15 animate-blur-out-3 '>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white animate-slide-in-up-3">
                    Skills
                </h1>
                <div className="space-y-3 px-5 mt-5 ">
                    {/* Frontend Row */}
                    <div className="flex items-start sm:items-center flex-col sm:flex-row gap-4">
                        <span className="font-bold text-xl min-w-[80px]">Frontend:</span>
                        <div className="flex flex-wrap gap-2">
                            <Badge>React</Badge>
                            <Badge>HTML</Badge>
                            <Badge>CSS</Badge>
                            <Badge>Tailwind CSS</Badge>
                            <Badge>JavaScript</Badge>
                            <Badge>TypeScript</Badge>
                            <Badge>Next.js</Badge>
                            <Badge>Vue</Badge>
                            <Badge>Svelte</Badge>
                        </div>
                    </div>

                    {/* Backend Row */}
                    <div className="flex items-start sm:items-center flex-col sm:flex-row gap-4">
                        <span className="font-bold text-xl min-w-[80px] ">Backend:</span>
                        <div className="flex flex-wrap gap-2 ml-1">
                            <Badge>Node.js</Badge>
                            <Badge>Express</Badge>
                            <Badge>Python</Badge>
                            <Badge>Django</Badge>
                            <Badge>Flask</Badge>
                            <Badge>Ruby on Rails</Badge>
                            <Badge>Java</Badge>
                            <Badge>Spring Boot</Badge>
                            <Badge>PHP</Badge>
                        </div>
                    </div>

                    {/* DevOps Row */}
                    <div className="flex items-start sm:items-center flex-col sm:flex-row gap-4">
                        <span className="font-bold text-xl min-w-[80px]">DevOps:</span>
                        <div className="flex flex-wrap gap-2 ml-2">
                            <Badge>Docker</Badge>
                            <Badge>Kubernetes</Badge>
                            <Badge>AWS</Badge>
                            <Badge>Azure</Badge>
                            <Badge>GCP</Badge>
                            <Badge>Terraform</Badge>
                            <Badge>CI/CD</Badge>
                            <Badge>GitHub Actions</Badge>
                            <Badge>Jenkins</Badge>
                        </div>
                    </div>

                    {/* AI/ML Row */}
                    <div className="flex items-start sm:items-center flex-col sm:flex-row gap-4">
                        <span className="font-bold text-xl min-w-[80px]">AI/ML:</span>
                        <div className="flex flex-wrap gap-2 ml-2">
                            <Badge>Python</Badge>
                            <Badge>TensorFlow</Badge>
                            <Badge>PyTorch</Badge>
                            <Badge>Scikit-learn</Badge>
                            <Badge>Pandas</Badge>
                            <Badge>NumPy</Badge>
                            <Badge>OpenCV</Badge>
                            <Badge>NLP</Badge>
                            <Badge>Computer Vision</Badge>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkillsSections
