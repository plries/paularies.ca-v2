import { useWindowSize } from "@/app/hooks";
import { motion, easeInOut } from "framer-motion";
import { Heading, Marquee } from "@/app/components";
import { SKILLS_CONST } from "../const";

export const Skills = () => {
  const hook = useWindowSize();

  return (
    <section className="col-span-full mt-16 grid grid-cols-4 gap-3 rounded-3xl md:grid-cols-8 md:gap-4 lg:grid-cols-12">
      <Heading level="h2">{SKILLS_CONST.HEADING}</Heading>
      <Marquee ICONS={SKILLS_CONST.ICONS} from={0} to={"-100%"} />
      {SKILLS_CONST.SKILLS.map((skill, index) => (
        <motion.div
          key={index}
          className="col-span-full flex flex-col gap-4 md:col-span-6 md:col-start-2 lg:col-span-10 lg:col-start-2"
          transition={{ duration: 0.5, easeInOut, delay: (index ?? 0) * 0.2 }}
        >
          <div className="flex w-full flex-row gap-4">
            {hook.isMobile ? (
              <>
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
              </>
            ) : (
              <>
                <ul className="w-full">
                  {skill.CONTENT.slice(0, skill.CONTENT.length / 4).map(
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
                    skill.CONTENT.length / 4,
                    skill.CONTENT.length / 2,
                  ).map((item, index) => (
                    <li
                      className="text-greyscale-600 dark:text-greyscale-300"
                      key={index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <ul className="w-full">
                  {skill.CONTENT.slice(
                    skill.CONTENT.length / 4 + skill.CONTENT.length / 4,
                    skill.CONTENT.length / 2 + skill.CONTENT.length / 4,
                  ).map((item, index) => (
                    <li
                      className="text-greyscale-600 dark:text-greyscale-300"
                      key={index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <ul className="w-full">
                  {skill.CONTENT.slice(
                    skill.CONTENT.length / 2 + skill.CONTENT.length / 4,
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
              </>
            )}
          </div>
        </motion.div>
      ))}
    </section>
  );
};
