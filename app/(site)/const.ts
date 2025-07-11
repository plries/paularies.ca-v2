import { easeInOut } from "framer-motion";

export const PROJECTS_CONST = {
  PROJECTS: [
    {
      DISCIPLINE: ["development", "design"],
      IMAGE: {
        SRC: "/images/projects/afleuries.png",
        ALT: "afleuries illustrated",
      },
      TITLE: "afleuries illustrated",
      DESCRIPTION: "stylized modern marketing page for a live portrait artist.",
      SKILLS: ["figma", "next.js", "tailwind", "motion", "formspree"],
      SLUG: "afleuries-illustrated",
    },
    {
      DISCIPLINE: ["development"],
      IMAGE: {
        SRC: "/images/projects/guy.png",
        ALT: "guy",
      },
      TITLE: "guy",
      DESCRIPTION: "marketing page for a fictional mobile app companion.",
      SKILLS: ["html", "js", "sass"],
      SLUG: "guy",
    },
    {
      DISCIPLINE: ["design", "development"],
      IMAGE: {
        SRC: "/images/projects/jakhaus.png",
        ALT: "jakhaus",
      },
      TITLE: "jakhaus",
      DESCRIPTION: "a sleek CMS for a media agency.",
      SKILLS: ["figma", "next.js", "tailwind", "motion", "supabase"],
      SLUG: "",
    },
    {
      DISCIPLINE: ["design", "development"],
      IMAGE: {
        SRC: "",
        ALT: "",
      },
      TITLE: "work in progress",
      DESCRIPTION: "let me cook...",
      SKILLS: ["#$&", "0/@", "%?!"],
      SLUG: "",
    },
  ],
};

export const MOTION_CONFIG = {
  TRANSITION: { duration: 0.5, easeInOut, delay: 0.1 },
  DEFAULT: {
    INITIAL: { opacity: 0 },
    WHILE_IN_VIEW: {  opacity: 1 },
  },
  PROJECT_CARD: {
    INITIAL: {
      opacity: 0,
      scale: 0.9,
    },
    WHILE_IN_VIEW: {
      opacity: 1,
      scale: 1,
    },
  },
  HEADER: {
    INITIAL: {
      transform: "translateY(-64px)",
      opacity: 0,
    },
    WHILE_IN_VIEW: {
      transform: "translateY(0)",
      opacity: 1,
    },
  },
  FOOTER: {
    INITIAL: {
      transform: "translateY(64px)",
      opacity: 0,
    },
    WHILE_IN_VIEW: {
      transform: "translateY(0)",
      opacity: 1,
    },
  },
  ACTION_BAR: {
    INITIAL: {
      transform: "translateY(24px)",
      opacity: 0,
    },
    ANIMATE: {
      transform: "translateY(0)",
      opacity: 1,
    },
  },
};
