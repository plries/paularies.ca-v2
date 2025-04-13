"use client";
import React from "react";
import { motion } from "framer-motion";
import { MarqueePropTypes } from "./types";

export const Marquee = ({
  ICONS,
  from = "0%",
  to = "-100%",
}: MarqueePropTypes) => {
  return (
    <div className="relative col-span-full w-full overflow-hidden py-6">
      <div className="from-greyscale-100 to-greyscale-100 dark:from-greyscale-900 dark:to-greyscale-900 pointer-events-none absolute top-0 left-0 z-10 h-full w-full bg-gradient-to-r from-5% via-transparent to-95%" />
      <motion.div
        className="flex"
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {[...ICONS, ...ICONS].map((Icon: React.ReactNode, index) => (
          <div
            key={`icon-${index}`}
            className="border-greyscale-200/50 dark:border-greyscale-700 transiton-[rotate,scale] ease-in-out-circ dark:bg-greyscale-950/50 bg-greyscale-50/50 text-greyscale-600 dark:text-greyscale-300 mr-3 aspect-square h-fit w-fit rounded-2xl border p-3 shadow-[var(--nav-bar-light)] backdrop-blur-sm duration-500 hover:scale-105 hover:odd:-rotate-4 hover:even:rotate-4 md:mr-4 md:p-4 dark:shadow-[var(--nav-bar-dark)]"
          >
            {Icon}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
