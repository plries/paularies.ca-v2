"use client";
import Image from "next/image";
import { motion, easeInOut } from "framer-motion";
import { PaLogo } from "@/public";
import { HERO_CONST } from "../const";
import { InsetBlock } from "@/app/components";

export const Hero = () => {
  return (
    <InsetBlock>
      <motion.div
        initial={{ transform: "translateY(25%)" }}
        animate={{ transform: "translateY(0%)" }}
        transition={{ duration: 0.7, ease: easeInOut, delay: 0.5 }}
        className="relative z-10 col-span-full h-fit drop-shadow-md md:col-span-4 md:col-start-3 lg:col-span-6 lg:col-start-4"
      >
        <Image
          src={HERO_CONST.HEADSHOT.SRC}
          alt={HERO_CONST.HEADSHOT.ALT}
          height={1056}
          width={1056}
          className="border-greyscale-950/10 dark:border-greyscale-50/10 mx-auto aspect-square max-w-48 rounded-full border"
        />
        <div className="-mt-8 grid w-full place-items-center">
          <h1 className="dark:bg-greyscale-950 bg-greyscale-50 dark:text-greyscale-50 text-greyscale-950 border-greyscale-950/10 dark:border-greyscale-50/10 z-10 w-fit rotate-2 rounded-xl border px-4 py-3 transition-transform duration-500 hover:rotate-0">
            <PaLogo />
            <span className="sr-only">{HERO_CONST.LOGO.ALT}</span>
          </h1>
        </div>
      </motion.div>
      <h1 className="dark:text-greyscale-50 col-span-full inline-flex h-fit flex-col gap-x-2 gap-y-1 text-center text-xl leading-none text-nowrap md:col-span-4 md:col-start-3 md:text-2xl lg:col-span-6 lg:col-start-4 lg:text-[1.75rem]">
        <span className="inline-flex flex-col">
          <span className="inline-flex flex-row flex-wrap items-center justify-center gap-x-2 overflow-hidden">
            {HERO_CONST.INTRO.slice(0, 4).map((text, index) => (
              <motion.span
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{
                  ease: easeInOut,
                  duration: 0.5,
                  delay: 0.5 + index * 0.1,
                }}
                className="inline-block w-fit"
                key={index}
              >
                {text}
              </motion.span>
            ))}
          </span>
          <span className="inline-flex flex-row flex-wrap items-center justify-center gap-x-2 overflow-hidden py-1">
            {HERO_CONST.INTRO.slice(4, 7).map((text, index) => (
              <motion.span
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{
                  ease: easeInOut,
                  duration: 0.5,
                  delay: 0.5 + 0.4 + index * 0.1,
                }}
                className="inline-block w-fit"
                key={index}
              >
                {text}
              </motion.span>
            ))}
          </span>
          <span className="inline-flex flex-row flex-wrap items-center justify-center gap-x-2 overflow-hidden">
            {HERO_CONST.INTRO.slice(7, HERO_CONST.INTRO.length).map(
              (text, index) => (
                <motion.span
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{
                    ease: easeInOut,
                    duration: 0.5,
                    delay: 0.5 + 0.7 + index * 0.1,
                  }}
                  className="inline-block w-fit"
                  key={index}
                >
                  {text}
                </motion.span>
              ),
            )}
          </span>
        </span>
      </h1>
    </InsetBlock>
  );
};
