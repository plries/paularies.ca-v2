import Link from "next/link";
import { ButtonLinkPropTypes } from "./types";

export const ButtonLink = ({
  href,
  children,
  theme,
  onClick,
  additionalClasses,
  icon,
}: ButtonLinkPropTypes) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex flex-row items-center justify-center gap-2 rounded-xl border-[1px] px-3 py-2 transition-all duration-300 ease-in-out ${additionalClasses?.join(" ") ?? ""} ${
        theme === "primary"
          ? "bg-greyscale-950 border-greyscale-900 text-greyscale-50 hover:bg-greyscale-800 shadow-sm hover:shadow-md"
          : theme === "secondary"
            ? "bg-greyscale-50 border-greyscale-100 text-greyscale-950 hover:bg-greyscale-100 shadow-sm hover:shadow-md"
            : "text-greyscale-950 hover:bg-greyscale-100 border-transparent bg-transparent"
      }`}
    >
      {children}
      {icon && <span className="inline-block">{icon}</span>}
    </Link>
  );
};
