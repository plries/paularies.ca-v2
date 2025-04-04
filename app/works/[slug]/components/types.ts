export type ProjectPagePropsTypes = {
  [key: string]: {
    HERO: {
      TITLE: string;
      DISCIPLINE: string[];
      DESCRIPTION: string;
      LINK: string;
      IMAGE: { SRC: string; ALT: string };
    };
    DETAILS: [
      {
        HEADING: string;
        DESCRIPTION: string[];
      },
      {
        HEADING: string;
        DESCRIPTION: string[];
      },
      {
        HEADING: string;
        DESCRIPTION: string[];
      },
    ];
    OVERVIEW: [
      {
        HEADING: string;
        DESCRIPTION: string[];
      },
      {
        HEADING: string;
        DESCRIPTION: string[];
      },
    ];
    PROCESS: [
      {
        HEADING: string;
        DESCRIPTION: string[];
        IMAGE?: { SRC: string; ALT: string };
        VIDEO?: string;
        CODE?: string;
      },
      {
        HEADING: string;
        DESCRIPTION: string[];
        IMAGE?: { SRC: string; ALT: string };
        VIDEO?: string;
        CODE?: string;
      },
      {
        HEADING: string;
        DESCRIPTION: string[];
        IMAGE?: { SRC: string; ALT: string };
        VIDEO?: string;
        CODE?: string;
      },
    ];
    REFLECTION: {
      HEADING: string;
      DESCRIPTION: string[];
    };
  };
};
