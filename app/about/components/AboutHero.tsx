import Image from "next/image";
import { ABOUT_HERO_CONST } from "../const";

export const AboutHero = () => {
  return (
    <section className="contents">
      <div
        className="bg-greyscale-100 dark:bg-greyscale-900 shadow-inset-light col-span-full grid grid-cols-4 gap-3 rounded-3xl p-3 md:grid-cols-8 md:gap-4 md:px-6 md:py-24 lg:grid-cols-12 lg:py-36 dark:!shadow-[var(--inset-dark)]"
        id="top"
      >
        <div className="col-span-full flex flex-row items-center justify-center md:col-span-4 md:col-start-3 lg:col-start-5">
          <Image
            src={ABOUT_HERO_CONST.IMAGES[0].SRC}
            alt={ABOUT_HERO_CONST.IMAGES[0].ALT}
            height={500}
            width={500}
            className="animate-float border-greyscale-50 dark:border-greyscale-950 z-10 col-span-2 col-start-2 aspect-square w-16 translate-x-2 -rotate-4 rounded-xl border-[1px] shadow-md !transition-all duration-700 hover:scale-105 md:w-36"
          />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="animate-float border-greyscale-50 dark:border-greyscale-950 col-span-2 col-start-2 aspect-square w-24 rounded-xl border-[1px] shadow-md !transition-all duration-700 hover:scale-105 md:w-48"
          >
            <source src={ABOUT_HERO_CONST.VIDEO} type="video/mp4" />
          </video>
          <Image
            src={ABOUT_HERO_CONST.IMAGES[1].SRC}
            alt={ABOUT_HERO_CONST.IMAGES[1].ALT}
            height={500}
            width={500}
            className="animate-float border-greyscale-50 dark:border-greyscale-950 hover:scale-105!transition-all z-10 col-span-2 col-start-2 aspect-square w-16 -translate-x-2 rotate-4 rounded-xl border-[1px] shadow-md !transition-all duration-700 hover:scale-105 md:w-36"
          />
        </div>
        <p className="col-span-full text-center !text-xl md:col-span-6 md:col-start-2 md:!text-2xl lg:col-start-4 lg:!text-[1.75rem]">
          {ABOUT_HERO_CONST.PARAGRAPHS[0]}
        </p>
      </div>
      <p className="text-greyscale-600 dark:text-greyscale-300 col-span-full my-8 text-center md:col-span-6 md:col-start-2 lg:col-start-4">
        {ABOUT_HERO_CONST.PARAGRAPHS[1]}
      </p>
    </section>
  );
};
