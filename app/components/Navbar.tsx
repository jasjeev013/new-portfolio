"use client"; // Required for client-side interactivity

import Link from "next/link";
import { useTheme } from "next-themes"; // For dark/light mode support

const Navbar = () => {
  const { theme, setTheme } = useTheme(); // Hook to manage theme

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-sm backdrop-blur-xl bg-white/20 dark:bg-customDark/10 border border-white/20 dark:border-black/10 rounded-4xl shadow-lg">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 ">
         
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-12 ">
            <Link
              href="/home"
              className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              <i className="fa-solid fa-house fa-lg text-black dark:text-[#CFCFCF]"></i>
            </Link>
            <Link
              href="/work"
              className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              <i className="fa-solid fa-suitcase fa-lg text-black dark:text-[#CFCFCF]"></i>
            </Link>
            <Link
              href="/projects"
              className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              <i className="fa-solid fa-folder fa-lg text-black dark:text-[#CFCFCF]"></i>
            </Link>
            <Link
              href="/projects"
              className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              <i className="fa-solid fa-puzzle-piece fa-lg text-black dark:text-[#CFCFCF]"></i>
            </Link>
            <Link
              href="/chat"
              className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
             <i className="fa-solid fa-comments fa-lg text-black dark:text-[#CFCFCF]"></i>
            </Link>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;