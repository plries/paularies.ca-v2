export type ButtonLinkThemesEnum = "primary" | "secondary" | "tertiary";

export type ButtonLinkPropTypes = {
  href: string;
  children: React.ReactNode;
  theme: ButtonLinkThemesEnum;
  onClick?: () => void;
  additionalClasses?: string[];
  icon?: React.ReactNode;
};
