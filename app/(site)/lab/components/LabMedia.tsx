import { motion } from "framer-motion";
import { Heading } from "@/app/components";
import { LAB_CONST } from "../const";
import { Media } from "./Media";
import { SetMediaSrcPropTypes } from "./types";
import { MOTION_CONFIG } from "../../const";

export const LabMedia = ({ setMediaSrc }: SetMediaSrcPropTypes) => {
  return (
    <div className="col-span-full grid grid-cols-4 gap-3 md:grid-cols-8 md:gap-4 lg:grid-cols-12">
      <Heading level="h1">{LAB_CONST.HEADING}</Heading>
      {/* <motion.p
        initial={MOTION_CONFIG.DEFAULT.INITIAL}
        whileInView={MOTION_CONFIG.DEFAULT.WHILE_IN_VIEW}
        transition={MOTION_CONFIG.TRANSITION}
        className="text-greyscale-600 dark:text-greyscale-300 col-span-full mb-8 text-center md:col-span-6 md:col-start-2 lg:col-start-4"
      >
        {LAB_CONST.DESCRIPTION}
      </motion.p> */}

      <div className="col-span-full flex flex-col gap-4 md:col-span-4 lg:col-span-4">
        {LAB_CONST.MEDIA_LIST.map((media, index) => ({ media, index }))
          .filter(({ index }) => index % 3 === 0)
          .map(({ media, index }) => (
            <Media
              key={index}
              src={media.src}
              alt=""
              type={media.type as "image" | "video"}
              setMediaSrc={setMediaSrc}
              index={index}
            />
          ))}
      </div>
      <div className="col-span-full flex flex-col gap-3 md:col-span-4 md:gap-4 lg:col-span-4">
        {LAB_CONST.MEDIA_LIST.map((media, index) => ({ media, index }))
          .filter(({ index }) => index % 3 === 1)
          .map(({ media, index }) => (
            <Media
              key={index}
              src={media.src}
              alt=""
              type={media.type as "image" | "video"}
              setMediaSrc={setMediaSrc}
              index={index}
            />
          ))}
      </div>
      <div className="col-span-full flex flex-col gap-3 md:col-span-4 md:gap-4 lg:col-span-4">
        {LAB_CONST.MEDIA_LIST.map((media, index) => ({ media, index }))
          .filter(({ index }) => index % 3 === 2)
          .map(({ media, index }) => (
            <Media
              key={index}
              src={media.src}
              alt=""
              type={media.type as "image" | "video"}
              setMediaSrc={setMediaSrc}
              index={index}
            />
          ))}
      </div>
    </div>
  );
};
