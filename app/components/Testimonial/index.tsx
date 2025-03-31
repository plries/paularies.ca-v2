import Image from "next/image";
import { TestimonialPropTypes } from "./types";

export const Testimonial = ({ testimonial }: TestimonialPropTypes) => {
  return (
    <div className="bg-greyscale-50 border-greyscale-950/10 dark:bg-greyscale-950 flex flex-col gap-4 rounded-xl border-[1px] p-4 !transition-[rotate] odd:hover:-rotate-1 even:hover:rotate-1">
      <div className="flex flex-row gap-2">
        <Image
          src={testimonial.IMAGE.SRC}
          alt={testimonial.IMAGE.ALT}
          width={800}
          height={800}
          className="aspect-square h-12 w-12 rounded-full lg:h-14 lg:w-14"
        />
        <div className="flex flex-col">
          <h3 className="font-instrument-serif dark:text-greyscale-50 text-2xl leading-none md:text-[1.75rem] lg:text-[2rem]">
            {testimonial.NAME}
          </h3>
          <h4 className="text-greyscale-800 dark:text-greyscale-100 text-sm !leading-none md:!text-base lg:!text-lg">
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
    </div>
  );
};
