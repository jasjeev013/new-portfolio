"use client";
import Link from "next/link";
import {
  faComment,
  faFolder,
  faHouse,
  faPuzzlePiece,
  faSuitcase,
  faSun,
  faMoon
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isRotating, setIsRotating] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before showing theme toggle
  useEffect(() => {
    setMounted(true);
  }, []);

  const smoothScroll = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    if (target === '/home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.querySelector(target)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleThemeToggle = () => {
    setIsRotating(true);
    setTheme(theme === 'dark' ? 'light' : 'dark');
    setTimeout(() => setIsRotating(false), 300);
  };

  if (!mounted) {
    // Return a placeholder with the same dimensions during SSR
    return (
      <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-[calc(65%)] sm:w-fit max-w-sm h-14">
        {/* Empty placeholder to prevent layout shift */}
      </nav>
    );
  }

  return (
    <nav
      className={`fixed top-5 bg-white animate-slide-in-down animate-blur-out left-1/2 transform -translate-x-1/2 z-50 w-[calc(85%)] sm:w-w-[calc(35%)]  backdrop-blur-xl bg-white/20 dark:bg-[#201313]/70 border border-white/20 dark:border-black/10 rounded-4xl shadow-lg transition-all duration-300 ease-in-out ${isHovered ? 'max-w-md' : 'max-w-sm'
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-14">
          <div className="md:flex text-lg space-x-6 sm:space-x-8">
            <Link
              href="/home"
              className="group text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-300"
              onClick={(e) => smoothScroll(e, '/home')}
            >
              <FontAwesomeIcon icon={faHouse} className="text-black dark:text-white/90 group-hover:mx-2 transition-all duration-300" />
            </Link>

            <Link
              href="#workExperience"
              className="group text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-300"
              onClick={(e) => smoothScroll(e, '#workExperience')}
            >
              <FontAwesomeIcon icon={faSuitcase} className="text-black dark:text-white/90 group-hover:mx-2 transition-all duration-300" />
            </Link>

            <Link
              href="#projects"
              className="group text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-300"
              onClick={(e) => smoothScroll(e, '#projects')}
            >
              <FontAwesomeIcon icon={faFolder} className="text-black dark:text-white/90 group-hover:mx-2 transition-all duration-300" />
            </Link>

            <Link
              href="#hackathon"
              className="group text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-300"
              onClick={(e) => smoothScroll(e, '#hackathon')}
            >
              <FontAwesomeIcon icon={faPuzzlePiece} className="text-black dark:text-white/90 group-hover:mx-2 transition-all duration-300" />
            </Link>

            <Link
              href="#contactMe"
              className="group text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-300"
              onClick={(e) => smoothScroll(e, '#contactMe')}
            >
              <FontAwesomeIcon icon={faComment} className="text-black dark:text-white/90 group-hover:mx-2 transition-all duration-300" />
            </Link>

            {/* Enhanced Dark/Light Mode Toggle */}
            <button
              onClick={handleThemeToggle}
              className="group text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-300"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {mounted && (
                <FontAwesomeIcon
                  icon={theme === 'dark' ? faSun : faMoon}
                  className={`text-black dark:text-white/90 group-hover:mx-2 transition-all duration-300 ${
                    isRotating ? 'rotate-[360deg]' : ''
                  }`}
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;