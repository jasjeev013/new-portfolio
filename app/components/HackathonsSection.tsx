'use client';
import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion';
import { containerVariants, itemVariants, viewportConfig } from '@/lib/animations';

const hackathons = [
    {
        id: 1,
        logo: "/hackathons/amazon.png",
        title: "Top 75 Coders in HackOn with Amazon - Season 5",
        location: "Delhi",
        date: "Jun 2025 - July 2025",
        description: "Selected among the Top 75 Coders in HackOn with Amazon - Season 5 based on performance in a rigorous coding assessment. Demonstrated strong algorithmic thinking, problem-solving skills, and coding proficiency in a highly competitive environment.",
        certificateLink: "https://unstop-dot-yamm-track.appspot.com/21xKtpZShKKzpSYwhdFL85T2UR3CKO5NNfxh8NO2PE68JqEfklwFXas1SvL2HSX62m8R3cTjigQLvrjxF9jVGH8OWcC1-fyXeIrQqbFk-d9lp9ftnrmPWsgIiyhVzuUoHZOlP_rS0CuWbUfkTRvM1IL4wIqcy3HSmmwnv9gzhR1B5Jl2L5xs2PLV4QLfs1oj2mh861zMu2lm6KOxZKWkHCLGaLI9LmIUNYYMs8i2Y--gegDgi3kO8APKS"
    },
    {
        id: 2,
        logo: "/hackathons/smartIndia.png",
        title: "Smart India Hackathon 2024 Finalist",
        location: "Noida",
        date: "Aug 2024 - Dec 2024",
        description: "Worked on the Power Shakti project for Delhi's power demand forecasting with SCADA integration and contributed to the DVB-S2X satellite system for wave recognition and signal amplification.",
        certificateLink: "https://drive.google.com/file/d/1DAeRb6vscpivKjsHztSe1-Mg_IqaSMDS/view"
    },
    {
        id: 3,
        logo: "/hackathons/buildwithDelhi.jpeg",
        title: "Build With Delhi Hackathon Finalist",
        location: "Noida",
        date: "June 2024 - July 2024",
        description: "Developer on Neighboulry: Let's Connect Communities, a team project that reached the top 10 finalists. Worked primarily on the backend, contributing 20% to the frontend development.",
        certificateLink: "https://drive.google.com/file/d/11D-s2H6nfK_Kfd5d9wB3JEM9oFzF2Sam/view"
    },
    {
        id: 4,
        logo: "/hackathons/gssoc.jpeg",
        title: "GirlScript Summer of Code 2024",
        location: "Noida",
        date: "May 2024 - July 2024",
        description: "Contributed to open-source MERN projects, adding functionalities to the navbar, fixing bugs, and enhancing responsiveness.",
        certificateLink: "https://drive.google.com/file/d/12VaGp_-n4hywzNhvsojX5sh-SQTRY0PT/view?usp=sharing"
    },
    {
        id: 5,
        logo: "/hackathons/cloud.png",
        title: "Google Cloud Study Jam 2024 Finalist",
        location: "Noida",
        date: "Apr 2024 - June 2024",
        description: "Completed 4 cloud development courses, including Gen AI, Develop GenAI Apps with Gemini and Streamlit, Prompt Design in Vertex AI, and Level 3 GenAI: Prompt Engineering.",
        certificateLink: "https://drive.google.com/file/d/1BlfVgimE6XELmdjJlkoCbJdKuM6CFgYd/view"
    },
    {
        id: 6,
        logo: "/hackathons/cloud.png",
        title: "Google Cloud Study Jam 2023 Finalist",
        location: "Noida",
        date: "Nov 2023 - Feb 2024",
        description: "Completed various cloud learning series, including Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud.",
        certificateLink: "https://drive.google.com/file/d/1BlfVgimE6XELmdjJlkoCbJdKuM6CFgYd/view"
    },
    {
        id: 7,
        logo: "/hackathons/IBMseal.png",
        title: "IBM SkillsBuild Winter Certification Program",
        location: "Noida",
        date: "Nov 2023 - Dec 2023",
        description: "Gained hands-on experience with Pandas, NumPy, Power BI, Tableau, SQL, and databases, along with data visualization.",
        certificateLink: "https://drive.google.com/file/d/14JeY9f7cWNqUsqdNiOJ_wJ7ZjZdF46zM/view"
    }
];

const HackathonsSection = () => {
    const [showAll, setShowAll] = useState(false);
    const hackathonSectionRef = useRef<HTMLDivElement>(null);
    const visibleHackathons = showAll ? hackathons : hackathons.slice(0, 3);

    const toggleShowAll = () => {
        const willShowAll = !showAll;
        setShowAll(willShowAll);

        if (!willShowAll && hackathonSectionRef.current) {
            hackathonSectionRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    };

    return (
        <motion.div
            id='hackathon'
            ref={hackathonSectionRef}
            className='mt-16 scroll-mt-20'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
        >
            <h2 className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                Hackathons &amp; Contests
            </h2>

            <div className='mt-4 divide-y divide-border border-t border-border'>
                <AnimatePresence>
                    {visibleHackathons.map((hackathon) => (
                        <motion.div
                            key={hackathon.id}
                            variants={itemVariants}
                            className="flex items-start gap-4 py-4"
                            exit={{ opacity: 0 }}
                        >
                            <div className="shrink-0 w-9 h-9 rounded-full bg-white flex items-center justify-center overflow-hidden border border-border">
                                <Image
                                    height={36}
                                    width={36}
                                    src={hackathon.logo}
                                    alt={`${hackathon.title} logo`}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                                    <h3 className="text-sm sm:text-base font-medium text-foreground">
                                        {hackathon.title}
                                    </h3>
                                    <p className="font-mono text-xs text-muted-foreground shrink-0">
                                        {hackathon.date}
                                    </p>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    {hackathon.location}
                                </p>
                                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                                    {hackathon.description}
                                </p>
                                <a
                                    href={hackathon.certificateLink}
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className='inline-block mt-2 font-mono text-xs text-muted-foreground hover:text-accent transition-colors underline underline-offset-2 decoration-border'
                                >
                                    certificate ↗
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {hackathons.length > 3 && (
                <div className='flex justify-end mt-4'>
                    <button
                        onClick={toggleShowAll}
                        className="font-mono text-xs text-muted-foreground hover:text-accent transition-colors"
                        aria-label={showAll ? 'Show fewer hackathons' : 'Show more hackathons'}
                    >
                        {showAll ? '← show less' : 'see more →'}
                    </button>
                </div>
            )}
        </motion.div>
    );
};

export default HackathonsSection
