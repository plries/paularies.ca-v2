import React from "react";
import { Heading, ContentBlock, ContentHeading } from "@/app/components";
import { VALUES_CONST } from "../const";
import { PotionIcon, GearsIcon, HandHeartIcon } from "@/public";

export const Values = () => {
  return (
    <section className="col-span-full mt-16 grid grid-cols-4 gap-3 rounded-3xl md:grid-cols-8 md:gap-4 lg:grid-cols-12">
      <Heading level="h2">{VALUES_CONST.HEADING}</Heading>
      {VALUES_CONST.VALUES.map((value, index) => (
        <ContentBlock
          key={index}
          additionalClasses="col-span-full md:col-span-3 md:col-start-2 [&:nth-child(3)]:md:col-start-5 lg:col-start-2 lg:col-span-3 [&:nth-child(3)]:lg:col-span-4 [&:nth-child(4)]:lg:col-start-9"
        >
          <div className="bg-greyscale-100 border-greyscale-950/5 dark:border-greyscale-50/5 dark:bg-greyscale-900 text-greyscale-600 dark:text-greyscale-400 mb-6 w-fit rounded-full border p-2">
            {index === 0 ? (
              <PotionIcon />
            ) : index === 1 ? (
              <GearsIcon />
            ) : (
              <HandHeartIcon />
            )}
          </div>
          <ContentHeading level="h3">{value.TITLE}</ContentHeading>
          <p className="text-greyscale-600 dark:text-greyscale-300">
            {value.PARAGRAPH.map((text, index) => (
              <React.Fragment key={index}>{text}</React.Fragment>
            ))}
          </p>
        </ContentBlock>
      ))}
    </section>
  );
};
