import Link from "next/link";
import { IconButtonPropTypes } from "./types";

export const IconButton = ({
  theme,
  onClick,
  href,
  additionalClasses,
  icon,
  name,
  isLink,
  target,
}: IconButtonPropTypes) => {
  const styles = `grid aspect-square h-10 w-10 cursor-pointer place-items-center rounded-xl border-[1px] p-2.5 transition-[scale] duration-500 ease-in-out hover:scale-95 ${additionalClasses?.button} ${
    theme === "primary"
      ? "bg-greyscale-950 border-greyscale-50/10 text-greyscale-50 shadow-button-dark dark:bg-greyscale-50 dark:border-greyscale-100 dark:text-greyscale-950 dark:!shadow-[var(--button-light)]"
      : theme === "secondary"
        ? "bg-greyscale-50 border-greyscale-950/10 text-greyscale-950 shadow-button-light dark:bg-greyscale-950 dark:border-greyscale-50/10 dark:text-greyscale-50 dark:!shadow-[var(--button-light)]"
        : "text-greyscale-950 border-greyscale-950"
  }`;

  return (
    <div
      className={`hover:bg-greyscale-300/15 dark:hover:bg-greyscale-600/25 rounded-2xl p-1 transition-[background-color] duration-500 ${additionalClasses?.container}`}
    >
      {isLink ? (
        <Link target={target} href={href ?? ""} className={styles}>
          {icon}
          <span className="sr-only">{name}</span>
        </Link>
      ) : (
        <button onClick={onClick} className={styles}>
          {icon}
          <span className="sr-only">{name}</span>
        </button>
      )}
    </div>
  );
};
