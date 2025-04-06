import Image from "next/image";
import { InsetBlock } from "@/app/components";
import { ABOUT_HERO_CONST } from "../const";

export const AboutHero = () => {
  return (
    <section className="mt-16 contents">
      <InsetBlock>
        <div className="col-span-full flex flex-row items-center justify-center md:col-span-4 md:col-start-3 lg:col-start-5">
          <Image
            src={ABOUT_HERO_CONST.IMAGES[0].SRC}
            alt={ABOUT_HERO_CONST.IMAGES[0].ALT}
            height={500}
            width={500}
            className="animate-float border-greyscale-950/10 dark:border-greyscale-50/10 z-10 col-span-2 col-start-2 aspect-square w-16 translate-x-2 -rotate-4 rounded-xl border-[1px] shadow-md transition-[scale] duration-700 hover:scale-105 md:w-36"
          />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="animate-float border-greyscale-950/10 dark:border-greyscale-50/10 col-span-2 col-start-2 aspect-square w-24 rounded-xl border-[1px] shadow-md transition-[scale] duration-700 hover:scale-105 md:w-48"
          >
            <source src={ABOUT_HERO_CONST.VIDEO} type="video/mp4" />
          </video>
          <Image
            src={ABOUT_HERO_CONST.IMAGES[1].SRC}
            alt={ABOUT_HERO_CONST.IMAGES[1].ALT}
            height={500}
            width={500}
            className="animate-float border-greyscale-950/10 dark:border-greyscale-50/10 z-10 col-span-2 col-start-2 aspect-square w-16 -translate-x-2 rotate-4 rounded-xl border-[1px] shadow-md transition-[scale] duration-700 hover:scale-105 md:w-36"
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
      <p className="text-greyscale-600 dark:text-greyscale-300 col-span-full mt-16 text-center md:col-span-6 md:col-start-2 lg:col-start-4">
        {ABOUT_HERO_CONST.PARAGRAPH}
      </p>
    </section>
  );
};
