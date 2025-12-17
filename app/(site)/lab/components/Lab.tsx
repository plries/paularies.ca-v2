"use client";
import { Lightbox } from "@/app/components";
import { useLightbox } from "@/app/hooks";
import { LabMedia } from "./LabMedia";

export const Lab = () => {
  const useLight = useLightbox();
  return (
    <>
      <LabMedia setMediaSrc={useLight.setMediaSrc} />
      <Lightbox
        lightboxRef={useLight.lightboxRef}
        closeButtonRef={useLight.closeButtonRef}
        isOpen={useLight.isOpen}
        toggleLightbox={useLight.toggleLightbox}
        media={
          useLight.media && {
            src: useLight.media.src,
            alt: useLight.media.alt,
            type: useLight.media.type as "image" | "video",
          }
        }
        code={useLight.code}
        additionalClasses={{
          container: "!w-fit",
          media: "!aspect-[unset] !max-h-[80vh] !w-auto mx-auto",
        }}
      />
    </>
  );
};
