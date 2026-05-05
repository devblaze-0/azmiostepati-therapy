import type { MetadataRoute } from "next";
import { SUPPORTED_LOCALES } from "@/config/constants";
import { getSiteUrl } from "@/lib/metadata";

const baseRoutes = ["", "/about", "/services", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return [
    ...baseRoutes.map((route) => ({
      url: `${siteUrl}${route || "/"}`,
      lastModified: new Date("2026-05-04"),
      changeFrequency: "weekly" as const,
      priority: route ? 0.8 : 1
    })),
    ...SUPPORTED_LOCALES.flatMap((locale) =>
      baseRoutes.map((route) => ({
        url: `${siteUrl}/${locale}${route}`,
        lastModified: new Date("2026-05-04"),
        changeFrequency: "weekly" as const,
        priority: route ? 0.8 : 0.95,
        alternates: {
          languages: {
            id: `${siteUrl}/id${route}`,
            en: `${siteUrl}/en${route}`,
            "x-default": `${siteUrl}${route || "/"}`
          }
        }
      }))
    )
  ];
}
