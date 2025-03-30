import {
  PaStar,
  PaWordmark,
  LightDarkToggleIcon,
  EmailIcon,
} from "@/public";

export const NAVBAR_CONST = {
  LOGO: {
    HREF: "/",
    STAR: PaStar,
    WORDMARK: PaWordmark,
    HOME: "home",
  },
  LINKS: [
    {
      HREF: "/works",
      TEXT: "works",
    },
    {
      HREF: "/about",
      TEXT: "about",
    },
    {
      HREF: "mailto:hello@paularies.ca",
      TEXT: "contact",
    },
  ],
  LIGHT_DARK: {
    ICON: LightDarkToggleIcon,
    TEXT: "light-dark toggle",
  },
  CONTACT: {
    HREF: "mailto:hello@paularies.ca",
    ICON: EmailIcon,
    TEXT: "contact",
  },
  MOBILE_MENU: {
    OPEN_MENU: "open menu",
    CLOSE_MENU: "close menu",
  },
};
