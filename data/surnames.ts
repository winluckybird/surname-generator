import americanSurnames from "./american-surnames.json";
import japaneseSurnames from "./japanese-surnames.json";
import scottishSurnames from "./scottish-surnames.json";

export const surnameCategories = {
  american: {
    name: "American",
    slug: "american-surnames",
    description: "Frequently occurring surnames in the United States.",
    surnames: americanSurnames,
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
