"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { MOTION_CONFIG } from "@/app/const";
import { ButtonLinkPropTypes } from "./types";

export const Button = ({
  href,
  children,
  theme,
  onClick,
  additionalClasses,
  icon,
  iconRight,
  isLink,
  noBlur,
  target,
}: ButtonLinkPropTypes) => {
  const buttonStyles = `cursor-pointer group flex h-10 w-fit flex-row items-center justify-center transition-[scale] duration-500 gap-2 rounded-xl border-[1px] px-3 py-2 text-base ease-in-out md:text-lg lg:text-xl ${additionalClasses?.button} ${
    theme === "primary"
      ? "bg-greyscale-950 border-greyscale-50/10 text-greyscale-50 shadow-[var(--button-dark)] dark:bg-greyscale-50 dark:border-greyscale-100 dark:text-greyscale-950  dark:shadow-[var(--button-light)] group-hover:scale-95"
      : theme === "secondary"
        ? "bg-greyscale-50 border-greyscale-950/10 text-greyscale-950 shadow-[var(--button-light)] dark:bg-greyscale-950 dark:border-greyscale-50/10 dark:text-greyscale-50  dark:shadow-[var(--button-dark)] group-hover:scale-95"
        : "text-greyscale-950 border-transparent dark:text-greyscale-50 dark:border-transparent"
  }`;

  const containerStyles = `hover:bg-greyscale-300/15 dark:hover:bg-greyscale-600/25 group w-fit cursor-pointer rounded-2xl transition-[background-color] duration-500 ${theme === "tertiary" ? "" : "px-1 py-1.5"} ${additionalClasses?.container}`;

  const textStyles = `inline-flex flex-row items-center gap-2 transition-[scale] duration-500 ${additionalClasses?.text} ${theme === "tertiary" ? "group-hover:scale-95" : ""}`;

  const iconStyles = `inline-block ${additionalClasses?.icon}`;

  return (
    <>
      {noBlur ? (
        <div className={containerStyles}>
          {isLink ? (
            <Link
              target={target}
              href={href as string}
              onClick={onClick}
              className={buttonStyles}
            >
              <span className={textStyles}>
                {icon && !iconRight && (
                  <span className={iconStyles}>{icon}</span>
                )}
                {children}
                {icon && iconRight && (
                  <span className={iconStyles}>{icon}</span>
                )}
              </span>
            </Link>
          ) : (
            <button onClick={onClick} className={buttonStyles}>
              <span className={textStyles}>
                {icon && !iconRight && (
                  <span className={iconStyles}>{icon}</span>
                )}
                {children}
                {icon && iconRight && (
                  <span className={iconStyles}>{icon}</span>
                )}
              </span>
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
            <Link
              target={target}
              href={href as string}
              onClick={onClick}
              className={buttonStyles}
            >
              <span className={textStyles}>
                {icon && !iconRight && (
                  <span className={iconStyles}>{icon}</span>
                )}
                {children}
                {icon && iconRight && (
                  <span className={iconStyles}>{icon}</span>
                )}
              </span>
            </Link>
          ) : (
            <button onClick={onClick} className={buttonStyles}>
              <span className={textStyles}>
                {icon && !iconRight && (
                  <span className={iconStyles}>{icon}</span>
                )}
                {children}
                {icon && iconRight && (
                  <span className={iconStyles}>{icon}</span>
                )}
              </span>
            </button>
          )}
        </motion.div>
      )}
    </>
  );
};
