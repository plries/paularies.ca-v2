import React from "react";
import { Heading, ContentBlock, ContentHeading } from "@/app/components";
import { VALUES_CONST } from "../const";

export const Values = () => {
  return (
    <section className="col-span-full mt-16 grid grid-cols-4 gap-3 rounded-3xl md:grid-cols-8 md:gap-4 lg:grid-cols-12">
      <Heading level="h2">{VALUES_CONST.HEADING}</Heading>
      {VALUES_CONST.VALUES.slice(0, 2).map((value, index) => (
        <ContentBlock
          key={index}
          additionalClasses="col-span-full md:col-span-3 md:col-start-2 [&:nth-child(3)]:md:col-start-5 lg:col-span-5 lg:col-start-2 [&:nth-child(3)]:lg:col-start-7"
        >
          <ContentHeading level="h3">{value.TITLE}</ContentHeading>
          <p className="text-greyscale-600 dark:text-greyscale-300">
            {value.PARAGRAPH.map((text, index) => (
              <React.Fragment key={index}>{text}</React.Fragment>
            ))}
          </p>
        </ContentBlock>
      ))}
      <ContentBlock additionalClasses="col-span-full md:col-start-2 md:col-span-6 lg:col-start-2 lg:col-span-10">
        <h3 className="font-instrument-serif dark:text-greyscale-200 w-full !text-xl md:!text-2xl lg:!text-[1.75rem]">
          {VALUES_CONST.VALUES[2].TITLE}
        </h3>
        <p className="text-greyscale-600 dark:text-greyscale-300">
          {VALUES_CONST.VALUES[2].PARAGRAPH}
        </p>
      </ContentBlock>
    </section>
  );
};
