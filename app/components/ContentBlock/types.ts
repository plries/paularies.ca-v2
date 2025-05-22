export type ContentBlockPropTypes = {
  children: React.ReactNode;
  additionalClasses?: string;
  transition?: { duration: number; easeInOut: (time: number) => number; delay: number };
};
