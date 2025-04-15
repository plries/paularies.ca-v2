"use client";
import { useState } from "react";
import { TESTIMONIALS_CONST } from "../(site)/home/const";

export const useTestimonialCard = () => {
  const [openCardName, setOpenCardName] = useState(
    TESTIMONIALS_CONST.TESTIMONIALS[0].NAME,
  );

  const handleToggle = (name: string) => {
    setOpenCardName((prev) => (prev === name ? '' : name));
  };

  return { openCardName, handleToggle };
};
