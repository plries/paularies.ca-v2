"use client";
import { useState, useEffect } from "react";

export const useModeToggle = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return { mode, toggleMode };
};
