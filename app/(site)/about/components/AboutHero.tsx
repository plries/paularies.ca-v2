"use client";
import React from "react";
import Image from "next/image";
import { easeInOut, motion } from "framer-motion";
import { MOTION_CONFIG } from "@/app/(site)/const";
import { InsetBlock } from "@/app/components";
import { ABOUT_HERO_CONST } from "../const";

export const AboutHero = () => {
  const imageStyles =
    "animate-float border-greyscale-100 col-span-2 col-start-2 dark:border-greyscale-900 border shadow-xl transition-[scale] duration-500 hover:scale-105 aspect-square rounded-xl overflow-hidden";

  return (
    <section className="mt-16 contents">
      <InsetBlock>
        <div className="z-10 col-span-full flex flex-row items-center justify-center md:col-span-4 md:col-start-3 lg:col-start-5">
          <motion.div
            initial={{ transform: "translateX(100%)" }}
            animate={{ transform: "translateX(0%)" }}
            transition={{ duration: 0.7, ease: easeInOut, delay: 0.5 }}
            className={`z-10 max-w-24 min-w-16 translate-x-2 -rotate-4 md:min-w-36 ${imageStyles}`}
          >
            <Image
              src={ABOUT_HERO_CONST.IMAGES[0].SRC}
              alt={ABOUT_HERO_CONST.IMAGES[0].ALT}
              height={500}
              width={500}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: easeInOut, delay: 0.7 }}
            className={`max-w-36 min-w-24 md:max-w-48 md:min-w-48 ${imageStyles}`}
          >
            <video autoPlay loop muted playsInline>
              <source src={ABOUT_HERO_CONST.VIDEO} type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            initial={{ transform: "translateX(-100%)" }}
            animate={{ transform: "translateX(0%)" }}
            transition={{ duration: 0.7, ease: easeInOut, delay: 0.5 }}
            className={`z-10 max-w-24 min-w-16 -translate-x-2 rotate-4 md:min-w-36 ${imageStyles}`}
          >
            <Image
              src={ABOUT_HERO_CONST.IMAGES[1].SRC}
              alt={ABOUT_HERO_CONST.IMAGES[1].ALT}
              height={500}
              width={500}
            />
          </motion.div>
        </div>
        <p className="dark:text-greyscale-50 z-10 col-span-full flex flex-col items-center gap-1 text-center !text-xl leading-none md:col-span-6 md:col-start-2 md:!text-2xl lg:col-start-4 lg:!text-[1.75rem]">
          <span className="inline-flex w-fit flex-row items-center gap-x-2">
            <Image
              width={160}
              height={160}
              src={ABOUT_HERO_CONST.EMOJI.SRC}
              alt={ABOUT_HERO_CONST.EMOJI.ALT}
              className="ease-in-out-circ aspect-square h-5 w-5 transition-transform duration-500 hover:-rotate-12 md:h-6 md:w-6 lg:h-7 lg:w-7"
            />
            {ABOUT_HERO_CONST.HEADING[0]}
          </span>
          <span>{ABOUT_HERO_CONST.HEADING[1]}</span>
          <span className="inline-flex w-fit flex-row items-center gap-x-2 text-nowrap">
            {ABOUT_HERO_CONST.HEADING[2]}
            <span className="font-instrument-serif italic">
              {ABOUT_HERO_CONST.HEADING[3]}
            </span>
          </span>
        </p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: easeInOut, delay: 0.5 }}
          className="from-greyscale-100/50 to-greyscale-950/1 shadow-greyscale-950/10 dark:from-greyscale-50/1 dark:shadow-greyscale-900/75 dark:to-greyscale-50/1 absolute top-1/2 left-1/2 z-[2] aspect-square w-8/10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-t shadow-2xl md:w-4/7 lg:w-3/6"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: easeInOut, delay: 0.6 }}
          className="from-greyscale-100/50 to-greyscale-950/1 shadow-greyscale-950/10 dark:from-greyscale-50/1 dark:shadow-greyscale-900/75 dark:to-greyscale-50/1 absolute top-1/2 left-1/2 z-[1] aspect-square w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-t shadow-2xl md:w-5/7 lg:w-4/6"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: easeInOut, delay: 0.7 }}
          className="from-greyscale-100/50 to-greyscale-950/1 shadow-greyscale-950/10 dark:from-greyscale-50/1 dark:shadow-greyscale-900/75 dark:to-greyscale-50/1 absolute top-1/2 left-1/2 z-0 aspect-square w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-t shadow-2xl md:w-6/7 lg:w-5/6"
        />
      </InsetBlock>
      <motion.p
        initial={MOTION_CONFIG.DEFAULT.INITIAL}
        whileInView={MOTION_CONFIG.DEFAULT.WHILE_IN_VIEW}
        transition={MOTION_CONFIG.TRANSITION}
        className="text-greyscale-600 dark:text-greyscale-300 col-span-full mt-16 text-center md:col-span-6 md:col-start-2 lg:col-start-4"
      >
        {ABOUT_HERO_CONST.PARAGRAPH.map((text, index) => (
          <React.Fragment key={index}>{text}</React.Fragment>
        ))}
      </motion.p>
    </section>
  );
};
