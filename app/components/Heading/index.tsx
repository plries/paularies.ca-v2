import { HeadingPropTypes } from "./types";

export const Heading = ({ children, level }: HeadingPropTypes) => {
  const Tag = level || "h1";
  return (
    <div className="col-span-full grid place-items-center">
      <Tag className="text-greyscale-600 bg-greyscale-100 dark:bg-greyscale-900 dark:text-greyscale-300 shadow-inset-light md:text-md w-fit rounded-full px-4 py-2 text-base md:text-lg lg:text-xl dark:!shadow-[var(--inset-dark)]">
        {children}
      </Tag>
    </div>
  );
};
