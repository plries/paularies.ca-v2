import { DotPropTypes } from "./types";

export const Dot = ({ discipline, additionalClasses }: DotPropTypes) => {
  return (
    <div
      className={`h-1.5 w-1.5 rounded-full border shadow-sm md:h-2 md:w-2 ${discipline === "design" ? "border-sky-50/10 bg-sky-600 shadow-sky-600" : "bg-grass-600 border-grass-50/10 shadow-grass-600"} ${additionalClasses || ""}`}
    ></div>
  );
};
