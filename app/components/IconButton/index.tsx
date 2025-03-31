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
}: IconButtonPropTypes) => {
  const styles = `grid aspect-square h-10 cursor-pointer place-items-center rounded-xl border-[1px] p-3 !transition-all duration-300 ease-in-out ${additionalClasses?.join(" ") ?? ""} ${
    theme === "primary"
      ? "bg-greyscale-950 border-greyscale-900 text-greyscale-50 hover:bg-greyscale-950/80 shadow-button-dark dark:bg-greyscale-50 dark:border-greyscale-100 dark:text-greyscale-950 dark:hover:bg-greyscale-100 dark:!shadow-[var(--button-light)]"
      : theme === "secondary"
        ? "bg-greyscale-50 border-greyscale-950/10 text-greyscale-950 hover:bg-greyscale-100 shadow-button-light dark:bg-greyscale-950 dark:border-greyscale-900 dark:text-greyscale-50 dark:hover:bg-greyscale-950/80 dark:!shadow-[var(--button-light)]"
        : "text-greyscale-950 hover:bg-greyscale-100 border-greyscale-950"
  }`;

  return isLink ? (
    <Link href={href ?? ""} className={styles}>
      {icon}
      <span className="sr-only">{name}</span>
    </Link>
  ) : (
    <button onClick={onClick} className={styles}>
      {icon}
      <span className="sr-only">{name}</span>
    </button>
  );
};
