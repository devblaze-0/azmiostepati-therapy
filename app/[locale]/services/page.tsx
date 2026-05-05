import type { Metadata } from "next";
import { CallToAction } from "@/components/cta/CallToAction";
import { ServicesOverview } from "@/components/services/ServicesOverview";
import { StructuredData } from "@/components/seo/StructuredData";
import { dictionaries, type Locale } from "@/config/constants";
import { isLocale } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeValue } = await params;
  const locale: Locale = isLocale(localeValue) ? localeValue : "id";
  const dictionary = dictionaries[locale];

  return createPageMetadata({
    locale,
    path: `/${locale}/services`,
    title: dictionary.servicesPage.title,
    description: dictionary.servicesPage.lead
  });
}

export default async function LocalizedServicesPage({ params }: PageProps) {
  const { locale: localeValue } = await params;
  const locale: Locale = isLocale(localeValue) ? localeValue : "id";
  const dictionary = dictionaries[locale];

  return (
    <>
      <StructuredData locale={locale} />
      <section className="page-shell" aria-labelledby="services-title">
        <header className="section-header">
          <p className="eyebrow">{dictionary.nav.services}</p>
          <h1 id="services-title">{dictionary.servicesPage.title}</h1>
          <p>{dictionary.servicesPage.lead}</p>
        </header>
        <ServicesOverview locale={locale} />
      </section>
      <CallToAction locale={locale} />
    </>
  );
}
