import { ProjectPagePropsTypes } from "./types";
import { PROJECT_PAGE_CONST } from "../const";
import { Heading, ContentBlock, ContentHeading } from "@/app/components";
import { Graph } from "@phosphor-icons/react";

export const Reflection = ({ PROJECT }: ProjectPagePropsTypes) => {
  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <Heading level="h2">{PROJECT_PAGE_CONST.HEADINGS.REFLECTION}</Heading>
      <ContentBlock>
        <div className="bg-greyscale-100 border-greyscale-950/5 dark:border-greyscale-50/5 dark:bg-greyscale-900 text-greyscale-600 darK:text-greyscale-400 mb-6 w-fit rounded-full border p-2">
          <Graph size={20} />
        </div>
        <ContentHeading level="h3">{PROJECT.REFLECTION.HEADING}</ContentHeading>
        <p className="text-greyscale-600 dark:text-greyscale-300">
          {PROJECT.REFLECTION.DESCRIPTION}
        </p>
      </ContentBlock>
    </div>
  );
};
