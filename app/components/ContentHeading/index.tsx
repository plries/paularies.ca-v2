import { ContentHeadingPropTypes } from "./types";

export const ContentHeading = ({
  children,
  level,
  additionalClasses,
}: ContentHeadingPropTypes) => {
  const Tag = level || "h1";
  return (
    <Tag
      className={`font-instrument-serif text-greyscale-950 dark:text-greyscale-50 w-full text-lg leading-none md:text-xl lg:text-2xl ${additionalClasses ?? ""}`}
    >
      {children}
    </Tag>
  );
};
