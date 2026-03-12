"use client";
import { motion } from "framer-motion";
import { MOTION_CONFIG } from "@/app/(site)/const";
import { ActionBarPropTypes } from "./types";

export const ActionBar = ({
  children,
  additionalClasses,
  positionType = "fixed",
}: ActionBarPropTypes) => {
  return (
    <div
      className={`${positionType} ${additionalClasses?.wrapper ?? ""} pointer-events-none bottom-0 left-0 z-50 flex h-fit w-screen items-end justify-center`}
    >
      <motion.div
        initial={MOTION_CONFIG.ACTION_BAR.INITIAL}
        animate={MOTION_CONFIG.ACTION_BAR.ANIMATE}
        transition={MOTION_CONFIG.TRANSITION}
        className={`dark:bg-greyscale-950/50 bg-greyscale-50/50 border-greyscale-100 dark:border-greyscale-800 pointer-events-auto m-3 flex w-fit flex-row items-center gap-2 rounded-2xl border p-2 shadow-[var(--nav-bar-light)] backdrop-blur-sm md:m-6 dark:shadow-[var(--nav-bar-dark)] ${additionalClasses?.container ?? ""}`}
      >
        {children}
      </motion.div>
    </div>
  );
};
