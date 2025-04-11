"use client";
import { Button } from "../Button";
import { VIEW_TOGGLE_CONST } from "./const";
import { ViewTogglePropTypes } from "./types";

export const ViewToggle = ({ isCode, toggleView }: ViewTogglePropTypes) => {
  return (
    <div className="bg-greyscale-100 dark:bg-greyscale-950 border-greyscale-950/10 dark:border-greyscale-50/10 relative right-0 flex w-full flex-row gap-1 rounded-lg border p-1 shadow-[var(--button-light)] dark:shadow-[var(--button-dark)]">
      <div
        className={`bg-greyscale-950/10 dark:bg-greyscale-50/10 pointer-events-none absolute top-0 m-1 h-[calc(100%-0.5rem)] w-[calc(50%-0.5rem)] rounded-lg px-3 py-2 transition-[width,left] duration-700 ${isCode ? "left-1/2" : "left-0"}`}
      >
        <p className="invisible">
          {isCode ? VIEW_TOGGLE_CONST.CODE : VIEW_TOGGLE_CONST.OUTPUT}
        </p>
      </div>
      <Button
        theme="tertiary"
        additionalClasses={{
          container: `w-full !rounded-lg ${!isCode ? "hover:!bg-transparent" : ""}`,
          button: `w-full !text-greyscale-950 dark:!text-greyscale-50 ${!isCode ? "!cursor-default" : ""}`,
          text: `transition-[scale] duration-700 ${!isCode ? "group-hover:scale-100 pointer-events-none" : "!text-greyscale-950/50 dark:!text-greyscale-50/50"}`,
        }}
        onClick={!isCode ? () => {} : toggleView}
        noHover
      >
        {VIEW_TOGGLE_CONST.OUTPUT}
      </Button>
      <Button
        theme="tertiary"
        onClick={isCode ? () => {} : toggleView}
        additionalClasses={{
          container: `w-full !rounded-lg ${isCode ? "hover:!bg-transparent" : ""}`,
          button: `w-full !text-greyscale-950 dark:!text-greyscale-50 ${isCode ? "!cursor-default" : ""}`,
          text: `transition-[scale] duration-700 ${isCode ? "group-hover:scale-100 pointer-events-none" : "!text-greyscale-950/50 dark:!text-greyscale-50/50"}`,
        }}
        noHover
      >
        {VIEW_TOGGLE_CONST.CODE}
      </Button>
    </div>
  );
};
