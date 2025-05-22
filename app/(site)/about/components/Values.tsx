"use client";
import React from "react";
import { easeInOut } from "framer-motion";
import { IconContext, Feather, Handshake, Waves } from "@phosphor-icons/react";
import { Heading, ContentBlock, ContentHeading } from "@/app/components";
import { VALUES_CONST } from "../const";

export const Values = () => {
  return (
    <IconContext.Provider value={{ size: 24 }}>
      <section className="col-span-full mt-16 grid grid-cols-4 gap-3 rounded-3xl md:grid-cols-8 md:gap-4 lg:grid-cols-12">
        <Heading level="h2">{VALUES_CONST.HEADING}</Heading>
        <div className="col-span-full flex flex-col gap-3 md:col-span-6 md:col-start-2 md:flex-row md:gap-4 lg:col-span-10 lg:col-start-2">
          {VALUES_CONST.VALUES.map((value, index) => (
            <ContentBlock
              key={index}
              additionalClasses="w-full"
              transition={{
                duration: 0.5,
                easeInOut,
                delay: (index ?? 0) * 0.2,
              }}
            >
              <div className="bg-greyscale-100 border-greyscale-950/5 dark:border-greyscale-50/5 dark:bg-greyscale-900 text-greyscale-600 dark:text-greyscale-400 mb-6 w-fit rounded-full border p-2">
                {index === 0 ? (
                  <Waves />
                ) : index === 1 ? (
                  <Handshake />
                ) : (
                  <Feather />
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
    </IconContext.Provider>
  );
};
