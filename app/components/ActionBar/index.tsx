"use client";
import { motion } from "framer-motion";
import { MOTION_CONFIG } from "@/app/const";

export const ActionBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pointer-events-none fixed bottom-0 left-0 z-50 flex h-fit w-screen items-end justify-center">
      <motion.div
        initial={MOTION_CONFIG.ACTION_BAR.INITIAL}
        whileInView={MOTION_CONFIG.ACTION_BAR.WHILE_IN_VIEW}
        transition={MOTION_CONFIG.TRANSITION}
        className="dark:bg-greyscale-950/50 bg-greyscale-50/50 border-greyscale-100 dark:border-greyscale-800 pointer-events-auto m-3 w-fit rounded-2xl border px-3 py-1 shadow-[var(--nav-bar-light)] backdrop-blur-sm md:m-6 dark:shadow-[var(--nav-bar-dark)]"
      >
        {children}
      </motion.div>
    </div>
  );
};
