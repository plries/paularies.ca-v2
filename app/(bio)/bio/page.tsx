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
        </div>
      </div>
    </IconContext.Provider>
  );
}
