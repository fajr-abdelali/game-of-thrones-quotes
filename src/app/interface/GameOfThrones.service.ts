interface Character {
  name: string;
  slug: string;
  house: {
    slug: string;
    name: string;
  } | null;
  quotes: string[];
}

interface House {
  slug: string;
  name: string;
  members: {
    name: string;
    slug: string;
  }[];
}

interface Quote {
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