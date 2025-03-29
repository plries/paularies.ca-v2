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
  return isLink ? (
    <Link
      href={href ?? ""}
      className={`grid aspect-square h-10 cursor-pointer place-items-center rounded-xl border-[1px] px-2.5 transition-all duration-300 ease-in-out ${additionalClasses?.join(" ") ?? ""} ${
        theme === "primary"
          ? "bg-greyscale-950 border-greyscale-900 text-greyscale-50 hover:bg-greyscale-800 shadow-button-dark"
          : theme === "secondary"
            ? "bg-greyscale-50 border-greyscale-100 text-greyscale-950 hover:bg-greyscale-100 shadow-button-light"
            : "text-greyscale-950 hover:bg-greyscale-100 border-transparent bg-transparent"
      }`}
    >
      {icon}
      <span className="sr-only">{name}</span>
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`grid aspect-square h-10 cursor-pointer place-items-center rounded-xl border-[1px] px-2.5 transition-all duration-300 ease-in-out ${additionalClasses?.join(" ") ?? ""} ${
        theme === "primary"
          ? "bg-greyscale-950 border-greyscale-900 text-greyscale-50 hover:bg-greyscale-800 shadow-button-dark"
          : theme === "secondary"
            ? "bg-greyscale-50 border-greyscale-100 text-greyscale-950 hover:bg-greyscale-100 shadow-button-light"
            : "text-greyscale-950 hover:bg-greyscale-100 border-transparent bg-transparent"
      }`}
    >
      {icon}
      <span className="sr-only">{name}</span>
    </button>
  );
};
