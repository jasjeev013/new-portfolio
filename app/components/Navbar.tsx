"use client";
import Link from "next/link";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const links = [
  { label: "Home", target: "/home" },
  { label: "Work", target: "#workExperience" },
  { label: "Projects", target: "#projects" },
  { label: "Hackathons", target: "#hackathon" },
  { label: "Contact", target: "#contactMe" },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const smoothScroll = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    if (target === "/home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(target)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 -mx-4 sm:mx-0 border-b border-border bg-background/95 backdrop-blur-none">
      <div className="flex items-center justify-between h-14 px-4 sm:px-0 font-mono text-sm">
        <div className="flex items-center gap-4 sm:gap-7 overflow-x-auto no-scrollbar">
          {links.map((link) => (
            <Link
              key={link.target}
              href={link.target}
              onClick={(e) => smoothScroll(e, link.target)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Toggle theme"
        >
          {mounted && (
            <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
