"use client";
import { useState, useEffect } from "react";

export const useTestimonialCard = (isInitiallyOpen: boolean) => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);

  useEffect(() => {
    setIsOpen(isInitiallyOpen);
  }, [isInitiallyOpen]);

  const toggleCard = () => setIsOpen((prev) => !prev);

  return { isOpen, toggleCard };
};
