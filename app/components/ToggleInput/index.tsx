import { ToggleInputPropTypes } from "./types";

export const ToggleInput = ({
  label,
  onChange,
  isChecked,
}: ToggleInputPropTypes) => {
  return (
    <label className="inline-flex h-11 cursor-pointer items-center gap-2">
      <input type="checkbox" className="peer sr-only" onChange={onChange} />
      <div className="peer bg-greyscale-200 border-greyscale-50 dark:bg-greyscale-700 after:bg-greyscale-50 dark:border-greyscale-50/10 after:border-greyscale-50 after:ease-in-out-circ relative h-8 w-16 overflow-hidden rounded-full border shadow-[var(--toggle-light)] after:absolute after:top-[0.0625rem] after:left-[0.0625rem] after:aspect-square after:h-[calc(100%-0.125rem)] after:rounded-full after:border after:shadow-[var(--button-light)] after:transition-[translate] after:duration-500 peer-checked:after:translate-x-[calc(100%+0.25rem)]">
        <div
          className={`ease-in-out-circ h-full w-full bg-sky-600 transition-opacity duration-500 ${isChecked ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      <span className="text-greyscale-600 dark:text-greyscale-300">
        {label}
      </span>
    </label>
  );
};
