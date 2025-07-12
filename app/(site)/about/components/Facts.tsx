"use client";
import React from "react";
import { easeInOut } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { FACTS_CONST } from "../const";
import {
  ContentBlock,
  ContentHeading,
  Heading,
  IconButton,
} from "@/app/components/";

export const Facts = () => {
  return (
    <section className="col-span-full mt-16 grid grid-cols-4 gap-3 rounded-3xl md:grid-cols-8 md:gap-4 lg:grid-cols-12">
      <Heading level="h2">{FACTS_CONST.HEADING}</Heading>
      <div className="col-span-full flex flex-col gap-3 md:col-span-6 md:col-start-2 md:flex-row md:gap-4 lg:col-span-10 lg:col-start-2">
        {FACTS_CONST.FACTS.map((fact, index) => (
          <ContentBlock
            key={index}
            additionalClasses={`w-full first:rotate-2 last:-rotate-2 ${index === 1 && "translate-y-2"}`}
            transition={{ duration: 0.5, easeInOut, delay: (index ?? 0) * 0.2 }}
          >
            <div className="flex w-full flex-row flex-wrap items-center justify-between gap-3">
              <ContentHeading level="h3" additionalClasses="!w-fit">
                {fact.TITLE}
              </ContentHeading>
              <IconButton
                isLink
                theme="tertiary"
                href={fact.LINK.HREF}
                name={fact.LINK.NAME}
                target="_blank"
                icon={
                  <span className="ease-in-out-circ -rotate-45 transition-transform duration-300 group-hover:rotate-0">
                    <ArrowRight size={20} />
                  </span>
                }
                additionalClasses={{
                  container: "w-fit",
                }}
              />
            </div>
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
