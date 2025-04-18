"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { MOTION_CONFIG } from "@/app/(site)/const";
import { IconButtonPropTypes } from "./types";
import { useWindowSize } from "@/app/hooks";

export const IconButton = ({
  theme,
  onClick,
  href,
  additionalClasses,
  icon,
  name,
  isLink,
  noBlur,
  noHover,
  target,
}: IconButtonPropTypes) => {
  const buttonStyles = `relative grid aspect-square group h-10 w-10 cursor-pointer place-items-center rounded-xl border p-2.5 ease-in-out-circ ${additionalClasses?.button || ""} ${
    theme === "primary"
      ? "bg-greyscale-950 border-greyscale-50/10 text-greyscale-50 shadow-[var(--button-dark)] dark:bg-greyscale-50 dark:border-greyscale-100 dark:text-greyscale-950 dark:shadow-[var(--button-light)]"
      : theme === "secondary"
        ? "bg-greyscale-50 border-greyscale-950/10 text-greyscale-950 shadow-[var(--button-light)] dark:bg-greyscale-950 dark:border-greyscale-50/10 dark:text-greyscale-50 dark:shadow-[var(--button-dark)]"
        : "text-greyscale-950 border-greyscale-950"
  }`;

  const containerStyles = `relative group ${additionalClasses?.container || ""}`;

  const hoverStyles = `absolute -inset-1 pointer-events-none rounded-2xl p-1 transition-[background-color] duration-300 ${theme === "primary" ? "group-hover:bg-greyscale-300/50 group-hover:dark:bg-greyscale-600/75" : "group-hover:bg-greyscale-300/25 dark:group-hover:bg-greyscale-600/25"} ${additionalClasses?.hover || ""}`;

  const hook = useWindowSize();

  return (
    <>
      {noBlur ? (
        <div className={containerStyles}>
          {!hook.isMobile && <div className={noHover ? "" : hoverStyles} />}
          {isLink ? (
            <Link target={target} href={href ?? ""} className={buttonStyles}>
              {icon}
              <span className="sr-only">{name}</span>
            </Link>
          ) : (
            <button onClick={onClick} className={buttonStyles}>
              {icon}
              <span className="sr-only">{name}</span>
            </button>
          )}
        </div>
      ) : (
        <motion.div
          initial={MOTION_CONFIG.DEFAULT.INITIAL}
          whileInView={MOTION_CONFIG.DEFAULT.WHILE_IN_VIEW}
          transition={MOTION_CONFIG.TRANSITION}
          className={containerStyles}
        >
          {!hook.isMobile && <div className={noHover ? "" : hoverStyles} />}
          {isLink ? (
            <Link target={target} href={href ?? ""} className={buttonStyles}>
              {icon}
              <span className="sr-only">{name}</span>
            </Link>
          ) : (
            <button onClick={onClick} className={buttonStyles}>
              {icon}
              <span className="sr-only">{name}</span>
            </button>
          )}
        </motion.div>
      )}
    </>
  );
};
