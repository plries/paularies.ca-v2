"use client";
import { IconContext, ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { WorksHero, Overview, Process, Reflection, Details } from ".";
import { Button } from "@/app/components";
import { useWindowSize } from "@/app/hooks";
import { useProjectPage } from "../useProjectPage";
import { PROJECT_PAGE_CONST } from "../const";

export const Project = () => {
  const hook = useProjectPage();
  const useMobile = useWindowSize();

  return (
    <IconContext.Provider value={{ size: 20 }}>
      <Button
        theme="tertiary"
        icon={<ArrowLeft />}
        additionalClasses={{
          container: "col-span-full mb-12 w-fit",
          icon: "mt-0.5",
          text: "mb-0.5 !gap-1",
        }}
        iconRight={false}
        href="/works"
        isLink
      >
        {PROJECT_PAGE_CONST.BUTTONS.BACK}
      </Button>

      <WorksHero PROJECT={hook.constants} />
      {!useMobile.isMobile && !useMobile.isTablet && (
        <div className="h-full lg:col-span-4 lg:col-start-1 lg:mr-12">
          <Details PROJECT={hook.constants} hasLinks />
        </div>
      )}
      <div className="col-span-full flex flex-col gap-16 lg:col-span-8 lg:col-start-5">
        <Overview PROJECT={hook.constants} />
        <Process PROJECT={hook.constants} />
        <Reflection PROJECT={hook.constants} />
      </div>
      <div className="col-span-full mt-12 flex w-full flex-row justify-between">
        <Button
          theme="tertiary"
          onClick={hook.handlePrevious}
          icon={<ArrowLeft />}
          additionalClasses={{ icon: "mt-0.5", text: "mb-0.5 !gap-1" }}
        >
          {PROJECT_PAGE_CONST.BUTTONS.PREVIOUS}
        </Button>
        <Button
          theme="tertiary"
          onClick={hook.handleNext}
          icon={<ArrowRight />}
          additionalClasses={{ icon: "mt-0.5", text: "mb-0.5 !gap-1" }}
          iconRight
        >
          {PROJECT_PAGE_CONST.BUTTONS.NEXT}
        </Button>
      </div>
    </IconContext.Provider>
  );
};
