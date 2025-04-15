"use client";
import { useParams, useRouter } from "next/navigation";
import { PROJECTS, PROJECT_SLUGS } from "./const";

export const useProjectPage = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const currentIndex = PROJECT_SLUGS.findIndex((p) => p === slug);
  const currentProject = PROJECTS[slug];

  const prevProject = PROJECT_SLUGS[currentIndex - 1];
  const nextProject = PROJECT_SLUGS[currentIndex + 1];

  const handlePrevious = () => {
    if (currentIndex !== 0) {
      router.push(`/works/${prevProject}`);
    } else {
      router.push(`/works/${PROJECT_SLUGS[PROJECT_SLUGS.length - 1]}`);
    }
  };

  const handleNext = () => {
    if (currentIndex !== PROJECT_SLUGS.length - 1) {
      router.push(`/works/${nextProject}`);
    } else {
      router.push(`/works/${PROJECT_SLUGS[0]}`);
    }
  };

  const constants = PROJECTS[slug] ?? null;

  return {
    params,
    slug,
    constants,
    currentProject,
    handlePrevious,
    handleNext,
  };
};
