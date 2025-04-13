import { Button, IconButton } from "@/app/components";
import { NAVBAR_CONST } from "../../const";
import { LineIcon } from "@/public";
import { MobileMenuPropTypes } from "./types";

export const MobileMenu = ({ hook }: MobileMenuPropTypes) => {
  return (
    <>
      <IconButton
        onClick={hook.toggleMenu}
        icon={
          <>
            <span
              className={`ease-in-out-circ absolute !transition-[rotate,margin] duration-500 ${hook.isOpen ? "" : "mb-1.5"}`}
            >
              <LineIcon />
            </span>
            <span
              className={`ease-in-out-circ absolute !transition-[rotate,margin] duration-500 ${hook.isOpen ? "rotate-90" : "mt-1.5"}`}
            >
              <LineIcon />
            </span>
          </>
        }
        theme="primary"
        name={
          hook.isOpen
            ? NAVBAR_CONST.MOBILE_MENU.OPEN_MENU
            : NAVBAR_CONST.MOBILE_MENU.CLOSE_MENU
        }
        additionalClasses={{
          container: `transition-[rotate,scale] duration-500  ${hook.isOpen ? "rotate-45 scale-90" : ""}`,
          button: "relative flex items-center justify-center",
        }}
        noBlur
      />
      <ul
        className={`border-greyscale-200/50 bg-greyscale-50 dark:bg-greyscale-950 dark:border-greyscale-700/50 ease-in-out-circ absolute left-0 mt-4 w-full rounded-3xl border shadow-[var(--nav-bar-light)] !transition-[top,translate] duration-700 dark:shadow-[var(--nav-bar-dark)] ${hook.isOpen ? "top-[calc(100%+0.725rem)]" : "pointer-events-none -top-full -translate-y-full"} `}
      >
        {NAVBAR_CONST.LINKS.map(({ HREF, TEXT }) => (
          <li
            key={TEXT}
            className="border-greyscale-200/50 dark:border-greyscale-700/50 flex border-b-[1px] p-3 last:border-0"
          >
            <Button
              href={HREF}
              theme="tertiary"
              isLink
              onClick={hook.closeMenu}
              additionalClasses={{
                container: "w-full",
                button: "w-full justify-end",
              }}
              noBlur
            >
              {TEXT}
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};
