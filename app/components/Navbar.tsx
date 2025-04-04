"use client"; // Mark this as a client component

import Link from "next/link";
import { faComment, faFolder, faHouse, faPuzzlePiece, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react"; // For managing client-side state

const Navbar = () => {

  const [isHovered, setIsHovered] = useState(false);


  return (
    <nav
      className={`fixed top-7 bg-white  animate-slide-in-down animate-blur-out left-1/2 transform -translate-x-1/2 z-50 w-[calc(75%)] sm:w-fit max-w-sm backdrop-blur-xl bg-white/20 dark:bg-[#201313]/70 border border-white/20 dark:border-black/10 rounded-4xl shadow-lg transition-all duration-300 ease-in-out ${isHovered ? 'max-w-md' : 'max-w-sm'
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-14">
          {/* Navigation Links */}
          <div className=" md:flex text-sm sm:text-lg space-x-8">
            <Link
              href="/home"
              className="group text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-300"
            >
              {/* text-black dark:text-[#CFCFCF] group-hover:mx-2 transition-all duration-300 */}
              <FontAwesomeIcon icon={faHouse} size='lg' className="text-black dark:text-white/90 group-hover:mx-2 transition-all duration-300" />
            </Link>
            <Link
              href="#workExperience"
              className="group text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faSuitcase} size='lg' className="text-black dark:text-white/90 group-hover:mx-2 transition-all duration-300" />
            </Link>
            <Link
              href="#projects"
              className="group text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faFolder} size='lg' className="text-black dark:text-white/90 group-hover:mx-2 transition-all duration-300" />
            </Link>
            <Link
              href="#hackathon"
              className="group text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faPuzzlePiece} size='lg' className="text-black dark:text-white/90 group-hover:mx-2 transition-all duration-300" />
            </Link>
            <Link
              href="#contactMe"
              className="group text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faComment} size='lg' className="text-black dark:text-white/90 group-hover:mx-2 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;