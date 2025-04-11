import Image from "next/image";
import { PaLogo } from "@/public";
import { HERO_CONST } from "../const";
import { Dot, InsetBlock } from "@/app/components";

export const Hero = () => {
  return (
    <InsetBlock>
      <div
        id="top"
        className="animate-float relative col-span-full grid place-items-center drop-shadow-md md:col-span-4 md:col-start-3 lg:col-span-6 lg:col-start-4"
      >
        <Image
          src={HERO_CONST.HEADSHOT.SRC}
          alt={HERO_CONST.HEADSHOT.ALT}
          height={1056}
          width={1056}
          className="border-greyscale-950/10 dark:border-greyscale-50/10 aspect-square max-w-48 rounded-full border"
        />
        <div className="-mt-8 grid w-full place-items-center">
          <h1 className="dark:bg-greyscale-950 bg-greyscale-50 dark:text-greyscale-50 text-greyscale-950 border-greyscale-950/10 dark:border-greyscale-50/10 z-10 w-fit rotate-2 rounded-xl border px-4 py-3 transition-[rotate] duration-700 hover:rotate-0">
            <PaLogo />
            <span className="sr-only">{HERO_CONST.LOGO.ALT}</span>
          </h1>
        </div>
      </div>
      <h1 className="dark:text-greyscale-50 col-span-full inline-flex h-fit flex-col gap-x-2 gap-y-1 text-center text-xl leading-none text-nowrap md:col-span-4 md:col-start-3 md:text-2xl lg:col-span-6 lg:col-start-4 lg:text-[1.75rem]">
        {HERO_CONST.INTRO[0]}
        <span className="inline-flex flex-row justify-center gap-x-2">
          <span className="font-instrument-serif inline-flex h-fit flex-row items-center gap-1 italic">
            <Dot discipline="development" />
            {HERO_CONST.INTRO[1]}
          </span>
          {HERO_CONST.INTRO[2]}
          <span className="font-instrument-serif inline-flex h-fit flex-row items-center gap-1 italic">
            <Dot discipline="design" />
            {HERO_CONST.INTRO[3]}
          </span>
        </span>
        <span className="inline-flex flex-row justify-center gap-x-2">
          {HERO_CONST.INTRO[4]}
          <span className="font-instrument-serif italic">
            {HERO_CONST.INTRO[5]}
          </span>
        </span>
      </h1>
    </InsetBlock>
  );
};
