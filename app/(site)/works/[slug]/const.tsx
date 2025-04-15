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
    OVERVIEW: [
      {
        HEADING: "problem",
        DESCRIPTION: [
          "capturing a personality and showcasing a service in just two pages isn’t easy.",
        ],
      },
      {
        HEADING: "solution",
        DESCRIPTION: [
          "a mix of hand-drawn doodles, animations, simple navigation, and real photos from live events helps tell the story and communicate the service clearly.",
        ],
      },
      {
        HEADING: "timeframe",
        DESCRIPTION: ["feb 13 - mar, 2025"],
      },
      {
        HEADING: "contributions",
        DESCRIPTION: ["content - abby aries"],
      },
    ],
    PROCESS: [
      {
        HEADING: "dynamic services toggle",
        DESCRIPTION: [
          "to help users explore both services, i added a toggle that lets them switch between ",
          <i key="guest">guest portraits</i>,
          " and ",
          <i key="bride">bride & groom portraits</i>,
          ". each option updates the image and step-by-step breakdown instantly, making it easy to understand what’s included. smooth animations defined from ",
          <strong key="framer-motion">framer motion</strong>,
          " keep the transition feeling polished and responsive, while the copy defined in a ",
          <CodeSnippet key="const">const.js</CodeSnippet>,
          " file ensures the codebase clean and easy to maintain.",
        ],
        VIDEO: "/videos/projects/afleuries/afleuries-toggle.mp4",
        CODE: `<motion.div
  initial={MOTION_CONFIG.INITIAL}
  whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
  transition={MOTION_CONFIG.TRANSITION}
  className="col-span-full aspect-video lg:col-span-10 lg:col-start-2"
>
  <AnimatePresence mode="wait">
    <motion.div
      key={hook.isGuestPortrait ? "guest-portrait" : "bride-groom"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="aspect-video lg:max-w-5xl"
    >
      <Image
        src={
          hook.isGuestPortrait
            ? AFLEURIES_ILLUSTRATED.PORTRAITS.IMAGES.GUEST_PORTRAIT.SRC
            : AFLEURIES_ILLUSTRATED.PORTRAITS.IMAGES.BRIDE_GROOM.SRC
        }
        width={1920}
        height={1080}
        alt={
          hook.isGuestPortrait
            ? AFLEURIES_ILLUSTRATED.PORTRAITS.IMAGES.GUEST_PORTRAIT.ALT
            : AFLEURIES_ILLUSTRATED.PORTRAITS.IMAGES.BRIDE_GROOM.ALT
        }
        className="border-tan-60 h-full w-full rounded-2xl border object-cover shadow-md"
      />
    </motion.div>
  </AnimatePresence>
</motion.div>`,
      },
      {
        HEADING: "thoughtful promotion",
        DESCRIPTION: [
          "to promote ",
          <i key="limited">afleuries illustrated’s limited-time offer</i>,
          " a modal automatically appears on the homepage—but only for first-time visitors and only within a specific date range. defined in a seperate ",
          <CodeSnippet key="usemodal">useModal.ts</CodeSnippet>,
          " file, it uses ",
          <strong key="localstorage">localStorage</strong>,
          " to remember if someone has already seen it, ensuring it doesn't become repetitive, and the delayed appearance and fade-in animation makes it feel smooth and non-intrusive.",
        ],
        VIDEO: "/videos/projects/afleuries/afleuries-modal.mp4",
        CODE: `// hook to manage the modal state and display it if the current date is within the specified range
export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ref to access the modal
  const modalRef = useRef<HTMLDialogElement>(null);
  // get the current pathname
  const pathname = usePathname();

  // defines the start and end dates of promotion
  const startDate = "03/23/2025";
  const endDate = "03/29/2025";

  // toggle the modal states
  const toggleModal = (value: boolean) => {
    if (value === true) {
      modalRef.current?.showModal();
      setIsOpen(true);
    } else {
      modalRef.current?.close();
      setIsOpen(false);
    }
  };

  // checks if the current date is within the specified range
  const checkDate = () => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    return now >= start && now <= end;
  };

  useEffect(() => {
    // if the user is on the homepage and has not seen the modal before
    // and the current date is within the specified range
    if (
      pathname === "/" &&
      localStorage.getItem("seen") !== "true" &&
      checkDate()
    ) {
      // show the modal after 5 seconds
      setTimeout(() => {
        toggleModal(true);
      }, 5000);
      // mark the user as having seen the modal
      if (!localStorage.getItem("seen")) {
        localStorage.setItem("seen", "true");
      }
    }
  }, [pathname]);

  // returns the state and function to activate and close the modal
  return {
    modalRef,
    toggleModal,
    isOpen,
  };
};`,
      },
      {
        HEADING: "input micro-interactions",
        DESCRIPTION: [
          "each input field features a ",
          <i key="microinteraction">smooth micro-interaction</i>,
          " where the label starts inside the input, acting as a placeholder. once the user clicks or starts typing, ",
          <strong key="tailwind">tailwind</strong>,
          " classes are applied to the label, animating it while staying visible as a guide. this subtle movement keeps the form clean and intuitive while ensuring clarity at every step.",
        ],
        VIDEO: "/videos/projects/afleuries/afleuries-input.mp4",
        CODE: `export const Input = ({
  label,
  name,
  description,
  htmlFor,
}: InputPropTypes) => {
  // refs to access the input and label, and the label's background
  const inputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);
  const labelBgRef = useRef<HTMLDivElement>(null);

  const moveLabel = (forceMove = false) => {
    // if the refs are not defined, return
    if (!inputRef.current || !labelRef.current || !labelBgRef.current) return;

    // classes to apply to the label
    const labelClasses = ["!translate-y-0", "!text-tan-100", "!text-sm"];
    const labelBgClasses = ["!bg-tan-30"];

    // if the input is not empty, add the classes
    if (forceMove || inputRef.current.value !== "") {
      labelRef.current.classList.add(...labelClasses);
      labelBgRef.current.classList.add(...labelBgClasses);
      } else {
      // if the input is empty, remove the classes
      labelRef.current.classList.remove(...labelClasses);
      labelBgRef.current.classList.remove(...labelBgClasses);
    }
  };

  return (
    <motion.div
      initial={MOTION_CONFIG.INITIAL}
      whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
      transition={MOTION_CONFIG.TRANSITION}
      className="flex w-full flex-col gap-2"
    >
      <div className="relative">
        <div
          ref={labelBgRef}
          className="absolute -top-3 z-10 mx-2 h-fit w-fit bg-transparent px-2 transition-all duration-300 ease-in-out-circ"
        >
          <label
            ref={labelRef}
            htmlFor={htmlFor}
            className="pointer-events-none z-10 inline-block origin-left translate-y-7 text-base text-tan-90 transition-all duration-300 ease-in-out-circ md:translate-y-[1.9rem]"
          >
            {label}
          </label>
        </div>
        <input
          ref={inputRef}
          id={htmlFor}
          type={
            htmlFor === "email"
              ? "email"
              : htmlFor === "datetime-local"
                ? "datetime-local"
                : "text"
          }
          name={name}
          required
          className="border-tan-60 h-14 w-full appearance-none rounded-lg border bg-tan-30 p-4 text-base font-light transition-all duration-300 ease-in-out-circ focus:shadow-md focus:outline-blue-10 md:h-[60px] md:text-lg"
          autoComplete="on"
          onFocus={() => moveLabel(true)}
          onBlur={() => moveLabel()}
        />
      </div>
      {description && (
        <p className="text-sm md:text-base">
          {description[0]}
          <strong className="font-medium">{description[1]}</strong>
          {description[2]}
        </p>
      )}
    </motion.div>
  );
};`,
      },
    ],
    REFLECTION: {
      HEADING: "the big picture",
      DESCRIPTION: [
        "afleuries illustrated was a fun balance of personality and polish—blending hand-drawn elements with smooth interactions to make the experience feel both welcoming and professional. every detail, from the animated inputs to the timed modal, was crafted to feel thoughtful yet playful, communicating the artist's message clearly.",
      ],
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
      {
        HEADING: "timeframe",
        DESCRIPTION: ["aug 3 - 11, 2024"],
      },
      {
        HEADING: "contributions",
        DESCRIPTION: ["images - pexels", "icons - ionicons"],
      },
    ],
    PROCESS: [
      {
        HEADING: "leveraging localStorage",
        DESCRIPTION: [
          <strong key="localstorage">localStorage</strong>,
          " allows for data to be stored in a user’s browser, allowing for certain settings to be stored across different sessions. i stored the user’s ",
          " so that it can be saved every time they visit the website or refresh the page, resulting in a ",
          <i key="pleasant">pleasant user experience</i>,
          ".",
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
          " pseudo-element to add a ",
          <i key="dynamic">dynamic section indicator</i>,
          " to the navbar, improving the site’s navigation and user experience.",
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
          " property. this kept the content organized and easy to access, with ",
          <i key="smooth">smooth transitions</i>,
          " when opening or closing each question.",
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
