"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MOTION_CONFIG } from "@/app/(site)/const";
import { InsetBlock } from "@/app/components";
import { ABOUT_HERO_CONST } from "../const";

export const AboutHero = () => {
  const imageStyles =
    "animate-float border-greyscale-100 col-span-2 col-start-2 dark:border-greyscale-900 border shadow-md transition-[scale] duration-500 hover:scale-105 aspect-square rounded-xl";

  return (
    <section className="mt-16 contents">
      <InsetBlock>
        <div className="col-span-full flex flex-row items-center justify-center md:col-span-4 md:col-start-3 lg:col-start-5">
          <Image
            src={ABOUT_HERO_CONST.IMAGES[0].SRC}
            alt={ABOUT_HERO_CONST.IMAGES[0].ALT}
            height={500}
            width={500}
            className={`z-10 w-16 translate-x-2 -rotate-4 md:w-36 ${imageStyles}`}
          />
          <video
            autoPlay
            loop
            muted
            playsInline
            className={`w-24 md:w-48 ${imageStyles}`}
          >
            <source src={ABOUT_HERO_CONST.VIDEO} type="video/mp4" />
          </video>
          <Image
            src={ABOUT_HERO_CONST.IMAGES[1].SRC}
            alt={ABOUT_HERO_CONST.IMAGES[1].ALT}
            height={500}
            width={500}
            className={`z-10 w-16 -translate-x-2 rotate-4 md:w-36 ${imageStyles}`}
          />
        </div>
        <p className="dark:text-greyscale-50 col-span-full flex flex-col items-center gap-1 text-center !text-xl leading-none md:col-span-6 md:col-start-2 md:!text-2xl lg:col-start-4 lg:!text-[1.75rem]">
          <span className="inline-flex w-fit flex-row items-center gap-x-2">
            <Image
              width={160}
              height={160}
              src={ABOUT_HERO_CONST.EMOJI.SRC}
              alt={ABOUT_HERO_CONST.EMOJI.ALT}
              className="aspect-square h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7"
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
