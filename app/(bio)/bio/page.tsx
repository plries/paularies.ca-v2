"use client";
import { Hero } from "@/app/(site)/home";
import { BIO_CONST } from "./const";
import { Button, IconButton } from "@/app/components";
import { LightDarkToggleIcon } from "@/public";
import { useModeToggle } from "@/app/hooks";

export default function BioPage() {
  const hook = useModeToggle();

  return (
    <>
      <Hero />
      <div className="absolute top-2 left-5 md:top-2 md:left-8 lg:left-14">
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
          name={BIO_CONST.LIGHT_DARK.TEXT}
        />
      </div>
      <div className="col-span-full flex w-full flex-col justify-between gap-3 md:flex-row md:gap-4">
        <div className="flex w-full flex-row gap-3 md:gap-4">
          <div className="flex w-full flex-col gap-3 md:flex-row md:gap-4">
            {BIO_CONST.LINKS_CONST.map((link, index) => (
              <Button
                key={index}
                href={link.href}
                theme="tertiary"
                isLink
                target="_blank"
                additionalClasses={{
                  button: "!text-greyscale-950 dark:!text-greyscale-200",
                  container: "h-fit"
                }}
              >
                {link.label}
              </Button>
            ))}
          </div>
          <div className="flex w-full flex-col items-end justify-end gap-3 md:flex-row md:flex-wrap md:gap-4">
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
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
