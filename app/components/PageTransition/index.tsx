"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { NavBar } from "../NavBar";

export const PageTransition = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <motion.div className="bg-greyscale-100 dark:bg-greyscale-900 relative z-[1] grid w-full place-items-center rounded-b-3xl shadow-xl md:rounded-b-4xl lg:pb-12">
        <NavBar />
        <AnimatePresence mode="wait">
          <React.Fragment key={usePathname()}>{children}</React.Fragment>
        </AnimatePresence>
        <div className="bg-greyscale-950/10 dark:bg-greyscale-50/10 mb-2 h-1 w-12 rounded-full lg:absolute lg:bottom-0" />
      </motion.div>
    </>
  );
};
