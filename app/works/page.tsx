import { ProjectCard, Heading } from "../components";
import { PROJECTS_CONST } from "../const";
import { WORKS_CONST } from "./const";

export default function Works() {
  return (
    <section className="contents">
      <Heading level="h1">{WORKS_CONST.HEADING}</Heading>
      {PROJECTS_CONST.PROJECTS.map((project) => (
        <ProjectCard key={project.TITLE} project={project} />
      ))}
    </section>
  );
}
