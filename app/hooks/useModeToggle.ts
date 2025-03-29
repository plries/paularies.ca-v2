"use client";
import { useState, useEffect } from "react";

export const useModeToggle = () => {
  // default mode light
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    // runs after component is mounted
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      setMode(storedTheme === "dark" ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      if (typeof window !== "undefined") {
        localStorage.theme = "dark";
      }
    } else {
      document.documentElement.classList.remove("dark");
      if (typeof window !== "undefined") {
        localStorage.theme = "light";
      }
    }
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return { mode, toggleMode };
};
