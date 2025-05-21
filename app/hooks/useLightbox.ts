"use client"
import { useState } from "react";
import { MediaType } from "../components/Lightbox/types";

type LightboxMedia = MediaType & { key: number };

export const useLightbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [media, setMedia] = useState<LightboxMedia | null>(null);

  const toggleLightbox = () => setIsOpen(!isOpen);

  const setMediaSrc = (src: string, type: "image" | "video", alt?: string) =>
    setMedia({
      src,
      type,
      alt: alt ?? "",
      key: Date.now()
    });

  return {
    isOpen,
    toggleLightbox,
    media,
    setMediaSrc
  };
};