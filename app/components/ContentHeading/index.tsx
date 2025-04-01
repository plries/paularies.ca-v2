import { ContentHeadingPropTypes } from "./types";

export const ContentHeading = ({
  children,
  level,
  additionalClasses,
}: ContentHeadingPropTypes) => {
  const Tag = level || "h1";
  return (
    <Tag className={`font-instrument-serif dark:text-greyscale-200 w-full !text-xl md:!text-2xl lg:!text-[1.75rem] ${additionalClasses}`}>
      {children}
    </Tag>
  );
};
