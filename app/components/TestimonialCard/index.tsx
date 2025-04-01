import Image from "next/image";
import { ContentBlock, ContentHeading } from "../";
import { TestimonialCardPropTypes } from "./types";

export const TestimonialCard = ({ testimonial }: TestimonialCardPropTypes) => {
  return (
    <ContentBlock additionalClasses="flex flex-col gap-4 !transition-all duration-500 odd:hover:-rotate-1 even:hover:rotate-1">
      <div className="flex flex-row gap-2">
        <Image
          src={testimonial.IMAGE.SRC}
          alt={testimonial.IMAGE.ALT}
          width={800}
          height={800}
          className="aspect-square h-12 w-12 rounded-full lg:h-14 lg:w-14"
        />
        <div className="flex flex-col">
          <ContentHeading level="h3" additionalClasses="leading-none">
            {testimonial.NAME}
          </ContentHeading>
          <h4 className="text-greyscale-800 dark:text-greyscale-200 text-sm leading-none md:!text-base lg:!text-lg">
            {testimonial.TITLE}
          </h4>
        </div>
      </div>
      <p className="text-greyscale-600 dark:text-greyscale-300 flex flex-col gap-2">
        {testimonial.QUOTE.map((quote, index) => (
          <span className="block" key={index}>
            {quote}
          </span>
        ))}
      </p>
    </ContentBlock>
  );
};
