import Image from "next/image";
import { InsetBlock, Button, ContentHeading, Dot } from "@/app/components";
import { PROJECT_PAGE_CONST } from ".././const";
import { ProjectPagePropsTypes } from "./types";

export const WorksHero = ({ PROJECT }: ProjectPagePropsTypes) => {
  return (
    <>
      <InsetBlock additionalClasses="!p-3 md:!p-6">
        <div className="bg-greyscale-50 border-greyscale-950/10 dark:border-greyscale-50/10 dark:bg-greyscale-950 col-span-full aspect-video rounded-lg border-[1px] md:col-span-4 md:col-start-1 lg:col-span-6 lg:col-start-1">
          <Image
            src={PROJECT.HERO.IMAGE.SRC}
            alt={PROJECT.HERO.IMAGE.ALT}
            height={1080}
            width={1920}
          />
        </div>
        <div className="col-span-full flex h-full flex-col justify-between gap-3 md:col-span-4 md:col-start-5 lg:col-span-6 lg:col-start-7">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex w-full items-start justify-between">
                <ContentHeading level="h3">{PROJECT.HERO.TITLE}</ContentHeading>
                <div className="flex flex-row gap-1">
                  {PROJECT.HERO.DISCIPLINE.map((discipline, index) => (
                    <Dot
                      key={index}
                      discipline={discipline as "design" | "development"}
                    />
                  ))}
                </div>
              </div>
              <p className="text-greyscale-600 dark:text-greyscale-300">
                {PROJECT.HERO.DESCRIPTION}
              </p>
            </div>
            <div className="flex h-fit w-fit flex-row flex-wrap gap-y-2 rounded-full">
              {PROJECT.HERO.SKILLS.map((tag, index) => (
                <p
                  className="bg-greyscale-50 font-dm-mono text-greyscale-500 dark:bg-greyscale-950 dark:text-greyscale-400 dark:border-greyscale-900 border-greyscale-100 border-r-[1px] p-2 !text-sm leading-none first:rounded-l-full first:pl-3 last:rounded-r-full last:border-0 last:pr-3 md:!text-base"
                  key={index}
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
          <div className="flex w-full justify-end">
            {PROJECT.HERO.GITHUB && (
              <Button
                theme="secondary"
                href={PROJECT.HERO.GITHUB}
                target="_blank"
                isLink
              >
                {PROJECT_PAGE_CONST.BUTTONS.GITHUB}
              </Button>
            )}
            <Button
              theme="primary"
              href={PROJECT.HERO.LINK}
              target="_blank"
              isLink
            >
              {PROJECT_PAGE_CONST.BUTTONS.VIEW}
            </Button>
          </div>
        </div>
      </InsetBlock>
    </>
  );
};
