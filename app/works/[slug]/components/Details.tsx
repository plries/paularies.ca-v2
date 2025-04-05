import { ProjectPagePropsTypes } from "./types";
import { ContentBlock, ContentHeading } from "@/app/components";

export const Details = ({ PROJECT }: ProjectPagePropsTypes) => {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:gap-4">
      {PROJECT.DETAILS.map((detail, index) => (
        <ContentBlock
          additionalClasses="md:w-full flex flex-col gap-3"
          key={index}
        >
          <ContentHeading level="h3">{detail.HEADING}</ContentHeading>
          <p className="text-greyscale-600 dark:text-greyscale-300">
            {PROJECT.DETAILS[index].DESCRIPTION.map((description, index) => (
              <span key={index}>
                {description}
                <br />
              </span>
            ))}
          </p>
        </ContentBlock>
      ))}
    </div>
  );
};
