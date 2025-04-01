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
          {ABOUT_HERO_CONST.IMAGES.map((image, index) => (
            <Image
              key={index}
              src={image.SRC}
              alt={image.ALT}
              height={500}
              width={500}
              className="animate-float border-greyscale-50 dark:border-greyscale-950 col-span-2 col-start-2 aspect-square rounded-xl border-[1px] shadow-md first:z-10 first:w-32 first:translate-x-2 first:-rotate-4 last:w-48 last:-translate-x-2 last:rotate-1 md:col-start-4 lg:col-start-6"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
