"use client";
import { useEffect, useState } from "react";

export const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // component only renders after hydration to prevent mismatch
  }, []);

  if (!isClient) return null;
  {
    return <>{children}</>;
  }
};
