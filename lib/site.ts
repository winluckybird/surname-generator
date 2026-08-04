const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"  //正式上线后，可以通过 NEXT_PUBLIC_SITE_URL 设置真实域名
).replace(/\/$/, "");

export const siteConfig = {
  name: "Surname Generator",
  description:
    "Generate random surnames and explore last names from different countries and cultures.",
  url: siteUrl,
};