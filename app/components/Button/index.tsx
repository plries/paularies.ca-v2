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
  const styles = `flex h-10 w-fit flex-row items-center justify-center gap-2 rounded-xl border-[1px] px-3 py-2 text-base !transition-all duration-300 ease-in-out md:text-lg lg:text-xl ${additionalClasses?.join(" ") ?? ""} ${
    theme === "primary"
      ? "bg-greyscale-950 border-greyscale-900 text-greyscale-50 hover:bg-greyscale-950/80 shadow-button-dark"
      : theme === "secondary"
        ? "bg-greyscale-50 border-greyscale-950/10 text-greyscale-950 hover:bg-greyscale-100 shadow-button-light"
        : "text-greyscale-950 hover:bg-greyscale-200/25 border-transparent"
  }`;

  return isLink ? (
    <Link href={href} onClick={onClick} className={styles}>
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
