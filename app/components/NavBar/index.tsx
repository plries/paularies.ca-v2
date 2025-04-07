"use client";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { MOTION_CONFIG } from "@/app/const";
import { NAVBAR_CONST } from "./const";
import { PaStar, PaWordmark, LightDarkToggleIcon, EmailIcon } from "@/public";
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
    <motion.header
      initial={MOTION_CONFIG.HEADER.INITIAL}
      whileInView={MOTION_CONFIG.HEADER.WHILE_IN_VIEW}
      transition={MOTION_CONFIG.TRANSITION}
      className="border-greyscale-100 dark:border-greyscale-800 dark:bg-greyscale-950/50 bg-greyscale-50/50 sticky top-3 left-0 z-50 m-3 flex max-w-7xl flex-row items-center justify-between place-self-stretch rounded-3xl border-[1px] p-3 shadow-[var(--nav-bar-light)] backdrop-blur-md md:top-6 md:m-6 lg:top-8 lg:mx-auto lg:my-8 lg:w-[calc(100%-2rem)] dark:shadow-[var(--nav-bar-dark)]"
    >
      <nav className="contents">
        <Button
          theme="tertiary"
          href={pathname === "/" ? "#top" : NAVBAR_CONST.LOGO.HREF}
          onClick={useMobile.closeMenu}
          additionalClasses={{ button: "!p-0, h-full" }}
          isLink
          noBlur
        >
          <span className="motion-safe:animate-[spin_12s_linear_infinite]">
            <PaStar />
          </span>
          {!windowSize.isMobile && <PaWordmark />}
          <span className="sr-only">{NAVBAR_CONST.LOGO.HOME}</span>
        </Button>
        {!windowSize.isMobile && (
          <div className="flex h-full flex-row items-center gap-1">
            <ul className="contents">
              {NAVBAR_CONST.LINKS.slice(0, 2).map(({ HREF, TEXT }) => (
                <li key={TEXT}>
                  <Button href={HREF} theme="tertiary" isLink noBlur>
                    {TEXT}
                  </Button>
                </li>
              ))}
            </ul>
            <IconButton
              onClick={lightDark.toggleMode}
              icon={
                <span
                  className={`transition-transform duration-500 ${lightDark.mode === "dark" ? "rotate-180" : ""}`}
                >
                  <LightDarkToggleIcon />
                </span>
              }
              theme="secondary"
              name={NAVBAR_CONST.LIGHT_DARK.TEXT}
              noBlur
            />
            <IconButton
              href={NAVBAR_CONST.CONTACT.HREF}
              icon={<EmailIcon />}
              theme="primary"
              additionalClasses={{
                button:
                  "!shadow-[var(--button-gradient-dark)] dark:!shadow-[var(--button-gradient-light)]",
              }}
              name={NAVBAR_CONST.CONTACT.TEXT}
              isLink
              noBlur
            />
          </div>
        )}
        {windowSize.isMobile && (
          <div className="flex flex-row gap-1">
            <IconButton
              onClick={lightDark.toggleMode}
              icon={
                <span
                  className={`transition-transform duration-500 ${lightDark.mode === "dark" ? "rotate-180" : ""}`}
                >
                  <LightDarkToggleIcon />
                </span>
              }
              theme="secondary"
              name={NAVBAR_CONST.LIGHT_DARK.TEXT}
              noBlur
            />
            <MobileMenu hook={useMobile} />
          </div>
        )}
      </nav>
    </motion.header>
  );
};
