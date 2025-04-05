import { ProjectPagePropsTypes } from "./components/types";

export const PROJECT_PAGE_CONST = {
  BUTTONS: {
    BACK: "back",
    VIEW: "view project",
    GITHUB: "github",
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
      SKILLS: ["figma", "next.js", "tailwind", "motion", "formspree"],
      LINK: "https://afleuries.com",
      GITHUB: "https://github.com/plries/afleuries",
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
        CODE: `
        .
        `,
      },
      {
        HEADING: "",
        DESCRIPTION: [],
        CODE: `
        .
        `,
      },
      {
        HEADING: "",
        DESCRIPTION: [],
        CODE: `
        .
        `,
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
      SKILLS: ["html", "js", "sass"],
      GITHUB: "https://github.com/plries/guy-saas",
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
        IMAGE: {
          SRC: "/images/about/paul-bear.jpg",
          ALT: "a",
        },
        CODE: `// moon -> toggles dark mode; default
let toggleoff = document.querySelector('#dark');
// sun -> toggles light mode
let toggleon = document.querySelector('#light');
// gets all notifications to change image
let notifs = document.querySelectorAll('.notif');
// get mode from local storage
let mode = localStorage.getItem("mode");

// updates the theme of the website
function updateMode(mode) {
    // if the mode is dark mode
    if (mode === 'darkmode') {
        // set mode to dark in local storage
        localStorage.setItem('mode', 'darkmode');
        // show the light button
        toggleoff.style.display = 'none';
        toggleon.style.display = 'block';
        // add the dark class to the body
        document.body.classList.add("darkmode");
        // remove the light class from the body
        document.body.classList.remove('lightmode');
        // change the notifications to the dark version
        notifs[0].src = '../media/hero-notif-dark.png';
        notifs[1].src = '../media/friends-notif-dark.png';
    } else {
        // set mode to light in local storage
        localStorage.setItem('mode', 'lightmode');
        // show the dark button
        toggleoff.style.display = 'block';
        toggleon.style.display = 'none';
        // remove the dark class from the body
        document.body.classList.remove("darkmode");
        // add the light class to the body
        document.body.classList.add('lightmode');
        // change the notifications to the light version
        notifs[0].src = '../media/hero-notif-light.png';
        notifs[1].src = '../media/friends-notif-light.png';
    }
}

// updates the mode when either toggle button is clicked
toggleon.addEventListener('click', function () {
    updateMode('lightmode');
});

toggleoff.addEventListener('click', function () {
    updateMode('darkmode');
});

// updates the mode if the mode is in local storage
if (mode === 'darkmode') {
    updateMode('darkmode');
} else if (mode === 'lightmode'){
    updateMode('lightmode');
}else(updateMode('lightmode'))`,
      },
      {
        HEADING: "",
        DESCRIPTION: [],
        CODE: `
        .
        `,
      },
      {
        HEADING: "",
        DESCRIPTION: [],
        CODE: `
        .
        `,
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
      SKILLS: ["figma", "user testing", "user research"],
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
      SKILLS: ["figma", "photoshop", "illustrator"],
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
