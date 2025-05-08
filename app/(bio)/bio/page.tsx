"use client";
import {
  IconContext,
  Sun,
  Moon,
  ChatsCircle,
  CardsThree,
  Note,
} from "@phosphor-icons/react";
import { Hero } from "@/app/(site)/home";
import { BIO_CONST } from "./const";
import { Button, IconButton } from "@/app/components";
import { useModeToggle } from "@/app/hooks";

export default function BioPage() {
  const hook = useModeToggle();

  return (
    <IconContext.Provider value={{ size: 20 }}>
      <Hero />
      <div className="absolute top-4 left-7 md:top-4 md:left-10 lg:top-4 lg:left-16">
        <IconButton
          onClick={hook.toggleMode}
          icon={
            <span
              className={`ease-in-out-circ transition-transform duration-500 ${hook.mode === "dark" ? "rotate-360 group-hover:rotate-[348deg]" : "group-hover:rotate-12"}`}
            >
              {hook.mode === "dark" ? <Sun /> : <Moon />}
            </span>
          }
          theme="secondary"
          name={BIO_CONST.LIGHT_DARK.TEXT}
        />
      </div>
      <div className="col-span-full flex w-full flex-col justify-between gap-3 md:flex-row md:gap-4">
        <div className="flex w-full flex-col gap-3 md:gap-4">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {BIO_CONST.LINKS_CONST.map((link, index) => (
              <Button
                key={index}
                href={link.href}
                theme="tertiary"
                isLink
                target="_blank"
                additionalClasses={{
                  button: "!text-greyscale-950 dark:!text-greyscale-200",
                  container: "h-fit w-fit",
                }}
              >
                {link.label}
              </Button>
            ))}
          </div>
          <div className="border-greyscale-950/5 dark:border-greyscale-50/5 flex flex-wrap justify-center gap-3 border-t pt-3 md:gap-4 md:pt-4">
            {BIO_CONST.CONTACTS_CONST.map((link, index) => (
              <Button
                key={index}
                href={link.href}
                theme={
                  index === BIO_CONST.CONTACTS_CONST.length - 1
                    ? "primary"
                    : "secondary"
                }
                isLink
                target="_blank"
                additionalClasses={{
                  button: `${index === BIO_CONST.CONTACTS_CONST.length - 1 ? "!shadow-[var(--button-gradient-light)] dark:!shadow-[var(--button-gradient-dark)]" : ""}`,
                }}
                icon={
                  index === 0 ? (
                    <CardsThree className="ease-in-out-circ transition-transform duration-300 group-hover:rotate-12" />
                  ) : index === 1 ? (
                    <Note className="ease-in-out-circ mt-0.5 rotate-12 transition-transform duration-300 group-hover:rotate-0" />
                  ) : (
                    <ChatsCircle className="ease-in-out-circ transition-transform duration-300 group-hover:-rotate-12" />
                  )
                }
                iconRight
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
