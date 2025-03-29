"use client";
import { NAVBAR_CONST } from "./const";
import { Button, IconButton } from "../";
import { useModeToggle, useWindowSize } from "@/app/hooks";
import Link from "next/link";

export const NavBar = () => {
  const windowSize = useWindowSize();
  const lightDark = useModeToggle();

  return (
    <header className="bg-greyscale-[#f0f0f080] border-greyscale-100 dark:border-greyscale-700 shadow-nav-bar sticky top-3 left-0 m-3 flex max-w-7xl flex-row items-center justify-between place-self-stretch rounded-3xl border-[1px] p-3 text-base backdrop-blur-md md:top-6 md:m-6 md:text-lg lg:top-8 lg:mx-auto lg:my-8 lg:w-[calc(100%-2rem)] lg:text-xl">
      <nav className="contents">
        <Link
          href={NAVBAR_CONST.LOGO.HREF}
          className="dark:text-greyscale-50 flex flex-row items-center gap-2"
        >
          <span className="motion-safe:animate-[spin_12s_linear_infinite]">
            <NAVBAR_CONST.LOGO.STAR />
          </span>
          {!windowSize.isMobile && <NAVBAR_CONST.LOGO.WORDMARK />}
          <span className="sr-only">{NAVBAR_CONST.LOGO.HOME}</span>
        </Link>
        {!windowSize.isMobile && (
          <ul className="flex flex-row gap-2">
            {NAVBAR_CONST.LINKS.map(({ HREF, TEXT }) => (
              <li key={TEXT}>
                <Button href={HREF} theme="tertiary" isLink>
                  {TEXT}
                </Button>
              </li>
            ))}
            <IconButton
              onClick={lightDark.toggleMode}
              icon={<NAVBAR_CONST.LIGHT_DARK.ICON />}
              theme="secondary"
              name={NAVBAR_CONST.LIGHT_DARK.TEXT}
            />
            <IconButton
              href={NAVBAR_CONST.CONTACT.HREF}
              icon={<NAVBAR_CONST.CONTACT.ICON />}
              theme="primary"
              name={NAVBAR_CONST.CONTACT.TEXT}
              isLink
            />
          </ul>
        )}
        {windowSize.isMobile && (
          <IconButton
            onClick={lightDark.toggleMode}
            icon={<NAVBAR_CONST.MOBILE_MENU.ICON />}
            theme="primary"
            name={NAVBAR_CONST.MOBILE_MENU.TEXT}
          />
        )}
      </nav>
    </header>
  );
};
