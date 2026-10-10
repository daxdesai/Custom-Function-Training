import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getSiteUrl(),
      lastModified: new Date("2026-10-09T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
