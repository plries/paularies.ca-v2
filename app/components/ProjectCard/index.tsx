"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MOTION_CONFIG } from "@/app/(site)/const";
import { Dot } from "../Dot";
import { ProjectCardPropTypes } from "./types";
import { IconButton, ContentHeading } from "@/app/components";
import { ArrowIcon } from "@/public";
import { useWindowSize } from "@/app/hooks";
import { useProjectCard } from "./useProjectCard";

export const ProjectCard = ({ PROJECT, isChecked }: ProjectCardPropTypes) => {
  const windowSize = useWindowSize();
  const projectCard = useProjectCard();

  return (
    <motion.div
      initial={MOTION_CONFIG.PROJECT_CARD.INITIAL}
      whileInView={MOTION_CONFIG.PROJECT_CARD.WHILE_IN_VIEW}
      transition={MOTION_CONFIG.TRANSITION}
      className="group group col-span-full"
    >
      {!windowSize.isMobile && (
        <div className="group-hover:bg-greyscale-300/25 dark:group-hover:bg-greyscale-600/25 pointer-events-none absolute -inset-1 rounded-[1.75rem] duration-300" />
      )}
      <article
        className={`bg-greyscale-50 dark:bg-greyscale-950 border-greyscale-950/10 dark:border-greyscale-50/10 relative flex flex-col gap-4 rounded-xl md:rounded-3xl border p-4 shadow-[var(--card-light)] md:flex-row dark:shadow-[var(--card-dark)] ${
          PROJECT.DISCIPLINE[0] === "design"
            ? "hover:border-sky-200 dark:hover:border-sky-900"
            : "hover:border-grass-200 dark:hover:border-grass-900"
        } ${isChecked ? "!flex-col" : ""} ${projectCard.isLoading ? "animate-pulse" : ""}`}
      >
        <Link
          className="contents"
          href={`/works/${encodeURIComponent(PROJECT.SLUG)}`}
          onClick={projectCard.handleOnClick}
        >
          <div className="dark:bg-greyscale-900 bg-greyscale-100 relative grid aspect-video w-full place-items-center overflow-hidden rounded-lg md:rounded-xl">
            {PROJECT.IMAGE.SRC && (
              <Image
                src={PROJECT.IMAGE.SRC}
                alt={PROJECT.IMAGE.ALT}
                height={1080}
                width={1920}
                className={`w-full transition-[translate,scale] duration-300 ease-in-out ${PROJECT.DISCIPLINE[0] === "development" ? "scale-105 group-hover:-translate-y-2" : "group-hover:scale-[102%]"}`}
              />
            )}
            <p className="text-greyscale-600 dark:text-greyscale-300">...</p>
          </div>
          <div className="flex w-full flex-col justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <div className="flex w-full items-start justify-between">
                  <ContentHeading level="h3">{PROJECT.TITLE}</ContentHeading>
                  <div className="flex flex-row gap-1">
                    {PROJECT.DISCIPLINE.map((discipline, index) => (
                      <Dot
                        key={index}
                        discipline={discipline as "design" | "development"}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-greyscale-600 dark:text-greyscale-300">
                  {PROJECT.DESCRIPTION}
                </p>
              </div>
              <div className="flex h-fit w-fit flex-row flex-wrap gap-y-2">
                {PROJECT.SKILLS.map((tag, index) => (
                  <p
                    className="bg-greyscale-100 font-dm-mono text-greyscale-500 dark:bg-greyscale-900 border-greyscale-950/10 dark:border-greyscale-50/10 dark:text-greyscale-400 mr-[1px] border p-2 !text-sm leading-none first:rounded-l-xl first:pl-3 last:rounded-r-xl last:pr-3 md:!text-base"
                    key={index}
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-row items-end justify-end gap-2">
              <IconButton
                theme="tertiary"
                name={"view project"}
                icon={
                  <span
                    className={`dark:text-greyscale-50 transition-[rotate] duration-300 group-hover:-rotate-45 hover:bg-transparent ${PROJECT.SLUG == "" ? "group-hover:rotate-360" : ""}`}
                  >
                    <ArrowIcon />
                  </span>
                }
                additionalClasses={{
                  button: "dark:border-greyscale-50",
                }}
                noBlur
                noHover
              />
            </div>
          </div>
        </Link>
      </article>
    </motion.div>
  );
};
