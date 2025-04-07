import { ProjectPagePropsTypes } from "./types";
import { Heading, ContentBlock, ContentHeading } from "@/app/components";
import { ProcessMedia } from "./ProcessMedia";
import { PROJECT_PAGE_CONST } from "../const";

export const Process = ({ PROJECT }: ProjectPagePropsTypes) => {
  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <Heading level="h2">{PROJECT_PAGE_CONST.HEADINGS.PROCESS}</Heading>
      {PROJECT.PROCESS.map((process, index) => (
        <ContentBlock additionalClasses="gap-3 md:gap-6 lg:gap-8" key={index}>
          <div className="flex w-full flex-col gap-3">
            <ContentHeading level="h3">{process.HEADING}</ContentHeading>
            <p className="text-greyscale-600 dark:text-greyscale-300">
              {process.DESCRIPTION}
            </p>
          </div>
          <ProcessMedia
            PROCESS={{
              ...process,
              DESCRIPTION: process.DESCRIPTION.map(
                (node) => node?.toString() ?? "",
              ),
            }}
          />
        </ContentBlock>
      ))}
    </div>
  );
};
