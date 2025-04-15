"use client";
import { ProjectCard, Heading, ActionBar, ToggleInput } from "@/app/components";
import { useToggleInput, useWindowSize, ScrollToTop } from "@/app/hooks";
import { PROJECTS_CONST } from "@/app/(site)/const";
import { WORKS_CONST } from "./const";

export default function Works() {
  const toggle = useToggleInput();
  const windowSize = useWindowSize();

  return (
    <>
      <ScrollToTop />
      <Heading level="h1">{WORKS_CONST.HEADING}</Heading>
      {(!toggle.isChecked || windowSize.isMobile) && (
        <>
          {PROJECTS_CONST.PROJECTS.map((PROJECT) => (
            <ProjectCard
              key={PROJECT.TITLE}
              PROJECT={PROJECT}
              isChecked={toggle.isChecked}
            />
          ))}
        </>
      )}
      {toggle.isChecked && (
        <>
          <div className="flex flex-col gap-4 md:col-span-4 lg:col-span-6">
            {PROJECTS_CONST.PROJECTS.filter((_, index) => index % 2 === 0).map(
              (PROJECT) => (
                <ProjectCard
                  key={PROJECT.TITLE}
                  PROJECT={PROJECT}
                  isChecked={toggle.isChecked}
                />
              ),
            )}
          </div>
          <div className="flex flex-col gap-4 md:col-span-4 lg:col-span-6">
            {PROJECTS_CONST.PROJECTS.filter((_, index) => index % 2 !== 0).map(
              (PROJECT) => (
                <ProjectCard
                  key={PROJECT.TITLE}
                  PROJECT={PROJECT}
                  isChecked={toggle.isChecked}
                />
              ),
            )}
          </div>
        </>
      )}
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
