import Link from "next/link";
import Image from "next/image";
import { Dot } from "../Dot";
import { ProjectCardPropTypes } from "./types";
import { IconButton } from "../IconButton";
import { ArrowIcon } from "@/public";

export const ProjectCard = ({ project }: ProjectCardPropTypes) => {
  return (
    <div className="hover:bg-greyscale-300/15 dark:hover:bg-greyscale-600/25 group col-span-full rounded-2xl p-1">
      <article
        className={`bg-greyscale-50 dark:bg-greyscale-950 shadow-card-light border-greyscale-950/10 dark:border-greyscale-50/10 flex flex-col gap-2 rounded-xl border-[1px] p-2 !transition-all duration-500 group-hover:scale-[99.5%] md:flex-row dark:!shadow-[var(--card-dark)] ${
          project.DISCIPLINE === "design"
            ? "hover:border-sky-200 dark:hover:border-sky-900"
            : "hover:border-grass-200 dark:hover:border-grass-900"
        } `}
      >
        <Link className="contents" href={project.LINK}>
          <div className="dark:bg-greyscale-900 bg-greyscale-100 relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={project.IMAGE.SRC}
              alt={project.IMAGE.ALT}
              height={1080}
              width={1920}
              className={`w-full !transition-all duration-700 ${project.DISCIPLINE === "development" ? "scale-105 group-hover:-translate-y-2" : "group-hover:scale-[102%]"}`}
            />
          </div>
          <div className="flex w-full flex-col justify-between gap-4">
            <div>
              <div className="flex w-full items-start justify-between">
                <h3 className="font-instrument-serif dark:text-greyscale-50 text-2xl md:text-[1.75rem] lg:text-[2rem]">
                  {project.TITLE}
                </h3>
                <Dot
                  discipline={project.DISCIPLINE as "design" | "development"}
                />
              </div>
              <p className="text-greyscale-600 dark:text-greyscale-300">
                {project.DESCRIPTION}
              </p>
            </div>
            <div className="flex flex-row items-end justify-between gap-2">
              <div className="flex h-fit w-fit flex-row flex-wrap gap-y-2 rounded-full">
                {project.SKILLS.map((tag, index) => (
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
                    className={`dark:text-greyscale-50 !transition-all duration-500 group-hover:-rotate-45 hover:bg-transparent ${project.DISCIPLINE === "design" ? "group-hover:border-sky-600 group-hover:text-sky-600" : "group-hover:text-grass-600 group-hover:border-grass-600"}`}
                  >
                    <ArrowIcon />
                  </span>
                }
                additionalClasses={
                  `dark:border-greyscale-50 ${project.DISCIPLINE === "design" ? "group-hover:border-sky-600" : "group-hover:border-grass-600"}`
                }
              />
            </div>
          </div>
        </Link>
      </article>
    </div>
  );
};
