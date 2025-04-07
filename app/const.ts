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
      DISCIPLINE: ["development", "design"],
      IMAGE: {
        SRC: "",
        ALT: "",
      },
      TITLE: "coming soon",
      DESCRIPTION: "stay tuned!",
      SKILLS: ["#$&", "0/@", "%?!"],
      SLUG: "guy",
    },
    {
      DISCIPLINE: ["development", "design"],
      IMAGE: {
        SRC: "",
        ALT: "",
      },
      TITLE: "work in progress",
      DESCRIPTION: "let me cook...",
      SKILLS: ["#$&", "0/@", "%?!"],
      SLUG: "guy",
    },
  ],
};

export const MOTION_CONFIG = {
  TRANSITION: { duration: 0.7, easeInOut },
  DEFAULT: {
    INITIAL: { filter: "blur(8px)", opacity: 0 },
    WHILE_IN_VIEW: { filter: "blur(0)", opacity: 1 },
  },
  PROJECT_CARD: {
    INITIAL: {
      transform: "translateX(24px)",
      filter: "blur(8px)",
      opacity: 0,
      scale: 0.8,
    },
    WHILE_IN_VIEW: {
      transform: "translateX(0)",
      filter: "blur(0)",
      opacity: 1,
      scale: 1,
    },
  },
  HEADER: {
    INITIAL: {
      transform: "translateY(-64px)",
      filter: "blur(8px)",
      opacity: 0,
    },
    WHILE_IN_VIEW: {
      transform: "translateY(0)",
      filter: "blur(0)",
      opacity: 1,
    },
  },
  FOOTER: {
    INITIAL: {
      transform: "translateY(64px)",
      filter: "blur(8px)",
      opacity: 0,
    },
    WHILE_IN_VIEW: {
      transform: "translateY(0)",
      filter: "blur(0)",
      opacity: 1,
    },
  },
  ACTION_BAR: {
    INITIAL: {
      transform: "translateY(64px)",
      filter: "blur(8px)",
      opacity: 0,
    },
    WHILE_IN_VIEW: {
      transform: "translateY(0)",
      filter: "blur(0)",
      opacity: 1,
    },
  },
};
