"use client";
import { PageTransition } from "../PageTransition";

export const PageContent = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <PageTransition>
      <main className="border-greyscale-950/5 dark:border-greyscale-50/5 grid w-full max-w-7xl grid-cols-4 gap-3 border-x border-dashed px-3 md:grid-cols-8 md:gap-4 md:px-6 lg:grid-cols-12 lg:px-12">
        {children}
      </main>
    </PageTransition>
  );
};
