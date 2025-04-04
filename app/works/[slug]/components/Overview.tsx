import { ProjectPagePropsTypes } from "./types";
import { PROJECT_PAGE_CONST } from "../const";
import { Heading, ContentBlock, ContentHeading } from "@/app/components";

export const Overview = ({ PROJECT }: ProjectPagePropsTypes) => {
  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <Heading level="h2">{PROJECT_PAGE_CONST.HEADINGS.OVERVIEW}</Heading>
      {PROJECT.OVERVIEW.map((overview, index) => (
        <ContentBlock key={index}>
          <ContentHeading level="h3">{overview.HEADING}</ContentHeading>
          <p className="text-greyscale-600 dark:text-greyscale-300">
            {overview.DESCRIPTION}
          </p>
        </ContentBlock>
      ))}
    </div>
  );
};
