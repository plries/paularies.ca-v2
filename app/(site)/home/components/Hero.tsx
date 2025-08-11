"use client";
import Image from "next/image";
import { motion, easeInOut } from "framer-motion";
import { PaLogo } from "@/public";
import { HERO_CONST } from "../const";
import { InsetBlock, Dot } from "@/app/components";
import { Clock, MapPin } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString(),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "America/Vancouver",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        }),
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <InsetBlock>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.4, ease: easeInOut, delay: 0.5 }}
        className="absolute top-0 left-0 h-full w-full scale-150 bg-[url('/images/asciiLight.jpg')] bg-cover bg-center mix-blend-darken dark:bg-[url('/images/asciiDark.jpg')] dark:mix-blend-lighten"
      />
      <div className="relative z-20 col-span-full h-fit md:col-span-4 md:col-start-3 lg:col-span-6 lg:col-start-4">
        <div>
          <Image
            src={HERO_CONST.HEADSHOT.SRC}
            alt={HERO_CONST.HEADSHOT.ALT}
            height={1056}
            width={1056}
            className="border-greyscale-950/10 dark:border-greyscale-50/10 mx-auto aspect-square w-full max-w-48 rounded-full border shadow-xl"
          />
          <div className="-mt-8 grid w-full place-items-center">
            <h1 className="dark:bg-greyscale-950 bg-greyscale-50 dark:text-greyscale-50 text-greyscale-950 border-greyscale-950/10 dark:border-greyscale-50/10 z-10 w-fit rotate-2 rounded-xl border px-4 py-3 shadow-xl transition-transform duration-500 hover:rotate-0">
              <PaLogo />
              <span className="sr-only">{HERO_CONST.LOGO.ALT}</span>
            </h1>
          </div>
        </div>
        <h1 className="dark:text-greyscale-50 z-20 col-span-full inline-flex h-fit w-full flex-row justify-center gap-2 pt-3 text-center text-lg leading-none text-nowrap md:col-span-4 md:col-start-3 md:text-xl lg:col-span-6 lg:col-start-4 lg:text-2xl">
          <span className="overflow-y-hidden md:absolute md:top-1/3 md:left-0 md:-translate-x-full md:px-4">
            <motion.span
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{
                ease: easeInOut,
                duration: 1,
                delay: 0.75,
              }}
              className="font-instrument-serif inline-flex h-fit flex-row items-center gap-1.5 px-1 pb-1 italic"
            >
              <Dot discipline="development" />
              {HERO_CONST.DEVELOPER}
            </motion.span>
          </span>
          <span className="overflow-y-hidden px-1 md:absolute md:top-1/3 md:right-0 md:translate-x-full md:px-4">
            <motion.span
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{
                ease: easeInOut,
                duration: 1,
                delay: 1,
              }}
              className="font-instrument-serif inline-flex h-fit flex-row items-center gap-1.5 pb-1 italic"
            >
              {HERO_CONST.DESIGNER}
              <Dot discipline="design" additionalClasses="mt-1" />
            </motion.span>
          </span>
        </h1>
      </div>
      <div className="bg-greyscale-50 dark:border-greyscale-50/10 dark:bg-greyscale-900 border-greyscale-950/10 text-greyscale-400 md:col-end-automd:m-0 z-20 col-span-full flex max-w-fit flex-row items-center justify-center gap-1 place-self-center rounded-full border py-0.5 pr-2 pl-1.5 shadow-sm md:absolute md:bottom-4 md:left-4 md:col-start-auto">
        <MapPin size={14} />
        <p className="font-dm-mono !text-xs text-nowrap">
          {HERO_CONST.LOCATION}
        </p>
      </div>
      <div className="bg-greyscale-50 dark:border-greyscale-50/10 dark:bg-greyscale-900 border-greyscale-950/10 text-greyscale-400 z-20 col-span-full -mt-2 flex w-fit flex-row items-center justify-center gap-1 place-self-center rounded-full border py-0.5 pr-2 pl-1.5 shadow-sm md:absolute md:right-4 md:bottom-4 md:col-start-auto md:col-end-auto md:m-0">
        <Clock size={14} />
        <p className="font-dm-mono !text-xs text-nowrap">{currentTime}</p>
      </div>
    </InsetBlock>
  );
};
