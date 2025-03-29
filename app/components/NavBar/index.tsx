"use client";
import { NAVBAR_CONST } from "./const";
import { Button, IconButton } from "../";
import { useModeToggle } from "@/app/hooks";
import Link from "next/link";

export const NavBar = () => {
  const hook = useModeToggle();

  return (
    <header className="bg-greyscale-[#f0f0f080] border-greyscale-100 dark:border-greyscale-700 shadow-nav-bar sticky top-0 left-0 m-3 flex flex-row items-center justify-between rounded-3xl border-[1px] p-3 text-base backdrop-blur-md md:text-lg lg:text-xl">
      <nav className="contents">
        <Link
          href={NAVBAR_CONST.LOGO.HREF}
          className="dark:text-greyscale-50 inline-block motion-safe:animate-[spin_12s_linear_infinite]"
        >
          <NAVBAR_CONST.LOGO.STAR />
          <span className="sr-only">{NAVBAR_CONST.LOGO.HOME}</span>
        </Link>
        <ul className="flex flex-row gap-2">
          {NAVBAR_CONST.LINKS.map(({ HREF, TEXT }) => (
            <li key={TEXT}>
              <Button href={HREF} theme="primary">
                {TEXT}
              </Button>
            </li>
          ))}
          <IconButton
            onClick={hook.toggleMode}
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
      </nav>
    </header>
  );
};
