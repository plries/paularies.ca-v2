import { Heading, ContentBlock, Dot, ContentHeading } from "@/app/components";
import { SKILLS_CONST } from "../const";

export const Skills = () => {
  return (
    <section className="col-span-full mt-16 grid grid-cols-4 gap-3 rounded-3xl md:grid-cols-8 md:gap-4 lg:grid-cols-12">
      <Heading level="h2">{SKILLS_CONST.HEADING}</Heading>
      {SKILLS_CONST.SKILLS.map((skill, index) => (
        <ContentBlock
          key={index}
          additionalClasses={
            "col-span-full md:col-span-3 md:col-start-2 [&:nth-child(3)]:md:col-start-5 lg:col-span-5 lg:col-start-2 [&:nth-child(3)]:lg:col-start-7"
          }
        >
          <div className="flex flex-row items-center gap-1">
            <Dot discipline={skill.TITLE as "design" | "development"} />
            <ContentHeading level="h3">{skill.TITLE}</ContentHeading>
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
