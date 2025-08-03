"use client";
import Image from "next/image";
import { IconContext } from "@phosphor-icons/react";
import { InsetBlock } from "@/app/components";
import { WorksHeroPropTypes } from "./types";
import { useWindowSize } from "@/app/hooks";
import { Details } from "./Details";

export const WorksHero = ({ PROJECT }: WorksHeroPropTypes) => {
  const hook = useWindowSize();

  return (
    <IconContext.Provider value={{ size: 20 }}>
      <InsetBlock additionalClasses="!p-3 md:!p-4 !overflow-visible">
        <div className="bg-greyscale-100 border-greyscale-950/10 dark:border-greyscale-50/10 dark:bg-greyscale-900 relative col-span-full aspect-video rounded-lg border md:rounded-2xl">
          <Image
            src={PROJECT.HERO.IMAGE.SRC}
            alt={PROJECT.HERO.IMAGE.ALT}
            height={1080}
            width={1920}
            priority
          />
          <Image
            src={PROJECT.HERO.IMAGE.SRC}
            alt={PROJECT.HERO.IMAGE.ALT}
            height={1080}
            width={1920}
            priority
            className="absolute top-0 left-0 -z-10 blur-2xl"
          />
        </div>
        {(hook.isMobile || hook.isTablet) && (
          <div className="col-span-full flex h-full flex-col justify-between gap-4">
            <Details PROJECT={PROJECT} hasLinks />
          </div>
        )}
      </InsetBlock>
    </IconContext.Provider>
  );
};
