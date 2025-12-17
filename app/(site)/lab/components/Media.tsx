import Image from "next/image";
import { easeInOut, motion } from "framer-motion";
import { MediaPropTypes } from "./types";
import { MOTION_CONFIG } from "../../const";
import { Button } from "@/app/components";

export const Media = ({
  src,
  alt,
  type,
  setMediaSrc,
  index = 0,
}: MediaPropTypes) => {
  return (
    <Button
      theme="tertiary"
      additionalClasses={{ button: "!h-fit !w-fit [&&]:!p-0" }}
      onClick={() => setMediaSrc(src, type)}
    >
      {type === "image" && (
        <Image
          src={src}
          alt={alt}
          width={1920}
          height={1080}
          className="border-greyscale-950/10 dark:border-greyscale-50/10 bg-greyscale-50 dark:bg-greyscale-800 pointer-events-none relative h-full w-full rounded-lg border object-cover shadow-[var(--card-light)] dark:shadow-[var(--card-dark)]"
        />
      )}
      {type === "video" && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="border-greyscale-950/10 dark:border-greyscale-50/10 bg-greyscale-50 dark:bg-greyscale-800 duration- aspect-video h-full w-full rounded-lg border object-cover shadow-[var(--card-light)] dark:shadow-[var(--card-dark)]"
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </Button>
  );
};
