import type { MetadataRoute } from "next";
import { surnameCategories } from "@/data/surnames";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const categoryPages: MetadataRoute.Sitemap = Object.values(
    surnameCategories,
  ).map((category) => ({
    url: `${siteConfig.url}/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...categoryPages,
  ];
}