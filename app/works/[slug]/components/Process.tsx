import { ProjectPagePropsTypes } from "./types";
import { Heading, ContentBlock, ContentHeading } from "@/app/components";
import { PROJECT_PAGE_CONST } from "../const";

export const Process = ({ PROJECT }: ProjectPagePropsTypes) => {
  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <Heading level="h2">{PROJECT_PAGE_CONST.HEADINGS.PROCESS}</Heading>
      {PROJECT.PROCESS.map((process, index) => (
        <ContentBlock
          additionalClasses="flex flex-row gap-3 md:gap-4"
          key={index}
        >
          <div className="w-full">
            <ContentHeading
              level="h3"
              additionalClasses="flex flex-row gap-3 md:gap-4"
            >
              {process.HEADING}
            </ContentHeading>
            <p className="text-greyscale-600 dark:text-greyscale-300">
              {process.DESCRIPTION}
            </p>
          </div>
          <div className="bg-greyscale-200 dark:bg-greyscale-800 aspect-video w-full rounded-lg" />
        </ContentBlock>
      ))}
    </div>
  );
};
