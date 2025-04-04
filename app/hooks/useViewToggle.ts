"use client";
import { useState, useRef } from "react";

export const useViewToggle = () => {
  const viewToggleRef = useRef<HTMLDivElement>(null);
  const [isCode, setIsCode] = useState(false);

  const toggleView = () => {
      setIsCode(!isCode);
  };

  return {
    isCode,
    toggleView,
    viewToggleRef,
  };
};
