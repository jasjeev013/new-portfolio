import type { Variants } from "framer-motion";

// Container with a light stagger — kept subtle, no bounce or spring.
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

// Individual item: a small, single fade + rise. No scale, no spring.
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Section title variant
export const titleVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Shared viewport config for whileInView
export const viewportConfig = {
  once: true,
  margin: "-50px",
};
