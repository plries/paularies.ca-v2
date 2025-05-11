"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export const PageTransition = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="bg-greyscale-100 dark:bg-greyscale-900 relative z-[1] grid w-full place-items-center rounded-b-3xl shadow-[var(--page-light)] md:rounded-b-4xl lg:pb-12 dark:shadow-[var(--page-dark)]"
        key={usePathname()}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
