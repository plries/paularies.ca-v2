import { PaStar, PaWordmark, LightDarkToggleIcon, EmailIcon } from "@/public";

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
};
