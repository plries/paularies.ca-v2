"use client";
import { motion } from "framer-motion";
import { MOTION_CONFIG } from "@/app/(site)/const";
import { GradientBlockPropTypes } from "./types";

export const GradientBlock = ({
  children,
  additionalClasses,
}: GradientBlockPropTypes) => {
  return (
    <motion.div
      initial={MOTION_CONFIG.DEFAULT.INITIAL}
      whileInView={MOTION_CONFIG.DEFAULT.WHILE_IN_VIEW}
      transition={MOTION_CONFIG.TRANSITION}
      className={`gradient-container border-greyscale-100 dark:border-greyscale-800 relative col-span-full grid grid-cols-4 gap-3 rounded-2xl border p-3 py-6 shadow-[var(--inset-light)] md:col-span-6 md:col-start-2 md:grid-cols-8 md:gap-4 md:px-6 md:py-24 lg:col-span-10 lg:col-start-2 lg:grid-cols-12 lg:py-36 dark:shadow-[var(--inset-dark)] ${additionalClasses ?? ""}`}
    >
      {children}
    </motion.div>
  );
};
