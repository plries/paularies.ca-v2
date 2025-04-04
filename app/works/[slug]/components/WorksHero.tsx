import Image from "next/image";
import { InsetBlock, Button, ContentHeading, Dot } from "@/app/components";
import { PROJECT_PAGE_CONST } from ".././const";
import { ProjectPagePropsTypes } from "./types";

export const WorksHero = ({ PROJECT }: ProjectPagePropsTypes) => {
  return (
    <>
      <InsetBlock additionalClasses="md:!p-6">
        <div className="col-span-full flex h-full flex-col justify-between gap-3 md:col-span-4 md:col-start-1 lg:col-span-6 lg:col-start-1">
          <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-row gap-1">
                {PROJECT.HERO.DISCIPLINE.map((discipline, index) => (
                  <Dot
                    key={index}
                    discipline={(discipline as "design") || "development"}
                  />
                ))}
              </div>
              <ContentHeading
                level="h1"
                additionalClasses="!text-[1.75rem] md:!text-[2rem] lg:!text-[2.5rem]"
              >
                {PROJECT.HERO.TITLE}
              </ContentHeading>
            </div>
            <p className="text-greyscale-600 dark:text-greyscale-300">
              {PROJECT.HERO.DESCRIPTION}
            </p>
          </div>
          <Button
            theme="primary"
            href={PROJECT.HERO.LINK}
            target="_blank"
            additionalClasses={{
              container: "w-full flex justify-end md:justify-start",
            }}
            isLink
          >
            {PROJECT_PAGE_CONST.BUTTONS.VIEW}
          </Button>
        </div>
        <div className="bg-greyscale-50 border-greyscale-950/10 dark:border-greyscale-50/10 dark:bg-greyscale-950 -order-1 col-span-full aspect-video rounded-lg md:order-1 md:col-span-4 md:col-start-5 lg:col-span-6 lg:col-start-7">
          <Image
            src={PROJECT.HERO.IMAGE.SRC}
            alt={PROJECT.HERO.IMAGE.ALT}
            height={1080}
            width={1920}
          />
        </div>
      </InsetBlock>
    </>
  );
};
