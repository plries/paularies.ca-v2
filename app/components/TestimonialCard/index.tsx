"use client";
import Image from "next/image";
import { ContentBlock, ContentHeading, IconButton } from "../";
import { TestimonialCardPropTypes } from "./types";
import { ChevronIcon } from "@/public";

export const TestimonialCard = ({
  testimonial,
  CLOSE,
  EXPAND,
  isOpen,
  toggleCard,
}: TestimonialCardPropTypes) => {
  return (
    <ContentBlock
      additionalClasses={`pb-18 transition-[max-height] duration-1000 overflow-hidden relative
          ${isOpen ? "max-h-[50rem] md:max-h-[46rem] lg:max-h-[39rem]" : "max-h-48"}`}
    >
      <IconButton
        onClick={() => toggleCard(testimonial.NAME)}
        theme="tertiary"
        additionalClasses={{
          container: "!absolute w-fit bottom-4 left-1/2 -translate-x-1/2 z-10",
          button: `bg-greyscale-50 border-greyscale-950/10 dark:border-greyscale-50/10 !text-greyscale-600 dark:!text-greyscale-300 dark:bg-greyscale-950 ${isOpen ? "" : "shadow-sm"}`,
        }}
        icon={
          <span
            className={`ease-in-out-circ transition-transform duration-500 ${isOpen ? "-rotate-180" : ""}`}
          >
            <ChevronIcon />
          </span>
        }
        name={`${isOpen ? CLOSE : EXPAND}`}
        noBlur
      />
      <div
        className={`after:to-greyscale-100 dark:after:to-greyscale-900 flex flex-col gap-4 transition-opacity duration-1000 after:absolute after:top-0 after:left-0 after:h-full after:w-full after:rounded-xl after:bg-gradient-to-b after:from-transparent after:from-50% after:transition-opacity after:duration-1000 md:mb-10 ${isOpen ? "after:opacity-0" : "opacity-50 after:opacity-100"}`}
      >
        <div className="flex flex-row items-center gap-2">
          <Image
            src={testimonial.IMAGE.SRC}
            alt={testimonial.IMAGE.ALT}
            width={800}
            height={800}
            className="border-greyscale-950/10 dark:border-greyscale-50/10 aspect-square h-12 w-12 rounded-full border lg:h-14 lg:w-14"
          />
          <div className="flex flex-col">
            <ContentHeading level="h3">{testimonial.NAME}</ContentHeading>
            <h4 className="text-greyscale-800 dark:text-greyscale-200 text-sm leading-none md:!text-base lg:!text-lg">
              {testimonial.TITLE}
            </h4>
          </div>
        </div>
        <p className="text-greyscale-600 dark:text-greyscale-300 flex flex-col gap-4">
          {testimonial.QUOTE.map((quote, index) => (
            <span className="block" key={index}>
              {quote}
            </span>
          ))}
        </p>
      </div>
    </ContentBlock>
  );
};
