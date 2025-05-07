import React from "react";
import { Feather, HeartHandshake, RefreshCcw } from "lucide-react";
import { Heading, ContentBlock, ContentHeading } from "@/app/components";
import { VALUES_CONST } from "../const";

export const Values = () => {
  return (
    <section className="col-span-full mt-16 grid grid-cols-4 gap-3 rounded-3xl md:grid-cols-8 md:gap-4 lg:grid-cols-12">
      <Heading level="h2">{VALUES_CONST.HEADING}</Heading>
      <div className="col-span-full md:col-span-6 md:col-start-2 lg:col-start-2 lg:col-span-10 flex flex-col gap-3 md:flex-row md:gap-4">
        {VALUES_CONST.VALUES.map((value, index) => (
          <ContentBlock key={index} additionalClasses="w-full">
            <div className="bg-greyscale-100 border-greyscale-950/5 dark:border-greyscale-50/5 dark:bg-greyscale-900 text-greyscale-600 dark:text-greyscale-400 mb-6 w-fit rounded-full border p-2">
              {index === 0 ? (
                <RefreshCcw width={20} height={20} />
              ) : index === 1 ? (
                <HeartHandshake width={20} height={20} />
              ) : (
                <Feather width={20} height={20} />
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
      </div>
    </section>
  );
};
