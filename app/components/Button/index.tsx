import Link from "next/link";
import { ButtonLinkPropTypes } from "./types";

export const Button = ({
  href,
  children,
  theme,
  onClick,
  additionalClasses,
  icon,
  isLink,
  target,
}: ButtonLinkPropTypes) => {
  const styles = `flex h-10 w-fit flex-row items-center justify-center !transition-all duration-500 gap-2 rounded-xl border-[1px] px-3 py-2 text-base ease-in-out md:text-lg lg:text-xl ${additionalClasses?.button} ${
    theme === "primary"
      ? "bg-greyscale-950 border-greyscale-900 text-greyscale-50 shadow-button-dark dark:bg-greyscale-50 dark:border-greyscale-100 dark:text-greyscale-950  dark:!shadow-[var(--button-light)] group-hover:scale-95"
      : theme === "secondary"
        ? "bg-greyscale-50 border-greyscale-950/10 text-greyscale-950 shadow-button-light dark:bg-greyscale-950 dark:border-greyscale-900 dark:text-greyscale-50  dark:!shadow-[var(--button-dark)] group-hover:scale-95"
        : "text-greyscale-950 border-transparent dark:text-greyscale-50 dark:border-transparent"
  }`;

  return (
    <div
      className={`hover:bg-greyscale-300/15 dark:hover:bg-greyscale-600/25 group w-fit rounded-2xl ${theme === "tertiary" ? "" : "px-1 py-1.5"} ${additionalClasses?.container}`}
    >
      {isLink ? (
        <Link target={target} href={href as string} onClick={onClick} className={styles}>
          <span
            className={`inline-block !transition-[scale] duration-500 ${theme === "tertiary" ? "group-hover:scale-95" : ""}`}
          >
            {children}
            {icon && <span className="inline-block">{icon}</span>}
          </span>
        </Link>
      ) : (
        <button onClick={onClick} className={styles}>
          <span
            className={`inline-block !transition-[scale] duration-500 ${theme === "tertiary" ? "group-hover:scale-95" : ""}`}
          >
            {children}
            {icon && <span className="inline-block">{icon}</span>}
          </span>
        </button>
      )}
    </div>
  );
};
