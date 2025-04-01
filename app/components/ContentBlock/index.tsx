import { ContentBlockPropTypes } from "./types";

export const ContentBlock = ({
  children,
  additionalClasses,
}: ContentBlockPropTypes) => {
  return (
    <div
      className={`bg-greyscale-50 dark:bg-greyscale-950 border-greyscale-950/10 rounded-xl border-[1px] p-6 ${additionalClasses}`}
    >
      {children}
    </div>
  );
};
