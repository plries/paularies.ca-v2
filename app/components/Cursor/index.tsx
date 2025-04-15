import { motion } from "framer-motion";
import { useCursor, useWindowSize } from "@/app/hooks";

export const Cursor = () => {
  const hook = useCursor();
  const useMobile = useWindowSize();

  return (
    !useMobile.isMobile && (
      <motion.div
        className="text-align-center bg-greyscale-300/25 dark:bg-greyscale-600/25 animate-fadeIn pointer-events-none absolute -top-8 -left-8 z-100 flex h-6 w-6 flex-row items-center justify-center rounded-full backdrop-blur-xs transition-opacity duration-500"
        variants={hook.variants}
        animate={hook.cursorVariant}
        transition={hook.spring}
      />
    )
  );
};
