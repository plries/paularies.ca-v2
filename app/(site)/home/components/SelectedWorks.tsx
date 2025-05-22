"use client";
import { CardsThree } from "@phosphor-icons/react";
import { Heading, Button, ProjectCard } from "@/app/components";
import { PROJECTS_CONST } from "@/app/(site)/const";
import { SELECTED_WORKS_CONST } from "../const";

export const SelectedWorks = () => {
  return (
    <section className="contents">
      <Heading level="h2">{SELECTED_WORKS_CONST.HEADING}</Heading>
      {PROJECTS_CONST.PROJECTS.slice(0, 2).map((project, index) => (
        <ProjectCard key={project.TITLE} PROJECT={project} index={index} />
      ))}
      <div className="col-span-full mb-16 grid justify-end">
        <Button
          href={SELECTED_WORKS_CONST.BUTTON.HREF}
          theme="primary"
          isLink
          icon={
            <CardsThree
              size={20}
              className="ease-in-out-circ transition-transform duration-300 group-hover:rotate-12"
            />
          }
          iconRight
        >
          {SELECTED_WORKS_CONST.BUTTON.TEXT}
        </Button>
      </div>
    </section>
  );
};
