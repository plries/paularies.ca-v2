import { easeInOut } from "framer-motion";
import { ContentBlock, ContentHeading, Heading } from "@/app/components";
import { EXPERIENCE_CONST } from "../const";

export const Experience = () => {
  return (
    <section className="col-span-full mt-16 grid grid-cols-4 gap-3 rounded-3xl md:grid-cols-8 md:gap-4 lg:grid-cols-12">
      <Heading level="h2">{EXPERIENCE_CONST.HEADING}</Heading>
      {EXPERIENCE_CONST.ROLES.map((role, index) => (
        <div
          key={index}
          className="relative col-span-full flex flex-row gap-3 md:col-span-6 md:col-start-2 md:gap-4 lg:col-span-10 lg:col-start-2"
        >
          <div
            className={`bg-greyscale-200 dark:bg-greyscale-700 grid aspect-square h-4 w-4 place-items-center rounded-full after:absolute after:left-2 after:h-full after:w-px ${index === EXPERIENCE_CONST.ROLES.length - 1 ? "after:from-greyscale-50 after:to-greyscale-200 dark:after:from-greyscale-900 dark:after:to-greyscale-700 after:top-0 after:bg-gradient-to-t after:via-25%" : "after:bg-greyscale-200 dark:after:bg-greyscale-700 after:top-4"}`}
          />
          <ContentBlock
            additionalClasses={`w-full ${index === 0 ? "!shadow-sm" : ""}`}
            transition={{ duration: 0.5, easeInOut, delay: (index ?? 0) * 0.2 }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <ContentHeading level="h3">{role.TITLE}</ContentHeading>
              <h4 className="text-greyscale-400 mt-1 text-xs leading-none md:mt-0 md:w-full md:text-right md:!text-sm">
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
        </div>
      ))}
    </section>
  );
};
