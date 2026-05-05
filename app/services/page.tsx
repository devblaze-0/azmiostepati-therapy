import type { Metadata } from "next";
import { CallToAction } from "@/components/cta/CallToAction";
import { ServicesOverview } from "@/components/services/ServicesOverview";
import { StructuredData } from "@/components/seo/StructuredData";
import { DEFAULT_LOCALE, dictionaries } from "@/config/constants";
import { createPageMetadata } from "@/lib/metadata";

export function generateMetadata(): Metadata {
  const dictionary = dictionaries[DEFAULT_LOCALE];

  return createPageMetadata({
    locale: DEFAULT_LOCALE,
    path: "/services",
    title: dictionary.servicesPage.title,
    description: dictionary.servicesPage.lead
  });
}

export default function ServicesPage() {
  const dictionary = dictionaries[DEFAULT_LOCALE];

  return (
    <>
      <StructuredData locale={DEFAULT_LOCALE} />
      <section className="page-shell" aria-labelledby="services-title">
        <header className="section-header">
          <p className="eyebrow">{dictionary.nav.services}</p>
          <h1 id="services-title">{dictionary.servicesPage.title}</h1>
          <p>{dictionary.servicesPage.lead}</p>
        </header>
        <ServicesOverview locale={DEFAULT_LOCALE} />
      </section>
      <CallToAction locale={DEFAULT_LOCALE} />
    </>
  );
}
