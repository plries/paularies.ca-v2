import { ProjectPagePropsTypes } from "./types";
import { PROJECT_PAGE_CONST } from "../const";
import { Heading, ContentBlock, ContentHeading } from "@/app/components";

export const Reflection = ({ PROJECT }: ProjectPagePropsTypes) => {
  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <Heading level="h2">{PROJECT_PAGE_CONST.HEADINGS.REFLECTION}</Heading>
      <ContentBlock additionalClasses="flex flex-col gap-3">
        <ContentHeading level="h3">{PROJECT.REFLECTION.HEADING}</ContentHeading>
        <p className="text-greyscale-600 dark:text-greyscale-300">
          {PROJECT.REFLECTION.DESCRIPTION}
        </p>
      </ContentBlock>
    </div>
  );
};
