"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export const PageTransition = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div className="w-full max-w-7xl" key={usePathname()}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
