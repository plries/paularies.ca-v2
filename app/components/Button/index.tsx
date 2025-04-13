"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { MOTION_CONFIG } from "@/app/const";
import { ButtonLinkPropTypes } from "./types";
import { useWindowSize } from "@/app/hooks";

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
  noHover,
  target,
}: ButtonLinkPropTypes) => {
  const buttonStyles = `relative cursor-pointer flex h-10 w-fit flex-row items-center justify-center gap-2 rounded-xl border px-3 py-2 text-base ease-in-out-circ md:text-lg lg:text-xl ${additionalClasses?.button || ""} ${
    theme === "primary"
      ? "bg-greyscale-950 border-greyscale-50/10 text-greyscale-50 shadow-[var(--button-dark)] dark:bg-greyscale-50 dark:border-greyscale-100 dark:text-greyscale-950  dark:shadow-[var(--button-light)]"
      : theme === "secondary"
        ? "bg-greyscale-50 border-greyscale-950/10 text-greyscale-950 shadow-[var(--button-light)] dark:bg-greyscale-950 dark:border-greyscale-50/10 dark:text-greyscale-50  dark:shadow-[var(--button-dark)]"
        : "text-greyscale-950 border-transparent dark:text-greyscale-50 dark:border-transparent !p-2 !py-0"
  }`;

  const containerStyles = `relative group ${additionalClasses?.container || ""}`;

  const hoverStyles = `absolute z-0 rounded-2xl duration-300 -inset-1 pointer-events-none ${theme === "primary" ? "group-hover:bg-greyscale-300/50 group-hover:dark:bg-greyscale-600/75" : "group-hover:bg-greyscale-300/25 dark:group-hover:bg-greyscale-600/25"} ${additionalClasses?.hover || ""}`;

  const textStyles = `inline-flex flex-row items-center gap-2  ${additionalClasses?.text || ""}`;

  const iconStyles = `inline-block ${additionalClasses?.icon || ""}`;

  const hook = useWindowSize();

  return (
    <>
      {noBlur ? (
        <div className={containerStyles}>
          {!hook.isMobile && <div className={noHover ? "" : hoverStyles} />}
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
          {!hook.isMobile && <div className={noHover ? "" : hoverStyles} />}
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
