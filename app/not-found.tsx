import { hankenGrotesk, instrumentSerif, dmMono } from "./fonts";
import { Button, ClientOnly, ContentBlock, ContentHeading } from "./components";
import { NOT_FOUND_CONST } from "./const";

export default function NotFound() {
  return (
    <div
      className={`${hankenGrotesk.variable} ${instrumentSerif.variable} ${dmMono.variable} bg-greyscale-100 dark:bg-greyscale-900 flex h-screen items-center antialiased`}
    >
      <ClientOnly>
        <main className="relative mx-auto grid w-full max-w-7xl grid-cols-4 gap-3 px-3 md:grid-cols-8 md:gap-4 md:px-6 lg:grid-cols-12 lg:px-12">
          <ContentBlock additionalClasses="col-start-2 col-span-2 md:col-start-2 md:col-span-6 lg:col-start-4 lg:col-span-6">
            <ContentHeading level="h1">not found</ContentHeading>
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
      </ClientOnly>
    </div>
  );
}
