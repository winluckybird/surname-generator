import americanSurnames from "./american-surnames.json";
import australianSurnames from "./australian-surnames.json";
import frenchSurnames from "./french-surnames.json";
import italianSurnames from "./italian-surnames.json";
import japaneseSurnames from "./japanese-surnames.json";
import scottishSurnames from "./scottish-surnames.json";

export const surnameCategories = {
  american: {
    name: "American",
    slug: "american-surnames",
    description: "Frequently occurring surnames in the United States.",
    surnames: americanSurnames,
  },
  australian: {
    name: "Australian",
    slug: "australian-surnames",
    description:
      "Family names connected to people recorded as Australian citizens.",
    surnames: australianSurnames,
  },
  french: {
    name: "French",
    slug: "french-surnames",
    description:
      "Frequently occurring surnames recorded in France from 1891 to 2000.",
    surnames: frenchSurnames,
  },
  italian: {
    name: "Italian",
    slug: "italian-surnames",
    description: "Common surname ideas associated with Italy.",
    surnames: italianSurnames,
  },
  japanese: {
    name: "Japanese",
    slug: "japanese-surnames",
    description:
      "Romanized Japanese surname spellings paired with kana and kanji.",
    surnames: japaneseSurnames,
  },
  scottish: {
    name: "Scottish",
    slug: "scottish-surnames",
    description: "Surnames recorded in Scotland from 1975 to 2025.",
    surnames: scottishSurnames,
  },
};

export { americanSurnames };
