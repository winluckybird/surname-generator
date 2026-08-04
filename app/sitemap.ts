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

  const supportingPages: MetadataRoute.Sitemap = [
    "about",
    "contact",
    "privacy",
    "terms",
  ].map((page) => ({
    url: `${siteConfig.url}/${page}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...categoryPages,
    ...supportingPages,
  ];
}