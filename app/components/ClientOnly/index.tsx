"use client";
import { useEffect, useState } from "react";
import { PageTransition } from "../PageTransition";
import { PaStar } from "@/public";

export const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setIsClient(true); // component only renders after hydration to prevent mismatch
  }, []);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!isClient && !hasMounted)
    return (
      <div className="grid h-screen w-screen place-items-center motion-safe:animate-pulse">
        <span className="text-greyscale-950 dark:text-greyscale-50 motion-safe:animate-[spin_12s_linear_infinite]">
          <PaStar />
        </span>
      </div>
    );
  {
    return <>{children}</>;
  }
};
