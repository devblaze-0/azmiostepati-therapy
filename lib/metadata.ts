import type { Metadata } from "next";
import { business, dictionaries, services, type Locale } from "@/config/constants";

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://azmiostepati.example";
}

export function createPageMetadata({
  locale,
  path,
  title,
  description,
  image = business.socialImage
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  image?: string;
}): Metadata {
  const siteUrl = getSiteUrl();
  const canonicalPath = path === "/" ? "/" : path.replace(/\/$/, "");

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        id: localizeMetadataPath(canonicalPath, "id"),
        en: localizeMetadataPath(canonicalPath, "en"),
        "x-default": canonicalPath === "/" ? "/" : localizeMetadataPath(canonicalPath, "id")
      }
    },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      siteName: business.name,
      type: "website",
      locale: locale === "id" ? "id_ID" : "en_US",
      images: [
        {
          url: image,
          width: 1200,
          height: 900,
          alt: business.name
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
}

export function createBusinessJsonLd(locale: Locale) {
  const siteUrl = getSiteUrl();
  const dictionary = dictionaries[locale];

  return [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: business.name,
      alternateName: business.shortName,
      url: siteUrl,
      telephone: business.phone,
      email: business.email,
      image: `${siteUrl}${business.socialImage}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address,
        addressLocality: "Palembang",
        addressRegion: "Sumatera Selatan",
        addressCountry: "ID"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: business.geo.latitude,
        longitude: business.geo.longitude
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: business.hours.schema.opens,
          closes: business.hours.schema.closes
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "HealthAndBeautyBusiness",
      name: business.name,
      url: `${siteUrl}/${locale}`,
      telephone: business.phone,
      description: dictionary.home.lead,
      priceRange: "Rp 5.500.000 - Rp 50.000.000",
      makesOffer: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title[locale],
          description: service.summary[locale],
          serviceType: service.slug
        }
      }))
    }
  ];
}

function localizeMetadataPath(path: string, locale: Locale) {
  if (path === "/") {
    return `/${locale}`;
  }

  const segments = path.split("/").filter(Boolean);
  const withoutLocale = segments[0] === "id" || segments[0] === "en" ? segments.slice(1) : segments;
  return `/${locale}${withoutLocale.length ? `/${withoutLocale.join("/")}` : ""}`;
}
