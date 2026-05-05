import type { Metadata } from "next";
import { CallToAction } from "@/components/cta/CallToAction";
import { HeroSection } from "@/components/hero/HeroSection";
import { ServicesOverview } from "@/components/services/ServicesOverview";
import { StructuredData } from "@/components/seo/StructuredData";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { dictionaries, SUPPORTED_LOCALES, type Locale } from "@/config/constants";
import { isLocale } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeValue } = await params;
  const locale = isLocale(localeValue) ? localeValue : "id";
  const dictionary = dictionaries[locale];

  return createPageMetadata({
    locale,
    path: `/${locale}`,
    title: dictionary.home.title,
    description: dictionary.home.lead
  });
}

export default async function LocalizedHomePage({ params }: PageProps) {
  const { locale: localeValue } = await params;
  const locale: Locale = isLocale(localeValue) ? localeValue : "id";
  const dictionary = dictionaries[locale];

  return (
    <>
      <StructuredData locale={locale} />
      <HeroSection locale={locale} />
      <section className="page-shell" aria-labelledby="localized-services-title">
        <header className="section-header">
          <p className="eyebrow">{dictionary.nav.services}</p>
          <h2 id="localized-services-title">{dictionary.servicesPage.title}</h2>
          <p>{dictionary.servicesPage.lead}</p>
        </header>
        <ServicesOverview locale={locale} />
      </section>
      <section className="page-shell" aria-labelledby="localized-testimonials-title">
        <header className="section-header">
          <p className="eyebrow">{dictionary.home.proofEyebrow}</p>
          <h2 id="localized-testimonials-title">{dictionary.home.proofTitle}</h2>
        </header>
        <TestimonialsSection locale={locale} />
      </section>
      <CallToAction locale={locale} />
    </>
  );
}
