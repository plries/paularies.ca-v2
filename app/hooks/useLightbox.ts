"use client"
import { useEffect, useState, useRef } from "react";
import { useLenis } from "lenis/react";
import { MediaType } from "../components/Lightbox/types";

export const useLightbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [media, setMedia] = useState<MediaType | null>(null);
  const [code, setCode] = useState<string | undefined>(undefined);

  const lightboxRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const lenis = useLenis();

  const toggleLightbox = () => setIsOpen(!isOpen);

  const clearMedia = () => setMedia(null);
  const clearCode = () => setCode(undefined);

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
    if (!lenis) return; 
    
    if (isOpen) {
      lenis.stop();

      if (closeButtonRef.current) {
        closeButtonRef.current.focus();
      }
    } else {
      lenis.start();
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