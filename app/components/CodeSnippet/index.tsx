export const CodeSnippet = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <span className="bg-greyscale-100 dark:bg-greyscale-800 dark:text-greyscale-50 text-greyscale-950 border-greyscale-950/10 dark:border-greyscale-50/10 font-dm-mono rounded-md border-[1px] px-1 text-xs md:text-sm lg:text-base">
      {children}
    </span>
  );
};
