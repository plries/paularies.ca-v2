import { FACTS_CONST } from "../const";
import { ContentBlock, ContentHeading, Heading } from "@/app/components/";

export const Facts = () => {
  return (
    <section className="col-span-full mt-16 grid grid-cols-4 gap-3 rounded-3xl md:grid-cols-8 md:gap-4 lg:grid-cols-12">
      <Heading level="h2">{FACTS_CONST.HEADING}</Heading>
      {FACTS_CONST.FACTS.map((fact, index) => (
        <ContentBlock
          key={index}
          additionalClasses="col-span-full md:col-span-3 md:col-start-2 lg:col-start-2 lg:col-span-10"
        >
          <ContentHeading level="h3">{fact.TITLE}</ContentHeading>
          <p className="text-greyscale-600 dark:text-greyscale-300">
            {fact.DESCRIPTION}
          </p>
        </ContentBlock>
      ))}
    </section>
  );
};
