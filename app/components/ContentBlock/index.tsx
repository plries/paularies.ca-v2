"use client";
import { motion } from "framer-motion";
import { MOTION_CONFIG } from "@/app/const";
import { ContentBlockPropTypes } from "./types";

export const ContentBlock = ({
  children,
  additionalClasses,
}: ContentBlockPropTypes) => {
  return (
    <motion.div
      initial={MOTION_CONFIG.DEFAULT.INITIAL}
      whileInView={MOTION_CONFIG.DEFAULT.WHILE_IN_VIEW}
      transition={MOTION_CONFIG.TRANSITION}
      className={`bg-greyscale-50 border-greyscale-950/10 dark:bg-greyscale-950 dark:border-greyscale-50/10 rounded-xl border-[1px] p-6 ${additionalClasses}`}
    >
      {children}
    </motion.div>
  );
};
