import { Heading, Button, ProjectCard } from "@/app/components";
import { PROJECTS_CONST } from "@/app/const";
import { SELECTED_WORKS_CONST } from "../const";

export const SelectedWorks = () => {
  return (
    <section className="contents">
      <Heading level="h2">{SELECTED_WORKS_CONST.HEADING}</Heading>
      {PROJECTS_CONST.PROJECTS.slice(0, 2).map((project) => (
        <ProjectCard key={project.TITLE} project={project} />
      ))}
      <div className="col-span-full mb-16 grid justify-end">
        <Button href={SELECTED_WORKS_CONST.BUTTON.HREF} theme="primary" isLink>
          {SELECTED_WORKS_CONST.BUTTON.TEXT}
        </Button>
      </div>
    </section>
  );
};
