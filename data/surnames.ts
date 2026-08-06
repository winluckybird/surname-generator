import americanSurnames from "./american-surnames.json";
import scottishSurnames from "./scottish-surnames.json";

export const surnameCategories = {
  american: {
    name: "American",
    slug: "american-surnames",
    description: "Frequently occurring surnames in the United States.",
    surnames: americanSurnames,
  },
  scottish: {
    name: "Scottish",
    slug: "scottish-surnames",
    description: "Surnames recorded in Scotland from 1975 to 2025.",
    surnames: scottishSurnames,
  },
};

export { americanSurnames };
