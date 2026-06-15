import Link from 'next/link'

// This component can be fully server-rendered
const AboutSection = () => {
    return (
        <div className='bg-red lg:px-25 ml-5 md:ml-16 mt-20 md:px-0 sm:px-0 animate-blur-out-2'>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white animate-slide-in-up-2">
                About Me
            </h1>
            <p className="text-md sm:text-lg mt-2 text-black dark:text-gray-300 animate-slide-in-up-2">
                {`I'm Jasjeev Singh`}, currently working as a Software Development Engineer at ION Group, where I contribute as a developer and analyst on DDPM projects. I completed my B.Tech from{" "}
                <Link
                    href="https://mait.ac.in/"
                    target="_blank"
                    className="text-black dark:text-white hover:underline"
                >
                    Maharaja Agrasen Institute of Technology
                </Link>
                . I’m interested in software development, data-driven systems, and exploring AI/ML. Outside of tech, I enjoy graphic design, video editing, and chess.
            </p>
        </div>
    );
}

export default AboutSection;