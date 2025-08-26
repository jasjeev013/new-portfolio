"use client";

import { GlareCard } from "@/components/ui/glare-card";
import { faGithub, faGoogle, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLink, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { motion } from "framer-motion";

const IntroductionSection = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full h-full sm:mt-6 mt-3">
      <div className="flex flex-row md:flow-col sm:flex-row item-start sm:items-center justify-between gap-4 lg:px-25 ml-5 md:ml-16 mt-25 md:px-0 sm:px-0">
        <div className="flex-3/4 sm:flex-2 space-y-4">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-4xl flex flex-row font-bold text-gray-900 dark:text-white"
          >
            {`Hi, I'm Jasjeev Singh K. 👋🏻`}
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-lg text-gray-600 dark:text-gray-300"
          >
            {`Spring Boot and Full Stack Web Developer with a passion for building dynamic, scalable applications. Currently, I'm also exploring the exciting field of AI/ML to expand my skill set.`}
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="align-center justify-start"
          >
            <p className="text-sm sm:text-lg flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} size="lg" />
              New Delhi, India
            </p>
          </motion.div>

          {/* Social links - desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden sm:flex align-center text-sm sm:text-lg justify-start px-1 mt-7 flex flex-row gap-2 sm:gap-10"
          >
            {[
              { icon: faGithub, url: "https://github.com/jasjeev013" },
              { icon: faLinkedin, url: "https://www.linkedin.com/in/jasjeev-singh-k-773238247/" },
              { icon: faXTwitter, url: "https://x.com/jskkk_013" },
              { icon: faEnvelope, url: "mailto:jasjeev99@gmail.com" },
              { icon: faLink, url: "https://linktr.ee/jskkk_013" },
              { icon: faGoogle, url: "https://www.cloudskillsboost.google/public_profiles/4b35e1aa-f724-4a09-be18-e15325912653" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FontAwesomeIcon icon={social.icon} size="lg" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Profile image - desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="hidden sm:flex animate-slide-in-up flex items-start sm:items-center justify-center"
        >
          <GlareCard className="flex sm:flex flex-col w-30 h-30 sm:w-50 sm:h-50">
            <div className="relative w-30 h-30 sm:w-50 sm:h-50 rounded-md sm:rounded-2xl overflow-hidden group">
              <Image
                src="/profile.jpeg"
                alt="Jasjeev"
                className="w-full h-full object-cover"
                width={100}
                height={100}
                priority
              />
            </div>
          </GlareCard>
        </motion.div>

        {/* Profile image - mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="flex-1/4 sm:hidden flex items-start sm:items-center justify-center"
        >
          <GlareCard className="flex flex-col">
            <div className="relative w-30 h-30 sm:w-50 sm:h-50 rounded-sm sm:rounded-2xl overflow-hidden group">
              <Image
                src="/profile.jpeg"
                alt="Jasjeev"
                className="w-full h-full object-cover"
                width={100}
                height={100}
                priority
              />
            </div>
          </GlareCard>
        </motion.div>
      </div>

      {/* Social links - mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex sm:hidden align-center text-sm sm:text-lg justify-start px-1 mt-7 flex flex-row gap-7 ml-4 sm:gap-10"
      >
        {[
          { icon: faGithub, url: "https://github.com/jasjeev013" },
          { icon: faLinkedin, url: "https://www.linkedin.com/in/jasjeev-singh-k-773238247/" },
          { icon: faXTwitter, url: "https://x.com/jskkk_013" },
          { icon: faEnvelope, url: "mailto:jasjeev99@gmail.com" },
          { icon: faLink, url: "https://linktr.ee/jskkk_013" },
          { icon: faGoogle, url: "https://www.cloudskillsboost.google/public_profiles/4b35e1aa-f724-4a09-be18-e15325912653" },
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FontAwesomeIcon icon={social.icon} size="lg" />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default IntroductionSection;
