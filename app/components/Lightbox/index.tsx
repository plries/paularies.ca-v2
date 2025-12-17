"use client";
import Image from "next/image";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import Highlight from "react-highlight";
import { X } from "@phosphor-icons/react";
import { IconButton } from "../IconButton";
import { LightboxPropTypes } from "./types";

export const Lightbox = ({
  isOpen,
  toggleLightbox,
  media,
  code,
  lightboxRef,
  closeButtonRef,
  additionalClasses,
}: LightboxPropTypes) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(2px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.3, ease: easeInOut }}
          className="bg-greyscale-950/75 fixed top-0 left-0 z-[99] grid h-full w-full place-items-center p-4"
          onClick={toggleLightbox}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: easeInOut }}
            className={`relative w-full max-w-7xl ${additionalClasses?.container ?? ""}`}
            onClick={(event) => event.stopPropagation()}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            ref={lightboxRef}
          >
            <div className="mb-2 flex justify-end">
              <IconButton
                theme="tertiary"
                onClick={toggleLightbox}
                name="close lightbox"
                additionalClasses={{ container: "w-fit" }}
                icon={<X />}
                tabIndex={0}
                buttonRef={closeButtonRef}
              />
            </div>
            {media && media.type === "video" && (
              <video
                key={media.src}
                autoPlay
                loop
                muted
                playsInline
                className={`border-greyscale-100 dark:border-greyscale-900 bg-greyscale-50 dark:bg-greyscale-800 aspect-video h-auto max-w-full rounded-xl border shadow-md ${additionalClasses?.media ?? ""}`}
              >
                <source src={media.src} type="video/mp4" />
              </video>
            )}
            {media && media.type === "image" && (
              <Image
                key={media.src}
                src={media.src}
                alt={media.alt || ""}
                width={1920}
                height={1080}
                className={`border-greyscale-100 dark:border-greyscale-900 bg-greyscale-50 dark:bg-greyscale-800 aspect-video h-auto max-w-full rounded-xl border shadow-md ${additionalClasses?.media ?? ""} `}
              />
            )}
            {media && media.alt && (
              <div className="mt-2 flex items-center justify-center">
                <p className="text-greyscale-50/75 dark:text-greyscale-50/50 text-center">
                  {media.alt}
                </p>
              </div>
            )}

            {code && (
              <div
                key={code}
                className="border-greyscale-950/10 dark:border-greyscale-50/10 bg-greyscale-100 dark:bg-greyscale-800 max-h-[80vh] min-w-full overflow-scroll rounded-lg border p-4"
              >
                <Highlight className="text-greyscale-800 dark:text-greyscale-200 font-dm-mono break-all md:break-normal">
                  {code}
                </Highlight>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
