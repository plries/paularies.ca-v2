import { ProjectPagePropsTypes } from "./types";
import { Heading, ContentBlock, ContentHeading } from "@/app/components";
import { ProcessMedia } from "./ProcessMedia";
import { PROJECT_PAGE_CONST } from "../const";
import { MOTION_CONFIG } from "@/app/const";
import { motion } from "motion/react";
import { useWindowSize } from "@/app/hooks";

export const Process = ({ PROJECT }: ProjectPagePropsTypes) => {
  const hook = useWindowSize();

  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <Heading level="h2">{PROJECT_PAGE_CONST.HEADINGS.PROCESS}</Heading>
      <div className="relative">
        {!hook.isTablet && (
          <motion.div
            className={`absolute top-0 -left-8 flex h-full w-px flex-col items-center border-b bg-gradient-to-b ${PROJECT.HERO.DISCIPLINE.length == 2 ? "to-grass-600 from-sky-300" : PROJECT.HERO.DISCIPLINE[0] === "design" ? "from-sky-300 to-sky-600" : PROJECT.HERO.DISCIPLINE[0] === "development" ? "from-grass-300 to-grass-600" : ""} `}
            initial={MOTION_CONFIG.DEFAULT.INITIAL}
            whileInView={MOTION_CONFIG.DEFAULT.WHILE_IN_VIEW}
            transition={MOTION_CONFIG.TRANSITION}
          />
        )}
        {PROJECT.PROCESS.map((process, index) => (
          <div className="relative" key={index}>
            {!hook.isTablet && (
              <div className="absolute top-0 -left-8 flex h-full w-px flex-col items-center justify-between">
                <div className="border-greyscale-950/10 dark:bg-greyscale-950 bg-greyscale-50 dark:border-greyscale-50/10 grid aspect-square h-8 w-8 place-items-center rounded-full border text-center">
                  <p className="text-greyscale-600 dark:text-greyscale-300 !text-xs">
                    {index + 1}
                  </p>
                </div>
                {index === PROJECT.PROCESS.length - 1 && (
                  <div
                    className={`aspect-square h-1.5 w-1.5 rounded-full ${PROJECT.HERO.DISCIPLINE[0] === "design" ? "bg-sky-600" : "bg-grass-600"}`}
                  />
                )}
              </div>
            )}
            <ContentBlock
              additionalClasses={`gap-3 md:gap-6 lg:gap-8 mb-3 md:mb-4 ${index === PROJECT.PROCESS.length - 1 ? "md:last:mb-0" : ""}`}
            >
              <div className="flex w-full flex-col gap-3">
                <div className="flex flex-row items-center gap-3">
                  {hook.isTablet && (
                    <div className="border-greyscale-950/10 dark:bg-greyscale-950 bg-greyscale-50 dark:border-greyscale-50/10 grid aspect-square h-8 w-8 place-items-center rounded-full border text-center">
                      <p className="text-greyscale-600 dark:text-greyscale-300 !text-xs">
                        {index + 1}
                      </p>
                    </div>
                  )}
                  <ContentHeading level="h3">{process.HEADING}</ContentHeading>
                </div>
                <p className="text-greyscale-600 dark:text-greyscale-300">
                  {process.DESCRIPTION}
                </p>
              </div>
              <ProcessMedia
                PROCESS={{
                  ...process,
                  DESCRIPTION: process.DESCRIPTION.map(
                    (node) => node?.toString() ?? "",
                  ),
                }}
              />
            </ContentBlock>
          </div>
        ))}
      </div>
    </div>
  );
};
