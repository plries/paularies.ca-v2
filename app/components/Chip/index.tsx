export const Chip = ({ children }: { children: React.ReactNode }) => (
  <>
    <p className="bg-greyscale-100 font-dm-mono text-greyscale-500 dark:bg-greyscale-900 border-greyscale-950/10 dark:border-greyscale-50/10 dark:text-greyscale-400 rounded-xl border p-2 !text-xs leading-none shadow-xs md:!text-sm">
      {children}
    </p>
  </>
);
