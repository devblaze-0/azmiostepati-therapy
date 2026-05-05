import { createBusinessJsonLd } from "@/lib/metadata";
import type { Locale } from "@/config/constants";

export function StructuredData({ locale }: { locale: Locale }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(createBusinessJsonLd(locale)).replaceAll("<", "\\u003c")
      }}
    />
  );
}
