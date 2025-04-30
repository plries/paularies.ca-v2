import Link from "next/link";
import {
  AeIcon,
  AiIcon,
  CssIcon,
  FigmaIcon,
  HtmlIcon,
  JsIcon,
  PhpIcon,
  PsIcon,
  ReactIcon,
  SassIcon,
  TailwindIcon,
  TsIcon,
  WpIcon,
  PrIcon,
} from "@/public";
import { Tooltip } from "@/app/components";

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
      ALT: "paul on a ship",
    },
    {
      SRC: "/images/about/paul-bear.jpg",
      ALT: "paul with a bear",
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
    <Tooltip
      key="outdoors"
      image={{
        src: "/images/about/outdoors.jpg",
        alt: "paul and friends going on a hike",
        width: 400,
        height: 400,
      }}
    >
      exploring the outdoors
    </Tooltip>,
    " or ",
    <Tooltip
      key="dancing"
      image={{
        src: "/images/about/concert.jpg",
        alt: "front row at a concert",
        width: 400,
        height: 400,
      }}
    >
      dancing at a concert
    </Tooltip>,
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
      SPAN: "feb 2025 - present",
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

export const FACTS_CONST = {
  HEADING: "fun facts",
  FACTS: [
    {
      TITLE: "a family of visionaries",
      DESCRIPTION: [
        "i come from a family of ",
        <i key="artists">artists</i>,
        " and ",
        <i key="visionaries">visionaries</i>,
        ". from traditional art, dancing, to filmmaking, we've explored a wide range of creative pursuits. recently, my family and i collaborated for a short film that premiered at the innovate dance film showcase 2023.",
        <br/>,
        <br/>,
        "if you're curious you can check it out our film ",
        <Tooltip
          key="innovate"
          image={{
              width: 400,
              height: 711,
              src: "/images/about/innovate.jpg",
              alt: "innovate dance film showcase 2023 poster",
          }}
        >
          <Link href="https://www.youtube.com/watch?v=vkEjWKE912s" target="_blank">
            careful
          </Link>
        </Tooltip>,
        " here."
      ]
    },
    {
      TITLE: "music enthusiast",
      DESCRIPTION: [
        "music has always been a huge part of my life, and i find myself drawn to a wide variety of genres. everything from ",
        <strong key="house">house</strong>,
        " to ",
        <strong key="rb">r&b</strong>,
        " and ",
        <strong key="indie">indie</strong>,
        " i love to listen, dance, and every so often, DJ (within the comfort of my bedroom).",
        <br/>,
        <br/>,
        "you can find my unnecessarily large catalog of playlists on my ",
        <Tooltip
          key="spotify"
          image={{
            width: 300,
            height: 300,
            src: "/images/about/spotify.jpg",
            alt: "spotify profile picture",
          }}
          >
            <Link href="https://open.spotify.com/user/paullaries?si=8152ee173b134572" target="_blank">
            spotify
            </Link>
        </Tooltip>,
        "profile."
      ]
    },
  ],
};
