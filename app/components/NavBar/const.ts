import {
  PaStar,
  PaWordmark,
  LightDarkToggleIcon,
  EmailIcon,
  MenuIcon,
  CloseIcon,
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
    CLOSED: {
      ICON: MenuIcon,
      TEXT: "open menu",
    },
    OPEN: {
      ICON: CloseIcon,
      TEXT: "close menu",
    },
  },
};
