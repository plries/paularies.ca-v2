import Image from "next/image";
import { motion } from "framer-motion";
import { TooltipPropTypes } from "./types";
import { useTooltip } from "./useTooltip";

export const Tooltip = ({ children, image, text }: TooltipPropTypes) => {
  const hook = useTooltip();

  return (
    <span className="relative w-fit">
      <span
        className="bg-greyscale-950/5 dark:bg-greyscale-800 dark:text-greyscale-50 text-greyscale-950 font-instrument-serif rounded-full px-2 text-nowrap shadow-xs"
        onMouseEnter={() => hook.setIsHovered(true)}
        onMouseLeave={() => hook.setIsHovered(false)}
      >
        {children}
      </span>
      <motion.span
        className={`pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 min-w-40 -translate-x-1/2 px-2 transition-[opacity,translate] duration-500 ease-in-out ${hook.isHovered ? "" : "translate-y-1 opacity-0"}`}
      >
        {image && (
          <Image
            src={image}
            width={image.width}
            height={image.height}
            alt={image.alt}
            className="border-greyscale-100 dark:border-greyscale-900 animate-float rounded-xl border shadow-md transition-[scale] duration-500"
          />
        )}
        {text && <>{text}</>}
      </motion.span>
    </span>
  );
};
