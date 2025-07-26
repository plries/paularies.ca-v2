"use client";
import Link from "next/link";
import Image from "next/image";
import { easeInOut, motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { MOTION_CONFIG } from "@/app/(site)/const";
import { Dot } from "../Dot";
import { ProjectCardPropTypes } from "./types";
import { IconButton, ContentHeading, Chip } from "@/app/components";
import { useWindowSize } from "@/app/hooks";
import { useProjectCard } from "./useProjectCard";

export const ProjectCard = ({
  PROJECT,
  isChecked,
  index = 0,
}: ProjectCardPropTypes) => {
  const windowSize = useWindowSize();
  const projectCard = useProjectCard();

  return (
    <motion.div
      initial={MOTION_CONFIG.PROJECT_CARD.INITIAL}
      whileInView={MOTION_CONFIG.PROJECT_CARD.WHILE_IN_VIEW}
      transition={{
        duration: 0.5,
        easeInOut,
        delay: (index ?? 0) * 0.1,
      }}
      className="group relative col-span-full"
    >
      {!windowSize.isMobile && (
        <div className="group-hover:bg-greyscale-300/25 dark:group-hover:bg-greyscale-600/25 ease-in-out-circ pointer-events-none absolute -inset-1 scale-95 rounded-[1.75rem] transition-[background-color,scale] duration-300 group-hover:scale-100" />
      )}
      <article
        className={`bg-greyscale-50 dark:bg-greyscale-950 border-greyscale-950/10 dark:border-greyscale-50/10 relative flex flex-col gap-4 rounded-xl border p-4 shadow-[var(--card-light)] md:flex-row md:rounded-3xl dark:shadow-[var(--card-dark)] ${
          PROJECT.DISCIPLINE[0] === "design"
            ? "hover:border-sky-200 dark:hover:border-sky-900"
            : "hover:border-grass-200 dark:hover:border-grass-900"
        } ${isChecked ? "!flex-col" : ""} ${projectCard.isLoading ? "animate-pulse" : ""}`}
      >
        <Link
          className="contents"
          href={
            PROJECT.SLUG === ""
              ? "#"
              : `/works/${encodeURIComponent(PROJECT.SLUG)}`
          }
          onClick={() => {
            if (PROJECT.SLUG !== "") projectCard.handleOnClick();
          }}
        >
          <div className="dark:bg-greyscale-900 bg-greyscale-100 relative grid aspect-video w-full place-items-center overflow-hidden rounded-lg md:rounded-xl">
            {PROJECT.IMAGE.SRC && (
              <Image
                src={PROJECT.IMAGE.SRC}
                alt={PROJECT.IMAGE.ALT}
                height={1080}
                width={1920}
                className={`w-full transition-[translate,scale] duration-300 ease-in-out ${PROJECT.DISCIPLINE[0] === "development" ? "translate-y-4 scale-105 group-hover:-translate-y-2" : "group-hover:scale-[102%]"}`}
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
              <div className="flex h-fit w-fit flex-row flex-wrap gap-2">
                {PROJECT.SKILLS.map((tag, index) => (
                  <Chip key={index}>{tag}</Chip>
                ))}
              </div>
            </div>
            <div className="flex flex-row items-end justify-end gap-2">
              <IconButton
                theme="primary"
                name="view project"
                icon={
                  <ArrowRight
                    size={20}
                    className={`ease-in-out-circ -rotate-45 transition-transform duration-300 group-hover:rotate-0 group-disabled:group-hover:-rotate-45`}
                  />
                }
                additionalClasses={{
                  button: "dark:border-greyscale-50",
                }}
                noMotion
                noHover
                disabled={PROJECT.SLUG !== "" ? false : true}
              />
            </div>
          </div>
        </Link>
      </article>
    </motion.div>
  );
};
