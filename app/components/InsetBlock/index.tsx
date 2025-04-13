"use client";
import { motion } from "framer-motion";
import { MOTION_CONFIG } from "@/app/const";
import { InsetBlockPropTypes } from "./types";

export const InsetBlock = ({
  children,
  additionalClasses,
}: InsetBlockPropTypes) => {
  return (
    <motion.div
      initial={MOTION_CONFIG.DEFAULT.INITIAL}
      whileInView={MOTION_CONFIG.DEFAULT.WHILE_IN_VIEW}
      transition={MOTION_CONFIG.TRANSITION}
      className={`bg-greyscale-100 dark:bg-greyscale-900 border-greyscale-950/5 dark:border-greyscale-50/5 col-span-full grid grid-cols-4 gap-3 rounded-2xl border p-3 py-6 shadow-[var(--inset-light)] md:grid-cols-8 md:gap-4 md:px-6 md:py-24 lg:grid-cols-12 lg:py-36 dark:shadow-[var(--inset-dark)] ${additionalClasses ?? ''}`}
    >
      {children}
    </motion.div>
  );
};
