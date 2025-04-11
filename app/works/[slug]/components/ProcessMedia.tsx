import Image from "next/image";
import { ViewToggle } from "@/app/components";
import { useViewToggle } from "@/app/hooks";
import Highlight from "react-highlight";

export const ProcessMedia = ({
  PROCESS,
}: {
  PROCESS: {
    HEADING: string;
    DESCRIPTION: string[];
    IMAGE?: { SRC: string; ALT: string };
    VIDEO?: string;
    CODE?: string;
  };
}) => {
  const hook = useViewToggle();

  return (
    <div className="flex w-full flex-col gap-2">
      <div
        className={`bg-greyscale-100 dark:bg-greyscale-800 border-greyscale-950/10 dark:border-greyscale-50/10 relative aspect-video h-fit w-full rounded-lg border`}
      >
        {PROCESS.IMAGE && (
          <Image
            src={PROCESS.IMAGE.SRC}
            alt={PROCESS.IMAGE.ALT}
            width={1920}
            height={1080}
            className={`sticky top-0 left-0 z-10 h-[calc(100%+2px] w-full rounded-lg object-cover transition-[opacity,filter] duration-700 ${hook.isCode ? "pointer-events-none opacity-0 blur-md" : ""}`}
          />
        )}
        {PROCESS.VIDEO && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className={`sticky top-0 left-0 z-10 h-[calc(100%+2px] w-full rounded-lg object-cover transition-[opacity,filter] duration-700 ${hook.isCode ? "pointer-events-none opacity-0 blur-md" : ""}`}
          >
            <source src={PROCESS.VIDEO} type="video/mp4" />
          </video>
        )}
        {PROCESS.CODE && (
          <div className="absolute top-0 left-0 h-full w-full overflow-y-auto p-4">
            <Highlight className="text-greyscale-800 dark:text-greyscale-200">
              {PROCESS.CODE}
            </Highlight>
          </div>
        )}
      </div>
      {PROCESS.CODE && (
        <ViewToggle isCode={hook.isCode} toggleView={hook.toggleView} />
      )}
    </div>
  );
};
