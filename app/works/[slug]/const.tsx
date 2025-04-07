import { CodeSnippet } from "@/app/components";
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
  // --- afleuries-illustrated ---

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
        DESCRIPTION: ["content - abby aries"],
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

  // --- guy ---

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
        DESCRIPTION: ["images - pexels", "icons - ionicons"],
      },
    ],
    OVERVIEW: [
      {
        HEADING: "problem",
        DESCRIPTION: [
          "marketing an always-listening AI product feels invasive and ethically unsettling.",
        ],
      },
      {
        HEADING: "solution",
        DESCRIPTION: [
          "designing a playful SaaS-inspired landing page that softens the concept through clean visuals, smooth animations, and friendly language.",
        ],
      },
    ],
    PROCESS: [
      {
        HEADING: "leveraging localStorage",
        DESCRIPTION: [
          <strong key="localstorage">localStorage</strong>,
          " allows for data to be stored in a user’s browser, allowing for certain settings to be stored across different sessions. for guy, i stored the user’s dark/light mode preference so that it can be saved every time they visit the website or refresh the page, resulting in a pleasant user experience.",
        ],
        VIDEO: "/videos/projects/guy/guy-ls.mp4",
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
        HEADING: "working with IntersectionObserver API",
        DESCRIPTION: [
          "we were provided a ",
          <CodeSnippet key="script.js">script.js</CodeSnippet>,
          " file to integrate the ",
          <strong key="intersectionobserver">IntersectionObserver API</strong>,
          ". i customized it to trigger fade and slide animations as elements entered the viewport, which enhanced the site’s modern feel and visually demonstrated how guy’s notifications would appear on a phone. i also used the, ",
          <CodeSnippet key="after">::after</CodeSnippet>,
          " pseudo-element to add a dynamic section indicator to the navbar, improving the site’s navigation and user experience.",
        ],
        VIDEO: "/videos/projects/guy/guy-io.mp4",
        CODE: `nav {
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    a {
        font-family: $serif;
        font-size: 2.8rem;
        transition: color 0.25s ease;
    }
    a::after {
        display: block;
        content: '';
        position: absolute;
        left: 0;
        height: 0.4rem;
        width: 0.4rem;
        border-radius: 0.4rem;
        margin-top: 0.2rem;
        transform: translateX(calc(var(--markerLeft) + var(--markerWidth)  / 2 - 0.2rem));
        transition: transform ease 0.25s;
        will-change: width;
        -webkit-animation: dotAppear ease 0.5s;
                animation: dotAppear ease 0.5s;
    }
    a:hover {
        color: $orange-200 !important;
    }
}`,
      },
      {
        HEADING: "FAQ accordions",
        DESCRIPTION: [
          "for the FAQ section, i implemented animated accordions using the ",
          <CodeSnippet key="max-height">max-height</CodeSnippet>,
          " property. this kept the content organized and easy to access, with smooth transitions when opening or closing each question.",
        ],
        VIDEO: "/videos/projects/guy/guy-faq.mp4",
        CODE: `// gets all FAQ items
const FAQS = document.querySelectorAll('.faq-item');
// gets all FAQ buttons
const FAQBtns = document.querySelectorAll('.faq-btn');

// toggles the visibility of the FAQ item
function toggleFAQ() {

    // iterates over all FAQ items and hide the ones that are not the parent element of the button that was clicked
    FAQS.forEach(el => {
        if (el !== this.parentElement) {
            el.classList.remove('expand');
        }
    })

    // toggles the visibility of the parent element of the button that was clicked
    this.parentElement.classList.toggle('expand');

}

// adds a click event listener to each FAQ button
// toggles the visibility of the corresponding FAQ item
FAQBtns.forEach(FAQBtn => FAQBtn.addEventListener('click', toggleFAQ));`,
      },
    ],
    REFLECTION: {
      HEADING: "bringing it together",
      DESCRIPTION: [
        "the marketing page became a successful blend of modern design, interactive features, and smooth user experience. by leveraging Sass for organized styling, the IntersectionObserver API added an interactive layer, and localStorage integration i was able to explore the intriguing challenge of marketing a product through a sleek website.",
      ],
    },
  },
};

export const PROJECT_SLUGS = Object.keys(PROJECTS);
