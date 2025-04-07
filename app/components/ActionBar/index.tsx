"use client";
import { motion } from "framer-motion";
import { MOTION_CONFIG } from "@/app/const";

export const ActionBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pointer-events-none fixed top-0 left-0 z-50 h-screen w-screen">
      <div className="grid w-full place-items-center">
        <motion.div
          initial={MOTION_CONFIG.ACTION_BAR.INITIAL}
          whileInView={MOTION_CONFIG.ACTION_BAR.WHILE_IN_VIEW}
          transition={MOTION_CONFIG.TRANSITION}
          className="dark:bg-greyscale-950/50 bg-greyscale-50/50 border-greyscale-100 dark:border-greyscale-800 pointer-events-auto absolute bottom-0 m-3 rounded-2xl border-[1px] px-3 py-1 shadow-[var(--nav-bar-light)] backdrop-blur-md md:m-6 dark:shadow-[var(--nav-bar-dark)]"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};
