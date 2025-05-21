"use client"
import { useEffect, useState, useRef } from "react";
import { MediaType } from "../components/Lightbox/types";

export const useLightbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [media, setMedia] = useState<MediaType | null>(null);
  const [code, setCode] = useState<string | null>(null);

  const lightboxRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const toggleLightbox = () => setIsOpen(!isOpen);

  const clearMedia = () => setMedia(null);
  const clearCode = () => setCode(null);

  const setMediaSrc = (src: string, type: "image" | "video", alt?: string) => {
    clearCode()
    setMedia({
      src,
      type,
      alt: alt ?? "",
    })
    toggleLightbox()  
  };

  const setCodeSrc = (src: string) => {
    clearMedia()
    setCode(src)
    toggleLightbox()  
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      if (event.key === "Escape") {
        toggleLightbox();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  return {
    isOpen,
    toggleLightbox,
    media,
    setMediaSrc,
    code,
    setCodeSrc,
    lightboxRef,
    closeButtonRef,
  };
};