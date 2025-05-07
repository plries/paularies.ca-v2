"use client";
import { Sun, Moon, Mail } from "lucide-react";
import { Hero } from "@/app/(site)/home";
import { BIO_CONST } from "./const";
import { Button, IconButton } from "@/app/components";
import { useModeToggle } from "@/app/hooks";

export default function BioPage() {
  const hook = useModeToggle();

  return (
    <>
      <Hero />
      <div className="absolute top-4 left-7 md:top-4 md:left-10 lg:left-16 lg:top-4">
        <IconButton
          onClick={hook.toggleMode}
          icon={
            <span
              className={`ease-in-out-circ transition-transform duration-500 ${hook.mode === "dark" ? "rotate-360" : ""}`}
            >
              {hook.mode === "dark" ? (
                <Sun width={20} height={20} />
                ) : (
                  <Moon width={20} height={20} />
                )
              }
            </span>
          }
          theme="secondary"
          name={BIO_CONST.LIGHT_DARK.TEXT}
        />
      </div>
      <div className="col-span-full flex w-full flex-col justify-between gap-3 md:flex-row md:gap-4">
        <div className="flex w-full flex-col gap-3 md:gap-4">
          <div className="flex justify-center gap-3 flex-wrap md:gap-4">
            {BIO_CONST.LINKS_CONST.map((link, index) => (
              <Button
                key={index}
                href={link.href}
                theme="tertiary"
                isLink
                target="_blank"
                additionalClasses={{
                  button: "!text-greyscale-950 dark:!text-greyscale-200",
                  container: "h-fit w-fit"
                }}
              >
                {link.label}
              </Button>
            ))}
          </div>
          <div className="border-t border-greyscale-950/5 dark:border-greyscale-50/5 pt-3 md:pt-4 flex justify-center gap-3 flex-wrap md:gap-4">
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
                icon={index === BIO_CONST.CONTACTS_CONST.length - 1 && <Mail width={20} height={20} />}
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
