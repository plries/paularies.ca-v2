"use client";
import { motion } from "framer-motion";
import { MOTION_CONFIG } from "@/app/const";
import { HeadingPropTypes } from "./types";

export const Heading = ({ children, level }: HeadingPropTypes) => {
  const Tag = level || "h1";
  return (
    <motion.div
      initial={MOTION_CONFIG.DEFAULT.INITIAL}
      whileInView={MOTION_CONFIG.DEFAULT.WHILE_IN_VIEW}
      transition={MOTION_CONFIG.TRANSITION}
      className="col-span-full grid place-items-center"
    >
      <Tag className="text-greyscale-600 bg-greyscale-100 dark:bg-greyscale-900 dark:text-greyscale-300 md:text-md w-fit rounded-full px-4 py-2 text-base shadow-[var(--inset-light)] md:text-lg lg:text-xl dark:shadow-[var(--inset-dark)]">
        {children}
      </Tag>
    </motion.div>
  );
};
