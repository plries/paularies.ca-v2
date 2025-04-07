"use client";
import { ProjectCard, Heading, ActionBar, ToggleInput } from "../components";
import { useToggleInput, useWindowSize } from "../hooks";
import { PROJECTS_CONST } from "../const";
import { WORKS_CONST } from "./const";

export default function Works() {
  const toggle = useToggleInput();
  const windowSize = useWindowSize();

  return (
    <>
      <Heading level="h1">{WORKS_CONST.HEADING}</Heading>
      {PROJECTS_CONST.PROJECTS.map((PROJECT) => (
        <ProjectCard
          key={PROJECT.TITLE}
          PROJECT={PROJECT}
          isChecked={toggle.isChecked}
        />
      ))}
      {!windowSize.isMobile && (
        <ActionBar>
          <ToggleInput
            onChange={toggle.toggleInput}
            isChecked={toggle.isChecked}
            label={WORKS_CONST.TOGGLE}
          />
        </ActionBar>
      )}
    </>
  );
}
