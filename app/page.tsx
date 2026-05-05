import type { Metadata } from "next";
import { DEFAULT_LOCALE, dictionaries } from "@/config/constants";
import { CallToAction } from "@/components/cta/CallToAction";
import { HeroSection } from "@/components/hero/HeroSection";
import { ServicesOverview } from "@/components/services/ServicesOverview";
import { StructuredData } from "@/components/seo/StructuredData";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { createPageMetadata } from "@/lib/metadata";

export function generateMetadata(): Metadata {
  const dictionary = dictionaries[DEFAULT_LOCALE];

  return createPageMetadata({
    locale: DEFAULT_LOCALE,
    path: "/",
    title: dictionary.home.title,
    description: dictionary.home.lead
  });
}

export default function HomePage() {
  const dictionary = dictionaries[DEFAULT_LOCALE];

  return (
    <>
      <StructuredData locale={DEFAULT_LOCALE} />
      <HeroSection locale={DEFAULT_LOCALE} />
      <section className="page-shell" aria-labelledby="home-services-title">
        <header className="section-header">
          <p className="eyebrow">{dictionary.nav.services}</p>
          <h2 id="home-services-title">{dictionary.servicesPage.title}</h2>
          <p>{dictionary.servicesPage.lead}</p>
        </header>
        <ServicesOverview locale={DEFAULT_LOCALE} />
      </section>
      <section className="page-shell" aria-labelledby="home-testimonials-title">
        <header className="section-header">
          <p className="eyebrow">{dictionary.home.proofEyebrow}</p>
          <h2 id="home-testimonials-title">{dictionary.home.proofTitle}</h2>
        </header>
        <TestimonialsSection locale={DEFAULT_LOCALE} />
      </section>
      <CallToAction locale={DEFAULT_LOCALE} />
    </>
  );
}
