export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { articles } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/terapia-online-en-espanol`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/orientacion-profesional`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    ...articles.map((a) => ({ url: `${site.url}/blog/${a.slug}`, lastModified: new Date(a.updated), changeFrequency: "monthly" as const, priority: 0.6 })),
    { url: `${site.url}/privacidad`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
