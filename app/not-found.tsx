import { hankenGrotesk, instrumentSerif, dmMono } from "./fonts";
import { Button, ClientOnly, ContentBlock, ContentHeading } from "./components";
import { PaStar, PaWordmark } from "@/public/logo";
import { NOT_FOUND_CONST } from "./const";

export default function NotFound() {
  return (
    <div
      className={`${hankenGrotesk.variable} ${instrumentSerif.variable} ${dmMono.variable} radial-gradient flex h-screen flex-col items-center antialiased`}
    >
      <ClientOnly>
        <main className="relative mx-auto grid h-full w-full max-w-7xl grid-cols-4 place-items-center gap-3 px-3 md:grid-cols-8 md:gap-4 md:px-6 lg:grid-cols-12 lg:px-12">
          <ContentBlock additionalClasses="col-span-full h-fit md:col-start-2 md:col-span-6 lg:col-start-4 lg:col-span-6 -rotate-1">
            <ContentHeading level="h1">
              {NOT_FOUND_CONST.HEADING}
            </ContentHeading>
            <p className="text-greyscale-600 dark:text-greyscale-300 w-full">
              {NOT_FOUND_CONST.DESCRIPTION}
            </p>
            <div className="flex justify-end">
              <Button
                href="/"
                theme="primary"
                additionalClasses={{ container: "w-fit" }}
                isLink
              >
                {NOT_FOUND_CONST.BUTTON}
              </Button>
            </div>
          </ContentBlock>
        </main>
        <div className="text-greyscale-100 dark:text-greyscale-900 col-span-full mb-3 flex flex-row items-center justify-center gap-2 md:mb-4">
          <span className="motion-safe:animate-[spin_12s_linear_infinite]">
            <PaStar />
          </span>
          <PaWordmark />
        </div>
      </ClientOnly>
    </div>
  );
}
