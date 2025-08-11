export type WorksHeroPropTypes = {
  PROJECT: {
    HERO: {
      TITLE: string;
      DISCIPLINE: string[];
      DESCRIPTION: string;
      SKILLS: string[];
      LINK: string;
      GITHUB?: string;
      IMAGE: { SRC: string; ALT: string };
    }
  }
}

export type WorksDetailsPropTypes = {
  PROJECT: WorksHeroPropTypes['PROJECT'];
  hasLinks?: boolean
}

export type WorksOverviewPropTypes = {
  PROJECT: {
    OVERVIEW: {
      HEADING: string;
      DESCRIPTION: React.ReactNode[];
    }[]
  }
}

export type WorksProcessPropTypes = {
  PROJECT: {
    HERO: {
      DISCIPLINE: string[];
    };
    PROCESS: {
      HEADING: string;
      DESCRIPTION: React.ReactNode[];
      IMAGE?: { SRC: string; ALT: string };
      VIDEO?: { SRC: string; CAPTION: string };
      CODE?: string;
    }[]
  };
  setMediaSrc?: (src: string, type: "image" | "video", alt?: string) => void;
  setCodeSrc?: (src: string) => void;
  isOpen?: boolean;
}

export type WorksProcessMediaPropTypes = {
  PROCESS: WorksProcessPropTypes['PROJECT']['PROCESS'][0];
  setMediaSrc?: (src: string, type: "image" | "video", alt?: string) => void;
  setCodeSrc?: (src: string) => void;
  isOpen?: boolean;
}

export type WorksReflectionPropTypes = {
  PROJECT: {
    REFLECTION: {
      HEADING: string;
      DESCRIPTION: React.ReactNode[];
    };
  }
}

export type ProjectPagePropsTypes = {
  [key: string]: {
    HERO: WorksHeroPropTypes['PROJECT']['HERO'];
    OVERVIEW: WorksOverviewPropTypes['PROJECT']['OVERVIEW'];
    PROCESS: WorksProcessPropTypes['PROJECT']['PROCESS'];
    REFLECTION: WorksReflectionPropTypes['PROJECT']['REFLECTION'];
  };
};
