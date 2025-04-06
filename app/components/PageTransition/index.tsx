"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export const PageTransition = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div className="contents" key={usePathname()}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
