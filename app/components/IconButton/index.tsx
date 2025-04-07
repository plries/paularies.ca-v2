"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { MOTION_CONFIG } from "@/app/const";
import { IconButtonPropTypes } from "./types";

export const IconButton = ({
  theme,
  onClick,
  href,
  additionalClasses,
  icon,
  name,
  isLink,
  noBlur,
  target,
}: IconButtonPropTypes) => {
  const buttonStyles = `grid aspect-square h-10 w-10 cursor-pointer place-items-center rounded-xl border-[1px] p-2.5 transition-[scale] duration-500 ease-in-out hover:scale-95 ${additionalClasses?.button} ${
    theme === "primary"
      ? "bg-greyscale-950 border-greyscale-50/10 text-greyscale-50 shadow-[var(--button-dark)] dark:bg-greyscale-50 dark:border-greyscale-100 dark:text-greyscale-950 dark:shadow-[var(--button-light)]"
      : theme === "secondary"
        ? "bg-greyscale-50 border-greyscale-950/10 text-greyscale-950 shadow-[var(--button-light)] dark:bg-greyscale-950 dark:border-greyscale-50/10 dark:text-greyscale-50 dark:shadow-[var(--button-dark)]"
        : "text-greyscale-950 border-greyscale-950"
  }`;

  const containerStyles = `hover:bg-greyscale-300/15 dark:hover:bg-greyscale-600/25 rounded-2xl p-1 transition-[background-color] duration-500 ${additionalClasses?.container}`

  return (
    <>
      {noBlur ? (
        <div
          className={containerStyles}
        >
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
