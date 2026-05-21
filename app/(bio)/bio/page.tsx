"use client";
import { Hero } from "@/app/(site)/home";
import { BIO_CONST } from "./const";
import { Button } from "@/app/components";

export default function BioPage() {
  return (
    <>
      <Hero />
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
    </>
  );
}
