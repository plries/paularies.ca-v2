"use client";
import React from "react";
import { FACTS_CONST } from "../const";
import { ContentBlock, ContentHeading, Heading } from "@/app/components/";

export const Facts = () => {
  return (
    <section className="col-span-full mt-16 grid grid-cols-4 gap-3 rounded-3xl md:grid-cols-8 md:gap-4 lg:grid-cols-12">
      <Heading level="h2">{FACTS_CONST.HEADING}</Heading>
      <div className="col-span-full md:col-span-3 md:col-start-2 md:col-span-6 lg:col-start-2 lg:col-span-10 flex flex-col gap-3 md:flex-row md:gap-4">
        {FACTS_CONST.FACTS.map((fact, index) => (
          <ContentBlock
            key={index}
            additionalClasses="w-full"
          >
            <ContentHeading level="h3">{fact.TITLE}</ContentHeading>
            <p className="text-greyscale-600 dark:text-greyscale-300">
              {fact.DESCRIPTION.map((description, index) => (
                <React.Fragment key={index}>{description}</React.Fragment>
              ))}
            </p>
          </ContentBlock>
        ))}
      </div>
    </section>
  );
};
