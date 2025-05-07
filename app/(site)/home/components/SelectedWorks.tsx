import { GalleryVerticalEnd } from "lucide-react";
import { Heading, Button, ProjectCard } from "@/app/components";
import { PROJECTS_CONST } from "@/app/(site)/const";
import { SELECTED_WORKS_CONST } from "../const";

export const SelectedWorks = () => {
  return (
    <section className="contents">
      <Heading level="h2">{SELECTED_WORKS_CONST.HEADING}</Heading>
      {PROJECTS_CONST.PROJECTS.slice(0, 2).map((project) => (
        <ProjectCard key={project.TITLE} PROJECT={project} />
      ))}
      <div className="col-span-full mb-16 grid justify-end">
        <Button
          href={SELECTED_WORKS_CONST.BUTTON.HREF}
          theme="primary"
          isLink
          icon={<GalleryVerticalEnd width={20} height={20} />}
          iconRight
        >
          {SELECTED_WORKS_CONST.BUTTON.TEXT}
        </Button>
      </div>
    </section>
  );
};
