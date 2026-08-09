"use client";

import { faGithub, faGoogle, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLink, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";

const socials = [
  { icon: faGithub, url: "https://github.com/jasjeev013" },
  { icon: faLinkedin, url: "https://www.linkedin.com/in/jasjeev-singh-k-773238247/" },
  { icon: faXTwitter, url: "https://x.com/jskkk_013" },
  { icon: faEnvelope, url: "mailto:jasjeev99@gmail.com" },
  { icon: faLink, url: "https://linktr.ee/jskkk_013" },
  { icon: faGoogle, url: "https://www.cloudskillsboost.google/public_profiles/4b35e1aa-f724-4a09-be18-e15325912653" },
];

const IntroductionSection = () => {
  return (
    <motion.div
      className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-8 pt-14 sm:pt-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="space-y-4">
        <motion.p
          variants={itemVariants}
          className="font-mono text-sm text-accent"
        >
          {`> whoami`}
          <span className="cursor-blink ml-0.5">_</span>
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight"
        >
          Jasjeev Singh K.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base leading-relaxed text-muted-foreground max-w-md"
        >
          {`Spring Boot and full-stack web developer. I build dynamic, scalable applications and am currently exploring AI/ML.`}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="flex items-center gap-2 text-sm text-muted-foreground"
        >
          <FontAwesomeIcon icon={faLocationDot} />
          New Delhi, India
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex items-center gap-5 pt-2"
        >
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="shrink-0">
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border border-border">
          <Image
            src="/profile.jpeg"
            alt="Jasjeev"
            className="w-full h-full object-cover"
            width={128}
            height={128}
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default IntroductionSection;
