import { ContentHeadingPropTypes } from "./types";

export const ContentHeading = ({
  children,
  level,
  additionalClasses,
}: ContentHeadingPropTypes) => {
  const Tag = level || "h1";
  return (
    <Tag
      className={`font-instrument-serif text-greyscale-950 dark:text-greyscale-50 w-full leading-none ${
        additionalClasses
          ? additionalClasses
          : "!text-2xl md:!text-[1.75rem] lg:!text-[2rem]"
      }}`}
    >
      {children}
    </Tag>
  );
};
