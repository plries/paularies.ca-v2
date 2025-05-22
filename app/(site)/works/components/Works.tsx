"use client";
import { SquaresFour } from "@phosphor-icons/react";
import { ProjectCard, Heading, ActionBar, ToggleInput } from "@/app/components";
import { useToggleInput, useWindowSize } from "@/app/hooks";
import { PROJECTS_CONST } from "@/app/(site)/const";
import { WORKS_CONST } from "../const";

export const Works = () => {
  const toggle = useToggleInput();
  const windowSize = useWindowSize();

  return (
    <>
      <Heading level="h1">{WORKS_CONST.HEADING}</Heading>
      {(!toggle.isChecked || windowSize.isMobile) && (
        <>
          {PROJECTS_CONST.PROJECTS.map((PROJECT, index) => (
            <ProjectCard
              key={PROJECT.TITLE}
              PROJECT={PROJECT}
              isChecked={toggle.isChecked}
              index={index}
            />
          ))}
        </>
      )}
      {toggle.isChecked && (
        <>
          <div className="flex flex-col gap-4 md:col-span-4 lg:col-span-6">
            {PROJECTS_CONST.PROJECTS.filter((_, index) => index % 2 === 0).map(
              (PROJECT, index) => (
                <ProjectCard
                  key={PROJECT.TITLE}
                  PROJECT={PROJECT}
                  isChecked={toggle.isChecked}
                  index={index}
                />
              ),
            )}
          </div>
          <div className="flex flex-col gap-4 md:col-span-4 lg:col-span-6">
            {PROJECTS_CONST.PROJECTS.filter((_, index) => index % 2 !== 0).map(
              (PROJECT, index) => (
                <ProjectCard
                  key={PROJECT.TITLE}
                  PROJECT={PROJECT}
                  isChecked={toggle.isChecked}
                  index={index}
                />
              ),
            )}
          </div>
        </>
      )}
      {!windowSize.isMobile && (
        <ActionBar
          additionalClasses={{
            container: "!px-3 text-greyscale-400 dark:text-greyscale-300",
          }}
        >
          <ToggleInput
            onChange={toggle.toggleInput}
            isChecked={toggle.isChecked}
            label={WORKS_CONST.TOGGLE}
            additionalClasses={{
              label: "sr-only",
            }}
          />
          <SquaresFour size={24} />
        </ActionBar>
      )}
    </>
  );
};
