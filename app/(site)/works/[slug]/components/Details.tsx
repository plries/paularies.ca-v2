"use client";
import { IconContext, GithubLogo, ArrowRight } from "@phosphor-icons/react";
import { Chip, ContentHeading, Dot, IconButton } from "@/app/components";
import { PROJECT_PAGE_CONST } from "../const";
import { WorksDetailsPropTypes } from "./types";

export const Details = ({ PROJECT, hasLinks }: WorksDetailsPropTypes) => {
  return (
    <IconContext.Provider value={{ size: 20 }}>
      <div className="dark:bg-greyscale-950 bg-greyscale-50 border-greyscale-950/10 dark:border-greyscale-50/10 flex flex-col gap-2 rounded-xl border p-4 shadow-xs md:rounded-3xl lg:sticky lg:top-32 lg:mt-16 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:dark:border-transparent lg:dark:bg-transparent">
        <div className="flex flex-col gap-3">
          <div className="flex w-full items-start justify-between lg:flex-row-reverse lg:items-center lg:gap-2">
            <ContentHeading
              level="h1"
              additionalClasses="!text-2xl md:!text-[1.75rem] lg:!text-[2.25rem]"
            >
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
        <div className="flex h-fit w-fit flex-row flex-wrap gap-2">
          {PROJECT.HERO.SKILLS.map((tag, index) => (
            <Chip key={index}>{tag}</Chip>
          ))}
        </div>
        {hasLinks && (
          <div className="mt-2 flex w-full flex-row justify-end gap-2 lg:justify-start">
            {PROJECT.HERO.GITHUB && (
              <IconButton
                theme="secondary"
                href={PROJECT.HERO.GITHUB}
                name={PROJECT_PAGE_CONST.BUTTONS.GITHUB}
                icon={<GithubLogo />}
                target="_blank"
                isLink
                noMotion
              />
            )}
            <IconButton
              theme="primary"
              href={PROJECT.HERO.LINK}
              name={PROJECT_PAGE_CONST.BUTTONS.VIEW}
              target="_blank"
              icon={
                <ArrowRight className="ease-in-out-circ -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
              }
              isLink
              noMotion
            />
          </div>
        )}
      </div>
    </IconContext.Provider>
  );
};
