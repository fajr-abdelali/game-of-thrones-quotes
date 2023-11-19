export interface Character {
  name: string;
  slug: string;
  house: {
    slug: string;
    name: string;
  } | null;
  quotes: string[];
}

export interface House {
  slug: string;
  name: string;
  members: {
    name: string;
    slug: string;
  }[];
}

export interface Quote {
  sentence: string;
  character: {
    name: string;
    slug: string;
    house: {
      name: string;
      slug: string;
    };
  };
}