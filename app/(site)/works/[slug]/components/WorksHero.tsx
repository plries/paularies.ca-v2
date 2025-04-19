import Image from "next/image";
import { InsetBlock, Button, ContentHeading, Dot } from "@/app/components";
import { PROJECT_PAGE_CONST } from ".././const";
import { ProjectPagePropsTypes } from "./types";
import { useWindowSize } from "@/app/hooks";

export const WorksHero = ({ PROJECT }: ProjectPagePropsTypes) => {
  const hook = useWindowSize();
  return (
    <>
      <InsetBlock additionalClasses="!p-3 md:!p-4">
        <div className="bg-greyscale-100 border-greyscale-950/10 dark:border-greyscale-50/10 dark:bg-greyscale-900 relative col-span-full aspect-video overflow-hidden rounded-lg border md:rounded-2xl">
          <Image
            src={PROJECT.HERO.IMAGE.SRC}
            alt={PROJECT.HERO.IMAGE.ALT}
            height={1080}
            width={1920}
          />
          {!hook.isMobile && (
            <>
              <div className="absolute bottom-0 left-0 z-10 m-2 flex w-[calc(100%-1rem)] flex-row items-end justify-between">
                <div className="dark:bg-greyscale-950 bg-greyscale-50 border-greyscale-950/10 dark:border-greyscale-50/10 flex flex-col gap-2 rounded-2xl border p-4 shadow-[var(--button-light)] dark:shadow-[var(--button-dark)]">
                  <div className="flex flex-col">
                    <div className="flex w-full items-start justify-between">
                      <ContentHeading level="h3">
                        {PROJECT.HERO.TITLE}
                      </ContentHeading>
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
                  <div className="flex h-fit w-fit flex-row flex-wrap gap-y-2">
                    {PROJECT.HERO.SKILLS.map((tag, index) => (
                      <p
                        className="bg-greyscale-100 font-dm-mono text-greyscale-500 dark:bg-greyscale-900 border-greyscale-950/10 dark:border-greyscale-50/10 dark:text-greyscale-400 mr-[1px] border p-2 !text-sm leading-none first:rounded-l-xl first:pl-3 last:rounded-r-xl last:pr-3 md:!text-base"
                        key={index}
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex flex-row justify-end gap-2">
                  {PROJECT.HERO.GITHUB && (
                    <Button
                      theme="secondary"
                      href={PROJECT.HERO.GITHUB}
                      target="_blank"
                      isLink
                      noBlur
                    >
                      {PROJECT_PAGE_CONST.BUTTONS.GITHUB}
                    </Button>
                  )}
                  <Button
                    theme="primary"
                    href={PROJECT.HERO.LINK}
                    target="_blank"
                    isLink
                    noBlur
                  >
                    {PROJECT_PAGE_CONST.BUTTONS.VIEW}
                  </Button>
                </div>
              </div>
              <div className="mask-gradient bg-greyscale-50/50 dark:bg-greyscale-950/50 pointer-events-none absolute bottom-0 left-0 h-1/3 w-full backdrop-blur-md" />
            </>
          )}
        </div>
        {hook.isMobile && (
          <div className="col-span-full flex h-full flex-col justify-between gap-4">
            <div className="dark:bg-greyscale-950 bg-greyscale-50 border-greyscale-950/10 dark:border-greyscale-50/10 flex flex-col gap-4 rounded-2xl border p-4 shadow-[var(--button-light)] dark:shadow-[var(--button-dark)]">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <div className="flex w-full items-start justify-between">
                    <ContentHeading level="h3">
                      {PROJECT.HERO.TITLE}
                    </ContentHeading>
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
                <div className="flex h-fit w-fit flex-row flex-wrap gap-y-2">
                  {PROJECT.HERO.SKILLS.map((tag, index) => (
                    <p
                      className="bg-greyscale-100 font-dm-mono text-greyscale-500 dark:bg-greyscale-900 border-greyscale-950/10 dark:border-greyscale-50/10 dark:text-greyscale-400 mr-[1px] border p-2 !text-sm leading-none first:rounded-l-xl first:pl-3 last:rounded-r-xl last:pr-3 md:!text-base"
                      key={index}
                    >
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex w-full flex-row justify-end gap-2">
                {PROJECT.HERO.GITHUB && (
                  <Button
                    theme="secondary"
                    href={PROJECT.HERO.GITHUB}
                    target="_blank"
                    isLink
                    noBlur
                  >
                    {PROJECT_PAGE_CONST.BUTTONS.GITHUB}
                  </Button>
                )}
                <Button
                  theme="primary"
                  href={PROJECT.HERO.LINK}
                  target="_blank"
                  isLink
                  noBlur
                >
                  {PROJECT_PAGE_CONST.BUTTONS.VIEW}
                </Button>
              </div>
            </div>
          </div>
        )}
      </InsetBlock>
    </>
  );
};
