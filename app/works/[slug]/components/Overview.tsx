import { ProjectPagePropsTypes } from "./types";
import { PROJECT_PAGE_CONST } from "../const";
import { Heading, ContentBlock, ContentHeading } from "@/app/components";

export const Overview = ({ PROJECT }: ProjectPagePropsTypes) => {
  return (
    <div className="mt-16 flex flex-col gap-3 md:gap-4">
      <Heading level="h2">{PROJECT_PAGE_CONST.HEADINGS.OVERVIEW}</Heading>
      <div className="flex flex-col gap-3 md:flex-row md:gap-4">
        {PROJECT.OVERVIEW.slice(0, 2).map((overview, index) => (
          <ContentBlock additionalClasses="w-full md:w-full md:first:w-2/3" key={index}>
            <ContentHeading level="h3">{overview.HEADING}</ContentHeading>
            <p className="text-greyscale-600 dark:text-greyscale-300">
              {overview.DESCRIPTION}
            </p>
          </ContentBlock>
        ))}
      </div>
      <div className="flex flex-col gap-3 md:flex-row md:gap-4">
        {PROJECT.OVERVIEW.slice(2, 4).map((overview, index) => (
          <ContentBlock additionalClasses="w-full md:first:w-full md:w-2/3" key={index}>
            <ContentHeading level="h3">{overview.HEADING}</ContentHeading>
            <p className="text-greyscale-600 dark:text-greyscale-300">
              {overview.DESCRIPTION}
            </p>
          </ContentBlock>
        ))}
      </div>
    </div>
  );
};
