import Image from "next/image";
import { HERO_CONST } from "../const";
import { Dot } from "@/app/components";

export const Hero = () => {
  return (
    <div
      className="bg-greyscale-100 dark:bg-greyscale-900 shadow-inset-light col-span-full grid grid-cols-4 gap-3 rounded-3xl p-3 md:grid-cols-8 md:gap-4 md:px-6 md:py-24 lg:grid-cols-12 lg:py-36 dark:!shadow-[var(--inset-dark)]"
      id="top"
    >
      <Image
        src={HERO_CONST.HEADSHOT.SRC}
        alt={HERO_CONST.HEADSHOT.ALT}
        height={1056}
        width={1056}
        className="animate-float border-greyscale-50 dark:border-greyscale-950 col-span-2 col-start-2 aspect-square rounded-full border-[1px] shadow-md md:col-start-4 lg:col-start-6"
      />
      <div className="dark:text-greyscale-50 contents h-full md:col-span-6 md:col-start-2 md:flex md:flex-row md:justify-center md:gap-4 lg:col-span-8 lg:col-start-3">
        <div className="col-span-2 col-start-2">
          <HERO_CONST.LOGO />
        </div>
        <h1 className="col-span-full inline-flex h-fit flex-col gap-x-2 text-center text-2xl text-nowrap md:w-fit md:text-left md:text-[1.75rem] lg:text-[2rem]">
          {HERO_CONST.INTRO[0]}
          <span className="inline-flex flex-row justify-center gap-x-2 md:justify-start">
            <span className="font-instrument-serif inline-flex h-fit flex-row items-center gap-1 italic">
              <Dot discipline="design" />
              {HERO_CONST.INTRO[1]}
            </span>
            {HERO_CONST.INTRO[2]}
            <span className="font-instrument-serif inline-flex h-fit flex-row items-center gap-1 italic">
              <Dot discipline="development" />
              {HERO_CONST.INTRO[3]}
            </span>
          </span>
          <span className="inline-flex flex-row justify-center gap-x-2 md:justify-start">
            {HERO_CONST.INTRO[4]}
            <span className="font-instrument-serif italic">
              {HERO_CONST.INTRO[5]}
            </span>
          </span>
        </h1>
      </div>
    </div>
  );
};
