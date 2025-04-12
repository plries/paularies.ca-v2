"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MOTION_CONFIG } from "@/app/const";
import { Dot } from "../Dot";
import { ProjectCardPropTypes } from "./types";
import { IconButton, ContentHeading } from "../../components";
import { ArrowIcon } from "@/public";
import { useWindowSize } from "@/app/hooks";

export const ProjectCard = ({ PROJECT, isChecked }: ProjectCardPropTypes) => {
  const hook = useWindowSize();

  return (
    <motion.div
      initial={MOTION_CONFIG.PROJECT_CARD.INITIAL}
      whileInView={MOTION_CONFIG.PROJECT_CARD.WHILE_IN_VIEW}
      transition={MOTION_CONFIG.TRANSITION}
      className="group group col-span-full rounded-2xl"
    >
      {hook.isMobile && (
        <div className="group-hover:bg-greyscale-300/25 dark:group-hover:bg-greyscale-600/25 absolute -inset-1 rounded-2xl duration-500 pointer-events-none" />
      )}
      <article
        className={`bg-greyscale-50 dark:bg-greyscale-950 border-greyscale-950/10 dark:border-greyscale-50/10 relative flex flex-col gap-2 rounded-xl border p-2 shadow-[var(--card-light)] md:flex-row dark:shadow-[var(--card-dark)] ${
          PROJECT.DISCIPLINE[0] === "design"
            ? "hover:border-sky-200 dark:hover:border-sky-900"
            : "hover:border-grass-200 dark:hover:border-grass-900"
        } ${isChecked ? "!flex-col" : ""} `}
      >
        <Link
          className="contents"
          href={`/works/${encodeURIComponent(PROJECT.SLUG)}`}
        >
          <div className="dark:bg-greyscale-900 bg-greyscale-100 relative grid aspect-video w-full place-items-center overflow-hidden rounded-lg">
            {PROJECT.IMAGE.SRC && (
              <Image
                src={PROJECT.IMAGE.SRC}
                alt={PROJECT.IMAGE.ALT}
                height={1080}
                width={1920}
                className={`ease-in-out-circ w-full transition-[translate,scale] duration-700 ${PROJECT.DISCIPLINE[0] === "development" ? "scale-105 group-hover:-translate-y-2" : "group-hover:scale-[102%]"}`}
              />
            )}
            <p className="text-greyscale-600 dark:text-greyscale-300">...</p>
          </div>
          <div className="flex w-full flex-col justify-between gap-4">
            <div className="flex flex-col gap-2">
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
            <div className="flex flex-row items-end justify-between gap-2">
              <div className="flex h-fit w-fit flex-row flex-wrap gap-y-2 rounded-full">
                {PROJECT.SKILLS.map((tag, index) => (
                  <p
                    className="bg-greyscale-100 font-dm-mono text-greyscale-500 dark:bg-greyscale-900 dark:text-greyscale-400 dark:border-greyscale-950 border-greyscale-50 border-r-[1px] p-2 !text-sm leading-none first:rounded-l-full first:pl-3 last:rounded-r-full last:border-0 last:pr-3 md:!text-base"
                    key={index}
                  >
                    {tag}
                  </p>
                ))}
              </div>
              <IconButton
                theme="tertiary"
                name={"view project"}
                icon={
                  <span
                    className={`dark:text-greyscale-50 transition-[rotate] duration-500 group-hover:-rotate-45 hover:bg-transparent ${PROJECT.SLUG == "" ? "group-hover:rotate-360" : ""}`}
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
