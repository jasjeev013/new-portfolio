"use client"; // Mark this as a client component

import Link from "next/link";
import { faGithub, faGoogle, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faComment, faEnvelope, faFolder, faHouse, faLink, faLocationDot, faPuzzlePiece, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react"; // For managing client-side state

const Navbar = () => {

  const [isHovered, setIsHovered] = useState(false);


  return (
    <nav 
      className={`fixed top-7 animate-slide-in-down left-1/2 transform -translate-x-1/2 z-50 w-fit max-w-sm backdrop-blur-xl bg-white/20 dark:bg-[#131415]/60 border border-white/20 dark:border-black/10 rounded-4xl shadow-lg transition-all duration-300 ease-in-out ${
        isHovered ? 'max-w-md' : 'max-w-sm'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-14">
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/home"
              className="group text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-300"
            >
              {/* text-black dark:text-[#CFCFCF] group-hover:mx-2 transition-all duration-300 */}
              <FontAwesomeIcon icon={faHouse} size='xl' className="text-black dark:text-[#CFCFCF] group-hover:mx-2 transition-all duration-300" />
            </Link>
            <Link
              href="#workExperience"
              className="group text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faSuitcase} size='xl' className="text-black dark:text-[#CFCFCF] group-hover:mx-2 transition-all duration-300" />
            </Link>
            <Link
              href="/projects"
              className="group text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faFolder} size='xl' className="text-black dark:text-[#CFCFCF] group-hover:mx-2 transition-all duration-300" />
            </Link>
            <Link
              href="/projects"
              className="group text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faPuzzlePiece} size='xl' className="text-black dark:text-[#CFCFCF] group-hover:mx-2 transition-all duration-300" />
            </Link>
            <Link
              href="/chat"
              className="group text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faComment} size='xl' className="text-black dark:text-[#CFCFCF] group-hover:mx-2 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;