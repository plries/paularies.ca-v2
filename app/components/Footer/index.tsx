"use client";
import { motion } from "framer-motion";
import { PaWordmark, LightDarkToggleIcon } from "@/public";
import { Button, IconButton } from "@/app/components/";
import { MOTION_CONFIG } from "@/app/(site)/const";
import { FOOTER_CONST } from "./const";
import { useModeToggle } from "@/app/hooks";

export const Footer = () => {
  const hook = useModeToggle();

  return (
    <motion.footer
      initial={MOTION_CONFIG.FOOTER.INITIAL}
      whileInView={MOTION_CONFIG.FOOTER.WHILE_IN_VIEW}
      transition={MOTION_CONFIG.TRANSITION}
      className="border-greyscale-950/10 bg-greyscale-100 dark:border-greyscale-50/10 dark:bg-greyscale-900 dark:text-greyscale-100 x-3 col-span-full my-16 grid w-[calc(100%-1.5rem)] max-w-7xl grid-cols-4 gap-x-3 gap-y-6 rounded-3xl border p-4 md:grid-cols-8 md:gap-x-4 md:p-6 md:pt-24 lg:w-[calc(100%-2rem)] lg:grid-cols-12 lg:rounded-4xl lg:border lg:p-8"
    >
      <div className="col-span-full col-start-1 flex flex-col gap-3 md:col-span-5 md:gap-4 lg:col-span-8">
        <h3 className="font-instrument-serif dark:text-greyscale-50 text-2xl md:text-[1.75rem] lg:text-[2rem]">
          {FOOTER_CONST.CONTACT.HEADING}
        </h3>
        <p className="text-greyscale-600 dark:text-greyscale-300">
          {FOOTER_CONST.CONTACT.PARAGRAPH.map((text, index) => (
            <span className="block" key={index}>
              {text}
            </span>
          ))}
        </p>
        <Button
          href={FOOTER_CONST.CONTACT.BUTTON.HREF}
          theme="secondary"
          additionalClasses={{
            container: "w-fit",
            button:
              "!shadow-[var(--button-gradient-light)] dark:!shadow-[var(--button-gradient-dark)]",
          }}
          isLink
        >
          {FOOTER_CONST.CONTACT.BUTTON.TEXT}
        </Button>
      </div>
      <div className="col-span-full flex flex-col gap-3 md:col-span-4 md:col-start-6 md:gap-4 lg:col-start-9">
        <h3 className="font-instrument-serif dark:text-greyscale-50 text-2xl md:text-[1.75rem] lg:text-[2rem]">
          {FOOTER_CONST.LINKS.HEADING}
        </h3>
        {FOOTER_CONST.LINKS.LINKS.map((link, index) => (
          <Button
            theme="tertiary"
            key={index}
            href={link.HREF}
            target={"_blank"}
            isLink
            additionalClasses={{
              container: "w-fit",
              text: "!text-greyscale-600 dark:!text-greyscale-300",
            }}
          >
            {link.TEXT}
          </Button>
        ))}
      </div>
      <div className="bg-greyscale-950 dark:bg-greyscale-50 col-span-full flex flex-row items-center justify-between rounded-xl p-4 shadow-[var(--nav-bar-dark)] md:p-6 lg:p-8 dark:shadow-[var(--nav-bar-light)]">
        <IconButton
          onClick={hook.toggleMode}
          icon={
            <span
              className={`ease-in-out-circ transition-transform duration-300 ${hook.mode === "dark" ? "rotate-180" : ""}`}
            >
              <LightDarkToggleIcon />
            </span>
          }
          theme="secondary"
          name={FOOTER_CONST.LIGHT_DARK.TEXT}
          noBlur
        />
        <p className="text-greyscale-50 dark:text-greyscale-950 flex flex-row items-center gap-2">
          {FOOTER_CONST.BAR.TEXT}
          <PaWordmark />
          <span className="sr-only">{FOOTER_CONST.BAR.SR}</span>
        </p>
      </div>
    </motion.footer>
  );
};
