export type ActionBarPropTypes = {
  children: React.ReactNode;
  additionalClasses?: {
    container?: string;
    wrapper?: string;
  }
  positionType?: "fixed" | "sticky" | "absolute";
};