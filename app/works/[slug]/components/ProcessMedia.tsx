import Image from "next/image";
import { ViewToggle } from "@/app/components";
import { useViewToggle } from "@/app/hooks";
import Highlight from "react-highlight";

export const ProcessMedia = ({ process }: any) => {
  const hook = useViewToggle();

  return (
    <div className="flex w-full flex-col gap-4">
      <div
        className={`bg-greyscale-100 dark:bg-greyscale-800 border-greyscale-950/10 dark:border-greyscale-50/10 relative aspect-video w-full rounded-lg border-[1px] ${hook.isCode ? "overflow-x-hidden overflow-y-scroll" : "overflow-hidden"}`}
      >
        {process.IMAGE && (
          <Image
            src={process.IMAGE.SRC}
            alt={process.IMAGE.ALT}
            width={1920}
            height={1080}
            className={`absolute top-0 left-0 z-10 h-full w-full object-cover transition-[translate,scale,filter] duration-700 ${hook.isCode ? "-translate-x-full scale-75 rounded-lg saturate-0" : ""}`}
          />
        )}
        {process.VIDEO && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className={`absolute top-0 left-0 z-10 h-full w-full object-cover transition-[translate,scale,filter,opacity] duration-700 ${hook.isCode ? "-translate-x-full scale-75 rounded-lg saturate-0" : ""}`}
          >
            <source src={process.VIDEO} type="video/mp4" />
          </video>
        )}
        {process.CODE && (
          <Highlight className="text-greyscale-800 dark:text-greyscale-200 p-4">
            {process.CODE}
          </Highlight>
        )}
      </div>
      {process.CODE && (
        <ViewToggle isCode={hook.isCode} toggleView={hook.toggleView} />
      )}
    </div>
  );
};
