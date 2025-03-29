import { HeadingPropTypes } from "./types";

export const Heading = ({ children, level }: HeadingPropTypes) => {
  const Tag = level || "h1";
  return (
    <Tag className="text-greyscale-950 bg-greyscale-100 shadow-inset-light md:text-md rounded-xl px-4 py-2 text-base lg:text-lg">
      {children}
    </Tag>
  );
};
