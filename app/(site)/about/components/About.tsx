"use client";
import { Note } from "@phosphor-icons/react";
import { ActionBar, Heading, Button } from "@/app/components";
import { AboutHero, Experience, Skills, Values, Facts } from "../components";
import { ABOUT_CONST } from "../const";

export const About = () => {
  return (
    <>
      <Heading level="h1">{ABOUT_CONST.HEADING}</Heading>
      <AboutHero />
      {/* <Values /> */}
      <Skills />
      <Experience />
      {/* <Facts /> */}
      <ActionBar
        positionType="sticky"
        additionalClasses={{ wrapper: "!w-full col-span-full" }}
      >
        <Button
          theme="primary"
          href={ABOUT_CONST.BUTTON.HREF}
          isLink
          noMotion
          target="_blank"
          icon={
            <Note
              size={20}
              className="ease-in-out-circ mt-0.5 rotate-12 transition-transform duration-300 group-hover:rotate-0"
            />
          }
          iconRight
        >
          {ABOUT_CONST.BUTTON.TEXT}
        </Button>
      </ActionBar>
    </>
  );
};
