import { INTRO_CONST } from "../const";
import { Button, ContentBlock, GradientBlock } from "@/app/components";

export const Intro = () => {
  return (
    <section className="col-span-full my-16 grid grid-cols-4 gap-3 rounded-3xl md:grid-cols-8 md:gap-4 lg:grid-cols-12">
      <GradientBlock>
        <ContentBlock
          additionalClasses={
            "flex flex-col gap-3 col-span-full md:col-span-6 md:col-start-2 md:flex-row md:gap-4 md:p-4 lg:col-span-8 lg:col-start-3"
          }
        >
          <p className="font-instrument-serif dark:text-greyscale-200 w-full !text-xl md:!text-2xl lg:!text-[1.75rem]">
            {INTRO_CONST.PARAGRAPH_ONE.map((text, index) => (
              <span className="even:italic" key={index}>
                {text}
              </span>
            ))}
          </p>
          <p className="text-greyscale-600 dark:text-greyscale-300 w-full">
            {INTRO_CONST.PARAGRAPH_TWO.map((text, index) => (
              <span className="block" key={index}>
                {text}
              </span>
            ))}
          </p>
        </ContentBlock>
        <Button
          href={INTRO_CONST.BUTTON.HREF}
          theme="secondary"
          additionalClasses={{
            container:
              "col-span-2 col-start-3 justify-self-end md:col-start-6 lg:col-start-9",
          }}
          isLink
        >
          {INTRO_CONST.BUTTON.TEXT}
        </Button>
      </GradientBlock>
    </section>
  );
};
