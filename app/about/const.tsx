import {
  AeIcon,
  AiIcon,
  CssIcon,
  FigmaIcon,
  HtmlIcon,
  IdIcon,
  JsIcon,
  PhpIcon,
  PsIcon,
  ReactIcon,
  SassIcon,
  TailwindIcon,
  TsIcon,
  WpIcon,
} from "@/public";
import { PrIcon } from "@/public/icons/PrIcon";

export const ABOUT_CONST = {
  HEADING: "about",
  BUTTON: {
    HREF: "/PaulAries-Resume.pdf",
    TEXT: "resume",
  },
};

export const ABOUT_HERO_CONST = {
  IMAGES: [
    {
      SRC: "/images/about/paul-ship.jpg",
      ALT: "paul aries on a ship",
    },
    {
      SRC: "/images/about/paul-bear.jpg",
      ALT: "paul aries with wa bear",
    },
  ],
  VIDEO: "/videos/about/paul-vid.mp4",
  EMOJI: {
    SRC: "/images/about/wavingHand.png",
    ALT: "waving hand emoji",
  },
  HEADING: [
    "i'm a detail-oriented  ",
    "artist at heart that loves  ",
    "to create ",
    "unique digital experiences.",
  ],
  PARAGRAPH: [
    "when i'm not at my desk, you can find me ",
    <i key="outdoors">exploring the outdoors</i>,
    " or ",
    <i key="dancing">dancing at a concert</i>,
    ". surrounding myself with art and nature keeps me inspired, and fuels my desire to create (especially with others) !",
  ],
};

export const SKILLS_CONST = {
  HEADING: "skills",
  SKILLS: [
    {
      TITLE: "development",
      CONTENT: [
        "html",
        "css",
        "javascript",
        "typescript",
        "php",
        "react.js",
        "next.js",
        "sass",
        "tailwind",
        "framer motion",
        "gsap",
        "wordpress",
      ],
    },
    {
      TITLE: "design",
      CONTENT: [
        "figma",
        "photoshop",
        "illustrator",
        "after effects",
        "indesign",
        "premiere pro",
      ],
    },
  ],
  ICONS: [
    <HtmlIcon key="html" />,
    <PsIcon key="ps" />,
    <FigmaIcon key="figma" />,
    <CssIcon key="css" />,
    <ReactIcon key="react" />,
    <JsIcon key="js" />,
    <WpIcon key="wp" />,
    <AiIcon key="ai" />,
    <SassIcon key="sass" />,
    <TsIcon key="ts" />,
    <TailwindIcon key="tailwind" />,
    <AeIcon key="ae" />,
    <PhpIcon key="php" />,
    <PrIcon key="pr" />,
  ],
};

export const VALUES_CONST = {
  HEADING: "values",
  VALUES: [
    {
      TITLE: "adaptability",
      PARAGRAPH: [
        "i embrace change and ",
        <strong key="learning">enjoy learning new things</strong>,
        " within the industry. my flexibility enables me to remain enthusiastic when learning ways to tackle new challenges.",
      ],
    },
    {
      TITLE: "collaboration",
      PARAGRAPH: [
        "having danced in multiple competitive groups and working apart of two food-service teams, i value working with others and collaborating. i recognize the ",
        <strong key="responsibility">
          importance of communication and responsibility
        </strong>,
        " when working towards a shared goal.",
      ],
    },
    {
      TITLE: "humility",
      PARAGRAPH: [
        "i always approach every project with humility, recognizing that the ",
        <strong key="best">best ideas can come from anywhere</strong>,
        ". by valuing the contributions and suggestions of others, i'm able to ensure that my work is always at its best.",
      ],
    },
  ],
};

export const EXPERIENCE_CONST = {
  HEADING: "experience",
  ROLES: [
    {
      TITLE: "front-end developer @ convergence",
      SPAN: "apr 2025 - present",
      DUTIES: [
        "developed and refined front-end features, fixing styling and functionality issues.",
        "collaborated with the design/development team to improve user experience and interface consistency.",
      ],
    },
    {
      TITLE: "freelance",
      SPAN: "mar 2025 - present",
      DUTIES: [
        "took on freelance projects outside of day job to help clients achieve their goals.",
        "designed and developed responsive websites and digital assets tailored to client needs.",
        "communicated closely with clients to ensure accurate execution of their vision.",
      ],
    },
    {
      TITLE: "intern @ convergence + pixel ramen",
      SPAN: "jan 2025 - mar 2025",
      DUTIES: [
        "performed quality assurance and feature development by identifying and fixing bugs.",
        "created infographic carousels and video reels for social media, improving brand awareness for convergence and pixel ramen",
        "designed motion graphics animations for web and video, also assisting with filming and editing.",
      ],
    },
  ],
};
