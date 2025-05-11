"use client";
import Image from "next/image";
import { IconContext, ArrowRight, GithubLogo } from "@phosphor-icons/react";
import { InsetBlock, IconButton } from "@/app/components";
import { PROJECT_PAGE_CONST } from ".././const";
import { ProjectPagePropsTypes } from "./types";
import { useWindowSize } from "@/app/hooks";
import { Details } from "./Details";

export const WorksHero = ({ PROJECT }: ProjectPagePropsTypes) => {
  const hook = useWindowSize();

  return (
    <IconContext.Provider value={{ size: 20 }}>
      <InsetBlock additionalClasses="!p-3 md:!p-4">
        <div className="bg-greyscale-100 border-greyscale-950/10 dark:border-greyscale-50/10 dark:bg-greyscale-900 relative col-span-full aspect-video overflow-hidden rounded-lg border md:rounded-2xl">
          <Image
            src={PROJECT.HERO.IMAGE.SRC}
            alt={PROJECT.HERO.IMAGE.ALT}
            height={1080}
            width={1920}
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
