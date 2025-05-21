"use client";
import Image from "next/image";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { LightboxPropTypes } from "./types";

export const Lightbox = ({
  isOpen,
  toggleLightbox,
  media,
}: LightboxPropTypes) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(4px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.3, ease: easeInOut }}
          className="bg-greyscale-950/50 fixed top-0 left-0 z-[99] grid h-full w-full place-items-center p-4"
          onClick={toggleLightbox}
        >
          {media && (
            <motion.div
              key={media.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: easeInOut }}
              className="border-greyscale-100 dark:border-greyscale-900 max-w-6xl overflow-hidden rounded-xl border shadow-md"
              onClick={(event) => event.stopPropagation()}
            >
              {media.type === "video" && (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-auto max-w-full"
                >
                  <source src={media.src} type="video/mp4" />
                </video>
              )}
              {media.type === "image" && (
                <Image
                  src={media.src}
                  alt={media.alt || ""}
                  width={1920}
                  height={1080}
                  className="h-auto max-w-full"
                />
              )}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
