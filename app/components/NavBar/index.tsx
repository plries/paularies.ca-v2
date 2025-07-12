"use client";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { IconContext, ChatsCircle } from "@phosphor-icons/react";
import { MOTION_CONFIG } from "@/app/(site)/const";
import { NAVBAR_CONST } from "./const";
import { PaStar, PaWordmark } from "@/public";
import { Button } from "../";
import { MobileMenu } from "./components";
import { useMobileMenu } from "./useMobileMenu";
import { useWindowSize } from "@/app/hooks";
import { useNavBar } from "./useNavBar";

export const NavBar = () => {
  const pathname = usePathname();
  const windowSize = useWindowSize();
  const useMobile = useMobileMenu();
  const useNav = useNavBar();
  const lenis = useLenis();

  return (
    <IconContext.Provider value={{ size: 20 }}>
      <motion.header
        initial={MOTION_CONFIG.HEADER.INITIAL}
        whileInView={MOTION_CONFIG.HEADER.WHILE_IN_VIEW}
        transition={MOTION_CONFIG.TRANSITION}
        className={`border-greyscale-200/50 dark:border-greyscale-700 dark:bg-greyscale-950/50 bg-greyscale-50/50 ease-in-out-circ sticky top-3 left-0 z-50 m-3 w-[calc(100%-1.5rem)] max-w-[calc(1440px-1.5rem)] rounded-3xl border shadow-[var(--nav-bar-light)] backdrop-blur-sm transition-[translate,scale,opacity] duration-500 md:top-6 md:m-6 lg:top-8 lg:mx-auto lg:my-8 lg:w-[calc(100%-2rem)] dark:shadow-[var(--nav-bar-dark)] ${useNav.isOpen ? "translate-y-0" : "pointer-events-none translate-y-[calc(-100%+1.25rem)] scale-95 !opacity-0 md:translate-y-[calc(-100%+0.725rem)] lg:translate-y-[-100%]"}`}
      >
        <nav
          className={`ease-in-out-circ flex flex-row items-center justify-between place-self-stretch rounded-3xl p-3 transition-opacity duration-500 ${useNav.isOpen ? "opacity-100" : "opacity-0"}`}
          ref={useNav.navRef}
        >
          <Button
            theme="tertiary"
            href={pathname === "/" ? "" : NAVBAR_CONST.LOGO.HREF}
            onClick={() => {
              useMobile.closeMenu();
              if (pathname === "/") {
                lenis?.scrollTo(0, { immediate: false });
              }
            }}
            additionalClasses={{ button: "[&&]:!p-0 md:[&&]:!p-1 h-full" }}
            scroll={false}
            isLink
            noMotion
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
                    <Button
                      href={HREF}
                      theme="tertiary"
                      scroll={false}
                      isLink
                      noMotion
                      onClick={() => {
                        if (pathname === HREF) {
                          lenis?.scrollTo(0, { immediate: false });
                        }
                      }}
                      additionalClasses={{
                        hover: `${pathname === HREF || (pathname.startsWith("/works/") && HREF === "/works") ? "bg-greyscale-300/10 dark:bg-greyscale-600/10" : ""}`,
                      }}
                    >
                      {TEXT}
                    </Button>
                  </li>
                ))}
              </ul>
              <Button
                href={NAVBAR_CONST.CONTACT.HREF}
                icon={
                  <ChatsCircle className="ease-in-out-circ transition-transform duration-300 group-hover:-rotate-12" />
                }
                theme="primary"
                additionalClasses={{
                  button:
                    "!shadow-[var(--button-gradient-dark)] dark:!shadow-[var(--button-gradient-light)]",
                }}
                isLink
                noMotion
                iconRight
              >
                {NAVBAR_CONST.CONTACT.TEXT}
              </Button>
            </div>
          )}
          {windowSize.isMobile && <MobileMenu hook={useMobile} />}
        </nav>
      </motion.header>
    </IconContext.Provider>
  );
};
