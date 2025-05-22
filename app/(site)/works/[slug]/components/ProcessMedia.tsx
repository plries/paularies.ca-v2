"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Highlight from "react-highlight";
import { CornersOut } from "@phosphor-icons/react";
import { IconButton, ViewToggle } from "@/app/components";
import { useViewToggle } from "@/app/hooks";
import { WorksProcessMediaPropTypes } from "./types";

export const ProcessMedia = ({
  PROCESS,
  setMediaSrc,
  setCodeSrc,
  isOpen,
}: WorksProcessMediaPropTypes) => {
  const hook = useViewToggle();

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isOpen) {
      videoRef.current?.play().catch((error) => {
        console.warn("Video play failed:", error);
      });
    } else {
      videoRef.current?.pause();
    }
  }, [isOpen]);

  return (
    <div className="relative flex w-full flex-col gap-2">
      {!hook.isCode && PROCESS.IMAGE && (
        <Image
          src={PROCESS.IMAGE.SRC}
          alt={PROCESS.IMAGE.ALT}
          width={1920}
          height={1080}
          className="border-greyscale-950/10 dark:border-greyscale-50/10 bg-greyscale-50 dark:bg-greyscale-800 pointer-events-none relative aspect-video h-full w-full rounded-lg border object-cover"
        />
      )}
      {!hook.isCode && PROCESS.VIDEO && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="border-greyscale-950/10 dark:border-greyscale-50/10 bg-greyscale-50 dark:bg-greyscale-800 duration- aspect-video h-full w-full rounded-lg border object-cover"
          ref={videoRef}
        >
          <source src={PROCESS.VIDEO} type="video/mp4" />
        </video>
      )}
      {hook.isCode && PROCESS.CODE && (
        <div className="border-greyscale-950/10 dark:border-greyscale-50/10 bg-greyscale-100 dark:bg-greyscale-800 relative aspect-video w-full overflow-y-auto rounded-lg border p-4">
          <Highlight className="text-greyscale-800 dark:text-greyscale-200">
            {PROCESS.CODE}
          </Highlight>
        </div>
      )}
      {PROCESS.CODE && (
        <div className="flex w-full flex-row gap-2">
          <ViewToggle isCode={hook.isCode} toggleView={hook.toggleView} />
          <IconButton
            theme="secondary"
            icon={<CornersOut />}
            name="fullscreen view"
            additionalClasses={{
              button: "h-full w-[50px]",
            }}
            onClick={() => {
              if (!hook.isCode && PROCESS.VIDEO && setMediaSrc) {
                setMediaSrc(PROCESS.VIDEO, "video");
                videoRef.current?.pause();
              }
              if (!hook.isCode && PROCESS.IMAGE && setMediaSrc)
                setMediaSrc(PROCESS.IMAGE.SRC, "image");
              if (hook.isCode && PROCESS.CODE && setCodeSrc)
                setCodeSrc(PROCESS.CODE);
            }}
            noBlur
          />
        </div>
      )}
    </div>
  );
};
