import type { Metadata } from "next";
import { CallToAction } from "@/components/cta/CallToAction";
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
    path: `/${locale}/about`,
    title: dictionary.about.title,
    description: dictionary.about.lead
  });
}

export default async function LocalizedAboutPage({ params }: PageProps) {
  const { locale: localeValue } = await params;
  const locale: Locale = isLocale(localeValue) ? localeValue : "id";
  const dictionary = dictionaries[locale];

  return (
    <>
      <StructuredData locale={locale} />
      <section className="page-shell" aria-labelledby="about-title">
        <header className="section-header">
          <p className="eyebrow">{dictionary.nav.about}</p>
          <h1 id="about-title">{dictionary.about.title}</h1>
          <p>{dictionary.about.lead}</p>
        </header>
        <article>
          <p>{dictionary.about.body}</p>
        </article>
      </section>
      <CallToAction locale={locale} />
    </>
  );
}
