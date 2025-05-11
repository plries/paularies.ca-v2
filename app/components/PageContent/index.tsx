"use client";
import { PageTransition } from "../PageTransition";

export const PageContent = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <PageTransition>
      <main className="border-greyscale-950/5 dark:border-greyscale-50/5 grid w-full max-w-[1440px] grid-cols-4 gap-3 border-x border-dashed px-3 pb-3 md:grid-cols-8 md:gap-4 md:px-6 md:pb-6 lg:grid-cols-12 lg:px-12 lg:pb-12">
        {children}
      </main>
      <div className="mask-gradient bg-greyscale-50/50 dark:bg-greyscale-950/50 pointer-events-none fixed bottom-0 left-0 h-24 w-screen backdrop-blur-md" />
    </PageTransition>
  );
};
