import americanSurnames from "./american-surnames.json";

export const surnameCategories = {
  american: {
    name: "American",
    slug: "american-surnames",
    description: "Frequently occurring surnames in the United States.",
    surnames: americanSurnames,
  },
};

export { americanSurnames };