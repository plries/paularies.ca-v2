"use client";
import { useState } from "react";

export const useToggleInput = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleInput = () => {
    setIsChecked(!isChecked);
  };

  return { isChecked, toggleInput };
};
