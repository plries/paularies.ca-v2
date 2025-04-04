import { ProjectPagePropsTypes } from "./components/types";

export const PROJECT_PAGE_CONST = {
  BUTTONS: {
    BACK: "back",
    VIEW: "view project",
    PREVIOUS: "previous project",
    NEXT: "next project",
  },
  HEADINGS: {
    OVERVIEW: "overview",
    PROCESS: "process",
    REFLECTION: "reflection",
  },
};

export const PROJECTS: ProjectPagePropsTypes = {
  "afleuries-illustrated": {
    HERO: {
      TITLE: "afleuries illustrated",
      DISCIPLINE: ["development", "design"],
      DESCRIPTION: "stylized modern marketing page for a live portrait artist.",
      LINK: "https://afleuries.com",
      IMAGE: {
        SRC: "/images/projects/afleuries.png",
        ALT: "afleuries illustrated",
      },
    },
    DETAILS: [
      {
        HEADING: "timeframe",
        DESCRIPTION: ["jan 2025 - mar 2025"],
      },
      {
        HEADING: "contributions",
        DESCRIPTION: ["content by abby aries"],
      },
      {
        HEADING: "technologies",
        DESCRIPTION: ["figma", "next.js", "tailwind", "motion", "formspree"],
      },
    ],
    OVERVIEW: [
      {
        HEADING: "problem",
        DESCRIPTION: [],
      },
      {
        HEADING: "solution",
        DESCRIPTION: [],
      },
    ],
    PROCESS: [
      {
        HEADING: "",
        DESCRIPTION: [],
      },
      {
        HEADING: "",
        DESCRIPTION: [],
      },
      {
        HEADING: "",
        DESCRIPTION: [],
      },
    ],
    REFLECTION: {
      HEADING: "reflection",
      DESCRIPTION: [],
    },
  },
  guy: {
    HERO: {
      TITLE: "guy",
      DISCIPLINE: ["development"],
      DESCRIPTION: "marketing page for a fictional mobile app companion.",
      LINK: "https://guy.paularies.ca/",
      IMAGE: {
        SRC: "/images/projects/guy.png",
        ALT: "guy",
      },
    },
    DETAILS: [
      {
        HEADING: "timeframe",
        DESCRIPTION: ["aug 3 - 11, 2024"],
      },
      {
        HEADING: "contributions",
        DESCRIPTION: ["images from pexels", "icons by ionicons"],
      },
      {
        HEADING: "technologies",
        DESCRIPTION: ["html", "js", "sass"],
      },
    ],
    OVERVIEW: [
      {
        HEADING: "problem",
        DESCRIPTION: [],
      },
      {
        HEADING: "solution",
        DESCRIPTION: [],
      },
    ],
    PROCESS: [
      {
        HEADING: "",
        DESCRIPTION: [],
      },
      {
        HEADING: "",
        DESCRIPTION: [],
      },
      {
        HEADING: "",
        DESCRIPTION: [],
      },
    ],
    REFLECTION: {
      HEADING: "reflection",
      DESCRIPTION: [],
    },
  },
  tempo: {
    HERO: {
      TITLE: "tempo",
      DISCIPLINE: ["design"],
      DESCRIPTION: "mobile app prototype for a dance studio booking flow.",
      LINK: "https://www.figma.com/proto/59EbBSy5SoywUcNK7YeheS/tempo?node-id=90-575&t=eORgaHztt8LKIvYO-1",
      IMAGE: {
        SRC: "/images/projects/tempo.png",
        ALT: "tempo",
      },
    },
    DETAILS: [
      {
        HEADING: "timeframe",
        DESCRIPTION: ["jan 2024 - apr 2024"],
      },
      {
        HEADING: "contributions",
        DESCRIPTION: ["images from pexels + unsplash", "icons by icons8"],
      },
      {
        HEADING: "technologies",
        DESCRIPTION: ["figma", "user testing", "user research"],
      },
    ],
    OVERVIEW: [
      {
        HEADING: "problem",
        DESCRIPTION: [],
      },
      {
        HEADING: "solution",
        DESCRIPTION: [],
      },
    ],
    PROCESS: [
      {
        HEADING: "",
        DESCRIPTION: [],
      },
      {
        HEADING: "",
        DESCRIPTION: [],
      },
      {
        HEADING: "",
        DESCRIPTION: [],
      },
    ],
    REFLECTION: {
      HEADING: "reflection",
      DESCRIPTION: [],
    },
  },
  odd: {
    HERO: {
      TITLE: "odd",
      DISCIPLINE: ["design"],
      DESCRIPTION: "mobile app prototype for a fictional juice brand.",
      LINK: "https://www.figma.com/proto/5pzdmswTzaA0sZRZaL7efB/ODD?node-id=57-484&t=yieZZXhAgYwHyg9b-1&starting-point-node-id=462:961",
      IMAGE: {
        SRC: "/images/projects/odd.png",
        ALT: "odd",
      },
    },
    DETAILS: [
      {
        HEADING: "timeframe",
        DESCRIPTION: ["mar 20 - 25, 2024"],
      },
      {
        HEADING: "contributions",
        DESCRIPTION: ["icons by icons8"],
      },
      {
        HEADING: "technologies",
        DESCRIPTION: ["figma", "photoshop", "illustrator"],
      },
    ],
    OVERVIEW: [
      {
        HEADING: "problem",
        DESCRIPTION: [],
      },
      {
        HEADING: "solution",
        DESCRIPTION: [],
      },
    ],
    PROCESS: [
      {
        HEADING: "",
        DESCRIPTION: [],
      },
      {
        HEADING: "",
        DESCRIPTION: [],
      },
      {
        HEADING: "",
        DESCRIPTION: [],
      },
    ],
    REFLECTION: {
      HEADING: "reflection",
      DESCRIPTION: [],
    },
  },
};

export const PROJECT_SLUGS = Object.keys(PROJECTS);
