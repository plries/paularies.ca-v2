"use client";
import { PageTransition } from "../PageTransition";

export const PageContent = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <PageTransition>
      <main className="grid w-full max-w-7xl grid-cols-4 gap-3 px-3 md:grid-cols-8 md:gap-4 md:px-6 lg:grid-cols-12 lg:px-8">
        {children}
      </main>
    </PageTransition>
  );
};
