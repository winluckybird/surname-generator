export function formatSurname(surname: string) {
  const titleCased = surname
    .trim()
    .toLocaleLowerCase("en-US")
    .replace(
      /(^|[\s'-])(\p{L})/gu,
      (_match, prefix: string, letter: string) =>
        `${prefix}${letter.toLocaleUpperCase("en-US")}`,
    );

  return titleCased.replace(
    /\bMc(\p{L})/gu,
    (_match, letter: string) =>
      `Mc${letter.toLocaleUpperCase("en-US")}`,
  );
}