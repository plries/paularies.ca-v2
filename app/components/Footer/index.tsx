import { Button } from "../../components/";
import { FOOTER_CONST } from "./const";

export const Footer = () => {
  return (
    <footer className="border-greyscale-950/10 bg-greyscale-100 dark:bg-greyscale-900 dark:text-greyscale-100 x-3 col-span-full mt-16 grid w-full max-w-7xl grid-cols-4 gap-x-3 gap-y-6 rounded-t-3xl rounded-b-none border-[1px] p-4 md:mb-6 md:grid-cols-8 md:gap-x-4 md:p-6 md:pt-24 lg:mb-8 lg:grid-cols-12 lg:rounded-b-3xl lg:p-8">
      <div className="col-span-full col-start-1 flex flex-col gap-3 md:col-span-5 md:gap-4 lg:col-span-8">
        <h3 className="font-instrument-serif dark:text-greyscale-50 text-2xl md:text-[1.75rem] lg:text-[2rem]">
          {FOOTER_CONST.CONTACT.HEADING}
        </h3>
        <p className="text-greyscale-600 dark:text-greyscale-300">
          {FOOTER_CONST.CONTACT.PARAGRAPH.map((text, index) => (
            <span className="block first:font-bold" key={index}>
              {text}
            </span>
          ))}
        </p>
        <Button
          href={FOOTER_CONST.CONTACT.BUTTON.HREF}
          theme="secondary"
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
          >
            {link.TEXT}
          </Button>
        ))}
      </div>
      <div className="bg-greyscale-950 dark:bg-greyscale-50 col-span-full flex flex-row justify-end rounded-3xl p-4 md:p-6 lg:p-8">
        <p className="text-greyscale-50 dark:text-greyscale-950 flex flex-row items-center gap-2">
          {FOOTER_CONST.BAR.TEXT}
          <span className="sr-only">{FOOTER_CONST.BAR.SR}</span>
          <span className="inline-flex flex-row gap-2">
            <FOOTER_CONST.BAR.LOGO.STAR />
            <FOOTER_CONST.BAR.LOGO.WORDMARK />
          </span>
        </p>
      </div>
    </footer>
  );
};
