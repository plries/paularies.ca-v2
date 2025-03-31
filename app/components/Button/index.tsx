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
}: ButtonLinkPropTypes) => {
  const styles = `flex h-10 w-fit flex-row items-center justify-center !transition-all duration-300 gap-2 rounded-xl border-[1px] px-3 py-2 text-base ease-in-out md:text-lg lg:text-xl ${additionalClasses?.join(" ") ?? ""} ${
    theme === "primary"
      ? "bg-greyscale-950 border-greyscale-900 text-greyscale-50 hover:bg-greyscale-950/80 shadow-button-dark dark:bg-greyscale-50 dark:border-greyscale-100 dark:text-greyscale-950 dark:hover:bg-greyscale-100 dark:!shadow-[var(--button-light)]"
      : theme === "secondary"
        ? "bg-greyscale-50 border-greyscale-950/10 text-greyscale-950 hover:bg-greyscale-100 shadow-button-light dark:bg-greyscale-950 dark:border-greyscale-900 dark:text-greyscale-50 dark:hover:bg-greyscale-950/80 dark:!shadow-[var(--button-dark)]"
        : "text-greyscale-950 hover:bg-greyscale-200/25 border-transparent dark:text-greyscale-50 dark:hover:bg-greyscale-800/25 dark:border-transparent"
  }`;

  return isLink ? (
    <Link href={href as string} onClick={onClick} className={styles}>
      {children}
      {icon && <span className="inline-block">{icon}</span>}
    </Link>
  ) : (
    <button onClick={onClick} className={styles}>
      {children}
      {icon && <span className="inline-block">{icon}</span>}
    </button>
  );
};
