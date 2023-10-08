import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.kostaszisopoulos.com";
  return [
    {
      url: baseUrl,
      priority: 1,
      lastModified: new Date(),
      changeFrequency: "yearly",
    },
  ];
}
