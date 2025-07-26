"use client";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { IconContext } from "@phosphor-icons/react";
import { Button } from "@/app/components";
import { NAVBAR_CONST } from "../../const";
import { MobileMenuPropTypes } from "./types";

export const MobileMenu = ({ hook }: MobileMenuPropTypes) => {
  const pathname = usePathname();
  const lenis = useLenis();

  return (
    <IconContext.Provider value={{ size: 20 }}>
      <nav className="contents">
        <ul
          className={`border-greyscale-200/50 dark:border-greyscale-700 dark:bg-greyscale-950/50 bg-greyscale-50/50 ease-in-out-circ fixed right-3 z-40 mt-7 flex w-[calc(100%-1.5rem)] flex-col gap-3 rounded-3xl border p-3 shadow-[var(--nav-bar-light)] backdrop-blur-sm !transition-[top,opacity] duration-500 dark:shadow-[var(--nav-bar-dark)] ${hook.isOpen ? "top-16 opacity-100" : "pointer-events-none -top-1/3 opacity-0"} `}
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
                noMotion
              >
                {TEXT}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </IconContext.Provider>
  );
};
