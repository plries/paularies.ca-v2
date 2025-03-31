"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVBAR_CONST } from "./const";
import { Button, IconButton } from "../";
import { MobileMenu } from "./components";
import { useMobileMenu } from "./useMobileMenu";
import { useModeToggle, useWindowSize } from "@/app/hooks";

export const NavBar = () => {
  const pathname = usePathname();
  const windowSize = useWindowSize();
  const lightDark = useModeToggle();
  const useMobile = useMobileMenu();

  return (
    <header className="border-greyscale-100 dark:border-greyscale-700 dark:bg-greyscale-950/50 shadow-nav-bar-light bg-greyscale-50/50 sticky top-3 left-0 z-50 m-3 flex max-w-7xl flex-row items-center justify-between place-self-stretch rounded-3xl border-[1px] p-3 backdrop-blur-md md:top-6 md:m-6 lg:top-8 lg:mx-auto lg:my-8 lg:w-[calc(100%-2rem)] dark:!shadow-[var(--nav-bar-dark)]">
      <nav className="contents">
        <Link
          href={pathname === "/" ? "#top" : NAVBAR_CONST.LOGO.HREF}
          className="dark:text-greyscale-50 group hover:bg-greyscale-200/25 rounded-xl"
          onClick={useMobile.closeMenu}
        >
          <span className="flex flex-row items-center gap-2 !transition-all duration-700 group-hover:scale-95 md:p-2">
            <span className="motion-safe:animate-[spin_12s_linear_infinite]">
              <NAVBAR_CONST.LOGO.STAR />
            </span>
            {!windowSize.isMobile && <NAVBAR_CONST.LOGO.WORDMARK />}
          </span>
          <span className="sr-only">{NAVBAR_CONST.LOGO.HOME}</span>
        </Link>
        {!windowSize.isMobile && (
          <div className="flex h-full flex-row items-center gap-2">
            <ul className="contents">
              {NAVBAR_CONST.LINKS.slice(0, 2).map(({ HREF, TEXT }) => (
                <li key={TEXT}>
                  <Button href={HREF} theme="tertiary" isLink>
                    {TEXT}
                  </Button>
                </li>
              ))}
            </ul>
            <IconButton
              onClick={lightDark.toggleMode}
              icon={
                <span
                  className={`!transition-transform duration-700 ${lightDark.mode === "dark" ? "rotate-180" : ""}`}
                >
                  <NAVBAR_CONST.LIGHT_DARK.ICON />
                </span>
              }
              theme="secondary"
              name={NAVBAR_CONST.LIGHT_DARK.TEXT}
              additionalClasses={["h-full"]}
            />
            <IconButton
              href={NAVBAR_CONST.CONTACT.HREF}
              icon={<NAVBAR_CONST.CONTACT.ICON />}
              theme="primary"
              name={NAVBAR_CONST.CONTACT.TEXT}
              isLink
              additionalClasses={["h-full"]}
            />
          </div>
        )}
        {windowSize.isMobile && (
          <div className="flex flex-row gap-2">
            <IconButton
              onClick={lightDark.toggleMode}
              icon={
                <span
                  className={`!transition-transform duration-700 ${lightDark.mode === "dark" ? "rotate-180" : ""}`}
                >
                  <NAVBAR_CONST.LIGHT_DARK.ICON />
                </span>
              }
              theme="secondary"
              name={NAVBAR_CONST.LIGHT_DARK.TEXT}
            />
            <MobileMenu hook={useMobile} />
          </div>
        )}
      </nav>
    </header>
  );
};
