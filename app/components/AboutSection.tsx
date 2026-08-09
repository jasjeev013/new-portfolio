import Link from 'next/link'

const AboutSection = () => {
    return (
        <div className='mt-16'>
            <h2 className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                About
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mt-3 text-foreground max-w-xl">
                {`I'm Jasjeev Singh`}, currently working as a Software Development Engineer at ION Group, where I contribute as a developer and analyst on DDPM projects. I completed my B.Tech from{" "}
                <Link
                    href="https://mait.ac.in/"
                    target="_blank"
                    className="text-foreground underline underline-offset-2 decoration-border hover:decoration-accent"
                >
                    Maharaja Agrasen Institute of Technology
                </Link>
                . {`I'm interested in software development, data-driven systems, and exploring AI/ML. Outside of tech, I enjoy graphic design, video editing, and chess.`}
            </p>
        </div>
    );
}

export default AboutSection;
