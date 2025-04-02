import { InsetBlockPropTypes } from "./types";

export const InsetBlock = ({
  children,
  additionalClasses,
}: InsetBlockPropTypes) => {
  return (
    <div
      className={`bg-greyscale-100 dark:bg-greyscale-900 border-greyscale-950/5 dark:border-greyscale-50/5 shadow-[var(--inset-light)] col-span-full grid grid-cols-4 gap-3 rounded-3xl border-[1px] p-3 md:grid-cols-8 md:gap-4 md:px-6 md:py-24 lg:grid-cols-12 lg:py-36 dark:shadow-[var(--inset-dark)] ${additionalClasses}`}
    >
      {children}
    </div>
  );
};
