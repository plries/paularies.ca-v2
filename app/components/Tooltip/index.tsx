import Image from "next/image";
import { motion } from "framer-motion";
import { TooltipPropTypes } from "./types";
import { useTooltip } from "./useTooltip";

export const Tooltip = ({ children, image, text }: TooltipPropTypes) => {
  const hook = useTooltip();

  return (
    <span className="relative w-fit">
      <span
        className="bg-greyscale-950/5 dark:bg-greyscale-800 dark:text-greyscale-50 text-greyscale-950 font-instrument-serif rounded-full shadow-xs px-2 text-nowrap"
        onMouseEnter={() => hook.setIsHovered(true)}
        onMouseLeave={() => hook.setIsHovered(false)}
      >
        {children}
      </span>
      <motion.span
        className={`pointer-events-none absolute bottom-full left-0 z-50 mb-2 transition-opacity duration-500 ease-in-out ${hook.isHovered ? "" : "opacity-0 blur-sm"}`}
        variants={hook.variants}
        animate={hook.cursorVariant}
        transition={hook.spring}
      >
        {image && (
          <Image
            src={image}
            width={image.width}
            height={image.height}
            alt={image.alt}
            className="border-greyscale-100 dark:border-greyscale-900 animate-float aspect-square -rotate-4 rounded-xl border shadow-md transition-[scale] duration-500"
          />
        )}
        {text && <>{text}</>}
      </motion.span>
    </span>
  );
};
