import { Heading, ContentBlock, Dot } from "@/app/components";
import { SKILLS_CONST } from "../const";

export const Skills = () => {
  return (
    <section className="contents">
      <Heading level="h2">{SKILLS_CONST.HEADING}</Heading>
      {SKILLS_CONST.SKILLS.map((skill, index) => (
        <ContentBlock
          key={index}
          additionalClasses={
            "flex flex-col gap-3 col-span-full md:col-span-4 lg:col-span-5 md:col-start-2 last:md:col-start-5 lg:col-start-2 last:lg:col-start-7"
          }
        >
          <div className="flex flex-row items-center gap-1">
            <Dot discipline={skill.TITLE as "design" | "development"} />
            <h3 className="font-instrument-serif dark:text-greyscale-200 w-full !text-xl md:!text-2xl lg:!text-[1.75rem]">
              {skill.TITLE}
            </h3>
          </div>
          <div className="flex w-full flex-row gap-4">
            <ul className="w-full">
              {skill.CONTENT.slice(0, skill.CONTENT.length / 2).map(
                (item, index) => (
                  <li
                    className="text-greyscale-600 dark:text-greyscale-300"
                    key={index}
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
            <ul className="w-full">
              {skill.CONTENT.slice(
                skill.CONTENT.length / 2,
                skill.CONTENT.length,
              ).map((item, index) => (
                <li
                  className="text-greyscale-600 dark:text-greyscale-300"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ContentBlock>
      ))}
    </section>
  );
};
