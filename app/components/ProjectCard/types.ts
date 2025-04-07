export type ProjectCardPropTypes = {
  PROJECT: {
    DISCIPLINE: string[];
    IMAGE: {
      SRC: string;
      ALT: string;
    };
    TITLE: string;
    DESCRIPTION: string;
    SKILLS: string[];
    SLUG: string;
  };
  isChecked: boolean;
};
