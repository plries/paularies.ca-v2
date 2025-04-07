export type ProjectPagePropsTypes = {
  [key: string]: {
    HERO: {
      TITLE: string;
      DISCIPLINE: string[];
      DESCRIPTION: string;
      SKILLS: string[];
      LINK: string;
      GITHUB?: string;
      IMAGE: { SRC: string; ALT: string };
    };
    DETAILS: [
      {
        HEADING: string;
        DESCRIPTION: React.ReactNode[];
      },
      {
        HEADING: string;
        DESCRIPTION: React.ReactNode[];
      },
    ];
    OVERVIEW: [
      {
        HEADING: string;
        DESCRIPTION: React.ReactNode[];
      },
      {
        HEADING: string;
        DESCRIPTION: React.ReactNode[];
      },
    ];
    PROCESS: [
      {
        HEADING: string;
        DESCRIPTION: React.ReactNode[];
        IMAGE?: { SRC: string; ALT: string };
        VIDEO?: string;
        CODE?: string;
      },
      {
        HEADING: string;
        DESCRIPTION: React.ReactNode[];
        IMAGE?: { SRC: string; ALT: string };
        VIDEO?: string;
        CODE?: string;
      },
      {
        HEADING: string;
        DESCRIPTION: React.ReactNode[];
        IMAGE?: { SRC: string; ALT: string };
        VIDEO?: string;
        CODE?: string;
      },
    ];
    REFLECTION: {
      HEADING: string;
      DESCRIPTION: React.ReactNode[];
    };
  };
};
