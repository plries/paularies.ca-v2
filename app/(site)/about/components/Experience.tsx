import { ContentBlock, ContentHeading, Heading } from "@/app/components";
import { EXPERIENCE_CONST } from "../const";

export const Experience = () => {
  return (
    <section className="col-span-full mt-16 grid grid-cols-4 gap-3 rounded-3xl md:grid-cols-8 md:gap-4 lg:grid-cols-12">
      <Heading level="h2">{EXPERIENCE_CONST.HEADING}</Heading>
      {EXPERIENCE_CONST.ROLES.map((role, index) => (
        <ContentBlock
          key={index}
          additionalClasses="col-span-full md:col-start-2 md:col-span-6 lg:col-start-2 lg:col-span-10"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <ContentHeading level="h3">{role.TITLE}</ContentHeading>
            <h4 className="text-greyscale-800 dark:text-greyscale-200 text-sm leading-none md:w-full md:text-right md:!text-base lg:!text-lg">
              {role.SPAN}
            </h4>
          </div>
          <ul className="list-disc">
            {role.DUTIES.map((duty, index) => (
              <li
                className="text-greyscale-600 dark:text-greyscale-300 ml-6"
                key={index}
              >
                {duty}
              </li>
            ))}
          </ul>
        </ContentBlock>
      ))}
    </section>
  );
};
