"use client";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { MOTION_CONFIG } from "@/app/(site)/const";
import { NAVBAR_CONST } from "./const";
import { PaStar, PaWordmark, EmailIcon, ChevronIcon } from "@/public";
import { Button, IconButton } from "../";
import { MobileMenu } from "./components";
import { useMobileMenu } from "./useMobileMenu";
import { useWindowSize } from "@/app/hooks";
import { useNavBar } from "./useNavBar";

export const NavBar = () => {
  const pathname = usePathname();
  const windowSize = useWindowSize();
  const useMobile = useMobileMenu();
  const useNav = useNavBar();

  const handleClick = () => {
    useNav.toggleNav();
    useMobile.closeMenu();
  };

  return (
    <motion.header
      initial={MOTION_CONFIG.HEADER.INITIAL}
      whileInView={MOTION_CONFIG.HEADER.WHILE_IN_VIEW}
      transition={MOTION_CONFIG.TRANSITION}
      className={`border-greyscale-200/50 dark:border-greyscale-700 dark:bg-greyscale-950/50 bg-greyscale-50/50 ease-in-out-circ sticky top-3 left-0 z-50 m-3 mb-7 w-[calc(100%-1.5rem)] max-w-7xl rounded-3xl border shadow-[var(--nav-bar-light)] backdrop-blur-sm transition-[translate,scale] duration-500 md:top-6 md:m-6 md:mb-7 lg:top-8 lg:mx-auto lg:my-8 lg:w-[calc(100%-2rem)] dark:shadow-[var(--nav-bar-dark)] ${useNav.isOpen ? "translate-y-0" : "pointer-events-none translate-y-[calc(-100%+1.25rem)] scale-90 md:translate-y-[calc(-100%+0.725rem)] lg:translate-y-[-100%]"}`}
    >
      <IconButton
        onClick={handleClick}
        theme="secondary"
        additionalClasses={{
          container:
            "!absolute w-fit bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 transition-opacity duration-500 ease-in-out-circ pointer-events-auto",
          button: "!rounded-full",
          hover: "!rounded-full",
        }}
        icon={
          <span
            className={`text-greyscale-600 dark:text-greyscale-300 ease-in-out-circ transition-transform duration-500 ${useNav.isOpen ? "-rotate-180" : ""}`}
          >
            <ChevronIcon />
          </span>
        }
        name={`${useNav.isOpen ? NAVBAR_CONST.NAV_BAR.SHOW_MENU : NAVBAR_CONST.NAV_BAR.HIDE_MENU}`}
        noBlur
      />
      <nav
        className={`ease-in-out-circ flex flex-row items-center justify-between place-self-stretch rounded-3xl p-3 transition-opacity duration-500 ${useNav.isOpen ? "opacity-100" : "opacity-0"}`}
        ref={useNav.navRef}
      >
        <Button
          theme="tertiary"
          href={pathname === "/" ? "#top" : NAVBAR_CONST.LOGO.HREF}
          onClick={useMobile.closeMenu}
          additionalClasses={{ button: "[&&]:!p-0 md:[&&]:!p-1 h-full" }}
          isLink
          noBlur
        >
          <span className="motion-safe:animate-[spin_12s_linear_infinite]">
            <PaStar />
          </span>
          {!windowSize.isMobile && (
            <span className="hidden md:inline-block">
              <PaWordmark />
            </span>
          )}
          <span className="sr-only">{NAVBAR_CONST.LOGO.HOME}</span>
        </Button>
        {!windowSize.isMobile && (
          <div className="hidden h-full flex-row items-center gap-3 md:flex">
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
        {windowSize.isMobile && <MobileMenu hook={useMobile} />}
      </nav>
    </motion.header>
  );
};
