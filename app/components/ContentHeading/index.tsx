import { ContentHeadingPropTypes } from "./types";

export const ContentHeading = ({
  children,
  level,
  additionalClasses,
}: ContentHeadingPropTypes) => {
  const Tag = level || "h1";
  return (
    <Tag
      className={`font-instrument-serif text-greyscale-950 dark:text-greyscale-50 w-full text-xl leading-none md:text-2xl lg:text-[1.75rem] ${additionalClasses ?? ""}`}
    >
      {children}
    </Tag>
  );
};
