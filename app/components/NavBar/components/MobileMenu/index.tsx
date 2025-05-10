"use client";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { IconContext, Minus } from "@phosphor-icons/react";
import { Button, IconButton } from "@/app/components";
import { NAVBAR_CONST } from "../../const";
import { MobileMenuPropTypes } from "./types";

export const MobileMenu = ({ hook }: MobileMenuPropTypes) => {
  const pathname = usePathname();
  const lenis = useLenis();

  return (
    <IconContext.Provider value={{ size: 20 }}>
      <IconButton
        onClick={hook.toggleMenu}
        icon={
          <>
            <Minus
              className={`ease-in-out-circ absolute !transition-[rotate,margin] duration-500 ${hook.isOpen ? "" : "mb-1.5"}`}
            />
            <Minus
              className={`ease-in-out-circ absolute !transition-[rotate,margin] duration-500 ${hook.isOpen ? "rotate-90" : "mt-1.5"}`}
            />
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
        className={`border-greyscale-200/50 bg-greyscale-50 dark:bg-greyscale-950 dark:border-greyscale-700/50 ease-in-out-circ absolute right-0 mt-4 flex w-full flex-col gap-3 rounded-3xl border p-3 shadow-[var(--nav-bar-light)] !transition-[top,opacity] duration-500 dark:shadow-[var(--nav-bar-dark)] ${hook.isOpen ? "top-full opacity-100" : "pointer-events-none top-5/6 opacity-0"} `}
      >
        {NAVBAR_CONST.MOBILE_LINKS.map(({ HREF, TEXT }) => (
          <li key={TEXT}>
            <Button
              href={HREF}
              theme="tertiary"
              isLink
              onClick={() => {
                hook.closeMenu();
                if (pathname === HREF) {
                  lenis?.scrollTo(0, { immediate: false });
                }
              }}
              additionalClasses={{
                container: "w-full",
                button: `w-full justify-end !px-4 ${pathname === HREF || (pathname.startsWith("/works/") && HREF === "/works") ? "bg-greyscale-300/10 dark:bg-greyscale-600/10" : ""}`,
              }}
              tabIndex={hook.isOpen ? 0 : -1}
              noBlur
            >
              {TEXT}
            </Button>
          </li>
        ))}
      </ul>
    </IconContext.Provider>
  );
};
