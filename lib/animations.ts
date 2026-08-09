import type { Variants } from "framer-motion";

/**
 * Shared framer-motion animation variants for consistent motion across the site.
 */

// Container that staggers its children's entrance animations
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Individual item that fades and slides up
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Section title variant
export const titleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Shared viewport config for whileInView
export const viewportConfig = {
  once: true,
  margin: "-50px",
};
